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
      console.log(state.isOpen);
    },
  },
});
export const { addToCart, toggleCart } = CartSlice.actions;
export default CartSlice.reducer;
