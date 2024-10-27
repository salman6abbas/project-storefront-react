import React from "react";
import "./catalog-item.css";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CatalogItem = ({ item }) => {
  const { dispatch } = useAppContext();
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
  };
  return (
    <div className="item-container">
      <img src={item.image} className="image" />
      <p className="brand">{item.brand}</p>
      <h2 className="name">{item.name}</h2>
      <p className="price">${item.price}</p>
      <div className="overlay">
        <Link className="link-btn" to={`/products/${item.id}`}>
          VIEW DETAILS
        </Link>
        <button className="btn" onClick={addToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
