import { motion } from "framer-motion";
import "./gallery-page.css";

const images = [
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  "https://images.unsplash.com/photo-1529634894861-8f5e7b9d79c1",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  
];

export default function GalleryPage() {
  return (
    <div className="gallery-page">

      {/* PAGE HERO */}
      <motion.section
        className="gallery-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="page-tag">Our Creations</span>
        <h1>Handcrafted Wedding Moments</h1>
        <p>
          Explore our collection of handcrafted wedding packaging,
          custom gifts, and creative details made with love.
        </p>
      </motion.section>

      {/* GALLERY GRID */}
      <section className="gallery-wrapper">
        <div className="gallery-masonry">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="gallery-box"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={img} alt="SR Craft work" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <h2>Want Custom Wedding Packaging?</h2>
        <a
          href="https://wa.me/919999999999"
          className="btn-gold"
        >
          Order on WhatsApp
        </a>
      </section>

    </div>
  );
}
