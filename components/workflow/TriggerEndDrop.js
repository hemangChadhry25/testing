import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDrop } from "react-dnd";
import SingleTrigger from "./SingleTrigger";
import itemTypes from "../../utils/itemTypes";
import {
  addLastTrigger,
  lastTriggerActiveFalse,
  lastTriggerActiveTrue,
} from "@/redux/workflow/workflowSlice";

const TriggerEndDrop = ({ item, index }) => {
  const dispatch = useAppDispatch();
  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: itemTypes.TRIGGER,
    drop: (item, monitor) => {
      if (item.type === "trigger") {
        dispatch(addLastTrigger(item));
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
      dispatch(lastTriggerActiveTrue());
    }
    if (isOver2 === false) {
      dispatch(lastTriggerActiveFalse());
    }
  }, [isOver2]);
  return (
    <div>
      {isOver2 ? (
        <div
          className="flex translate-y-8 flex-col items-center justify-center transition-all animate-in duration-300"
          id="lastTriggerDrop"
        >
          <div
            ref={drop1}
            className={
              isOver2
                ? "mx-[20px] flex h-[93px] min-w-[300px]  flex-row items-center justify-center rounded border-[2px] border-dashed border-[#A4BEFF] bg-[#F4F7FD] transition-all animate-in zoom-in-50 duration-300"
                : "border-grey-400 bg-green mx-[20px] flex h-[93px] min-w-[275px] flex-row items-center justify-center border-dashed bg-none"
            }
          >
            {item && <SingleTrigger item={item} type={itemTypes.TRIGGER} />}
          </div>
        </div>
      ) : (
        <div
          ref={drop1}
          className="flex h-[95px] w-[25px] items-center justify-center "
          id={`drop`}
        ></div>
      )}
    </div>
  );
};

export default TriggerEndDrop;
