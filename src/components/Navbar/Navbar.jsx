import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import CartDropdown from "../CartDropdown/CartDropdown";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { state } = useAppContext();
  const handleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };
  const handleNavigate = () => {};
  const calculateTotalQuantity = (cart) => {
    return cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          {" "}
          <img src="/media/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="sample">sample link</div>
      <div className="cart-container" onClick={handleDropdown}>
        <div className="cart-btn">
          MY CART ({calculateTotalQuantity(state.cart)})
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 12 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path>
        </svg>
      </div>{" "}
      {openDropdown ? (
        <CartDropdown
          handleDropdown={handleDropdown}
          handleNavigate={handleNavigate}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
