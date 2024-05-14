import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.count++;
          return item;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            item.count--;
            return item;
          }
          return item;
        })
        .filter((item) => item.count !== 0);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});
export const {
  addToCart,
  toggleCart,
  increaseCount,
  decreaseCount,
  deleteItem,
  setCart,
} = CartSlice.actions;
export default CartSlice.reducer;
