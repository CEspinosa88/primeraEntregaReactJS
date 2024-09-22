import React from "react";
import cartIcon from "../assets/icons/cartIcon.svg";

const CartWidget = () => {
  return (
    <>
      <img src={cartIcon} alt="cart" style={{ height: 50, width: 50 }} />
      <span style={{color: 'black'}}>5</span>
    </>
  );
};

export default CartWidget;
