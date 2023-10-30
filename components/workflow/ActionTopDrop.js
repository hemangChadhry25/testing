import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDrop, useDrag } from "react-dnd";
import SingleTrigger from "./SingleTrigger";
import itemTypes from "../../utils/itemTypes";
import {
  addActionTop,
  removeNullFromAction,
} from "@/redux/workflow/workflowSlice";
import { useSpring } from "react-spring";

const ActionTopDrop = ({ item, index }) => {
  const dispatch = useAppDispatch();
  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: itemTypes.ACTION,
    drop: (item, monitor) => {
      if (item.type === "action") {
        dispatch(addActionTop(item));
      }
    },
    collect: (monitor) => ({
      isOver2: monitor.isOver(),
      canDrop2: monitor.canDrop(),
      border: "4px solid pink",
    }),

    hover: (item, monitor) => {},
  }));

  useEffect(() => {
    if (isOver2) {
      dispatch(removeNullFromAction());
    }
  }, [isOver2]);

  return (
    <div>
      {isOver2 ? (
        <div
          className=" flex flex-col items-center justify-center  "
          ref={drop1}
        >
          {<div className="h-[39px] w-[2px] bg-gray-300"></div>}
          <div
            className={
              isOver2
                ? "duration-400 mx-[20px] flex  h-[72px] min-w-[284px] flex-row items-center justify-center rounded-lg border-[2px] border-dashed border-[#A4BEFF] bg-[#F4F7FD] transition-all animate-in zoom-in-50"
                : "duration-400 mx-[20px] flex h-[72px] min-w-[284px] flex-row items-center justify-center rounded-lg border-dashed border-blue-400 bg-none transition-all animate-in zoom-in-50  "
            }
          >
            {item && <SingleTrigger item={item} type={itemTypes.ACTION} />}
          </div>
          {<div className="h-[39px] w-[2px] bg-none"></div>}
        </div>
      ) : (
        <div
          ref={drop1}
          className=" flex h-[39px] w-[284px] items-center justify-center"
        ></div>
      )}
    </div>
  );
};

export default ActionTopDrop;
