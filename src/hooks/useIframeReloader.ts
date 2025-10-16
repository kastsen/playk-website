import { useEffect, useState } from "react";

export function useIframeReloader(breakpoint: number = 640) {
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width <= breakpoint || height <= breakpoint) {
        setIframeKey((prev) => prev + 1);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return iframeKey;
}
