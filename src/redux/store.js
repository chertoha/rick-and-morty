import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import { charactersApi } from "./characters/charactersApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(charactersApi.middleware),

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    charactersApi.middleware,
  ],
});
