import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Button } from "../../ui";
import { Collapse, Expand } from "../../icons";
import { closeLogicTest, openTestModal } from "@/redux/workflow/workflowSlice";
import { useAppDispatch } from "@/redux/hooks";

import { ExpandCollapse } from "../icons/expand";

const WorkflowTest = () => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [expandTest, setExpandTest] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 20);
      }
      if (count >= 100) {
        dispatch(closeLogicTest());
        dispatch(openTestModal());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="fixed left-10 top-20 flex w-[360px] flex-col items-center justify-center rounded-[12px] border border-gray-300 bg-white p-[20px]">
      <div className="mb-[20px] flex w-full items-center justify-between">
        <div
          className={`text-[16px] font-semibold text-gray-800 transition-opacity  ${
            expandTest
              ? "transition-all animate-in   fade-in-100  duration-300"
              : "transition-all animate-in  fade-in-100  duration-300"
          } `}
        >
          {!expandTest ? "Workflow Test" : "  Running Logic Test..."}
        </div>
        <div
          className={`flex h-[36px] w-[36px] cursor-pointer items-center justify-center gap-2 rounded-sm p-[10px] hover:bg-[#F2F4F7]  ${
            expandTest && "transition-all animate-in fade-in-50  duration-300"
          }`}
          onClick={() =>
            !expandTest ? setExpandTest(true) : setExpandTest(false)
          }
        >
          {!expandTest ? <Collapse /> : <ExpandCollapse />}
        </div>
      </div>

      <div
        className={`${
          !expandTest ? " h-44  " : "  invisible h-0"
        } duration-50   w-full transition-all animate-in`}
      >
        <div
          className={` 
        mb-2    w-full text-left text-[14px] leading-7 text-gray-700  
           
             `}
        >
          Running Logic Test...
        </div>
        <div className="w-full">
          <div className="flex w-full">
            <div className="mr-3 mt-[6px] w-full">
              <ProgressBar
                completed={count}
                bgColor="#306CFE"
                isLabelVisible={false}
                labelColor="#ffffff"
                height="10px"
              />
            </div>
            <p className=" text-xs text-gray-700">{count}%</p>
          </div>
        </div>
        <div
          className={`mt-4 h-8 text-center  text-[14px] leading-5 text-gray-500
              
           `}
        >
          1 minute 30 seconds remaining
        </div>
        <div className="mt-5 flex justify-center">
          <div
            className="mr-3"
            onClick={() => {
              setCount(0);
              dispatch(closeLogicTest());
            }}
          >
            <Button visual="error">Cancel</Button>
          </div>
          <div>
            <Button variant="outlined" visual="gray">
              Pause
            </Button>
          </div>
        </div>
      </div>

      {expandTest && (
        <div className="mb-4 w-full">
          <div className="flex w-full">
            <div className="mr-3 mt-[6px] w-full">
              <ProgressBar
                completed={count}
                bgColor="#306CFE"
                isLabelVisible={false}
                labelColor="#ffffff"
                height="10px"
              />
            </div>
            <p className=" text-xs text-gray-700">{count}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowTest;
