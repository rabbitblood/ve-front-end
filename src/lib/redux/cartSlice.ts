import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, CartItem } from "@/lib/Cart";

const initlastate: Cart = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initlastate,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      if (
        state.items.find((item) => item.productId === action.payload.productId)
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
    removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    modifyItemQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (item) {
        item.amount = action.payload.amount;
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice;
