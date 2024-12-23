import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <div className="orders">
        <div className="no-orders">
          <p>You haven't places any orders today</p>
          <Link to={"/"}>Get Started</Link>
        </div>
      </div>
    </>
  );
};

export default Orders;
