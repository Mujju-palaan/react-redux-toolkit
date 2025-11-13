import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value += 1;
    },
    removeItem: (state, action) => {
      state.value>0 ? state.value -=1 : null;
    },
    clearCart: (state) => {
      state.value = 0;
    },
  },
});

// ✅ Correct export
export const { addItem, removeItem, clearCart} = CartSlice.actions;
export default CartSlice.reducer;
