import { configureStore } from "@reduxjs/toolkit";
import {
  isFavoriteReducer,
  toggleDarkModeReducer,
  toggleReducer,
} from "./Reducers/ToggeRudecer";

export const store = configureStore({
  reducer: {

    toggle: toggleReducer,
    toggleDarkMode: toggleDarkModeReducer,
    is_favorite: isFavoriteReducer,
  },
});
