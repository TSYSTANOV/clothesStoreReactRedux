import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk("goods/fetch", async (category) => {
  let goods = null;
  if (category === "All") {
    goods = await fetch(`https://fakestoreapi.com/products`).then((res) =>
      res.json()
    );
  } else {
    goods = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    ).then((res) => res.json());
  }
  return goods;
});

const GoodsOnPageSlice = createSlice({
  name: "goods",
  initialState: {
    goodsList: [],
    loading: "",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.loading = "success";
      state.goodsList = action.payload;
    });
    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});

export default GoodsOnPageSlice.reducer;
