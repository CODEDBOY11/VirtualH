import "./serve.css";
import VAImg from "../../virtual pics/serve1.png";
import VAImg2 from "../../virtual pics/serve2.png";
import VAImg3 from "../../virtual pics/serve3.png";
import VARImg from "../../virtual pics/pic6.png";
import VARImg2 from "../../virtual pics/pic7.png";
import VARImg3 from "../../virtual pics/pic8.png";

const serve = () => {
  return (
    <>
      <div className="serve-spacer">
        <h2 className="serve-header">WHO WE SERVE</h2>
        <h3 className="serve-sub">Virtual Haven Supports</h3>
        <div className="serve-cards">
          <div className="serve-card1">
            <img className="serve-img" src={VAImg} />
            <h4 className="card-title">Businesses & SMEs</h4>
            <p className="card-para">
              Seeking operational and strategic guidance
            </p>
            <img className="serve-data" src={VARImg} />
          </div>
          <div className="serve-card1">
            <img className="serve-img" src={VAImg2} />
            <h4 className="card-title">Businesses & SMEs</h4>
            <p className="card-para">
              Looking to upskill and gain career clarity
            </p>
            <img className="serve-data" src={VARImg2} />
          </div>

          <div className="serve-card1">
            <img className="serve-img" src={VAImg3} />
            <h4 className="card-title">Professionals & Teams</h4>
            <p className="card-para">
              In need of digital, technical, & creative support
            </p>
            <img className="serve-data" src={VARImg3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default serve;
