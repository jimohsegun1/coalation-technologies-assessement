import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink =
    "flex items-center gap-2 text-[14px] hover:bg-[#01F0D0] px-3 py-2 rounded-full bg-[#01F0D0]";
  const notActiveLink =
    "flex items-center gap-2 text-[14px] hover:bg-[#01F0D0] px-3 py-2 rounded-full";

  return (
    <nav className="bg-white rounded-full w-full py-2 px-4 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src="/TestLogo.svg" alt="Test logo" className="w-[211px] h-[48px]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mt-3 xl:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <ul className="xl:flex items-center lg:gap-4 gap-2 hidden">
        {[
          { to: "/overview", label: "Overview", icon: "/assets/icons/home.svg" },
          { to: "/", label: "Patients", icon: "/assets/icons/group.svg" },
          { to: "/schedule", label: "Schedule", icon: "/assets/icons/calendar.svg" },
          { to: "/message", label: "Message", icon: "/assets/icons/chat_bubbles.svg" },
          { to: "/transaction", label: "Transactions", icon: "/assets/icons/credit_card.svg" },
        ].map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? activeLink : notActiveLink)}
            >
              <img src={item.icon} alt={item.label} />
              <h5>{item.label}</h5>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 max-md:gap-2">
        <div className="flex gap-1 items-center">
          <img
            src="/assets/images/senior-woman.png"
            alt="User"
            className="w-[44px] h-[44px]"
          />
          <div className="border-r-[1px] border-[#EDEDED] pr-2">
            <h3 className="font-bold text-[14px]">Dr. Jose Simmons</h3>
            <h6 className="text-[14px] text-[#707070]">General Practitioner</h6>
          </div>
        </div>
        <div className="flex items-center pl-2 gap-2">
          <img
            src="/assets/icons/settings.svg"
            alt="settings"
            className="w-[20px] h-[18px] cursor-pointer"
          />
          <img
            src="/assets/icons/more_vert.png"
            alt="more options"
            className="w-[3.7px] h-[18px] cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
