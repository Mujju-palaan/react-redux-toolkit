import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],
};

export const ProductCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);

      // Save updated cart
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    removeProduct: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload.id
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    clearAllProducts: (state) => {
      state.items = [];

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", "[]");
      }
    },
  },
});

export const { addProduct, removeProduct, clearAllProducts } =
  ProductCartSlice.actions;

export default ProductCartSlice.reducer;
