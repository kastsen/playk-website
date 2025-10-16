'use client';

import styles from './contact.module.css';
import SocialMedia from "@/components/SocialMedia";

export default function Contact() {
  return (
      <div className={styles.section} id="contact">
        <div className={`${styles.container} text-center`}>
          <div className={`${styles.fish} ${styles.fish1}`}></div>
          <div className={`${styles.fish} ${styles.fish2}`}></div>
          <div className={styles.info}>
            <h2 className={styles.title}>
              Ready to level up your game?
            </h2>
            <p className={styles.description}>
              Drop a message to try out new concepts, share your ideas, <br/>or just chat about what’s next in the world of gaming innovation
            </p>
            <SocialMedia/>

          </div>
        </div>
      </div>
  );
}
