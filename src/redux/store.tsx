import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "./baseApi";

/**
 * 🧠 Redux Store Configuration
 * - Integrates RTK Query API middleware
 * - Ready for adding slices or more feature reducers
 */
export const store = configureStore({
  reducer: {
    // RTK Query base reducer
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ✅ avoids warnings for non-serializable payloads (cookies, FormData, etc.)
    }).concat(baseApi.middleware),
  devTools: import.meta.env.DEV, // ✅ Enables Redux DevTools in development only
});

// 🔄 Enables refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// 🧩 Typed hooks support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
