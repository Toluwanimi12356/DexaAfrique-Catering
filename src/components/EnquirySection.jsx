import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { contact } from "../data/content";
import { FadeUp, SlideLeft, MOTION_EASE } from "./AnimatedSection";

const eventOptions = [
  "Social Event",
  "Corporate Event",
  "Lunch Box Delivery",
  "Outdoor Catering",
  "Cake & Pastry",
  "Training",
  "Other",
];

const initialForm = {
  fullName: "",
  phoneNumber: "",
  eventType: "Social Event",
  eventDate: "",
  guests: "",
  message: "",
};

export default function EnquirySection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!form.phoneNumber.trim()) {
      nextErrors.phoneNumber = "Phone number is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setSending(true);

    const message = [
      "Hello, I would like to make an enquiry about your catering services.",
      "",
      `Full Name: ${form.fullName}`,
      `Phone Number: ${form.phoneNumber}`,
      `Event Type: ${form.eventType}`,
      `Event Date: ${form.eventDate || "Not specified"}`,
      `Number of Guests: ${form.guests || "Not specified"}`,
      `Message: ${form.message || "No extra message"}`,
    ].join("\n");

    const href = `https://wa.me/2348189804257?text=${encodeURIComponent(message)}`;

    window.setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
      toast.success("Your enquiry has been sent! We'll respond within hours.");
      setSending(false);
    }, 500);
  };

  return (
    <section className="enquiry">
      <div className="container enquiry__inner">
        <SlideLeft className="enquiry__intro">
          <p className="section-tag">Enquiry</p>
          <h2 className="section-title">
            Share your event details, <em>we'll take it from there.</em>
          </h2>
          <p className="section-copy">
            Use the form to send your event brief directly to DexaAfrique on WhatsApp with the key
            details already structured.
          </p>
        </SlideLeft>

        <FadeUp>
          <motion.form
            className={`enquiry__form ${hasErrors ? "has-errors" : ""}`}
            onSubmit={handleSubmit}
            animate={hasErrors ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
            transition={{ duration: 0.36, ease: MOTION_EASE }}
          >
            <div className="enquiry__grid">
              <label className="enquiry__field">
                <span>Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "is-error" : ""}
                  aria-invalid={Boolean(errors.fullName)}
                  placeholder="Your full name"
                />
                {errors.fullName ? <small className="enquiry__error">{errors.fullName}</small> : null}
              </label>

              <label className="enquiry__field">
                <span>Phone Number</span>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  className={errors.phoneNumber ? "is-error" : ""}
                  aria-invalid={Boolean(errors.phoneNumber)}
                  placeholder="e.g. 07052700275"
                />
                {errors.phoneNumber ? (
                  <small className="enquiry__error">{errors.phoneNumber}</small>
                ) : null}
              </label>

              <label className="enquiry__field">
                <span>Event Type</span>
                <select name="eventType" value={form.eventType} onChange={handleChange}>
                  {eventOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="enquiry__field">
                <span>Event Date</span>
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  placeholder="dd/mm/yyyy"
                />
              </label>

              <label className="enquiry__field enquiry__field--full">
                <span>Number of Guests</span>
                <input
                  type="number"
                  min="0"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="Estimated number of guests"
                />
              </label>

              <label className="enquiry__field enquiry__field--full">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your menu preferences, venue, and timing."
                />
              </label>
            </div>

            <div className="enquiry__footer">
              <p>
                WhatsApp: <a href={contact.whatsappHref}>{contact.whatsappDisplay}</a>
              </p>
              <motion.button
                type="submit"
                className="btn btn--solid"
                disabled={sending}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: MOTION_EASE }}
              >
                {sending ? "Sending..." : "Send Enquiry"}
              </motion.button>
            </div>
          </motion.form>
        </FadeUp>
      </div>
    </section>
  );
}
