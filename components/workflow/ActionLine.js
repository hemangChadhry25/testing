import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import itemTypes from "../../utils/itemTypes";
import SingleTrigger from "./SingleTrigger";
import {
  addActionInBetween,
  openActionSidebar,
  setActiveActionDrop,
  addNullBetweenAction,
  removeNullFromAction,
  removeNullFromTrigger,
} from "@/redux/workflow/workflowSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Plus2 } from "../icons";
import { useSpring, animated } from "react-spring";

const ActionLine = ({ item, index }) => {
  const dispatch = useAppDispatch();
  const [showIcon, setShowIcon] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [isUpToggled, setUpToggled] = useState(false);

  const { activeActionIndex, actions } = useAppSelector(
    (state) => state.workflow
  );

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
    if (isOver2 && actions[index] !== null && actions[index - 1] !== null) {
      dispatch(setActiveActionDrop(index));
      dispatch(removeNullFromAction());
    }
    if (!isOver2) {
      dispatch(setActiveActionDrop(null));
    }
  }, [isOver2]);

  useEffect(() => {
    if (index > activeActionIndex && activeActionIndex !== null) {
      setToggled(true);
    } else {
      setToggled(false);
    }
    if (
      index < activeActionIndex &&
      activeActionIndex !== null &&
      index !== 0
    ) {
      setUpToggled(true);
    } else {
      setUpToggled(false);
    }
  }, [activeActionIndex]);

  const slideAnimation = useSpring({
    to: {
      transform: isToggled ? "translateY(39px)" : "translateY(0px)",
    },
    config: { tension: 200, friction: 80 },
  });
  const slideUpAnimation = useSpring({
    to: {
      transform: isUpToggled ? "translateY(-39px)" : "translateY(0px)",
    },
    config: { tension: 200, friction: 80 },
  });
  const lineAnimation = useSpring({
    to: { scaleY: activeActionIndex !== null ? "2.5" : "1" },
    config: { tension: 200, friction: 60 },
  });
  return (
    <animated.div
      style={isToggled ? slideAnimation : {}}
      className="bg-slate-400"
    >
      {isOver2 && actions[index - 1] !== null && actions[index] !== null ? (
        <div
          ref={drop1}
          className="flex  w-[340px] flex-col items-center justify-center "
        >
          {index !== 0 && (
            <div className="absolute mt-[-110px] h-[39px] w-[2px] bg-[#D0D5DD]"></div>
          )}
          <div
            className={
              isOver2
                ? "duration-400 mx-[20px] flex h-[72px] min-w-[284px] flex-row items-center  justify-center rounded-lg border-[2px] border-dashed border-[#A4BEFF] bg-[#F4F7FD] transition-all animate-in zoom-in-50 "
                : "duration-400 mx-[20px] flex   h-[72px]  min-w-[284px] flex-row items-center justify-center rounded-lg border-dashed border-blue-400 bg-none transition-all animate-in zoom-in-50 "
            }
          >
            {item && <SingleTrigger item={item} type={itemTypes.ACTION} />}
          </div>
          {
            <div className="absolute mt-[110px] h-[39px] w-[2px] bg-[#D0D5DD]"></div>
          }
        </div>
      ) : (
        <animated.div
          ref={drop1}
          className="relative flex h-[39px] w-[284px] items-center  justify-center "
          onMouseOver={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
          // id={`line${index}`}
          style={isUpToggled ? slideUpAnimation : {}}
        >
          <animated.div
            className={`${
              index !== 0 ? "h-[39px]" : ""
            }  w-[2px] bg-[#D0D5DD] ${
              activeActionIndex === null && index === 0 ? "h-[39px]" : ""
            }`}
            style={index !== 0 ? lineAnimation : {}}
          ></animated.div>
          <div>
            {showIcon &&
              actions[index - 1] !== null &&
              actions[index] !== null && (
                <Plus2
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(openActionSidebar());
                    dispatch(removeNullFromTrigger());
                    dispatch(addNullBetweenAction(index));
                    // dispatch(setActiveActionDrop(index));
                  }}
                  className={
                    "absolute -ml-[11px] mt-[-9px]  flex h-5  w-5  shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full border-2 bg-[#F2F4F7] text-[#667085]   hover:bg-white"
                  }
                />
              )}
          </div>
        </animated.div>
      )}
    </animated.div>
  );
};

export default ActionLine;
