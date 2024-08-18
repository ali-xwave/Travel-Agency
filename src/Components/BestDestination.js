import React from "react";
import play from "../assets/Play button.svg";
import girl from "../assets/Girl.svg";
import useAosInit from "../UseAosInit";
const BestDestination = () => {
  useAosInit();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6" data-aos="zoom-in">
            <div className="pt-2 pt-md-5 pt-lg-5 text-center text-md-start text-lg-start">
              <h5 style={{ color: "#DF6951" }}>
                Best Destinations around the world
              </h5>
              <h1 style={{ color: "#181E4B" }}>
                Travel, enjoy <br /> and live a new <br /> and full life
              </h1>
              <p>
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div className="d-flex">
                <div className="pt-2">
                  <button className="btn btn-warning py-3 text-white">
                    Find Out More
                  </button>
                </div>
                <span>
                  <img src={play} alt="Play" width="100px" />
                </span>
                <h5 className="pt-4">Play Demo</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6" data-aos="flip-left">
            <img src={girl} alt="Girl" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDestination;
