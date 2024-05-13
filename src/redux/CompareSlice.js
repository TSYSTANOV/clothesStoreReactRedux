import { createSlice } from "@reduxjs/toolkit";

const CompareSlice = createSlice({
  name: "compareList",
  initialState: {
    compareList: [],
  },
  reducers: {
    addToCompare: (state, action) => {
      state.compareList.push(action.payload);
    },
  },
});
export const { addToCompare } = CompareSlice.actions;
export default CompareSlice.reducer;
