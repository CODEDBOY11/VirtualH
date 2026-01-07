import "./services.css";
import Reveal from "../reveal";
import SerImg from "../../virtual pics/serveImg.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type HeroProps = {
  loading: boolean;
};
const cards = [
  {
    Number: 0o1,
    title: "Buisness and Strategy",
    para: "We work with business owners to clarify goals, improve decision-making, and build strategies that support sustainable growth and long-term success.",
  },
  {
    Number: 0o2,
    title: "Operational & Admin",
    para: "We help you streamline daily operations by setting up systems, workflows, & administrative support that keep your business running smoothly.",
  },
  {
    Number: 0o3,
    title: "Marketing & Lead Generation",
    para: "We support your marketing efforts through content planning, social media management, & digital marketing support that improves visibility, engagement, and conversion. ",
  },
  {
    Number: 0o4,
    title: "Website & Digital Assets",
    para: "We help businesses design, manage, and maintain websites, graphics, and digital assets that are functional, professional, and aligned with their brand goals.",
  },
];
const services = ({ loading }: HeroProps) => {
  // Individual card animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 }, // subtle pop effect
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  };
  // Container variant for staggered children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }, // each card appears 0.2s after previous
    },
  };
  return (
    <Reveal loading={loading} delay={0.15}>
      <div className="service-spacer">
        <section id="services" className="services-section">
          <div className="services-container">
            <h2 className="services-title">OUR SERVICES</h2>
          </div>
          <h3 className="header7">How we support your business</h3>
        </section>
        <section className="services-content">
          <img className="serveImg" src={SerImg} alt="Service image" />
          <div className="services-right">
            <div className="service-item">
              <motion.div
                className="serve-cardss"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {cards.map((card, index) => (
                  <motion.div
                    className="serve-card2"
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <h3>{card.Number}</h3>
                    <hr className="hori" />
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-paraa">{card.para}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Reveal>
  );
};

export default services;
