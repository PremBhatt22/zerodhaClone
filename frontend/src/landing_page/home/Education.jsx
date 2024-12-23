import React from "react";

const Education = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <img src="media/images/education.svg" />
          </div>
          <div className="col p-5">
            <h1 className="fs-2 mb-3">Free and open market education</h1>
            <p>
              Varsity, the largest online stock market education book in the
              <br></br>world covering everything from the basics to advanced
              trading.
            </p>
            <a className="mb-3" href="">
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
            <p className="mt-4">
              TradingQ&A, the most active trading and investment community
              <br></br> in India for all your market related queries.
            </p>
            <a className="mb-3" href="">
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
