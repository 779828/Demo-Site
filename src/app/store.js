import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/formData/dataSlice";
import authReducer from "../features/formData/authSlice";

const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem("formData", JSON.stringify(state));
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("formData");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

const preloadedState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
