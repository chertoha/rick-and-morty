import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./characters/charactersApi";
import searchReducer from "./search/slice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(charactersApi.middleware),

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    charactersApi.middleware,
  ],
});
