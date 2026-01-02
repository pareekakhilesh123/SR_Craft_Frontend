import { useEffect, useRef } from "react";
import gsap from "gsap";
 import "./Gallery.css"
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  "https://images.unsplash.com/photo-1529634894861-8f5e7b9d79c1",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2"
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