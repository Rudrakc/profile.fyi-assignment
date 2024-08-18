import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: {},

  addToCart: (product) => set((state) => {
    const currentQuantity = state.items[product.id]?.quantity || 0;
    return {
      items: {
        ...state.items,
        [product.id]: {
          ...product,
          quantity: currentQuantity + 1,
        },
      },
    };
  }),

  removeFromCart: (product) => set((state) => {
    const currentQuantity = state.items[product.id]?.quantity || 0;
    if (currentQuantity <= 1) {
      const { [product.id]: removedItem, ...remainingItems } = state.items;
      return { items: remainingItems };
    }
    return {
      items: {
        ...state.items,
        [product.id]: {
          ...product,
          quantity: currentQuantity - 1,
        },
      },
    };
  }),
}));

export default useCartStore;
