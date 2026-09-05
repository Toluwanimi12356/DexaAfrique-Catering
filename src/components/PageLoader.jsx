import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MOTION_EASE } from "./AnimatedSection";

const LOADER_KEY = "dexa_loader_seen";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem(LOADER_KEY);

    if (hasSeenLoader) {
      return undefined;
    }

    setVisible(true);
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(LOADER_KEY, "1");
      setVisible(false);
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: MOTION_EASE } }}
        >
          <motion.img
            src="/dexaafrique-logo.png"
            alt="DexaAfrique's Catering Services"
            className="page-loader__logo"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: MOTION_EASE }}
          />
          <div className="page-loader__bar-shell" aria-hidden="true">
            <motion.div
              className="page-loader__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: MOTION_EASE }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
