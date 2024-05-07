import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import "underscore";

const onCartChange = new Event("cartChange");

interface cartSlice extends VeCart {}

const initlastate: cartSlice = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initlastate,
  reducers: {
    addItemToCart: (state, action: PayloadAction<VeCartItem>) => {
      dispatchEvent(onCartChange);
      if (
        state.items.find((item) => {
          return JSON.stringify(item) === JSON.stringify(action.payload);
        })
      ) {
        state.items = state.items.map((item) => {
          if (item.productId === action.payload.productId) {
            item.amount += action.payload.amount;
          }
          return item;
        });
        return;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItemFromCart: (state, action: PayloadAction<VeCartItem>) => {
      dispatchEvent(onCartChange);
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    modifyItemQuantity: (state, action: PayloadAction<VeCartItem>) => {
      dispatchEvent(onCartChange);
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (item) {
        item.amount = action.payload.amount;
      }
    },
    clearCart: (state) => {
      dispatchEvent(onCartChange);
      state.items = [];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice;
