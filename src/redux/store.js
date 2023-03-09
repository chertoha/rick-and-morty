import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./characters/charactersApi";

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(charactersApi.middleware),

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    charactersApi.middleware,
  ],
});
