import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./carteSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
