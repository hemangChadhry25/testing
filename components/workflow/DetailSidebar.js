import React from "react";
import Svg from "./Svg";
import { ArrowLeft } from "../icons/index";
import IntegrationLogo from "../ui/integrationLogo";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  disselectTrigger,
  closeActionSidebar,
} from "@/redux/workflow/workflowSlice";
import DetailsTabs from "./detailsTabs";

const DetailSidebar = () => {
  const dispatch = useAppDispatch();
  const { selectedTrigger, isDetailModalOpen } = useAppSelector(
    (state) => state.workflow
  );

  return (
    <>
      <div
        className={`${
          isDetailModalOpen
            ? " right-[365px] slide-in-from-right-8"
            : "-right-[400px] slide-in-from-left-8"
        }  fixed top-36   z-[9] flex cursor-pointer items-center  justify-center gap-2 rounded-full border border-gray-300 bg-white p-2  shadow  transition-all  animate-in    duration-500 `}
        onClick={() => dispatch(closeActionSidebar())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className="h-6 w-6"
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
      <div
        className={` ${
          isDetailModalOpen
            ? "right-0 slide-in-from-right-8"
            : "-right-[370px] slide-in-from-left-8"
        }  tops fixed right-0 w-[386px] items-start  self-stretch  border-l-2 bg-white   pb-10 pt-[20px] shadow-sm  transition-all  animate-in    duration-500 `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-7 flex flex-1 items-center gap-[15px] px-5 ">
          <div className="flex h-[48px] w-[48px] items-center justify-center gap-2 rounded-md border border-[#eaecf0]">
            <IntegrationLogo id={selectedTrigger.integrationId} />
          </div>
          <div>
            <div className=" text-[16px] font-medium capitalize ">
              {selectedTrigger && selectedTrigger.name}
            </div>
            <p className="mb-0 text-xs text-gray-500">short description</p>
          </div>
          <div className="absolute right-6 top-8 flex items-center gap-2 hover:border-b-primary-200 hover:underline">
            <ArrowLeft className="  text-primary-500" />

            <div
              className="cursor-pointer text-sm font-semibold text-primary-500"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(disselectTrigger());
              }}
            >
              Back
            </div>
          </div>
        </div>
        <hr />
        <DetailsTabs />
      </div>
    </>
  );
};

export default DetailSidebar;
