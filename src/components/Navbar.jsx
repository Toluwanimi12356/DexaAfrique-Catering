import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MOTION_EASE } from "./AnimatedSection";
import { contact, navItems } from "../data/content";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0]?.href ?? "");

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;
      const pageBottom = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 8) {
        setActiveSection(navItems[navItems.length - 1]?.href ?? "");
        return;
      }

      let currentSection = navItems[0]?.href ?? "";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent("app:scrollTo", {
        detail: {
          target: href,
          offset: -80,
        },
      })
    );
    setIsOpen(false);
  };

  return (
    <header className={`nav ${isStuck ? "nav--stuck" : ""}`}>
      <div className="container nav__inner">
        <BrandLogo />

        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? "is-active" : ""}
              aria-current={activeSection === item.href ? "page" : undefined}
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--solid nav__quote nav__quote--desktop"
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Get a Quote
        </a>

        <button
          type="button"
          className={`nav__toggle ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((line) => (
            <motion.span
              key={line}
              animate={
                isOpen
                  ? line === 0
                    ? { rotate: 45, y: 8 }
                    : line === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.25, ease: MOTION_EASE }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              className="nav__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="nav__menu"
              initial={{ opacity: 0, y: -28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.32, ease: MOTION_EASE }}
              aria-label="Mobile"
            >
              <motion.div
                className="nav__menu-links"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.08,
                    },
                  },
                }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={activeSection === item.href ? "is-active" : ""}
                    aria-current={activeSection === item.href ? "page" : undefined}
                    variants={{
                      hidden: { opacity: 0, y: -18 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35, ease: MOTION_EASE },
                      },
                    }}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
              <motion.a
                className="btn btn--solid nav__quote nav__quote--mobile"
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.18, duration: 0.35, ease: MOTION_EASE }}
                onClick={() => setIsOpen(false)}
              >
                WhatsApp for a Quote
              </motion.a>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
