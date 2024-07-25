import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setPatients, setSelectedPatient } from "../store/patientsSlice";

export const useGetAllPatientsData = () => {
  const dispatch = useDispatch();
  const { patientss } = useSelector((state) => state.patients);
  const [loading, setLoading] = useState(false);

  const getPatients = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa("coalition:skills-test")}`,
        },
      });

      dispatch(setPatients(response.data));
      dispatch(setSelectedPatient(response.data[3])); // Set the initial selected patient
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  return {
    patientss,
    loading,
  };
};
