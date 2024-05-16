import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
          return (
            JSON.stringify({ ...item, amount: 1 }) ===
            JSON.stringify({ ...action.payload, amount: 1 })
          );
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

      state.items.map((item) => {
        if (JSON.stringify(item) === JSON.stringify(action.payload)) {
          state.items.splice(state.items.indexOf(item), 1);
          return;
        }
      });
    },
    modifyItemQuantity: (
      state,
      action: PayloadAction<{ cartItem: VeCartItem; newAmount: number }>
    ) => {
      dispatchEvent(onCartChange);

      if (action.payload.newAmount < 1) {
        state.items.map((item) => {
          if (
            JSON.stringify(item) === JSON.stringify(action.payload.cartItem)
          ) {
            state.items.splice(state.items.indexOf(item), 1);

            return;
          }
        });
      } else {
        state.items.map((item) => {
          if (
            JSON.stringify(item) === JSON.stringify(action.payload.cartItem)
          ) {
            item.amount = action.payload.newAmount;
            return;
          }
        });
      }
    },
    clearCart: (state) => {
      dispatchEvent(onCartChange);
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  modifyItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice;
