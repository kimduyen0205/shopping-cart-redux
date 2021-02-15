const initialState = [
  {
    id: 1,
    name: "MÓC KHOÁ INTERNOT",
    price: 79000,
    thumbnail:
      "https://www.bugs.vn/static/store/products/moc-khoa-internot-thumb.jpg",
    ship: "Miễn phí giao hàng",
  },
  {
    id: 2,
    name: "MÓC KHOÁ VISUAL STUDIO",
    price: 79000,
    thumbnail:
      "https://www.bugs.vn/static/store/products/moc-khoa-vs-thumb.jpg",
    ship: "Miễn phí giao hàng",
  },
  {
    id: 3,
    name: "MÓC KHOÁ PHOTOSHOP",
    price: 79000,
    thumbnail:
      "https://www.bugs.vn/static/store/products/moc-khoa-pts-thumb.jpg",
    ship: "Miễn phí giao hàng",
  },
  {
    id: 4,
    name: "MÓC KHÓA ILLUSTRATOR",
    price: 79000,
    thumbnail:
      "https://www.bugs.vn/static/store/products/moc-khoa-ai-thumb.jpg",
    ship: "Miễn phí giao hàng",
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_PRODUCTS":
      return [...state];
    default:
      return state;
  }
};

export default products;
