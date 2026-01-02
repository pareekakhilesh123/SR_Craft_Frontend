import { motion } from "framer-motion";
import "./Services.css"


const services = [
  {
    title: "Wedding Packing",
    desc: "Luxury handcrafted packaging for rituals & gifting"
  },
  {
    title: "Gift Boxes",
    desc: "Elegant custom boxes with premium finishes"
  },
  {
    title: "Return Gifts",
    desc: "Thoughtful handmade keepsakes for guests"
  },
    
];

export default function Services() {
  return (
   <section className="services-section">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="services-tag">Our Services</span>
        <h2>
          Thoughtfully Designed <br />
          Handcrafted Experiences
        </h2>
        <p>
          We specialize in creating premium handmade packaging and crafts
          that add elegance and emotion to your special moments.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((item, i) => (
          <motion.div
            className="service-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
