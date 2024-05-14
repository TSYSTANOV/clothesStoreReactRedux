import { createSlice } from "@reduxjs/toolkit";

const CompareSlice = createSlice({
  name: "compareList",
  initialState: {
    compareList: [],
    isOpen: false,
    compareBy: {
      rate: false,
      price: false,
    },
  },
  reducers: {
    addToCompare: (state, action) => {
      state.compareList.push(action.payload);
    },
    toggleCompare: (state) => {
      state.isOpen = !state.isOpen;
    },
    compareRateList: (state) => {
      Object.keys(state.compareBy).map((item) => {
        if (item === "rate") {
          return (state.compareBy[item] = !state.compareBy[item]);
        } else {
          return (state.compareBy[item] = false);
        }
      });
    },
    comparePriceList: (state) => {
      Object.keys(state.compareBy).map((item) => {
        if (item === "price") {
          return (state.compareBy[item] = !state.compareBy[item]);
        } else {
          return (state.compareBy[item] = false);
        }
      });
    },
    deleteFromCompareList: (state, action) => {
      state.compareList = state.compareList.filter(
        (item) => item.id !== action.payload
      );
    },
    setCompareList: (state, action) => {
      state.compareList = action.payload;
    },
  },
});
export const {
  addToCompare,
  toggleCompare,
  compareRateList,
  comparePriceList,
  deleteFromCompareList,
  setCompareList,
} = CompareSlice.actions;
export default CompareSlice.reducer;
