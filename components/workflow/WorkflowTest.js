import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
  DropdownMenuSeparator,
} from "../ui";

import {
  ChevronDown,
  PencilLine,
  Copy,
  Trash,
  Clock,
  Link,
  AlertCircle,
  CheckCircle,
  Collapse,
  Expand,
} from "../icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeTestModal, openLogicTest } from "@/redux/workflow/workflowSlice";

import { ExpandCollapse } from "./icons/expand";
import { DownChevron } from "./icons/downchevron";
import SingleTestSuccess from "./SingleTestSuccess";
import { UpChevron } from "./icons/upchevron";
import { Scrollbar } from "react-scrollbars-custom";

const WorkflowTest = () => {
  const dispatch = useAppDispatch();
  const { isTestModalOpen } = useAppSelector((state) => state.workflow);
  const [expandTest, setExpandTest] = useState(false);

  const [collpasebox, setCollpasebox] = useState(false);
  const [collpasebox2, setCollpasebox2] = useState(false);
  const [successSet, setSuccessSet] = useState(false);
  const [successSet1, setSuccessSet1] = useState(false);
  const [failureSet, setFailureSet] = useState(false);
  const [failureSet1, setFailureSet1] = useState(false);

  return (
    <>
      {isTestModalOpen ? (
        <>
          <div
            className={`transition-height workflow transition-all  animate-in slide-out-to-bottom-60 duration-500 ease-out ${
              expandTest ? "h-[145px] w-[260px]" : " h-[370px] w-[582px]"
            }  shadow-button absolute left-10 top-20 flex h-fit  flex-col items-center justify-center  gap-[20px] rounded-lg border border-solid border-gray-300 bg-gray-25   focus:outline-none `}
          >
            <div
              className={`${
                expandTest ? "h-[145px]" : "h-[370px]   "
              }  relative   flex w-full  flex-col `}
            >
              <Scrollbar>
                <div className="gap-[20px]  p-[20px]">
                  <div className="flex flex-col items-start justify-between rounded-t  border-solid border-gray-300 ">
                    <div className="flex w-full items-center justify-between">
                      <h6 className="font-inter leading-2 text-base font-semibold text-[#1D2939]  ">
                        Workflow Test
                      </h6>

                      <div
                        className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center gap-2 rounded-sm p-[10px] hover:bg-[#F2F4F7] "
                        // onClick={() => dispatch(closeTestModal())}
                        onClick={() => setExpandTest(!expandTest)}
                      >
                        {!expandTest ? <ExpandCollapse /> : <Collapse />}
                      </div>
                    </div>
                  </div>
                  {expandTest ? (
                    <div
                      className={`${
                        expandTest ? "mt-3 gap-1" : "gap-20"
                      }  flex    items-center justify-center   self-stretch`}
                    >
                      <div className="flex   items-center justify-center gap-2 rounded-lg p-2 pl-0  ">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-success-100 p-[5px]">
                          <CheckCircle className="text-success-500" />
                        </div>
                        <p className="text-xs font-medium text-[#1D2939] ">
                          2 Passed
                        </p>
                      </div>
                      <div className="   flex items-center justify-between gap-2 rounded-lg p-4  ">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FEE4E2] p-[2px]">
                          <AlertCircle className="text-red-500" />
                        </div>
                        <p className="text-xs font-medium text-[#1D2939] ">
                          2 Failed
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: expandTest ? "none" : "block" }}>
                      <div
                        className={`  flex w-full flex-col items-center justify-center`}
                      >
                        <p className="font-inter text-[14px] font-medium text-[#344054] ">
                          Login Test results
                        </p>

                        <p className="mb-[20px] text-sm text-[#667085]  ">
                          Logic test allow you to review any errors in your
                          automation
                        </p>
                      </div>

                      <div className="flex flex-col justify-center gap-[20px] ">
                        <div className="flex cursor-pointer flex-col   space-y-[5px] self-stretch rounded-lg border border-gray-200 bg-white   ">
                          <div className="flex cursor-pointer items-center  justify-between gap-[12px] self-stretch ">
                            <div
                              class="relative w-full"
                              onClick={() => setCollpasebox(!collpasebox)}
                            >
                              <button
                                class=" border-slate-100   text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center justify-between p-4 pb-3  text-left font-semibold text-dark-500 transition-all ease-in"
                                data-collapse-target="animated-collapse-2"
                              >
                                <div className="flex gap-[12px]">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success-100 p-[7px]">
                                    <CheckCircle className="h-8 w-8 rounded-full  text-success-500" />
                                  </div>

                                  <div className="flex flex-col items-start">
                                    <p className="text-sm font-medium text-[#101828]">
                                      2 Passed Connections
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      Successful connection mean your workflow
                                      is on its way to be published.
                                    </p>
                                  </div>
                                </div>
                                <DownChevron
                                  className={`${
                                    collpasebox ? " rotate-180" : " rotate-0"
                                  }  transition-transform`}
                                />
                              </button>
                            </div>
                          </div>

                          <div
                            className={`${
                              collpasebox && " border-t"
                            }  bg-base-white flex h-0 flex-col   items-start gap-[16px] self-stretch overflow-hidden   border-gray-200  transition-all duration-500 ease-in-out  `}
                            data-collapse="animated-collapse-2"
                            style={{
                              minHeight: collpasebox ? "170px  " : "0",
                              height: collpasebox ? "auto   " : "0",
                            }}
                          >
                            <div className="m-5 mb-0  items-center justify-between gap-12 self-stretch rounded-lg border border-success-300 bg-[#ECFDF3] ">
                              <div
                                class="relative w-full"
                                onClick={() => setSuccessSet(!successSet)}
                              >
                                <button
                                  class=" border-slate-100   text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center justify-between p-4 pb-0  text-left font-semibold text-dark-500 transition-all ease-in"
                                  data-collapse-target="animated-collapse-2"
                                >
                                  <p className="flex items-center gap-2">
                                    <CheckCircle className="text-success-500" />
                                    <span className="font-inter leading-24 text-[14px] font-medium capitalize text-green-600">
                                      Google Calender: Authentication Successful
                                    </span>
                                  </p>

                                  <DownChevron
                                    className={`${
                                      successSet ? " rotate-180" : " rotate-0"
                                    }  transition-transform`}
                                  />
                                </button>
                              </div>

                              <div
                                data-collapse="animated-collapse-2"
                                class="h-0 overflow-hidden pl-10 pt-4 transition-all duration-500 ease-in-out"
                                style={{
                                  height: successSet ? "350px" : "0",
                                }}
                              >
                                <p className="font-inter text-xs font-normal leading-normal text-gray-500">
                                  All required fields for each step have been
                                  filled out! All inputted data has also passed
                                  to the correct API endpoint(s) and is working
                                  as expected.
                                </p>
                                <div className="mt-[16px] pl-10 transition-all duration-500 ease-in-out">
                                  <p className="text-[12px] font-bold text-gray-700">
                                    INPUT DATA
                                  </p>

                                  <ul className="list-disc text-xs">
                                    <li className="text-gray-500">Limit</li>
                                    <li className="text-gray-500">10</li>
                                    <li className="text-gray-500">
                                      Calendar ID
                                    </li>
                                    <li className="text-gray-500">
                                      brain@gmail.com
                                    </li>
                                    <li className="text-gray-500">
                                      Single Events
                                    </li>
                                    <li className="text-gray-500">false</li>
                                  </ul>
                                  <p className="mt-3 text-[12px] font-bold text-gray-700">
                                    OUTPUT DATA
                                  </p>
                                  <ul className="list-disc text-xs">
                                    <li className="text-gray-500">Kind</li>
                                    <li className="text-gray-500">
                                      calendar#event
                                    </li>
                                    <li className="text-gray-500">Event ID</li>
                                    <li className="text-gray-500">
                                      brain@gmail.com
                                    </li>
                                    <li className="text-gray-500">Status</li>
                                    <li className="text-gray-500">Confirmed</li>
                                    <li className="text-gray-500">Summary</li>
                                    <li className="text-gray-500">test</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="m-5 mt-0  items-center justify-between gap-12 self-stretch rounded-lg border border-success-300 bg-[#ECFDF3] ">
                              <div
                                class="relative w-full"
                                onClick={() => setSuccessSet1(!successSet1)}
                              >
                                <button
                                  class=" border-slate-100 text-slate-700   rounded-t-1 group  relative flex w-full cursor-pointer items-center justify-between p-4 pb-0  text-left font-semibold text-dark-500 transition-all ease-in"
                                  data-collapse-target="animated-collapse-2"
                                >
                                  <p className="flex items-center gap-2">
                                    <CheckCircle className="text-success-500" />
                                    <span className="font-inter leading-24 text-[14px] font-medium capitalize text-green-600">
                                      Google Calender: Authentication Successful
                                    </span>
                                  </p>

                                  <DownChevron
                                    className={`${
                                      successSet1 ? " rotate-180" : " rotate-0"
                                    }  transition-transform`}
                                  />
                                </button>
                              </div>

                              <div
                                data-collapse="animated-collapse-2"
                                class="h-0 overflow-hidden pl-10 pt-4 transition-all duration-500 ease-in-out"
                                style={{
                                  height: successSet1 ? "350px" : "0",
                                }}
                              >
                                <p className="font-inter text-xs font-normal leading-normal text-gray-500">
                                  All required fields for each step have been
                                  filled out! All inputted data has also passed
                                  to the correct API endpoint(s) and is working
                                  as expected.
                                </p>
                                <div className="mt-[16px] pl-6 transition-all duration-500 ease-in-out">
                                  <p className="text-[12px] font-bold text-gray-700">
                                    INPUT DATA
                                  </p>

                                  <ul className="list-disc text-xs">
                                    <li className="text-gray-500">Limit</li>
                                    <li className="text-gray-500">10</li>
                                    <li className="text-gray-500">
                                      Calendar ID
                                    </li>
                                    <li className="text-gray-500">
                                      brain@gmail.com
                                    </li>
                                    <li className="text-gray-500">
                                      Single Events
                                    </li>
                                    <li className="text-gray-500">false</li>
                                  </ul>
                                  <p className="mt-3 text-[12px] font-bold text-gray-700">
                                    OUTPUT DATA
                                  </p>
                                  <ul className="list-disc text-xs">
                                    <li className="text-gray-500">Kind</li>
                                    <li className="text-gray-500">
                                      calendar#event
                                    </li>
                                    <li className="text-gray-500">Event ID</li>
                                    <li className="text-gray-500">
                                      brain@gmail.com
                                    </li>
                                    <li className="text-gray-500">Status</li>
                                    <li className="text-gray-500">Confirmed</li>
                                    <li className="text-gray-500">Summary</li>
                                    <li className="text-gray-500">test</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex cursor-pointer flex-col   space-y-[5px] self-stretch rounded-lg border border-gray-200 bg-white  ">
                          <div className="flex cursor-pointer items-center  justify-between gap-[12px] self-stretch ">
                            <div
                              class="relative w-full"
                              onClick={() => setCollpasebox2(!collpasebox2)}
                            >
                              <button
                                class=" border-slate-100   text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center justify-between p-4 pb-3  text-left font-semibold text-dark-500 transition-all ease-in"
                                data-collapse-target="animated-collapse-2"
                              >
                                <div className="flex gap-[12px]">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 p-[7px]">
                                    <AlertCircle className="h-8 w-8 rounded-full  text-red-500" />
                                  </div>

                                  <div className="flex flex-col items-start">
                                    <p className="text-sm font-medium text-[#101828]">
                                      2 Failed Connections
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      These failed connections need to be fixed
                                      to have a successful workflow.
                                    </p>
                                  </div>
                                </div>
                                <DownChevron
                                  className={`${
                                    collpasebox2 ? " rotate-180" : " rotate-0"
                                  }  transition-transform`}
                                />
                              </button>
                            </div>
                          </div>

                          <div
                            className={`${
                              collpasebox && " border-t"
                            }  bg-base-white flex h-0 flex-col   items-start gap-[16px] self-stretch overflow-hidden   border-gray-200  transition-all duration-500 ease-in-out  `}
                            data-collapse="animated-collapse-2"
                            style={{
                              minHeight: collpasebox2 ? "170px " : "0",
                              height: collpasebox2 ? "auto   " : "0",
                            }}
                          >
                            <div className="m-5 mb-0  items-center justify-between gap-12 self-stretch rounded-lg border  border-red-300 bg-[#FEE4E2] ">
                              <div
                                class="relative w-full"
                                onClick={() => setFailureSet(!failureSet)}
                              >
                                <button
                                  class=" border-slate-100   text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center justify-between p-4 pb-0  text-left font-semibold text-dark-500 transition-all ease-in"
                                  data-collapse-target="animated-collapse-2"
                                >
                                  <p className="flex items-center gap-2">
                                    <AlertCircle className="text-red-500" />
                                    <span className="font-inter leading-24 text-[14px] font-medium capitalize text-red-600">
                                      Gmail: Email Not Found In Setup
                                    </span>
                                  </p>

                                  <DownChevron
                                    className={`${
                                      failureSet ? " rotate-180" : " rotate-0"
                                    }  transition-transform`}
                                  />
                                </button>
                              </div>

                              <div
                                data-collapse="animated-collapse-2"
                                class="h-0 overflow-hidden pl-10 pt-4 transition-all duration-500 ease-in-out"
                                style={{
                                  height: failureSet ? "150px" : "0",
                                }}
                              >
                                <p className="font-inter text-[14px] font-semibold text-gray-700">
                                  Gmail: Sended mail via Gmail
                                </p>
                                <p className="font-inter text-xs font-normal leading-normal text-gray-500">
                                  We couldn{"'"}t find an email. Create a new
                                  email in your gmail account and test your
                                  trigger again.
                                </p>
                                <div className="font-inter leading-24 mt-4 text-[14px] font-medium capitalize text-red-600">
                                  Fix Issue
                                </div>
                              </div>
                            </div>

                            <div className="m-5 mt-0  items-center justify-between gap-12 self-stretch rounded-lg border  border-red-300 bg-[#FEE4E2]">
                              <div
                                class="relative w-full"
                                onClick={() => setFailureSet1(!failureSet1)}
                              >
                                <button
                                  class=" border-slate-100   text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center justify-between p-4 pb-0  text-left font-semibold text-dark-500 transition-all ease-in"
                                  data-collapse-target="animated-collapse-2"
                                >
                                  <p className="flex items-center gap-2">
                                    <AlertCircle className="text-red-500" />
                                    <span className="font-inter leading-24 text-[14px] font-medium capitalize text-red-600">
                                      Gmail: Email Not Found In Setup
                                    </span>
                                  </p>

                                  <DownChevron
                                    className={`${
                                      failureSet1 ? " rotate-180" : " rotate-0"
                                    }  transition-transform`}
                                  />
                                </button>
                              </div>

                              <div
                                data-collapse="animated-collapse-2"
                                class="h-0 overflow-hidden pl-10 pt-4 transition-all duration-500 ease-in-out"
                                style={{
                                  height: failureSet1 ? "150px" : "0",
                                }}
                              >
                                <p className="font-inter text-[14px] font-semibold text-gray-700">
                                  Gmail: Sended mail via Gmail
                                </p>
                                <p className="font-inter text-xs font-normal leading-normal text-gray-500">
                                  We couldn{"'"}t find an email. Create a new
                                  email in your gmail account and test your
                                  trigger again.
                                </p>
                                <div className="font-inter leading-24 mt-4 text-[14px] font-medium capitalize text-red-600">
                                  Fix Issue
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-blueGray-200 flex items-center justify-center rounded-b  border-solid px-4 pb-0 pt-6">
                        <Button
                          className="mr-4"
                          onClick={() => {
                            dispatch(closeTestModal());
                            dispatch(openLogicTest());
                          }}
                        >
                          Test Again
                        </Button>
                        <Button
                          variant="outlined"
                          visual="gray"
                          onClick={() => dispatch(closeTestModal())}
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Scrollbar>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default WorkflowTest;
