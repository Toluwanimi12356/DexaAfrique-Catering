import { motion } from "framer-motion";
import { testimonials } from "../data/content";
import { SlideLeft, StaggerChildren, staggerItem } from "./AnimatedSection";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials anchor">
      <div className="container">
        <SlideLeft>
          <p className="section-tag">Testimonials</p>
          <h2 className="section-title">What our clients say.</h2>
        </SlideLeft>

        <StaggerChildren className="testimonials__grid" staggerChildren={0.08}>
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className={`testimonials-card ${index === 0 ? "testimonials-card--featured" : ""}`}
              variants={staggerItem(12, 0.96)}
            >
              <div className="testimonials-card__stars">{"\u2605".repeat(5)}</div>
              <p>{item.quote}</p>
              <div className="testimonials-card__author">
                <span>{item.initials}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
