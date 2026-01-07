import "./serve.css";
import VAImg from "../../virtual pics/serve1.png";
import VAImg2 from "../../virtual pics/serve2.png";
import VAImg3 from "../../virtual pics/serve3.png";
import VARImg from "../../virtual pics/pic6.png";
import VARImg2 from "../../virtual pics/pic5.png";
import VARImg3 from "../../virtual pics/pic7.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const cards = [
  {
    img: VAImg,
    title: "Businesses & SMEs",
    para: "Seeking operational and strategic guidance",
    dataImg: VARImg,
  },
  {
    img: VAImg2,
    title: "Freelancers & VAs",
    para: "Looking to upskill and gain career clarity",
    dataImg: VARImg2,
  },
  {
    img: VAImg3,
    title: "Professionals & Teams",
    para: "In need of digital, technical, & creative support",
    dataImg: VARImg3,
  },
];
const serve = () => {
  // Container variant for staggered children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }, // each card appears 0.2s after previous
    },
  };

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

  return (
    <>
      <div className="serve-spacer">
        <motion.h2
          className="serve-header"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          WHO WE SERVE
        </motion.h2>

        <motion.h3
          className="serve-sub"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Virtual Haven Supports
        </motion.h3>

        <motion.div
          className="serve-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card, index) => (
            <motion.div
              className="serve-card1"
              key={index}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.img
                className="serve-img"
                src={card.img}
                alt={card.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <h4 className="card-title1">{card.title}</h4>
              <p className="card-para">{card.para}</p>
              <img className="serve-data" src={card.dataImg} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default serve;
