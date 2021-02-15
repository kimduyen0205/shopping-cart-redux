let initialState = [];
const cart = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1; 
  switch (action.type) {
    case "ADD_TO_CART":
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
      return [...state];
    case "DELETE_TO_CART":
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case "UPDATE_TO_CART":
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      return [...state];
    default:
      return [...state];
  }
};
//thêm sản phẩm vào trong giỏ hàng
let findProductInCart = (cart, product) => {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === product.id) {
      index = i;
    }
  }
  return index;
};
export default cart;
