import { motion } from "framer-motion";
import { serviceCards } from "../data/content";
import { SlideLeft, StaggerChildren, staggerItem } from "./AnimatedSection";

export default function ServicesSection() {
  const handleVideoTimeUpdate = (event, maxSeconds) => {
    if (!maxSeconds) {
      return;
    }

    const video = event.currentTarget;

    if (video.currentTime >= maxSeconds) {
      video.currentTime = 0;
      if (video.paused) {
        void video.play().catch(() => {});
      }
    }
  };

  return (
    <section id="services" className="services anchor">
      <div className="container">
        <SlideLeft>
          <p className="section-tag">What We Offer</p>
          <h2 className="section-title">
            Every occasion, <em>perfectly catered.</em>
          </h2>
          <p className="section-copy">
            Structured catering and event support across celebrations, office
            meals, pastries, training, and operational food services.
          </p>
        </SlideLeft>

        <StaggerChildren className="services__grid" staggerChildren={0.08}>
          {serviceCards.map((card) => (
            <motion.article
              key={card.title}
              className="service-card"
              variants={staggerItem(26)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {card.video ? (
                <div className="service-card__media">
                  <video
                    src={card.video}
                    autoPlay
                    muted
                    loop={!card.videoLoopSeconds}
                    playsInline
                    preload="metadata"
                    onTimeUpdate={(event) =>
                      handleVideoTimeUpdate(event, card.videoLoopSeconds)
                    }
                  />
                </div>
              ) : card.image ? (
                <div className="service-card__media">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    style={
                      card.imagePosition
                        ? { objectPosition: card.imagePosition }
                        : undefined
                    }
                  />
                </div>
              ) : null}
              <span className="service-card__code">{card.code}</span>
              <h3>{card.title}</h3>
              <div className="service-card__body">
                <p>{card.description}</p>
                <a href="#contact" className="service-card__learn-more">
                  Learn More -&gt;
                </a>
              </div>
              <span className="service-card__badge">{card.badge}</span>
            </motion.article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
