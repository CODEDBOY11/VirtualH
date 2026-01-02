import "./about.css";
import AboutImg from "../../virtual pics/pic8.png";

const about = () => {
  return (
    <>
      <div className="about-spacer">
        <div className="about-left">
          <img className="aboutimg" src={AboutImg} alt="About Us" />
        </div>
        <div className="about-right">
          <h4 className="about-title">ABOUT US</h4>
          <h2 className="about-sub">
            We help people build skills & businesses run better...
          </h2>
          <p className="first-para">
            Virtual Haven, founded in 2020 by Khadijah Aliyu, is a hub for
            training
            <br /> and business support aimed at virtual assistants,
            freelancers, and
            <br /> growing businesses. It provides high-quality business support
            and
            <br /> digital expertise to brands without the need for full-time
            hires.
          </p>

          <p className="about-desc">
            What started as a solo practice providing copywriting, digital
            <br />
            marketing, graphic design, and virtual assistant services has
            <br />
            evolved into a collaborative hub with a network of professionals,
            <br />
            including web designers, developers, video editors, data analysts,
            <br />
            and lead marketers.
          </p>
          <button type="button" className="btn-work2">
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default about;
