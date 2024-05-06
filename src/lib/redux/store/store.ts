import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import navSlice from "./navSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    nav: navSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
