import rootReducers from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducers,
});

export default store;
