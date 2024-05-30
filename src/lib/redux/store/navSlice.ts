import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import React from "react";

interface NavItem {
  name: string;
  url: string;
}

interface Nav {
  nav: NavItem[];
  additionalStyles?: React.CSSProperties;
}

const initlastate: Nav = { nav: [] };

const navSlice = createSlice({
  name: "nav",
  initialState: initlastate,
  reducers: {
    setNav: (state, action: PayloadAction<Nav>) => {
      state.nav = action.payload.nav;
      state.additionalStyles = action.payload.additionalStyles;
    },
    resetNav: (state) => {
      state.nav = [];
    },
  },
});

export const { setNav, resetNav } = navSlice.actions;

export default navSlice;
