import React from "react";
import {
  closeWorkflowDeleteConfirmation,
  deleteWorkflow,
} from "@/redux/workflow/workflowSlice";
import { useAppDispatch } from "@/redux/hooks";

const DeleteWorkflowConfirmation = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className="relative z-50 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="fixed inset-0 bg-[#344054B2]  bg-opacity-25 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative max-w-[353px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Delete this workflow?
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this workflow? you will
                      still be able to access it in your trash folder for 30
                      days.
                    </p>
                    {/* <p className="text-sm text-gray-500">
                      This action cannot be undone
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className=" mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(closeWorkflowDeleteConfirmation());
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="mr-[10px] inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(closeWorkflowDeleteConfirmation());
                  dispatch(deleteWorkflow());
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteWorkflowConfirmation;
