import { SlideLeft, SlideRight } from "./AnimatedSection";

const tags = [
  "Food Business Strategist",
  "Recipe Developer",
  "Global Food Tourist",
  "In-Chef Services",
];

const aboutStats = [
  { value: "12", label: "Service Lines" },
  { value: "RC", label: "152912 Registered" },
  { value: "NG", label: "Lagos and Outstation" },
];

const aboutHighlights = [
  "Corporate lunches and executive catering",
  "Outdoor event setup with service staff",
  "Custom cakes, pastries, and gift hampers",
];

export default function AboutSection() {
  return (
    <section id="about" className="about anchor">
      <div className="container about__inner">
        <SlideLeft className="about__media">
          <div className="about__media-card">
            <div className="about__portrait">
              <img
                src="/images/about-owner.png?v=2"
                alt="Ms Titilayo Sowunmi, The team Lead of DexaAfrique's Catering Services"
                loading="lazy"
              />
              <span className="about__media-code">RC 152912</span>
            </div>
            <div className="about__media-body">
              <div className="about__owner">
                <strong>Ms Titilayo Sowunmi</strong>
                <span>The team Lead</span>
              </div>
              <p className="about__media-kicker">
                Premium catering, built for moments that need to land well.
              </p>
              <div className="about__stats">
                {aboutStats.map((item) => (
                  <div key={item.label} className="about__stat">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="about__highlights">
                {aboutHighlights.map((item) => (
                  <div key={item} className="about__highlight">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about__media-shadow" />
        </SlideLeft>

        <SlideRight>
          <p className="section-tag">Our Story</p>
          <h2 className="section-title">
            More than food, <em>an experience.</em>
          </h2>
          <p className="section-copy">
            DexaAfrique's Catering Services is a Lagos-based premium catering
            company that brings the richness of African cuisine to your table.
            We support intimate birthdays, corporate lunches, and large outdoor
            events with the same production discipline.
          </p>
          <p className="section-copy">
            Led by Ms Titilayo Sowunmi, a passionate food business strategist
            and recipe developer, every service is built around quality,
            timing, and client comfort.
          </p>
          <div className="about__tags">
            {tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </SlideRight>
      </div>
    </section>
  );
}
