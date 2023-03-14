import { authPersistedReducer } from "./auth/slice";
import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "./rickAndMortyApi/rickAndMortyApi";
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
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    rickAndMortyApi.middleware,
  ],
});

export const persistor = persistStore(store);
