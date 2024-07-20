const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM": {
      // Check if the product is already in the cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        // Add new product to the cart
        return [...state, { ...product, qty: 1 }];
      }
    }

    case "DELITEM": {
      // Check if the product is in the cart
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        if (exist.qty === 1) {
          // Remove the product from the cart if quantity is 1
          return state.filter((x) => x.id !== product.id);
        } else {
          // Decrease the quantity
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
      }
      return state;
    }

    default:
      return state;
  }
};

export default handleCart;
