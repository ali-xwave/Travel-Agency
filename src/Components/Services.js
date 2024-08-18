import React from "react";
import cal from "../assets/Calculator.svg";
import plan from "../assets/airplan.svg";
import mic from "../assets/Mic.svg";
import custom from "../assets/Setting.svg";

const Services = () => {
  let Data = [
    {
      img: cal,
      heading: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      img: plan,
      heading: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      img: mic,
      heading: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      img: custom,
      heading: "Customization",
      desc: "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="text-center pt-5 pt-lg-0 pt-md-0" data-aos="fade-left">
          <p className="pt-5 pt-lg-0 pt-md-0">CATEGORY</p>
          <h1>We Offer Best Services</h1>
        </div>
        <div className="row">
          {Data.map((i, index) => {
            return (
              <div
                key={index}
                className="col-12 col-md-3 py-4 col-lg-3 py-lg-3 py-md-3 text-center text-lg-start text-md-start"
                data-aos="zoom-in"
              >
                <img
                  src={i.img}
                  alt="pic"
                  // Apply specific widths to the plan and mic images separately
                  style={
                    i.img === plan
                      ? { width: "108px" } // Specific width for plan image
                      : i.img === mic
                      ? { width: "61px" } // Specific width for mic image
                      : {}
                  }
                />
                <h3 className="pt-lg-4 pb-lg-2 pt-md-4 pb-md-2 ">
                  {i.heading}
                </h3>
                <p>{i.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
