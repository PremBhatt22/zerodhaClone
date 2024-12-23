import React from "react";

const Team = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-5">People</h2>
          <div className="col-2"></div>
          <div className="col-3 ">
            <div className="rounded-circle p-0" style={{ overflow: "hidden" }}>
              <img
                className="w-100 h-100"
                src="media/images/nithinKamath.jpg"
              />
            </div>
            <h3 className="text-center m-3">Nithin Kamath</h3>
            <p className="text-center m-3">Founder & CEO</p>
          </div>
          <div className="col-7 p-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>Playing basketball is his zen.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <div
              className="rounded-circle"
              style={{ overflow: "hidden", height: "75%", width: "70%" }}
            >
              <img
                className="w-100 h-100"
                src="media/images/nithinKamath.jpg"
              />
            </div>
            <h4 className="m-3 text-center">Dummy Text</h4>
            <p className="text-center">Dummy text</p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bio
              </button>
              <ul class="dropdown-menu">
                <p>
                  Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                  Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                  Bio Bio Bio Bio Bio Bio Bio
                </p>
              </ul>
            </div>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <div
              className="rounded-circle"
              style={{ overflow: "hidden", height: "75%", width: "70%" }}
            >
              <img
                className="w-100 h-100"
                src="media/images/nithinKamath.jpg"
              />
            </div>
            <h4 className="m-3 text-center">Dummy Text</h4>
            <p className="text-center">Dummy text</p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bio
              </button>
              <ul class="dropdown-menu">
                <p>
                  Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                  Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                  Bio Bio Bio Bio Bio Bio Bio
                </p>
              </ul>
            </div>
          </div>
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <div
              className="rounded-circle"
              style={{ overflow: "hidden", height: "75%", width: "70%" }}
            >
              <img
                className="w-100 h-100"
                src="media/images/nithinKamath.jpg"
              />
            </div>
            <h4 className="m-3 text-center">Dummy Text</h4>
            <p className="text-center">Dummy text</p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bio
              </button>
              <ul class="dropdown-menu">
                <p>
                  Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                  Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                  Bio Bio Bio Bio Bio Bio Bio
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
