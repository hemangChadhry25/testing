import React from "react";
import { Plus2 } from "../icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  openTriggerSidebar,
  addFirstTrigger,
} from "@/redux/workflow/workflowSlice";
import { useDrop } from "react-dnd";
import SingleTrigger from "./SingleTrigger";
import itemTypes from "../../utils/itemTypes";

import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

const DragHere = ({ item, index, last }) => {
  const dispatch = useAppDispatch();
  const updateXarrow = useXarrow();
  const { triggers, actions } = useAppSelector((state) => state.workflow);
  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: itemTypes.TRIGGER,
    drop: (item, monitor) => {
      if (item.type === "trigger") {
        dispatch(addFirstTrigger(item));
        setTimeout(() => {
          updateXarrow();
        }, 2000);
      }
    },
    collect: (monitor) => ({
      isOver2: monitor.isOver(),
      canDrop2: monitor.canDrop(),
    }),
    hover: (item, monitor) => {},
  }));
  return (
    <div
      className={`absolute z-10 flex min-w-[250px] flex-col p-8 `}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`${
          triggers.length === 0 &&
          actions.length > 0 &&
          "fixed left-[102px]  top-[82px]"
        }`}
      >
        {isOver2 ? (
          <div className=" flex flex-col items-center justify-center">
            <div
              ref={drop1}
              className={`${
                isOver2
                  ? "bg-blue-30 bg-slate-50 flex h-[95px] w-[300px] flex-col items-center justify-center rounded-[8px] border border-dashed border-blue-400 p-[24px]"
                  : "mx-[20px] flex h-[93px] min-w-[275px] flex-row items-center justify-center border-dashed border-blue-400 bg-none"
              }`}
            >
              {!item && (
                <div onClick={() => dispatch(openTriggerSidebar())}>
                  <p className="text-center text-base text-blue-700">
                    Drop Your Trigger Here
                  </p>
                  {last === true ? (
                    <p className="text-center text-sm text-blue-700">
                      click here to add a trigger
                    </p>
                  ) : (
                    <p className="text-center text-sm text-blue-700">
                      Click on the plus icon below to add your first workflow
                      step
                    </p>
                  )}
                </div>
              )}
              {item && <SingleTrigger item={item} type={itemTypes.TRIGGER} />}
            </div>
          </div>
        ) : (
          <div
            ref={drop1}
            className={`flex h-[95px] w-[300px] flex-col items-center justify-center rounded-[8px] border border-dashed border-gray-300 bg-gray-50 p-[24px]`}
            onClick={() => dispatch(openTriggerSidebar())}
          >
            <p className="text-base text-gray-900">Drop Your Trigger Here</p>
            <p className="text-center text-sm text-gray-500">
              Click on the plus icon below to add your first workflow step
            </p>
          </div>
        )}
      </div>
      {actions.length === 0 && (
        <div className="align-center mt-8 flex flex-col  items-center">
          <Plus2
            className=" h-[41px] w-[41px] cursor-pointer items-center justify-center   rounded-full border border-[#D0D5DD] bg-[#F2F4F7]  p-2 text-[#667085]   transition ease-in-out"
            onClick={(e) => {
              dispatch(openTriggerSidebar());
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DragHere;
