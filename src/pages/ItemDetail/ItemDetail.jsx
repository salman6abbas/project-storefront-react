import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../data/items";
import "./item-detail.css";
import QuantityBox from "../../components/QuantityBox/QuantityBox";
import { useAppContext } from "../../context/AppContext";

const ItemDetail = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const item = items.find((item) => item.id === Number(id));
  const { dispatch } = useAppContext();

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: count } });
  };

  useEffect(() => {
    document.title = item.name;
  }, []);

  return (
    <div className="item-detail-box">
      <section className="breadcrumbs">
        <span>Home </span>
        <span>Plates</span>
        <span>{item.name}</span>
      </section>
      <section className="item-details">
        <img className="item-image" src={item.image} alt={item.name} />
        <div className="item-content">
          <p className="item-brand">{item.brand}</p>
          <h1>{item.name}</h1>
          <p className="item-price">${item.price}</p>
          <p className="item-description">{item.description}</p>
          <div className="idaddtocart">
            <QuantityBox
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              count={count}
            />
            <button className="add-to-cart" onClick={addToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
