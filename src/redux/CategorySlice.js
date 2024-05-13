import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("category/fetch", async () => {
  const categories = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((res) => res.json());
  return categories;
});

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    activeCategory: "",
    categoryList: [],
    loading: "",
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = "success";
      state.categoryList = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = "failed";
    });
  },
});
export const { setActiveCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
