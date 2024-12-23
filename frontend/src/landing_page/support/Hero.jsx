import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#387de1" }}>
      <div className="container">
        <div className="row text-light p-3">
          <div className="col-7 px-5">
            <h6 className="text-light mb-5">Support Portal</h6>
            <p className="fs-4">
              Search for an answer or browse help topics to create a ticket
            </p>
            <div
              className="p-3 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "white" }}
            >
              <input
                style={{ border: "none", width: "90%", outline: "none" }}
                type="text"
                placeholder="Eg. How do I deactivate my account ..."
              />
              <i
                className=" text-muted fa-solid fa-magnifying-glass"
                style={{ color: "#000000", fontSize: "1.5rem" }}
              ></i>
            </div>
            <br></br>
            <div className="fs-6 d-flex flex-wrap justify-content-between">
              <a style={{ color: "white" }} href="">
                Track account opening{" "}
              </a>
              <a style={{ color: "white" }} href="">
                Track segment activation
              </a>
              <a style={{ color: "white" }} href="">
                Intraday margins
              </a>
              <a style={{ color: "white" }} href="">
                Kite user manual
              </a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <div className="col-5 px-5">
            <h6 className="text-light mb-5">
              <a className="text-light " href="">
                Track tickets
              </a>
            </h6>
            <p className="fs-4">Featured</p>
            <ol>
              <li>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "2rem",
                  }}
                >
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "white",
                    lineHeight: "2rem",
                  }}
                >
                  Offer for sale (OFS) - December 2024
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
