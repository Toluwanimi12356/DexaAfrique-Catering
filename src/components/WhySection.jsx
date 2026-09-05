import { motion } from "framer-motion";
import { whyItems } from "../data/content";
import { SlideLeft, StaggerChildren, staggerItem } from "./AnimatedSection";

function WhyIcon({ code }) {
  if (code === "RC") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l7 3v5c0 5-3.3 8.6-7 10-3.7-1.4-7-5-7-10V6l7-3z" />
        <path d="M8.5 12l2.2 2.2L15.5 9.4" />
      </svg>
    );
  }

  if (code === "OS") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
        <circle cx="12" cy="11" r="2.2" />
        <path d="M18 6l3-3M19.5 3H21v1.5" />
      </svg>
    );
  }

  if (code === "GF") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 12h17M12 3c2.7 2.5 4.2 5.6 4.2 9S14.7 18.5 12 21M12 3C9.3 5.5 7.8 8.6 7.8 12S9.3 18.5 12 21" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s-6-3.8-6-8.5a3.6 3.6 0 016.1-2.6A3.6 3.6 0 0118 11.5C18 16.2 12 20 12 20z" />
      <path d="M12 20v-6.5" />
    </svg>
  );
}

export default function WhySection() {
  return (
    <section className="why">
      <div className="container">
        <SlideLeft>
          <p className="section-tag section-tag--gold">Why Choose Us</p>
          <h2 className="section-title section-title--light">
            The DexaAfrique <em>difference.</em>
          </h2>
          <p className="section-copy">
            Clients stay with DexaAfrique for disciplined execution, responsive
            communication, and food service that still feels considered under
            pressure.
          </p>
        </SlideLeft>

        <StaggerChildren className="why__grid" staggerChildren={0.1}>
          {whyItems.map((item) => (
            <motion.article
              key={item.title}
              className="why-card"
              variants={staggerItem(24)}
            >
              <div className="why-card__head">
                <span className="why-card__icon">
                  <WhyIcon code={item.code} />
                </span>
                <span className="why-card__kicker">{item.code}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
