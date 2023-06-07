import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import themeSilce from "./themeSilce";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    theme: themeSilce,
  },
});
