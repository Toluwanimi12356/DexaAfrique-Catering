import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { MOTION_EASE, MOTION_VIEWPORT } from "./AnimatedSection";

export default function CountUpStat({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, MOTION_VIEWPORT);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    const controls = animate(count, value, {
      duration: 3.4,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <div ref={ref} className="hero__stat">
      <strong>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
