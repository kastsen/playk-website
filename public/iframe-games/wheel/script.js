import * as THREE from "https://esm.sh/three@0.174.0";
import { OrbitControls } from "https://esm.sh/three@0.174.0/addons/controls/OrbitControls.js";
import { GLTFLoader } from "https://esm.sh/three@0.174.0/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://esm.sh/three@0.174.0/examples/jsm/loaders/DRACOLoader";
import { RGBELoader } from "https://esm.sh/three@0.174.0/examples/jsm/loaders/RGBELoader";

window.start3 = false;
let cameraSetup = {
    cameraIsSettled: false,
    cameraTgt: { x: 0.11611507465368477, y: 3.5939784540499456e-16, z: 5.8682635668005005 },
    leverTgt: 1
};

let canPullLever = true;

let init = () => {
    window.addEventListener("touchstart", isDown);
    window.addEventListener("mousedown", isDown);
    window.addEventListener("mouseup", isUp);
    window.addEventListener("touchend", isUp);
    window.addEventListener("mousemove", isMove);
    window.addEventListener("touchmove", isMove);
};

let wheel;
let lever = null;
let glowLever = null;
let hitArea = null;
let pullSign = null;
let ready = false;
let speed = 0;
let inc = 0.02;
let mouse = {
    direction: null,
    pressing: false,
    curY: null,
    isClicking: false,
    dragStarted: false,
    dragDistance: 0,
    isSpinning: false
};
let revealAnim = { isAnimating: false, isShowing: false };
let signSpinSpeed = 1;
let incSpeed = 12;
let resultSign = null;
let resultAnim = null;
let animAction = null;
let animMixer = null;
let numArr = [];
let deviceType = null;

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
scene.position.x = 1.1;
scene.position.z = -0.3;
scene.position.y = 0.1;
const textureLoader = new THREE.TextureLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
deviceType = isMobile ? "mobile" : "desktop";

const isDown = (e) => {
    if (!canPullLever) return;
    mouse.pressing = true;
    let tgt = deviceType === "mobile" ? e.targetTouches[0] : e;
    mouse.x = tgt.clientX;
    mouse.y = tgt.clientY;

    pointer.x = (tgt.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(tgt.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(hitArea);
    if (intersects.length > 0) {
        e.preventDefault();
        mouse.isClicking = true;
    }
};

const isUp = (e) => {
    mouse.pressing = false;
    mouse.isClicking = false;
    mouse.direction = null;
    if (mouse.dragStarted) {
        mouse.dragStarted = false;
        lever.rotation.x = 1;
    }
};

const isMove = (e) => {
    let tgt = deviceType === "mobile" ? e.targetTouches[0] : e;
    mouse.x = tgt.clientX;
    mouse.y = tgt.clientY;

    if (mouse.pressing && mouse.isClicking) {
        e.preventDefault();

        if (mouse.curY == null) {
            // first click
        } else if (mouse.curY > tgt.clientY) {
            mouse.direction = "up";
        } else if (mouse.curY < tgt.clientY) {
            if (mouse.direction !== "down") {
                mouse.direction = "down";
                mouse.dragDistance = 0;
            } else {
                let dist = tgt.clientY - mouse.curY;
                mouse.dragStarted = true;
                mouse.dragDistance += dist;
                let r = Math.min(2, mouse.dragDistance / 100 + 1);
                lever.rotation.x = r;
                if (inc < 0.4) inc += r / 100;
            }
        }
        mouse.curY = tgt.clientY;
    } else {
        mouse.mouseDirection = null;
        mouse.curY = null;
        return;
    }
};

const sizes = { width: window.innerWidth, height: window.innerHeight };
window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 0.1, 100);
camera.position.set(8, 1.7, -12.5);
camera.lookAt(0, 0, 0);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableRotate = false;
controls.enablePan = false;
controls.enableZoom = false;
controls.minDistance = 4;
controls.maxDistance = 7;
controls.maxPolarAngle = Math.PI / 2;
controls.maxAzimuthAngle = 0.785;
controls.minAzimuthAngle = -1.5;

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

const bakedTexture = textureLoader.load("assets/back.webp");
bakedTexture.flipY = false;
bakedTexture.colorSpace = THREE.SRGBColorSpace;

const wheelTexture = textureLoader.load("assets/wheel.webp");
wheelTexture.flipY = false;
wheelTexture.colorSpace = THREE.SRGBColorSpace;

const shadowTexture = textureLoader.load("assets/shadow.webp");
shadowTexture.flipY = false;
shadowTexture.colorSpace = THREE.SRGBColorSpace;

const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
const wheelMaterial = new THREE.MeshBasicMaterial({ map: wheelTexture });
const shadowMaterial = new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, opacity: 0.5 });
const transpMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0x000000), transparent: true, opacity: 0 });

