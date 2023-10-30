import React, { useEffect, useState } from "react";

import { Input } from "../workflow/icons/input";
import { ArrowRight2 } from "../icons";
import {
  closeActionSidebar,
  //  searchActions
} from "../../redux/workflow/workflowSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import SingleTrigger from "./SingleTrigger";
import { Search } from "../icons";
import itemTypes from "@/utils/itemTypes";
import { InputGroup, InputLeftElement } from "../ui";
import { Scrollbar } from "react-scrollbars-custom";
import { Lupa } from "./icons";
const ActionSidebar = () => {
  const dispatch = useAppDispatch();
  const { actionsData, isActionSidebarOpen } = useAppSelector(
    (state) => state.workflow
  );
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  useEffect(() => {
    // dispatch(searchActions(search));
  }, [search]);
  const inputClasses = isFocused
    ? "border-primary-500 ring-2 ring-primary-50"
    : "border-gray-300";
  return (
    <>
      <div
        className={`${
          isActionSidebarOpen
            ? "right-[365px] slide-in-from-right-8"
            : "-right-[400px] slide-in-from-left-8"
        }   fixed   top-36 z-10 flex cursor-pointer  items-center justify-center gap-2 rounded-full border border-gray-300 bg-white p-2 shadow  transition-all  animate-in    duration-500`}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(closeActionSidebar());
        }}
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
        className={`${
          isActionSidebarOpen
            ? " right-[0px] slide-in-from-right-8"
            : "-right-[370px] slide-in-from-left-8"
        } sidebarsssss tops fixed h-[993px] w-[386px] items-start  self-stretch border-l-2   bg-white shadow-lg  transition-all  animate-in duration-500    `}
        style={{ transition: "0.3s ease-in-out all" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5  pt-[28px]">
          <div className="font-inter font-sm mb-3 flex justify-between font-normal leading-5 text-[#101828] ">
            <span className="font-inter text-base font-medium text-gray-900">
              Choose a Action Type
            </span>
            <button className="text-sm font-semibold text-primary-500 hover:underline">
              View All
            </button>
          </div>
          <InputGroup
            className={`relative mb-3 cursor-pointer rounded-[5px] border border-gray-200 bg-white text-sm  font-normal   text-gray-400 shadow-xs placeholder:text-gray-500 invalid:pr-11 hover:border-[#306CFE]  hover:ring-4 hover:ring-primary-50 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${inputClasses} `}
          >
            <Input
              placeholder="Find actions"
              className="pdl ml-[-2px] flex h-9 w-[310px] gap-2    text-sm font-normal text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: "2rem" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <InputLeftElement className="  px-0 py-0  ">
              <Lupa />
            </InputLeftElement>
            {search !== "" && (
              <p
                className="absolute right-3 top-2 cursor-pointer  text-gray-400 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearch("");
                  // setSelectedSearchTrigger(null);
                  // setTriggerIndex(-1);
                  // setActionIndex(-1);
                }}
              >
                clear
              </p>
            )}
          </InputGroup>
        </div>

        <div className="  h-[78vh]   ">
          <Scrollbar>
            <div className="px-5    ">
              {actionsData.length > 0 &&
                actionsData.map((item, index) => {
                  return (
                    <SingleTrigger
                      item={item}
                      key={index}
                      type={itemTypes.ACTION}
                    />
                  );
                })}
            </div>
          </Scrollbar>
        </div>
      </div>
    </>
  );
};

export default ActionSidebar;
