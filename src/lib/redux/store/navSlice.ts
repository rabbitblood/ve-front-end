import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface NavItem {
  name: string;
  url: string;
}

interface Nav {
  nav: NavItem[];
}

const initlastate: Nav = { nav: [] };

const navSlice = createSlice({
  name: "nav",
  initialState: initlastate,
  reducers: {
    setNav: (state, action: PayloadAction<Nav>) => {
      state.nav = action.payload.nav;
    },
    resetNav: (state) => {
      state.nav = [];
    },
  },
});

export const { setNav, resetNav } = navSlice.actions;

export default navSlice;
