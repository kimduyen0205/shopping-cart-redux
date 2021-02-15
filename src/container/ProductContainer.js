import React from "react";
import Products from "../components/Products";

const ProductContainer = () => {
  const addToCart = (product) =>{}
  return (
    <div className="container">
      <div className="center">
        <div className="row">
          <Products addToCart = {addToCart}/>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
