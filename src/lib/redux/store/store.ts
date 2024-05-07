import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import navSlice from "./navSlice";
import popUpSlice from "./popUpSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    nav: navSlice.reducer,
    popUp: popUpSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
