import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row p-5  text-center">
          <img
            className="mb-5 w-75 m-auto"
            src="media/images/homeHero.png"
            alt="hero image"
          />
          <h1 className="mt-5">Invest in everything</h1>
          <p className=" mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="btn btn-primary w-25 m-auto p-2 fs-5">
            Signup Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
