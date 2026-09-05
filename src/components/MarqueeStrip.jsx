import { marqueeItems } from "../data/content";

const stream = [...marqueeItems, ...marqueeItems];

export default function MarqueeStrip() {
  return (
    <section className="marquee" aria-label="Service Highlights">
      <div className="marquee__track">
        {stream.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
