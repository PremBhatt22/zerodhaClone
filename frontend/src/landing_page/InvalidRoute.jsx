import React from "react";
import { useNavigate } from "react-router-dom";

const InvalidRoute = () => {
  const nav = useNavigate();
  function click() {
    nav("/");
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5">
      <h1 className="text-center mt-5 mb-5">404 PAGE NOT FOUND {" : - ("}</h1>
      <p>Sorry the page that you are looking for doesn't exist...</p>
      <button className="btn btn-primary" onClick={click}>
        Go to Home
      </button>
    </div>
  );
};

export default InvalidRoute;
