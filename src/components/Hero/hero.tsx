import "./hero.css";
import "@fontsource/poppins/400.css";
import Partner1 from "../../virtual pics/partner1.png";
import Partner2 from "../../virtual pics/partner2.png";
import Partner3 from "../../virtual pics/partner4.png";
import Partner4 from "../../virtual pics/partner5.png";
import Partner5 from "../../virtual pics/partner6.png";
import Partner6 from "../../virtual pics/partner.png";
import { motion } from "framer-motion";
import Reveal from "../reveal";

type HeroProps = {
  loading: boolean;
};

const Hero = ({ loading }: HeroProps) => {
  return (
    <>
      <div className="hero-image">
        <Reveal loading={loading} delay={0}>
          <h1 className="header">
            {" "}
            Empowering Professionals, Freelancers
            <br /> and Businesses to Grow with Clarity.
          </h1>
        </Reveal>
        <Reveal loading={loading} delay={0.15}>
          <p className="para">
            Virtual Haven combines career coaching, business consulting,
            digital, & technical support <br /> services to help you work
            smarter, build sustainable systems, and scale intentionally.
          </p>
        </Reveal>
        <div className="btn-work">
          <motion.button
            type="button"
            className="btn-work-with-us"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            initial={{ y: 12, opacity: 0 }}
            animate={loading ? { y: 12, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            WORK WITH US
          </motion.button>
          <button type="button" className="btn-about">
            ABOUT US
          </button>
        </div>
      </div>
      <div className="trusted-by-section">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={loading ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="header3"
        >
          Trusted By
        </motion.h3>
        <div className="trusted-logos">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            src={Partner1}
            alt="Brand 1"
            className="logos"
          />
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            src={Partner2}
            alt="Brand 2"
            className="logos"
          />
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            src={Partner3}
            alt="Brand 3"
            className="logoss"
          />
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            src={Partner4}
            alt="Brand 4"
            className="logos"
          />
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            src={Partner5}
            alt="Brand 5"
            className="logos"
          />
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            src={Partner6}
            alt="Brand 6"
            className="logoss"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
