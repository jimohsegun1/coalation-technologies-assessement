// src/pages/Home.js
import React from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Patients from "../components/Patients";
import Analytics from "../components/Analytics";
import AboutPatient from "../components/AboutPatient";
import { useGetAllPatientsData } from "../hooks/useGetAllPatientsData";

const Home = () => {
  const { loading } = useGetAllPatientsData();
  const patientss = useSelector((state) => state.patients.patientss);
  const selectedPatient = useSelector((state) => state.patients.selectedPatient);

  return (
    <div className="w-full max-h-full h-full bg-[#F6F7F8] min-h-full p-[18px] flex flex-col gap-6 ">
      <Navbar />
      {loading ? (
        <div className="h-[80vh] w-full flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex gap-6 flex-1 h-full max-h-full">
          <Patients Patientss={patientss} />
          <Analytics selectedPatient={selectedPatient} />
          <AboutPatient selectedPatient={selectedPatient} />
        </div>
      )}
    </div>
  );
};

export default Home;
