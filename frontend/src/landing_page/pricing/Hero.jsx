import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5 p-5 text-center mt-5">
          <h1 style={{ fontSize: "3.5rem", color: "#333334" }}>Charges</h1>
          <p style={{ fontSize: "1.5rem" }} className="text-muted ">
            List of all charges and taxes.
          </p>
        </div>
        <div className="row border-bottom  p-4 text-center">
          <div className="col  p-5">
            <img src="media\images\pricing0.svg" />
            <h3>Free Equity Delivery</h3>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col  p-5">
            <img src="media\images\intradayTrades.svg" />
            <h3>Intraday and F&O trades</h3>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
          <div className="col p-5">
            <img src="media\images\pricing0.svg" />
            <h3>Free direct MF</h3>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
