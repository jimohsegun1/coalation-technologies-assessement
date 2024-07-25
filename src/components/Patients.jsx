import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedPatient } from "../store/patientsSlice";

const Patients = ({ Patientss }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl py-4 px-3 w-1/4 h-full max-h-full flex flex-col">
      <div className="flex items-center justify-between pb-8">
        <h6 className="md:text-[24px] text-[18px] font-semibold">Patients</h6>
        <img src="/assets/icons/search.svg" alt="search" className="w-[18px] h-[18px]" />
      </div>
      <div className="flex flex-col w-full flex-1 max-h-[870px] overflow-y-auto">
        {Patientss &&
          Patientss.map((patient, index) => (
            <div
              className="flex justify-between items-center py-3 px-2 hover:bg-[#D8FCF7] transition-none"
              key={index}
              onClick={() => dispatch(setSelectedPatient(patient))}
            >
              <div className="flex gap-1 items-center">
                <img
                  src={patient?.profile_picture || "/assets/images/senior-woman.png"}
                  alt={patient?.name}
                  className="w-[44px] h-[44px] object-cover"
                />
                <div>
                  <h3 className="font-bold text-[14px]">{patient?.name}</h3>
                  <h6 className="text-[14px] text-[#707070]">General Practitioner</h6>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src="/assets/icons/more.png" alt="settings" className="h-[3.7px] w-[18px] cursor-pointer" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Patients;
