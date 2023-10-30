import React from "react";
import { Plus2 } from "../icons";
import { useAppDispatch } from "@/redux/hooks";
import {
  openTriggerSidebar,
  appendNullToTrigger,
  removeNullFromAction,
} from "@/redux/workflow/workflowSlice";
const HoverIcon = ({ setShowHover }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(openTriggerSidebar());
        dispatch(appendNullToTrigger());
        dispatch(removeNullFromAction());
        setShowHover("");
      }}
      className="absolute top-0 z-0 transition-all animate-in   slide-in-from-left-8 duration-200"
    >
      <Plus2 className=" ml-6 mt-[20px] h-[41px] w-[41px] cursor-pointer items-center justify-center gap-2 rounded-full border-[1.5px] border-[#D0D5DD] bg-[#F2F4F7] p-2  text-[#667085] transition   ease-in-out hover:bg-[#fff]" />
    </div>
  );
};
export default HoverIcon;
