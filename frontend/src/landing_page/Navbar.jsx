import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="row border-bottom navbox">
        <div className="col-3">
          <img className="logo" src="media/images/logo.svg" />
        </div>
        <div className="col-3"></div>
        <div className="col-6 links">
          <ul>
            <li>
              <Link style={{ textDecoration: "none" }} to="/signup">
                Signup
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="col hide-lg">
          <div class="dropdown masterBtn">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Options
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link style={{ textDecoration: "none" }} to="/signup">
                  Signup
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
