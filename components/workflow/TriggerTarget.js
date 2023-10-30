import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../../utils/itemTypes";
import SingleTrigger from "./SingleTrigger";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addTrigger } from "@/redux/workflow/workflowSlice";
import { useSpring, animated } from "react-spring";

const Target = ({ object, index, canvas }) => {
  const dispatch = useAppDispatch();
  const { triggers } = useAppSelector((state) => state.workflow);

  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: itemTypes.TRIGGER,
    drop: (item, monitor) => {
      dispatch(addTrigger(item, index));
    },
    collect: (monitor) => ({
      isOver2: monitor.isOver(),
      canDrop2: monitor.canDrop(),
    }),
    hover: (item, monitor) => {},
  }));
  const springProps = useSpring({
    opacity: isOver2 ? 0 : 1,
    transform: `translateX(${isOver2 ? 0 : -20}px)`,
  });

  return (
    <div
      id={`trigger${index + 1}`}
      // className={`${
      //   isOver2
      //     ? " h-[72px] animate-in slide-in-from-left-8"
      //     : "duration-50 h-[72px] animate-in slide-in-from-left-8"
      // }`}
      className={`${isOver2 ? " h-[72px] " : " h-[72px] "}`}
    >
      {!object && (
        <div className="flex items-center justify-center">
          <div
            ref={drop1}
            className={
              isOver2
                ? "duration-800 mx-[15px]  flex h-[72px] min-w-[275px] flex-row items-center  justify-center  rounded-[8px] border-2 border-dashed border-blue-500 bg-[#F4F7FD] transition-all"
                : "  mx-[15px] flex h-[72px] min-w-[275px] flex-row items-center justify-center  rounded-[8px] border-2 border-dashed border-gray-400  bg-[#F4F7FD] "
            }
          >
            {object && (
              <animated.div
                style={{
                  ...springProps,
                }}
              >
                <SingleTrigger
                  item={object}
                  index={index}
                  canvas={canvas}
                  type={itemTypes.TRIGGER}
                />
              </animated.div>
            )}
          </div>
        </div>
      )}
      {object && (
        <div className="relative z-[1] h-[70px] animate-in duration-500">
          <div
            ref={drop1}
            // style={{
            //   ...springProps,
            // }}
          >
            <SingleTrigger
              item={object}
              index={index}
              canvas={canvas}
              type={itemTypes.TRIGGER}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Target;
