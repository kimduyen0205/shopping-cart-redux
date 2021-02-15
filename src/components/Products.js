import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import formatNumberToVND from "../Utils";
import { connect } from "react-redux";
import { actaddToCart } from "../action/index";
const Products = ({ products, addToCart }) => {
  return (
    <div>
      <div className="title">
        <h1>Danh sách tất cả sản phẩm</h1>
      </div>
      <p>Có tất cả {products.length} sản phẩm trong cửa hàng</p>
      {products.map((product) => (
        <div className="box" key={product.id}>
          <img src={product.thumbnail} alt={product.name} />
          <div className="title">
            <h4>{product.name}</h4>
          </div>
          <div className="price">
            <p>{formatNumberToVND(product.price)}</p>
          </div>
          <div className="ship">
            <p>{product.ship}</p>
          </div>
          <div className="btn">
            <button onClick={() => addToCart(product)}>
              <FontAwesomeIcon icon={faCartPlus} /> Cho vào giỏ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(actaddToCart(product, 1));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
