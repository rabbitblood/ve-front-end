import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import navSlice from "./navSlice";
import popUpSlice from "./popUpSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      nav: navSlice.reducer,
      popUp: popUpSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default makeStore();
