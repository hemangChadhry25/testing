import React from "react";
import VersionDropDown from "./versionDropDown";
import VersionList from "./versionList";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeActionSidebar } from "../../redux/workflow/workflowSlice";
import { Scrollbar } from "react-scrollbars-custom";
const VersionSidebar = () => {
  const dispatch = useAppDispatch();
  const { selectedTrigger } = useAppSelector((state) => state.workflow);

  return (
    <div
      className={` duration-50 tops fixed right-0 h-[993px] w-[386px]  items-start self-stretch   border-l-2 bg-white  shadow-lg  transition-all animate-in   slide-in-from-right-8  `}
      style={{ transition: "0.3s ease-in-out all" }}
    >
      <div className="fixed right-[370px] top-40 z-10 flex cursor-pointer  items-center justify-center gap-2 rounded-full border border-gray-300 bg-white p-2 shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className="h-6 w-6"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(closeActionSidebar());
          }}
        >
          <path
            d="M6 3.8335L10.6666 8.50013L6 13.1668"
            stroke="#667085"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <VersionDropDown />
      <div className="h-[63vh]">
        <Scrollbar>
          <div className="">
            <VersionList />
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default VersionSidebar;
