import React, { useEffect, useState } from "react";
import itemTypes from "@/utils/itemTypes";
import { Input } from "../workflow/icons/input";
import SingleTrigger from "../workflow/SingleTrigger";

import {
  closeTriggerSidebar,
  searchTriggers,
} from "../../redux/workflow/workflowSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Scrollbar } from "react-scrollbars-custom";

import { Lupa } from "../workflow/icons";
import { InputGroup } from "./input-group";
import { InputLeftElement } from "./input-element";
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { triggersData, isTriggerModalOpen } = useAppSelector(
    (state) => state.workflow
  );
  useEffect(() => {
    // dispatch(searchTriggers(search));
  }, [search]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const inputClasses = isFocused
    ? "border-primary-500 ring-2 ring-primary-50"
    : "border-gray-300";
  return (
    <>
      <div
        className={`${
          isTriggerModalOpen
            ? " right-[365px] slide-in-from-right-8"
            : "-right-[400px] slide-in-from-left-8"
        }   fixed  top-36    z-10  flex  cursor-pointer items-center justify-center gap-2  rounded-full border border-gray-300 bg-white p-2 shadow transition-all animate-in duration-500`}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(closeTriggerSidebar());
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
          isTriggerModalOpen
            ? "right-0 slide-in-from-right-8"
            : "-right-[370px] slide-in-from-left-8"
        } sidebar tops fixed h-[993px] w-[386px] items-start  self-stretch border-l-2  bg-white shadow-lg  transition-all  animate-in    duration-500 `}
      >
        <div className="px-5  pt-[20px]">
          <div>
            {/* <div className="font-inter font-sm flex justify-between font-normal leading-5 text-[#101828] ">
            <h2> Choose a Trigger Type</h2>
            <span className="font-inter cursor-pointer text-center text-sm font-normal capitalize leading-5 text-[#306CFE] underline">
              View All
            </span>
          </div> */}
            <div className="mb-3 flex  items-center justify-between self-stretch ">
              <span className="font-inter text-base font-medium text-gray-900">
                Choose a Trigger Type {isTriggerModalOpen}
              </span>
              <button className="text-sm font-semibold text-primary-500 hover:underline">
                View All
              </button>
            </div>
          </div>

          <InputGroup
            className={`relative mb-3 cursor-pointer rounded-[5px] border border-gray-200 bg-white text-sm  font-normal   text-gray-400 shadow-xs placeholder:text-gray-500 invalid:pr-11 hover:border-[#306CFE]  hover:ring-4 hover:ring-primary-50 focus:border-primary-500 focus:ring-2 focus:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${inputClasses} `}
          >
            <Input
              placeholder="Find triggers"
              className="pdl ml-[-2px] ms-1 flex h-9 w-[330px] gap-2 border-gray-200 pl-0  text-sm font-normal text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
        <div className="h-[80vh]">
          <Scrollbar>
            <div className="rounded-lg px-5">
              {triggersData.map((item, index) => {
                return (
                  <SingleTrigger
                    item={item}
                    key={index}
                    type={itemTypes.TRIGGER}
                  />
                );
              })}
              {/* <PopularApp /> */}
            </div>
          </Scrollbar>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