gltfLoader.load("assets/carnival.glb", (gltf) => {
    gltf.scene.traverse((child) => {
        const lowerName = (child.name || "").toLowerCase();
        if (child.name === "lever") {
            lever = child;
            lever.rotation.x = cameraSetup.leverTgt;
            child.material = bakedMaterial;

            glowLever = lever.clone();
            glowLever.material = new THREE.MeshBasicMaterial({
                color: 0xff0000,
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            glowLever.scale.multiplyScalar(1);
            scene.add(glowLever);

        } else if (child.name === "hitarea") {
            hitArea = child;
            child.material = transpMaterial;
        } else if (child.name === "wheel") {
            child.material = wheelMaterial;
            wheel = child;
            ready = true;
        } else if (child.name === "shadow") {
            child.material = shadowMaterial;
        } else if (child.name === "sign_swing") {
            child.material = bakedMaterial;
            pullSign = child;
        } else if (child.name === "result_panel") {
            child.material = bakedMaterial;
            initResultAnimation(child, gltf);
        } else if (child.name.includes("num")) {
            numArr.push(child);
            child.material = bakedMaterial;
            child.visible = false;
        } else {
            child.material = bakedMaterial;
        }
    });

    if (wheel && numArr.length >= 10) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const angleDeg = (randomNumber - 1) * 36;
        speed = angleDeg * (Math.PI / 180);
        wheel.rotation.z = speed;
        showNumber(randomNumber);
    }

    camera.position.set(
        cameraSetup.cameraTgt.x + 0.35,
        cameraSetup.cameraTgt.y + 1.7,
        cameraSetup.cameraTgt.z + 1.7
    );
    camera.lookAt(0, 0, 0);
    cameraSetup.cameraIsSettled = true;

    scene.add(gltf.scene);
    window.start3 = true;

    setInterval(() => {
        if (!mouse.isSpinning && pullSign && canPullLever) {
            signSpinSpeed = 6;
            incSpeed = 12;
        }
    }, 5000);
});

let initResultAnimation = (child, gltf) => {
    resultSign = child;
    resultAnim = THREE.AnimationClip.findByName(gltf.animations, "result_panelAction");
    animMixer = new THREE.AnimationMixer(resultSign);
    animMixer.addEventListener("finished", (e) => manageRevealAnim(e));
    animAction = animMixer.clipAction(resultAnim);
    animAction.reset();
    animAction.clampWhenFinished = true;
    animAction.timeScale = 1;
    animAction.setLoop(THREE.LoopOnce, 1);
};

let manageRevealAnim = (e) => {
    if (revealAnim.isShowing) {
        if (!mouse.isSpinning) revealAnim.isShowing = false;
    } else {
        if (!mouse.isSpinning) revealAnim.isShowing = true;
    }
    revealAnim.isAnimating = false;
    animAction.paused = true;
};

const clock = new THREE.Clock();

let showNumber = (answer) => {
    let itm = numArr[answer - 1];
    numArr.forEach((n) => n.visible = false);
    itm.visible = true;
};

let mousePos = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
    mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

const tick = () => {
    controls.update();

    if (glowLever && lever) {
        glowLever.position.copy(lever.position);
        glowLever.rotation.copy(lever.rotation);
        glowLever.scale.copy(lever.scale).multiplyScalar(1);
        glowLever.material.opacity = canPullLever ? Math.sin(Date.now() * 0.005) * 0.25 + 0.25 : 0;
    }

    if (ready && window.start3) {
        speed += inc;
        if (inc > 0) {
            if (!mouse.isSpinning) {
                canPullLever = false;
                inc += 0.1;
            }
            wheel.rotation.z = speed;
            inc -= 0.001;
            mouse.isSpinning = true;
            if (revealAnim.isShowing) {
                animAction.paused = false;
                revealAnim.isAnimating = true;
                animAction.setLoop(THREE.LoopOnce);
                animAction.timeScale = -1;
                animAction.time = 0.5;
                animAction.play();
                revealAnim.isShowing = false;
            }
        } else {
            let rad = (wheel.rotation.z * (180 / Math.PI)) % 360;
            let answer = Math.floor(1 + rad / 36);
            if (mouse.isSpinning) {
                showNumber(answer);
                mouse.isSpinning = false;
                setTimeout(() => {
                    canPullLever = true;
                }, 1000);
                animAction.paused = false;
                revealAnim.isAnimating = true;
                animAction.setLoop(THREE.LoopOnce);
                animAction.timeScale = 1;
                animAction.play();
            }
        }

        if (pullSign && incSpeed > 0) {
            pullSign.rotation.z = Math.sin(signSpinSpeed) / 3;
            signSpinSpeed += incSpeed / 100;
            incSpeed -= 0.068;
        }
    }

    if (cameraSetup.cameraIsSettled) {
        const targetX = cameraSetup.cameraTgt.x + mousePos.x * 0.3;
        const targetY = cameraSetup.cameraTgt.y + 1.7 + mousePos.y * 0.2;
        const targetZ = cameraSetup.cameraTgt.z + 1.7;

        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (targetY - camera.position.y) * 0.05;
        camera.position.z += (targetZ - camera.position.z) * 0.05;
        camera.lookAt(0, 0, 0);
    }

    const delta = clock.getDelta();
    if (animMixer) animMixer.update(delta);

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

init();
tick();
window.camera = camera;
window.controls = controls;
