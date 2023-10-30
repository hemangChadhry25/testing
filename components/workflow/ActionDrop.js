import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDrop } from "react-dnd";
import SingleTrigger from "./SingleTrigger";
import itemTypes from "../../utils/itemTypes";
import {
  addActionInBetween,
  removeNullFromAction,
  // setActionsDropActiveTrue,
  // setActionsDropActiveFalse,
  moveActions,
} from "@/redux/workflow/workflowSlice";

const ActionDrop = ({ item, index }) => {
  const { draggingTrigger, itemDragOnCanvas } = useAppSelector(
    (state) => state.workflow
  );

  const dispatch = useAppDispatch();
  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: itemTypes.ACTION,
    drop: (item, monitor) => {
      if (item.type === "action") {
        dispatch(addActionInBetween(item, index));
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
      dispatch(removeNullFromAction());
      // dispatch(setActionsDropActiveTrue(index));

      dispatch(moveActions(index));
    }
    if (isOver2 === false) {
      // dispatch(setActionsDropActiveFalse());
    }
  }, [isOver2]);
  return (
    <div>
      {isOver2 ? (
        <div
          className={`absolute ${
            itemDragOnCanvas === false ? "" : "z-10"
          }  mt-[8px] flex h-[70px] w-[275px] translate-y-5 flex-col items-center bg-blue-300 transition-all animate-in duration-300`}
          // id={`triggerDrop${index}`}
          ref={drop1}
        >
          <div
            // ref={drop1}
            id={`activeDrop${index}`}
            className={
              isOver2
                ? " mx-[20px] flex h-[58px] min-w-[254px] flex-row items-center justify-center rounded-lg border-[2px] border-dashed border-[#A4BEFF] bg-[#F4F7FD] "
                : "mx-[20px] flex h-[58px] min-w-[254px] flex-row items-center justify-center rounded-lg border-dashed border-blue-400 bg-none "
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
          } flex h-[95px] w-[307px] items-center  justify-center   `}
          id={`drop${index}`}
        ></div>
      )}
    </div>
  );
};

export default ActionDrop;

// transition-all animate-in zoom-in-50 duration-300
