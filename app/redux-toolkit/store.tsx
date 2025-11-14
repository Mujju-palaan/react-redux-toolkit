import { configureStore } from "@reduxjs/toolkit"
import CartSlice  from "./CartSlice"
import ProductSlice from "./ProductSlice"
import TaskSlice from "./TaskSlice"

const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
    task:TaskSlice
  },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store