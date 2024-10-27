import React from "react";
import "./cart.css";
import { useAppContext } from "../../context/AppContext";
import CartTable from "../../components/CartTable/CartTable";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state } = useAppContext();
  console.log(state);
  return (
    <div className="cart-box">
      <h1>Shopping Cart</h1>
      <div className="cart-detail">
        {state.cart.length === 0 ? (
          <p className="empty-cart">
            Nothing in the cart...{" "}
            <Link to="/">click here to continue shopping</Link>
          </p>
        ) : (
          <div>
            <CartTable cartItems={state.cart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
