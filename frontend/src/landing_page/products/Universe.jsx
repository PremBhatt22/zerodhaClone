import React from "react";

const Universe = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row p-5 text-center">
          <h5 className="text-muted mb-5">
            Want to know more about our technology stack? Check out the
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              Zerodha.tech
            </a>{" "}
            blog.
          </h5>
          <h1 className="mt-5 text-muted">The Zerodha Universe</h1>
          <p className="text-muted fs-5 my-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center p-5">
            <img src="media/images/zerodhaFundhouse.png" width="80%" />
            <p className="fs-6 text-muted text-center m-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center p-5">
            <img src="media/images/sensibullLogo.svg" width="80%" />
            <p className="fs-6 text-muted text-center m-2">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center p-5">
            <img src="media/images/smallcaseLogo.png" width="80%" />
            <p className="fs-6 text-muted text-center m-2">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center p-5">
            <img src="media/images/goldenpiLogo.png" width="80%" />
            <p className="fs-6 text-muted text-center m-2">
              Our asset management venture that is creating simple and
              transparent indexfunds to help you save for your goals.
            </p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center p-5">
            <img src="media/images/streakLogo.png" width="80%" />
            <p className="fs-6 text-muted text-center m-2">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center p-5">
            <img src="media/images/dittoLogo.png" width="80%" />
            <p className="fs-6 text-muted text-center m-2">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <div className="row p-5 d-flex align-items-center justify-content-center">
          <button className="btn btn-primary fs-5" style={{ width: "25%" }}>
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
};

export default Universe;
