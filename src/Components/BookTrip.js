import React from "react";
import choose from "../assets/choose.svg";
import makepay from "../assets/Make.svg";
import Reach from "../assets/Reach.svg";
import girl from "../assets/Tripgirl.svg";
import leaf from "../assets/LEAF.svg";
import map from "../assets/map icon.svg";
import nav from "../assets/send.svg";
import build from "../assets/building.svg";
import heart from "../assets/heart.svg";
const BookTrip = () => {
  let Data = [
    {
      img: choose,
      heading: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: makepay,
      heading: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Reach,
      heading: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  let Pictures = [
    {
      pic: leaf,
    },
    {
      pic: map,
    },
    {
      pic: nav,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6" data-aos="fade-right">
            <span>Easy and Fast</span>
            <h1>
              Book your next trip <br /> in 3 easy steps
            </h1>
            {Data.map((id, index) => {
              return (
                <>
                  <div key={index} className="d-flex">
                    <img src={id.img} alt="img" />
                    <span className="pt-lg-2 ps-lg-3 pt-md-2 ps-md-3 ps-4 pt-3">
                      {id.heading} <br /> {id.desc}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <div
            className="col-12 col-md-6 col-lg-6 ps-lg-5 ps-md-5"
            data-aos="fade-up-left"
          >
            <div className="ps-lg-5 ps-md-5 pt-lg-5 pt-md-5 pt-5 ps-3">
              <img src={girl} alt="pic" />
              <p>Trip To Greece</p>
              <div>
                <span>14-29 JuneF</span>
                <span className="px-lg-3 px-md-3 px-3">by Robbin joseph</span>
              </div>
              <div className="d-flex pt-lg-2 pt-md-2 pt-2">
                {Pictures.map((i, data) => {
                  return (
                    <>
                      <div key={data} className="">
                        <span>
                          <img src={i.pic} alt="icons" className="img-fluid" />
                        </span>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="py-lg-1 py-md-1 d-flex">
                <img src={build} alt="icon" />
                <p className="px-lg-3 px-md-3 px-3 pt-3">24 people going</p>
                <div className="ps-5 ps-lg-5 ps-md-5">
                  <div className="ps-lg-5 ps-md-5 pt-lg-3 pt-3 ps-5">
                    <img
                      src={heart}
                      alt="heart"
                      className="img-fluid ps-lg-5 ps-md-5 ps-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookTrip;
