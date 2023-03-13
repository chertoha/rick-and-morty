import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "auth",
  storage,
};

export const authPersistedReducer = persistReducer(persistConfig, auth.reducer);

export const { login, logout } = auth.actions;
