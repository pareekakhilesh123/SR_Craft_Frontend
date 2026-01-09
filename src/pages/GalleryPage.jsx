import { motion } from "framer-motion";
import "./gallery-page.css";

const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/7.webp",
  "/images/8.webp",
  "/images/9.webp",
  "/images/10.webp",
  "/images/11.webp",
  "/images/12.webp",
 
  
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
