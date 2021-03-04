import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);
  const fetchItem = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <h3>{item.description}</h3>
      <img src={item.image}></img>
      <h4>Price: ${item.price}</h4>
    </div>
  );
}

export default Item;
