import { useEffect, useRef } from "react";
import gsap from "gsap";
 import "./Gallery.css"
import { motion } from "framer-motion";

const images = [
  "/images/10.webp",
  "/images/11.webp",
  "/images/8.webp",
  "/images/7.webp",
  "/images/6.webp",
  
];

export default function Gallery() {
  // inside useEffect
gsap.from(".gallery-item", {
  opacity: 0,
  y: 40,
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".gallery-grid",
    start: "top 80%",
  }
});

  return (
    <section className="gallery-section">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="gallery-tag">Our Work</span>
        <h2>Handcrafted Moments</h2>
        <p>
          A glimpse into our handcrafted wedding packaging and
          custom creations made with love and attention to detail.
        </p>
      </motion.div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <img src={img} alt="SR Craft work" />
            <div className="gallery-overlay">
              <span>View Details</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}