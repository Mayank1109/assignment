import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./optionsSlice";

const store = configureStore({
  reducer: {
    option: optionReducer,
  },
});

export default store;
