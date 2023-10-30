import React, { useEffect } from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../../utils/itemTypes";
import SingleTrigger from "./SingleTrigger";
import { addAction } from "@/redux/workflow/workflowSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSpring, animated } from "react-spring";

const Target = ({ object, setTemp, temp, index, canvas }) => {
  const dispatch = useAppDispatch();

  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: itemTypes.ACTION,
    drop: (item, monitor) => {
      dispatch(addAction(item, index));
    },
    collect: (monitor) => ({
      isOver2: monitor.isOver(),
      canDrop2: monitor.canDrop(),
    }),
    hover: (item, monitor) => {},
  }));

  useEffect(() => {}, [hover]);
  return (
    <div id={`action${index + 1}     `}>
      {!object && (
        <div
          ref={drop1}
          className={` duration-400 mx-[12px] flex h-[72px] min-w-[284px] flex-row items-center justify-center rounded-[8px] border-2 border-dashed bg-[#F4F7FD] transition-all animate-in   zoom-in-50  
          ${isOver2 && !object ? "  border-blue-500 " : "  border-gray-400  "}
         `}
        >
          {object && (
            <SingleTrigger
              item={object}
              temp={temp}
              setTemp={setTemp}
              canvas={canvas}
              index={index}
              type={itemTypes.ACTION}
              isOver2={isOver2}
            />
          )}
        </div>
      )}
      {object && (
        <div id={`action${index + 1}   `}>
          <SingleTrigger
            item={object}
            temp={temp}
            setTemp={setTemp}
            canvas={canvas}
            index={index}
            type={itemTypes.ACTION}
          />
        </div>
      )}
    </div>
  );
};

export default Target;
