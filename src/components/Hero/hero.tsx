import "./hero.css";
import "@fontsource/poppins/400.css";

const Hero = () => {
  return (
    <div className="hero-image">
      <h1 className="header">
        Empowering Professionals, <br /> Freelancers & Businesses to
        <br /> Grow with Clarity.
      </h1>
      <br />
      <div>
        <p className="para">
          Virtual Haven combines career coaching, business consulting, digital,
          &
          <br />
          technical support services to help you work smarter, build sustainable{" "}
          <br />
          systems, and scale intentionally.
        </p>
      </div>
      <div className="button-group">
        <button type="button" className="btn-work">
          WORK WITH US
        </button>
        <button type="button" className="btn-about">
          ABOUT US
        </button>
      </div>
    </div>
  );
};

export default Hero;
