import { motion } from "framer-motion";
import './About.css'

export default function   About() {
  return (
       <section className="about-section">
      <motion.div
        className="about-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-tag">About SR Craft</span>

          <h2>
            Handcrafted Creations <br />
            for Meaningful Celebrations
          </h2>

          <p>
            SR Craft is a handcrafted wedding and gifting studio where
            creativity meets tradition. Every piece we create is thoughtfully
            designed to add warmth, elegance, and personal touch to your
            special moments.
          </p>

          <p>
            From wedding packaging to custom handmade crafts, our work reflects
            love, patience, and fine detailing — making every celebration truly
            unforgettable.
          </p>

          <div className="about-points">
            <span>• Premium Handmade Finish</span>
            <span>• Customized for Every Occasion</span>
            <span>• Crafted with Love & Care</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">
          <img
            src="/images/8.webp"
            alt="Handcrafted Wedding Work"
          />
        </div>
      </motion.div>
    </section>
  );
}
