import { motion } from "framer-motion";
import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="tag">Handcrafted Wedding Studio</span>
        <h1>
          Elegant Wedding <br /> Packaging & Crafts
        </h1>
        <p>
          Thoughtfully handcrafted designs to make your special
          moments timeless.
        </p>

        <a
          className="btn-gold"
          href="https://wa.me/919999999999"
          target="_blank"
        >
          Book on WhatsApp
        </a>
      </motion.div>

      <motion.img
        src="/images/10.webp"
        className="hero-img"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
}
