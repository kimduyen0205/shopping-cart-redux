import React from "react";
import Cart from "../components/Cart";

const CartContainer = () => {
  const removeProductToCart = (product) => {};
  const updateQuantity = (product, quantity) => {};
  return (
    <div>
      <Cart
        removeProductToCart={removeProductToCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default CartContainer;
