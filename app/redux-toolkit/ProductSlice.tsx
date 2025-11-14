import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 🔹 Async thunk for fetching products
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const resp = await fetch("https://dummyjson.com/products");
  if (!resp.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await resp.json();
  return data.products;
});

// 🔹 Initial state
const initialState = {
  items: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null as string | null,
};

// 🔹 Slice definition
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default productsSlice.reducer;
