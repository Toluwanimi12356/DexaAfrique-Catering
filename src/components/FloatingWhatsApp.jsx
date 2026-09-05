import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { contact } from "../data/content";

const TOOLTIP_KEY = "dexa_whatsapp_toast_seen";

export default function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.querySelector("#contact");

    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hidden || sessionStorage.getItem(TOOLTIP_KEY)) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      toast("WhatsApp us now", {
        id: "whatsapp-tip",
        icon: "💬",
      });
      sessionStorage.setItem(TOOLTIP_KEY, "1");
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [hidden]);

  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={`floating-whatsapp ${hidden ? "is-hidden" : ""}`}
      aria-label="WhatsApp us now"
      title="WhatsApp us now"
    >
      <span className="floating-whatsapp__ring" aria-hidden="true" />
      <span className="floating-whatsapp__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.55 0 .25 5.3.25 11.82c0 2.08.55 4.12 1.58 5.91L0 24l6.46-1.7a11.8 11.8 0 005.61 1.43h.01c6.52 0 11.82-5.3 11.82-11.82a11.76 11.76 0 00-3.38-8.43zM12.08 21.7a9.8 9.8 0 01-4.98-1.36l-.36-.21-3.83 1 1.02-3.74-.24-.39a9.77 9.77 0 01-1.51-5.18c0-5.42 4.4-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 012.88 6.94c0 5.42-4.4 9.82-9.82 9.82zm5.39-7.35c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.65.15-.19.29-.74.94-.91 1.13-.16.19-.33.22-.61.07-.29-.15-1.2-.44-2.29-1.41a8.56 8.56 0 01-1.59-1.98c-.16-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.16.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.57-.88-2.15-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.5.07-.77.36-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.02c.14.19 2.02 3.09 4.89 4.33.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.33z"
          />
        </svg>
      </span>
      <span className="floating-whatsapp__text">Chat with us</span>
    </a>
  );
}
