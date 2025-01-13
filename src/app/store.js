import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/formData/dataSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
