'use client'

import { useRef } from "react";
import styles from "./device.module.css";
import { useIframeReloader } from "@/hooks/useIframeReloader";

type DeviceProps = {
  iframeLink: string;
};

export default function Device({ iframeLink }: DeviceProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeKey = useIframeReloader(640);

  return (
      <div className={styles.iphoneContainer}>
        <div className={styles.device}>
          <div className={styles.deviceFrame}>
            <div className={styles.deviceContent}>
              <div className={styles.loader}>
                <div className={`${styles.circle} ${styles.one}`}></div>
                <div className={`${styles.circle} ${styles.two}`}></div>
                <div className={`${styles.circle} ${styles.three}`}></div>
              </div>
              <iframe
                  key={iframeKey}
                  ref={iframeRef}
                  className={styles.iframe}
                  src={iframeLink}
                  width={404}
                  height={790}
                  allowFullScreen
                  loading="lazy"
              />
            </div>
            <div className={styles.deviceBtns}></div>
            <div className={styles.devicePower}></div>
            <div className={styles.deviceHome}></div>
          </div>
        </div>
      </div>
  );
}
