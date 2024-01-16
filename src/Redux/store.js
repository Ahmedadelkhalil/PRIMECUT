import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/cartSlice";
import CustomerInfo from "./slices/customerInfo";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    customerInfo: CustomerInfo,
  },
});

export default store;
