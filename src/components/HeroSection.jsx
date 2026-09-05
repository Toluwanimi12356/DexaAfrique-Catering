import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contact } from "../data/content";
import CountUpStat from "./CountUpStat";
import { MOTION_EASE, MOTION_VIEWPORT, staggerItem } from "./AnimatedSection";

const highlights = [
  "RC Registered Business",
  "Open to Outstation Jobs",
  "Corporate and Social Events",
];

const stats = [
  { value: 10, suffix: "+", label: "Years Active" },
  { value: 500, suffix: "+", label: "Events Delivered" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 160]);

  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent("app:scrollTo", {
        detail: {
          target,
          offset: -80,
        },
      })
    );
  };

  return (
    <section id="top" className="hero anchor" ref={heroRef}>
      <motion.div className="hero__background" style={{ y: parallaxY }} aria-hidden="true">
        <motion.div className="hero__orb hero__orb--one" style={{ y: orbY }} />
        <motion.div className="hero__orb hero__orb--two" style={{ y: orbY }} />
        <div className="hero__mesh" />
      </motion.div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          whileInView="show"
          viewport={MOTION_VIEWPORT}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p
            className="chip chip--hero"
            variants={staggerItem(20)}
          >
            Lagos | Surulere | Lekki | Outstation Jobs
          </motion.p>

          <motion.h1
            className="hero__title"
            variants={staggerItem(20)}
          >
            Where every meal tells an <em>African</em> story.
          </motion.h1>

          <motion.p
            className="hero__summary"
            variants={staggerItem(20)}
          >
            Premium catering for social and corporate events, lunch deliveries,
            outdoor catering, and bespoke cake and pastry production.
          </motion.p>

          <motion.div className="hero__actions" variants={staggerItem(20)}>
            <a
              className="btn btn--solid"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
            <a
              className="btn btn--ghost"
              href="#services"
              onClick={(event) => handleSmoothScroll(event, "#services")}
            >
              Our Services
            </a>
          </motion.div>

          <motion.div className="hero__badges" variants={staggerItem(20)}>
            {highlights.map((item) => (
              <span key={item} className="hero__badge">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero__panel"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.7, delay: 0.2, ease: MOTION_EASE }}
        >
          <div className="hero__panel-grid">
            <div className="hero__tile hero__tile--events">
              <span>Events</span>
            </div>
            <div className="hero__tile hero__tile--pastries">
              <span>Pastries</span>
            </div>
            <div className="hero__tile hero__tile--lunchbox">
              <span>Lunch Box</span>
            </div>
            <div className="hero__tile hero__tile--catering">
              <span>Catering</span>
            </div>
          </div>
          <div className="hero__stats">
            {stats.map((item) => (
              <CountUpStat key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
          </div>
          <motion.span
            className="hero__panel-tag"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY }}
          >
            Available for your event
          </motion.span>
        </motion.aside>
      </div>
    </section>
  );
}
