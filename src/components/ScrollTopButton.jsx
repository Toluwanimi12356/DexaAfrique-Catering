import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top ${visible ? "is-visible" : ""}`}
      onClick={() => {
        if (window.__lenis) {
          window.__lenis.scrollTo(0);
          return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Back to top"
    >
      Up
    </button>
  );
}
