export default function BrandLogo({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="#top"
      aria-label="DexaAfrique's Catering Services"
    >
      <span className="brand__image-shell">
        <img
          className="brand__image"
          src="/dexaafrique-semi.png"
          alt="DexaAfrique's Catering Services"
          loading="lazy"
        />
      </span>
      <span className="brand__copy">
        <strong>DexaAfrique's</strong>
        <small>Catering Services</small>
        <span className="brand__tagline">Treasured meals at your fingertips</span>
      </span>
    </a>
  );
}
