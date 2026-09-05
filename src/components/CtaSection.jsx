import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { contact } from "../data/content";
import { FadeUp } from "./AnimatedSection";

const ctaPoints = [
  "WhatsApp response within hours",
  "Corporate and social event coverage",
  "Open to outstation jobs",
];

export default function CtaSection() {
  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText(contact.phoneDisplay);
      toast.success("Phone number copied to clipboard");
    } catch {
      // no-op
    }
  };

  return (
    <section className="cta">
      <div className="container cta__inner">
        <FadeUp>
          <div className="cta__panel">
            <p className="section-tag section-tag--center">Book Now</p>
            <h2 className="section-title cta__title">
              Ready to make your event <em>unforgettable?</em>
            </h2>
            <p className="section-copy cta__copy">
              Let's talk about your event, your menu, and how DexaAfrique can make
              it perfect. First response within hours.
            </p>
            <motion.div
              className="cta__actions"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
                className="btn btn--solid"
                href={contact.whatsappBookingHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {contact.whatsappDisplay}
              </motion.a>
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
                className="btn btn--light"
                href={contact.phoneHref}
                onClick={handlePhoneClick}
              >
                Call: {contact.phoneDisplay}
              </motion.a>
            </motion.div>
            <motion.div
              className="cta__points"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {ctaPoints.map((point) => (
                <motion.span
                  key={point}
                  className="cta__point"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {point}
                </motion.span>
              ))}
            </motion.div>
            <p className="cta__meta">
              Lagos (Surulere / Lekki) | Open to Outstation Jobs | RC: 152912
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
