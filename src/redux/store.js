import { authPersistedReducer } from "./auth/slice";
import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./characters/charactersApi";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    charactersApi.middleware,
  ],
});

export const persistor = persistStore(store);
