import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col p-3">
            <img src={imageUrl} />
          </div>
          <div className="col p-5">
            <h1 className="mt-5">{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a
                style={{ textDecoration: "none", marginLeft: "1rem" }}
                href={tryDemo}
              >
                Try Demo
              </a>
              <a
                style={{ textDecoration: "none", marginLeft: "1rem" }}
                href={learnMore}
              >
                Learn More
              </a>
            </div>
            <div>
              <a href={googlePlay}>
                <img
                  style={{ margin: "0.5rem" }}
                  src="media/images/googlePlayBadge.svg"
                />
              </a>
              <a href={appStore}>
                <img
                  style={{ margin: "0.5rem" }}
                  src="media/images/appstoreBadge.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
