import React from "react";
import { Link } from "react-router-dom";
import BestDestination from "../Components/BestDestination";
const Navbar = () => {
  return (
    <>
      <div className="bg-image">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <h1 className="navbar-brand fs-3">Jadoo</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-space">
                <li className="nav-item">
                  <Link to="/destinations" className="nav-link li-space">
                    Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hotels" className="nav-link">
                    Hotels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/flights" className="nav-link">
                    Flights
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bookings" className="nav-link">
                    Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
              <div className="d-flex ms-auto">
                <button className="btn btn-signup w-100">Sign Up</button>
              </div>
            </div>
          </div>
        </nav>
        <BestDestination />
      </div>
    </>
  );
};

export default Navbar;
