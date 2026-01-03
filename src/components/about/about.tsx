import "./about.css";
import AboutImg from "../../virtual pics/pic8.png";
import { motion, easeOut } from "framer-motion";

const about = () => {
  // Container for staggered children
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // Individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <>
      <motion.div
        className="about-spacer"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-left" variants={itemVariants}>
          <img className="aboutimg" src={AboutImg} alt="About Us" />
        </motion.div>
        <motion.div className="about-right" variants={itemVariants}>
          <motion.h4 className="about-title" variants={itemVariants}>
            ABOUT US
          </motion.h4>

          <motion.h2 className="about-sub" variants={itemVariants}>
            We help people build skills & businesses run better...
          </motion.h2>

          <motion.p className="first-para" variants={itemVariants}>
            Virtual Haven, founded in 2020 by Khadijah Aliyu, is a hub for
            training <br /> and business support aimed at virtual assistants,
            freelancers, and <br /> growing businesses. It provides high-quality
            business support and <br /> digital expertise to brands without the
            need for full-time hires.
          </motion.p>

          <motion.p className="about-desc" variants={itemVariants}>
            What started as a solo practice providing copywriting, digital
            <br />
            marketing, graphic design, and virtual assistant services has
            <br />
            evolved into a collaborative hub with a network of professionals,
            <br />
            including web designers, developers, video editors, data analysts,
            <br />
            and lead marketers.
          </motion.p>

          <motion.button
            type="button"
            className="btn-work2"
            variants={itemVariants}
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default about;
