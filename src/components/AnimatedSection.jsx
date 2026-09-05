import { motion } from "framer-motion";

export const MOTION_EASE = [0.25, 0.1, 0.25, 1];
export const MOTION_VIEWPORT = { once: true, margin: "-80px" };

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  amount = 24,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: amount }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration, delay, ease: MOTION_EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.55,
  scale = 1,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration, delay, ease: MOTION_EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeft({
  children,
  className,
  delay = 0,
  duration = 0.65,
  amount = 36,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -amount }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration, delay, ease: MOTION_EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideRight({
  children,
  className,
  delay = 0,
  duration = 0.65,
  amount = 36,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: amount }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration, delay, ease: MOTION_EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={MOTION_VIEWPORT}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
            ease: MOTION_EASE,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function staggerItem(amount = 24, scale = 1) {
  return {
    hidden: { opacity: 0, y: amount, scale },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: MOTION_EASE },
    },
  };
}
