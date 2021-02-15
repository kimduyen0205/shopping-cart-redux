export const actlistproduct = () => {
  return {
    type: "LIST_PRODUCTS",
  };
};
export const actaddToCart = (product, quantity) => {
  return {
    type: "ADD_TO_CART",
    product,
    quantity,
  };
};
export const actdeleteCart = (product) => {
  return {
    type: "DELETE_TO_CART",
    product,
  };
};
export const actupdateproductcart = (product, quantity) => {
  return {
    type: "UPDATE_TO_CART",
    product,
    quantity,
  };
};
