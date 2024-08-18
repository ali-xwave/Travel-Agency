import React from "react";
import city1 from "../assets/Destination1.svg";
import city2 from "../assets/Destination2.svg";
import city3 from "../assets/Destination3.svg";
import Nav from "../assets/navigation.svg";
const Destinations = () => {
  let Data = [
    {
      img: city1,
      pic: Nav,
      city: "Rome, Italty",
      price: "$5,42k",
      days: "10 Days Trip",
    },
    {
      img: city2,
      pic: Nav,
      city: "London, UK",
      price: "$4.2k",
      days: "12 Days Trip",
    },
    {
      img: city3,
      pic: Nav,
      city: "Full Europe",
      price: "$15k",
      days: "28  Days Trip",
    },
  ];
  return (
    <div>
      <div className="text-center py-lg-4 py-md-4 py-3" data-aos="fade-right">
        <h5>Top Selling</h5>
        <h3>Top Destinations</h3>
      </div>
      <div className="container">
        <div className="row">
          {Data.map((id, index) => {
            return (
              <>
                <div
                  key={index}
                  className="col-12 col-md-4 col-lg-4 pb-lg-4 pb-md-4 pb-4"
                  data-aos="flip-left"
                >
                  <img
                    src={id.img}
                    alt="city"
                    className="img-fluid py-3 py-lg-0 py-md-0"
                  />
                  <div className="d-flex justify-content-between py-lg-2 px-lg-4 px-md-4 px-4">
                    <p>{id.city}</p>
                    <p>{id.price}</p>
                  </div>
                  <div className="d-flex">
                    <img
                      src={id.pic}
                      alt="Nav"
                      className="px-3 px-md-3 px-lg-3"
                    />
                    <span>{id.days}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
