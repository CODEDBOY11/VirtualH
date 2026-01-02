import "./hero.css";
import "@fontsource/poppins/400.css";
import Partner1 from "../../virtual pics/partner1.png";
import Partner2 from "../../virtual pics/partner2.png";
import Partner3 from "../../virtual pics/partner4.png";
import Partner4 from "../../virtual pics/partner5.png";
import Partner5 from "../../virtual pics/partner6.png";

const Hero = () => {
  return (
    <>
      <div className="hero-image">
        <h1 className="header">
          Empowering Professionals, <br /> Freelancers & Businesses to
          <br /> Grow with Clarity.
        </h1>
        <br />
        <div>
          <p className="para">
            Virtual Haven combines career coaching, business consulting,
            digital, &
            <br />
            technical support services to help you work smarter, build
            sustainable <br />
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
      <div className="trusted-by-section">
        <h3 className="header3">Trusted By</h3>
        <div className="trusted-logos">
          <img className="logos" src={Partner1} alt="Brand 1" />
          <img className="logos" src={Partner2} alt="Brand 2" />
          <img className="logos" src={Partner3} alt="Brand 3" />
          <img className="logos" src={Partner4} alt="Brand 4" />
          <img className="logos" src={Partner5} alt="Brand 5" />
        </div>
      </div>
    </>
  );
};

export default Hero;
