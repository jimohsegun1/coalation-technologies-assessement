// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "./patientsSlice";

const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

export default store;
