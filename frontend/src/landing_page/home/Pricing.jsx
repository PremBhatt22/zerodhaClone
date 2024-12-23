import React from "react";

const Pricing = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h1 className="mb-3">Unbeatable Pricing</h1>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#">
              See pricing <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-2"></div>{" "}
          {/* here we have empty div for space, margin and padding also work*/}
          <div className="col-6">
            <div className="row">
              <div className="col d-flex flex-column justify-content-center align-items-center border p-5">
                <h1>₹0</h1>
                <p className="text-muted">Free equity delivery</p>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center border p-5">
                <h1>₹20</h1>
                <p className="text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
