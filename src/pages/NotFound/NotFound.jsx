import React from "react";
import "./not-found.css";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="not-found-container">
      <h1>Oh snap, page not found</h1>
      <h2 className="desc">
        Sorry, the page you are looking for{" "}
        <span className="path">{location.pathname}</span> is not available.
      </h2>
      <Link to="/">Let's go to the home.</Link>
    </div>
  );
};

export default NotFound;
