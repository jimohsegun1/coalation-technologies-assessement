// src/store/patientsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const patientsSlice = createSlice({
  name: "patients",
  initialState: {
    patientss: [],
    selectedPatient: null,
  },
  reducers: {
    setPatients: (state, action) => {
      state.patientss = action.payload;
    },
    setSelectedPatient: (state, action) => {
      state.selectedPatient = action.payload;
    },
  },
});

export const { setPatients, setSelectedPatient } = patientsSlice.actions;
export default patientsSlice.reducer;
