import { create } from "zustand";

// Helper function to load cart from local storage
const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : {};
  }
  return {};
};

// Helper function to save cart to local storage
const saveCartToLocalStorage = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const useCartStore = create((set) => ({
  cart: loadCartFromLocalStorage(),

  increaseQuantity: (product) =>
    set((state) => {
      const currentQuantity = state.cart[product.id]?.quantity || 0;
      const updatedCart = {
        ...state.cart,
        [product.id]: {
          ...product,
          quantity: currentQuantity + 1,
        },
      };
      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  decreaseQuantity: (product) =>
    set((state) => {
      const currentQuantity = state.cart[product.id]?.quantity || 0;
      let updatedCart;

      if (currentQuantity <= 1) {
        const { [product.id]: removedItem, ...remainingCart } = state.cart;
        updatedCart = remainingCart;
      } else {
        updatedCart = {
          ...state.cart,
          [product.id]: {
            ...product,
            quantity: currentQuantity - 1,
          },
        };
      }

      saveCartToLocalStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeItem: (productId) =>
    set((state) => {
      const { [productId]: removedItem, ...remainingCart } = state.cart;
      saveCartToLocalStorage(remainingCart);
      return { cart: remainingCart };
    }),
}));

export default useCartStore;
