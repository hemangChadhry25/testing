import React, { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import Svg from "./Svg";
import { useSpring, animated } from "react-spring";
import IntegrationLogo from "../ui/integrationLogo";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Button,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui";
import HoverIcon from "./hoverIcon";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setDraggingAction,
  selectTrigger,
  openDeleteTriggerModal,
  duplicateTrigger,
  setDraggingTrigger,
  runSingleTriggerTest,
  removeNullFromAction,
  removeNullFromTrigger,
} from "@/redux/workflow/workflowSlice";
import { MoreHorizontal, Zap, Copy, PencilLine, Trash, Edit } from "../icons";

const SingleTrigger = ({ item, canvas, index, type, isOver2 }) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setToggled] = useState(false);
  const [isUpToggled, setUpToggled] = useState(false);

  const [showHover, setShowHover] = useState("");
  const [showIcons, setIcons] = useState(false);
  const { lastTrigger, selectedTrigger, triggers, activeActionIndex } =
    useAppSelector((state) => state.workflow);
  const [{ isDragging }, drag, preview] = useDrag({
    type: type,
    item: {
      name: item.name,
      id: item.id,
      logo: item.logo,
      type: item.type,
      integrationId: item.integrationId,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        // alert(`You dropped ${item.title} into ${dropResult.name}!`)
      }
    },
    canDrag: () => {
      if (
        type === "TRIGGER" &&
        triggers.length === 5 &&
        !triggers.includes(null) &&
        !canvas
      ) {
        return false;
      } else {
        return true;
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    previewOptions: (item) => {},
  });
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    setShowHover("");
  };
  const handleIconHover = (id) => {
    setIcons(true);
    if (lastTrigger && lastTrigger.id === id) {
      setShowHover(id);
    }
  };

  useEffect(() => {
    if (isDragging && canvas) {
      if (item.type === "action") {
        dispatch(setDraggingAction(item));
      } else {
        dispatch(setDraggingTrigger(item));
      }
    }
  }, [isDragging]);

  useEffect(() => {
    if (
      index >= activeActionIndex &&
      item.type === "action" &&
      activeActionIndex !== null
    ) {
      setToggled(true);
    } else {
      setToggled(false);
    }
    if (
      index < activeActionIndex &&
      item.type === "action" &&
      activeActionIndex !== null
    ) {
      setUpToggled(true);
    } else {
      setUpToggled(false);
    }
  }, [activeActionIndex]);

  const slideDownAnimation = useSpring({
    to: {
      transform: isToggled ? "translateY(39px)" : "translateY(0px)",
    },
    config: { tension: 150, friction: 15 },
  });

  const slideUpAnimation = useSpring({
    to: {
      transform: isUpToggled ? "translateY(-39px)" : "translateY(0px)",
    },
    config: { tension: 150, friction: 15 },
  });

  return (
    // bg-transparent
    <animated.div
      // ref={drag}
      className={` relative flex rounded-lg bg-none ${!canvas ? "" : ""} ${
        canvas
          ? "   z-[1] w-[307px] items-center  justify-center "
          : "mt-[8px] w-full"
      }`}
      onMouseEnter={() => {
        handleMouseEnter();
        handleIconHover(item.id);
        // setToggled(!isToggled);
      }}
      onMouseLeave={() => handleMouseLeave()}
      style={canvas ? slideDownAnimation : { background: "white" }}
      id={`${item.id}`}
    >
      {item && (
        <animated.div
          ref={drag}
          className={` 
            ${
              canvas
                ? "inline-flex w-[284px] cursor-grab  items-center gap-3 rounded-lg border-[2px]  border-gray-100 bg-white p-3 shadow-sm hover:border-[2px]  hover:border-gray-300 "
                : "inline-flex h-[70px] w-full cursor-grab items-center gap-3 rounded-lg border border-gray-100  bg-white  p-3 shadow-xs hover:rounded-lg hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
            }
          ${
            selectedTrigger && selectedTrigger.id === item.id
              ? " border-[2px]  border-primary-500   hover:border-primary-500"
              : "border-gray-100   "
          }
         rounded-lg
          `}
          onMouseLeave={() => {
            setIcons(false);
          }}
          onClick={(e) => {
            // e.stopPropagation();
            dispatch(selectTrigger(item));
            dispatch(removeNullFromAction());
            dispatch(removeNullFromTrigger());
          }}
          style={canvas ? slideUpAnimation : { background: "white" }}
        >
          <section className="flex h-[44px] min-w-[44px] items-center justify-center rounded-lg border-[2px] border-gray-200">
            {/* {typeof item.logo === "string" ? (
              <Svg svgString={item.logo} />
            ) : (
              item.logo
            )} */}
            <IntegrationLogo id={item.integrationId} />
          </section>
          <section className="flex h-[38px]  w-[204px]  items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              <span className="font-inter text-sm font-medium text-gray-900">
                {item.name}
              </span>
              <span
                className={`font-inter text-xs font-normal text-gray-500 ${
                  canvas ? "w-44 truncate" : "w-56 truncate"
                }`}
              >
                Message is received in Gmail
              </span>
            </div>

            {/* </div> */}
          </section>

          <div className="self-start p-[2px]">
            {canvas && (
              <div className={` `}>
                {
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="flex ">
                      <button className="h-[15px] w-[15px]  text-gray-500 hover:text-gray-black ">
                        {showIcons && <MoreHorizontal />}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-[144px] min-w-[182px] gap-1 px-0 py-1 ">
                      {triggers.length < 5 && (
                        <DropdownMenuItem
                          className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(duplicateTrigger(item, index));
                            dispatch(removeNullFromAction());
                            dispatch(removeNullFromTrigger());
                          }}
                        >
                          <Copy /> Duplicate
                        </DropdownMenuItem>
                      )}
                      {triggers.length === 5 && item.type === "action" && (
                        <DropdownMenuItem
                          className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                          onClick={(e) => {
                            dispatch(duplicateTrigger(item, index));
                            dispatch(removeNullFromAction());
                            dispatch(removeNullFromTrigger());
                            e.stopPropagation();
                          }}
                        >
                          <Copy /> Duplicate
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(runSingleTriggerTest(item));
                        }}
                      >
                        <Zap />
                        Run Test
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                        visual="destructive"
                        onClick={(e) => {
                          dispatch(openDeleteTriggerModal(item));
                          e.stopPropagation();
                        }}
                      >
                        <Trash />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
              </div>
            )}
          </div>
        </animated.div>
      )}

      <div>
        {item.id === showHover && triggers.length < 5 && canvas && (
          <HoverIcon setShowHover={setShowHover} />
        )}
      </div>
    </animated.div>
  );
};

export default SingleTrigger;
// transform transition-transform duration-1000 ease-in-out
