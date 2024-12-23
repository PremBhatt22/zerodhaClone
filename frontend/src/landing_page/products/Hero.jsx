import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row p-5 text-center my-5 border-bottom">
          <h1 className="fs-1">Zerodha Products</h1>
          <h3 className="fs-4">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mb-5">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              investment offerings →
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
