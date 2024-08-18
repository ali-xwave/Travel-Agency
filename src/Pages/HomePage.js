import React from "react";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Destinations from "../Components/Destinations";
import BookTrip from "../Components/BookTrip";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Services />
      <Destinations />
      <BookTrip />
    </div>
  );
};

export default HomePage;
