import React from "react";
import "./cart-table.css";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const CartTable = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-table-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th className="product-column">Product </th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr className="total-row">
            <td colSpan="3" className="total-label">
              Total:
            </td>
            <td className="total-amount">${calculateTotal()}</td>
          </tr>
        </tfoot>
      </table>
      <div className="cas-row">
        <div className="shop">
          <Link to="/" style={{ color: "black" }}>
            CONTINUE SHOPPING
          </Link>
        </div>
        <div className="checkout">
          <button>CHECKOUT (${calculateTotal()})</button>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
