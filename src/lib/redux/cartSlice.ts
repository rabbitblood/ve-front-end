import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Cart } from "@/lib/Cart";

const initlastate: Cart = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initlastate,
  reducers: {
    addItemToCart: (state) => {
      Array(state.items).push;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
