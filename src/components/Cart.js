import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { actdeleteCart, actupdateproductcart } from "../action/index";
import formatNumberToVND from "../Utils";
const Cart = ({ cart, removeProductToCart, updateQuantity }) => {
  return (
    <div className="cart">
      <div className="title">
        <h1>Giỏ hàng của bạn</h1>
        <p>Có {cart.length} sản phẩm trong giỏ hàng của bạn</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Xóa</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá tiền</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.product.id}>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => removeProductToCart(item.product)}
                />
              </td>
              <td>{item.product.name}</td>
              <td>
                <button
                  style={{ width: "20px" }}
                  onClick={() =>
                    updateQuantity(item.product, item.quantity - 1)
                  }
                >
                  -
                </button>
                {item.quantity}
                <button
                  style={{ width: "20px" }}
                  onClick={() =>
                    updateQuantity(item.product, item.quantity + 1)
                  }
                >
                  +
                </button>
              </td>
              <td>{formatNumberToVND(item.product.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontWeight: "bold" }}>
          Tổng tiền:&nbsp;
          {formatNumberToVND(
            cart.reduce((total, value) => {
              return total + value.product.price * value.quantity;
            }, 0)
          )}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeProductToCart: (product) => {
      dispatch(actdeleteCart(product));
    },
    updateQuantity: (product, quantity) => {
      dispatch(actupdateproductcart(product, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
