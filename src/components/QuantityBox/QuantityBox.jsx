import React from "react";
import "./quantity-box.css";

const QuantityBox = ({ handleIncrement, handleDecrement, count }) => {
  return (
    <div className="quantity-box">
      <span className="display">{count}</span>
      <button className="incrementor" onClick={handleIncrement}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 12 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path>
        </svg>
      </button>
      <button className="decrementor" onClick={handleDecrement}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 8 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M0 7v2h8V7H0z"></path>
        </svg>
      </button>
    </div>
  );
};

export default QuantityBox;
