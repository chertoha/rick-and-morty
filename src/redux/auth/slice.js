import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.profile = action.payload;
    },

    logout: (state) => {
      state.profile = null;
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
