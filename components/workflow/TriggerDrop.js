import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDrop } from "react-dnd";
import SingleTrigger from "./SingleTrigger";
import itemTypes from "../../utils/itemTypes";
import {
  addTriggerBetween,
  removeNullFromTrigger,
  setTriggerDropActiveTrue,
  setTriggerDropActiveFalse,
  moveTrigger,
} from "@/redux/workflow/workflowSlice";

const TriggerDrop = ({ item, index }) => {
  const { draggingTrigger, itemDragOnCanvas } = useAppSelector(
    (state) => state.workflow
  );

  const dispatch = useAppDispatch();
  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: itemTypes.TRIGGER,
    drop: (item, monitor) => {
      if (item.type === "trigger") {
        dispatch(addTriggerBetween({ item, index }));
      }
    },
    collect: (monitor) => ({
      isOver2: monitor.isOver(),
      canDrop2: monitor.canDrop(),
    }),
    hover: (item, monitor) => {},
  }));

  useEffect(() => {
    if (isOver2 === true) {
      dispatch(removeNullFromTrigger());
      dispatch(setTriggerDropActiveTrue(index));

      dispatch(moveTrigger(index));
    }
    if (isOver2 === false) {
      dispatch(setTriggerDropActiveFalse());
    }
  }, [isOver2]);
  return (
    <div>
      {isOver2 ? (
        <div
          className={`absolute ${
            itemDragOnCanvas === false ? "" : "z-10"
          }   flex h-[72px] w-[298px] `}
          id={`triggerDrop${index}`}
          ref={drop1}
        >
          <div
            // ref={drop1}
            // id={`triggerDrop${index}`}
            className={
              isOver2
                ? " mx-[15px] flex h-[72px] min-w-[275px] flex-row items-center justify-center rounded-lg border-[2px] border-dashed border-[#A4BEFF] bg-[#F4F7FD] "
                : "border-grey-400   flex h-[72px] min-w-[275px] flex-row items-center justify-center rounded-lg border-dashed bg-none "
            }
          >
            {item && <SingleTrigger item={item} type={itemTypes.TRIGGER} />}
          </div>
        </div>
      ) : (
        <div
          ref={drop1}
          className={`absolute ${
            itemDragOnCanvas === false ? "" : "z-10"
          }   flex h-[95px] w-[307px] items-center justify-center `}
          id={`drop${index}`}
        ></div>
      )}
    </div>
  );
};

export default TriggerDrop;

// transition-all animate-in zoom-in-50 duration-300
