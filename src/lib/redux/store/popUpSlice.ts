import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PopUpState {
  isOpen: boolean;
  title: string;
  message: string | JSX.Element;
  info: "normal" | "error" | "success" | "warning" | "pending";
}

const initialState = {
  isOpen: false,
  title: "",
  message: "",
  info: "normal",
} as PopUpState;

const popUpSlice = createSlice({
  name: "popUp",
  initialState: initialState,
  reducers: {
    openPopUp: (
      state,
      action: PayloadAction<{
        title: string;
        message: string | JSX.Element;
        info: "normal" | "error" | "success" | "warning" | "pending";
      }>
    ) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.info = action.payload.info;
    },
    closePopUp: (state) => {
      state.isOpen = false;
      state.title = "";
      state.message = "";
      state.info = "normal";
    },
  },
});

export default popUpSlice;

export const { openPopUp, closePopUp } = popUpSlice.actions;
