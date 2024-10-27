import React, { useState } from "react";
import QuantityBox from "../QuantityBox/QuantityBox";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const CartItem = ({ item }) => {
  const { dispatch } = useAppContext();

  const handleIncrement = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: item.id, quantity: item.quantity + 1 },
    });
  };
  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: item.quantity - 1 },
      });
    }
  };
  return (
    <tr key={item.id}>
      <td className="product-column">
        <div style={styles.itemRow}>
          <div style={styles.cartImgCon}>
            <img src={item.image} alt={item.name} style={styles.cartImg} />
          </div>
          <div style={styles.cartProductContent}>
            <span style={styles.brand}>{item.brand}</span>
            <div>
              <Link to={`/products/${item.id}`} style={styles.productTitle}>
                {item.name}
                <span className="cart-brand"> X {item.quantity}</span>
              </Link>
            </div>
          </div>
        </div>
      </td>
      <td>
        <QuantityBox
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          count={item.quantity}
        />
      </td>
      <td style={styles.subtotal}>${item.price * item.quantity}</td>
      <td>
        <div style={styles.closeIcon} onClick={() => handleDelete(item.id)}>
          <svg
            style={{ cursor: "pointer" }}
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
      </td>
    </tr>
  );
};

export default CartItem;

const styles = {
  cartImgCon: { height: "80px", marginRight: "10px", width: "120px" },
  cartImg: {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  itemRow: {
    display: "flex",
    textTransform: "uppercase",
    width: "100%",
    marginTop: "20px",
  },
  productTitle: {
    color: "#333",
    marginBottom: "0px",
    paddingBottom: "0px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  subtotal: {
    textAlign: "right",
    fontSize: "14px",
    color: "#999",
  },
  cartProductContent: {
    marginTop: "7px",
  },
  brand: {
    color: "#999",
    fontFamily: "Noto Sans, sans-serif",
  },
  closeIcon: {
    color: "#999",
    textAlign: "right",
    fontSize: "30px",
  },
};
