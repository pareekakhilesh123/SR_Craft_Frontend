import { useState } from "react";
import { motion } from "framer-motion";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    occasion: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Hello SR Craft 👋
My Name: ${form.name}
Phone: ${form.phone}
Occasion: ${form.occasion}

Requirement:
${form.message}
    `;

    const whatsappUrl = `https://wa.me/919530488135?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="page-tag">Contact & Orders</span>
        <h1>Let’s Create Something Beautiful</h1>
        <p>
          Share your requirements and we’ll craft something
          special for your celebration.
        </p>
      </motion.section>

      {/* OPTIONS */}
      <section className="contact-options">
        <a
          href="https://wa.me/9530488135"
          target="_blank"
          className="contact-card whatsapp"
        >
          <h3>WhatsApp Us</h3>
          <p>Fastest way to place your order</p>
          <span>Chat Now →</span>
        </a>

        <a
          href="https://instagram.com/crafter_anjali_"
          target="_blank"
          className="contact-card instagram"
        >
          <h3>Instagram DM</h3>
          <p>View our work & message us</p>
          <span>Open Instagram →</span>
        </a>
      </section>

      {/* FORM */}
      <motion.section
        className="contact-form-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Send an Enquiry</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />

          <input
            name="occasion"
            value={form.occasion}
            onChange={handleChange}
            placeholder="Occasion (Wedding, Gift, etc.)"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us what you’re looking for"
          />

          <button className="btn-gold">
            Send on WhatsApp
          </button>
        </form>

        <p className="contact-note">
          We usually respond within <strong>24 hours</strong>.
        </p>
      </motion.section>

    </div>
  );
}
