import React from "react";
import Show from "../Show/Show";
import "./Cart.css";

const Cart = (props) => {
  const { carts } = props;
  console.log(props);

  return (
    <div>
      <h2 className="info">Members info</h2>
      {carts.map((member) => (
        <Show member={member} key={member._id}></Show>
      ))}
      <button className="cart-btn1">Choose one for me</button>
      <button className="cart-btn2">Delete now</button>
    </div>
  );
};

export default Cart;
