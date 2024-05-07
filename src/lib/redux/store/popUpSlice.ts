import { createSlice } from "@reduxjs/toolkit";
interface PopUpState {
  isOpen: boolean;
  title: string;
  message: string;
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
  initialState,
  reducers: {
    openPopUp: (state, action) => {
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
