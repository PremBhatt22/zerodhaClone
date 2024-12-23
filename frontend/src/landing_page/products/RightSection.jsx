import React from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col p-5">
            <h1 className="mt-5">{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a style={{ textDecoration: "none" }} href={learnMore}>
                Learn More
              </a>
            </div>
          </div>
          <div className="col p-3">
            <img src={imageUrl} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
