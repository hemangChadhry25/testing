import React, { useState } from "react";
import { Input } from "../ui";
import { Close } from "./icons/close";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import axios from "axios";
import {
  closeVersionNameModal,
  closeVarsionHistory,
} from "@/redux/workflow/workflowSlice";

const VersionNamePopup = () => {
  const dispatch = useAppDispatch();
  const { editingVersion } = useAppSelector((state) => state.workflow);
  const [name, setName] = useState("");

  const handleSave = async () => {
    const response = await axios.post(
      "https://rvdqqwmx57.execute-api.us-east-1.amazonaws.com/createWorkflow/workflow",
      { ...editingVersion, name: name }
    );

    dispatch(closeVersionNameModal());
    dispatch(closeVarsionHistory());
  };
  return (
    <div
      className="relative z-50 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#344054B2]  bg-opacity-25 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
          <div className="relative  flex w-[396px] transform flex-col  gap-4 overflow-hidden rounded-lg bg-white p-[24px] text-left shadow-xl transition-all ">
            <div className=" flex items-center justify-start gap-3 self-stretch bg-white ">
              <h3
                className="text-base font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Name This Version
              </h3>
            </div>

            <div
              className={`absolute right-3 top-4 flex h-[36px] w-[36px] cursor-pointer items-center justify-center gap-2 rounded-sm p-[10px] hover:bg-[#F2F4F7]   
               `}
            >
              <Close />
            </div>

            <div className=" flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-700">Version Name</p>
              <Input
                placeholder="Enter the name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-3  self-stretch ">
              <button
                type="button"
                className="bg- [#fff] flex w-full items-center  justify-center rounded border border-gray-300 px-[14px] py-[8px] shadow"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(closeVersionNameModal());
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded border-gray-200 bg-[#306CFE] px-[14px] py-[8px] text-white shadow-xl hover:bg-[#2760f3]"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSave();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionNamePopup;
