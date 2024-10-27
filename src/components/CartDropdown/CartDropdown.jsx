import React from "react";
import "./cartDropdown.css";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CartDropdown = ({ handleDropdown, handleNavigate }) => {
  const { state, dispatch } = useAppContext();

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <>
      <div className="cart_container">
        {state.cart.length === 0 ? (
          <p className="nothing-text">
            Nothing in the cart...
            <Link to="/" onClick={handleDropdown}>
              click here to continue shopping
            </Link>
          </p>
        ) : (
          <div className="cart-list-container">
            {state.cart.map((item) => (
              <div className="cart-list-item">
                <div className="product-details">
                  <div className="product-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-content">
                    <h4>
                      <Link to={`/products/${item.id}`}>{item.name}</Link>
                      <span> X {item.quantity}</span>
                    </h4>
                    <span className="product-brand">{item.brand}</span>
                  </div>
                </div>
                <div className="product-price">
                  {" "}
                  $ {item.quantity * item.price}
                </div>
                <div
                  className="product-action"
                  onClick={() => handleDelete(item.id)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="remove-item"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                  </svg>
                </div>
              </div>
            ))}
            <div className="total-price">
              <span>TOTAL</span>
              <span>${calculateTotal(state.cart)}</span>
            </div>
            <div className="ctas">
              <Link to="/cart" onClick={handleDropdown}>
                VIEW CART
              </Link>
              <button onClick={handleDropdown}>CHECKOUT</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
