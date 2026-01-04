import { easeOut, motion } from "framer-motion";
import "./vision.css";
const vision = () => {
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
    <div className="vision-spacer">
      <motion.h4 className="vision-title" variants={itemVariants}>
        OUR VISION
      </motion.h4>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.hr className="vision-hr" variants={itemVariants} />
        <motion.h2 className="vision-sub" variants={itemVariants}>
          To build skilled professionals and support businesses
          <br /> to grow with clarity, confidence, and impact.
        </motion.h2>
        <motion.p className="vision-desc" variants={itemVariants}>
          Virtual Haven envisions a future where individuals possess essential
          digital skills and
          <br /> businesses benefit from skilled professionals. Our mission is
          to connect learning with real-world
          <br /> application, empowering people to build sustainable careers and
          aiding businesses in
          <br /> operating more efficiently.
        </motion.p>
        <motion.div className="visions-container" variants={itemVariants}>
          <motion.div className="vision-item">
            <motion.div className="vision-header">
              <motion.h4 className="vision-index">1</motion.h4>
              <h3 className="vision-item-title">Our Focus</h3>
            </motion.div>
            <p className="vision-item-desc">
              We prioritize practical skill development
              <br /> and meaningful business support.
              <br /> For learners, this includes training in
              <br /> operations, creative, technical, and
              <br /> strategic skills that clients need.
              <br /> For businesses, we provide reliable
              <br /> support to enhance workflows, visibility,
              <br /> and growth, focusing on real-world
              <br /> applications rather than theory.
            </p>
          </motion.div>
          <motion.span className="vision-separator" />
          <motion.div className="vision-item2">
            <motion.div className="vision-header">
              <motion.h4 className="vision-index">2</motion.h4>
              <h3 className="vision-item-title">Our Approach</h3>
            </motion.div>
            <p className="vision-item-desc">
              We combine hands-on learning with
              <br /> real business challenges. Learners
              <br /> work on actual projects, gaining
              <br /> experience and confidence. Businesses
              <br /> receive tailored support that addresses
              <br /> their specific needs, ensuring practical
              <br /> and effective solutions.
            </p>
          </motion.div>
          <motion.span className="vision-separator" />
          <motion.div className="vision-item" variants={itemVariants}>
            <motion.div className="vision-header">
              <motion.h4 className="vision-index">3</motion.h4>
              <h3 className="vision-item-title">Our Impact</h3>
            </motion.div>
            <p className="vision-item-desc">
              We empower aspiring VAs and
              <br /> freelancers to gain confidence, build
              <br /> portfolios, and start income-
              <br /> generating careers while providing
              <br /> businesses with skilled professionals
              <br /> Our impact focuses on skill, structure,
              <br /> and sustainable growth for
              <br /> individuals and organizations.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default vision;
