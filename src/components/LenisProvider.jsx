import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    window.__lenis = lenis;

    let frameId = 0;

    const onFrame = (time) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(onFrame);
    };

    const onScrollTo = (event) => {
      const target = event.detail?.target;
      const offset = event.detail?.offset ?? -80;

      if (target) {
        lenis.scrollTo(target, { offset });
      }
    };

    frameId = window.requestAnimationFrame(onFrame);
    window.addEventListener("app:scrollTo", onScrollTo);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("app:scrollTo", onScrollTo);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return children;
}
