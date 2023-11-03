import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Slices
import uiActionsSlice from "./ui-actions/slice";
import authSlice from "./auth/slice";

const rootReducer = combineReducers({
  uiActions: uiActionsSlice,
  auth: authSlice,
});

const persistConfig = {
  key: "nxt-evently-storage",
  storage,
  whitelist: ["ui", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: any[] = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger();
  middleware.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
