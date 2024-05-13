import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice";
import GoodsSlice from "./GoodsSlice";
import CartSlice from "./CartSlice";
import CompareSlice from "./CompareSlice";
export const store = configureStore({
  reducer: {
    categories: CategorySlice,
    goods: GoodsSlice,
    cart: CartSlice,
    compare: CompareSlice,
  },
});
