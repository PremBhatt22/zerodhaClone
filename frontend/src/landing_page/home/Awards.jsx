import React from "react";

const Awards = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <img src="media/images/largestBroker.svg" />
          </div>
          <div className="col-6 p-5 mt-4">
            <h1>Largest stock Broker in India</h1>
            <p className="mb-5">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:{" "}
            </p>
            <div className="row">
              <div className="col">
                <ul>
                  <li>Features and options</li>
                  <li>Commodity derivates</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Stocks and IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and government securities</li>
                </ul>
              </div>
              <img className="w-75" src="media/images/pressLogos.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
