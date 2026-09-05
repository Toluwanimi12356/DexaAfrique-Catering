import toast from "react-hot-toast";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { contact } from "../data/content";
import { StaggerChildren, staggerItem } from "./AnimatedSection";

export default function FooterSection() {
  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText(contact.phoneDisplay);
      toast.success("Phone number copied to clipboard");
    } catch {
      // no-op
    }
  };

  return (
    <footer id="contact" className="footer anchor">
      <StaggerChildren className="container footer__inner" staggerChildren={0.1}>
        <motion.section className="footer__card footer__card--brand" variants={staggerItem(18, 0.98)}>
          <BrandLogo light />
          <p className="footer__copy">
            Premium catering services in Lagos, Nigeria. Social and corporate
            events, lunch delivery, cakes and pastries, training and mentoring.
          </p>
        </motion.section>

        <motion.section className="footer__card" variants={staggerItem(18, 0.98)}>
          <h3>Contact Us</h3>
          <ul className="footer__list">
            <li>
              <a href={contact.phoneHref} onClick={handlePhoneClick}>
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp: {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>{contact.location}</li>
            <li>Open to Outstation Jobs</li>
          </ul>
        </motion.section>

        <motion.section className="footer__card" variants={staggerItem(18, 0.98)}>
          <h3>Follow Us</h3>
          <ul className="footer__list">
            <li>
              <a href={contact.social.instagram} target="_blank" rel="noreferrer">
                Instagram: @desayomilicious
              </a>
            </li>
            <li>
              <a href={contact.social.tiktok} target="_blank" rel="noreferrer">
                TikTok: @fadesayodishes247
              </a>
            </li>
            <li>
              <a href={contact.social.facebook} target="_blank" rel="noreferrer">
                Facebook: Fadesayodishes
              </a>
            </li>
          </ul>
        </motion.section>
      </StaggerChildren>

      <div className="container footer__bottom">
        <p>Copyright 2026 DexaAfrique's Catering Services | RC: 152912</p>
        <a className="footer__quote" href={contact.whatsappHref} target="_blank" rel="noreferrer">
          Get a quote now
        </a>
      </div>
    </footer>
  );
}
