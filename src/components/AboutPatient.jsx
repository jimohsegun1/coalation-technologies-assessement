import React from "react";
import { useSelector } from "react-redux";

const AboutPatient = () => {
  const selectedPatient = useSelector((state) => state.patients.selectedPatient);

  return (
    <div className="w-1/4 h-full max-h-full flex flex-col text-[#072635] gap-6">
      <div className="bg-white rounded-xl py-6 px-3 w-full flex flex-col gap-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <img
            src={selectedPatient?.profile_picture}
            alt="Patient"
            className="w-[200px] h-[200px] object-cover rounded-full"
          />
          <h6 className="text-[24px] font-extrabold">{selectedPatient?.name}</h6>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/assets/icons/BirthIcon.png"
              alt="Birth Icon"
              className="w-[42px] h-[42px] object-contain"
            />
            <div>
              <h6 className="text-[14px] font-medium">Date Of Birth</h6>
              <p className="text-[14px] font-semibold">
                {selectedPatient?.date_of_birth}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/icons/FemaleIcon@2x.png"
              alt="Gender Icon"
              className="w-[42px] h-[42px] object-contain"
            />
            <div>
              <h6 className="text-[14px] font-medium">Gender</h6>
              <p className="text-[14px] font-semibold">
                {selectedPatient?.gender}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/icons/Phone.png"
              alt="Phone Icon"
              className="w-[42px] h-[42px] object-contain"
            />
            <div>
              <h6 className="text-[14px] font-medium">Contact Info.</h6>
              <p className="text-[14px] font-semibold">
                {selectedPatient?.phone_number}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/icons/Phone.png"
              alt="Emergency Contact Icon"
              className="w-[42px] h-[42px] object-contain"
            />
            <div>
              <h6 className="text-[14px] font-medium">Emergency Contact</h6>
              <p className="text-[14px] font-semibold">
                {selectedPatient?.emergency_contact}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/icons/InsuranceIcon.png"
              alt="Insurance Icon"
              className="w-[42px] h-[42px] object-contain"
            />
            <div>
              <h6 className="text-[14px] font-medium">Insurance Provider</h6>
              <p className="text-[14px] font-semibold">
                {selectedPatient?.insurance_type}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button className="bg-[#01F0D0] w-[220px] h-[41px] rounded-full whitespace-nowrap text-[14px] font-bold">
            Show All Information
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl py-3 px-3 w-full">
        <h6 className="md:text-[24px] text-[18px] font-semibold pb-6">
          Lab Results
        </h6>
        <div className="flex flex-col overflow-y-auto max-h-[175px]">
          {selectedPatient?.lab_results?.map((result, index) => (
            <div
              className="flex justify-between items-center py-2 px-2 hover:bg-[#F6F7F8] transition-all cursor-pointer"
              key={index}
            >
              <p className="text-[13px]">{result}</p>
              <img
                src="/assets/icons/download.png"
                alt="Download Icon"
                className="w-[20px] h-[20px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPatient;
