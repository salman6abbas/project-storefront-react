import React from "react";
import { items } from "../../data/items";
import CatalogItem from "../CatalogItem/CatalogItem";
import "./catalog.css";

const Catalog = () => {
  return (
    <div className="items">
      {items?.map((item) => (
        <CatalogItem item={item} />
      ))}
    </div>
  );
};

export default Catalog;
