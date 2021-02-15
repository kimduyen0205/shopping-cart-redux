import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
const rootReducers = combineReducers({
  products: products,
  cart: cart,
});

export default rootReducers;
