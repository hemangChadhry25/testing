"use client";
import React, { useState, useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  openActionSidebar,
  addNullToAction,
  getTriggerBack,
  getActionBack,
  setItemDragOnCanvas,
  canvasClicked,
  removeNullFromAction,
  removeNullFromTrigger,
  appendNullToAction,
} from "@/redux/workflow/workflowSlice";
import {
  DragHere,
  DetailSidebar,
  VersionSidebar,
  ActionSideBar,
  Target,
  SearchSidebar,
  TriggerTarget,
  TriggerDrop,
  ActionTopDrop,
  CustomDragLayer,
  ActionLine,
} from "./index";
import TriggersLine from "./lines/TriggersLine";
import ActionTriggerLine from "./lines/TriggerActionLine";
import Sidebar from "@/components/ui/sidebar";
import { useXarrow, Xwrapper } from "react-xarrows";
import {
  Alert,
  AlertTitle,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui";
import { CheckCircle, ChevronDown, Search, Minus, Plus2 } from "../icons";
import { Scrollbar } from "react-scrollbars-custom";
import WorkflowTest from "../workflow/test/WorkflowTest";
import WorkflowTest2 from "./WorkflowTest";
import { useDrop } from "react-dnd";

const Canvas = () => {
  const dispatch = useAppDispatch();
  const updateXarrow = useXarrow();

  const {
    isTriggerModalOpen,
    isDetailModalOpen,
    isSearchSidebarOpen,
    isVersionHistoryOpen,
    isActionSidebarOpen,
    triggers,
    actions,
    isAlertOpen,
    alertText,
    isLogicTestOpen,
    activeActionIndex,
    triggerDropActive,
    selectedTrigger,
    focusElement,
    isTestModalOpen,
  } = useAppSelector((state) => state.workflow);

  const [{ canDrop2, isOver2, hover }, drop1] = useDrop(() => ({
    accept: ["TRIGGER", "ACTION"],
    drop: (item, monitor) => {
      // dispatch(removeNullFromAction());
      // dispatch(removeNullFromTrigger());
      if (!monitor.didDrop()) {
        if (item.type === "action") {
          dispatch(getActionBack(item));
        } else if (item.type === "trigger") {
          dispatch(getTriggerBack(item));
        }
      }
    },
    collect: (monitor) => ({
      isOver2: monitor.isOver(),
      canDrop2: monitor.canDrop(),
    }),
    hover: (item, monitor) => {},
  }));

  const [zoom, setZoom] = useState(100);
  const scrollbarsRef = useRef(null);
  const [fit, setFit] = useState(false);

  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [leftScroll, setLeftScroll] = useState(false);
  const [topScroll, setTopScroll] = useState(false);
  const [zoomMargin, setZoomMargin] = useState(null);

  const canvasRef = useRef(null);

  // useEffect(() => {
  //   const innerDiv = document.querySelector(
  //     ".customScroll .ScrollbarsCustom-TrackY:nth-child(2)"
  //   );

  //   if (
  //     isDetailModalOpen === true ||
  //     isTriggerModalOpen === true ||
  //     isVersionHistoryOpen === true ||
  //     isActionSidebarOpen === true
  //   ) {
  //     innerDiv.style.marginRight = "386px";
  //   }
  //   if (
  //     isDetailModalOpen === false &&
  //     isTriggerModalOpen === false &&
  //     isVersionHistoryOpen === false &&
  //     isActionSidebarOpen === false
  //   ) {
  //     innerDiv.style.marginRight = "0px";
  //   }
  // }, [
  //   isDetailModalOpen,
  //   isTriggerModalOpen,
  //   isVersionHistoryOpen,
  //   isActionSidebarOpen,
  // ]);
  useEffect(() => {
    updateXarrow();
    if (zoom < 100) {
      const centerX = window.innerWidth / 2;

      // const element = document.getElementById("triggerCenter");

      setZoomMargin(centerX / zoom + 100);
      // if (element) {
      //   const rect = element.getBoundingClientRect();
      //   const top = rect.top;
      //   const left = rect.left;
      //   scrollbarsRef.current.centerAt(top, left);
      // }
    }
    if (zoom >= 100) {
      setZoomMargin(0);
    }
  }, [zoom]);
  useEffect(() => {
    if (isOver2) {
      dispatch(setItemDragOnCanvas());
    }
  }, [isOver2]);

  useEffect(() => {
    if (triggers[triggers.length - 1] === null) {
      scrollbarsRef.current.scrollToRight();
    }
  }, [triggers]);

  useEffect(() => {
    if (focusElement) {
      if (selectedTrigger && selectedTrigger.type === "trigger") {
        if (
          (triggers[4] && selectedTrigger.id === triggers[4].id) ||
          (triggers[3] && selectedTrigger.id === triggers[3].id)
        ) {
          scrollbarsRef.current?.scrollToRight();
          scrollbarsRef.current?.scrollToTop();
        }
        if (
          (triggers[0] && selectedTrigger.id === triggers[0].id) ||
          (triggers[1] && selectedTrigger.id === triggers[1].id)
        ) {
          scrollbarsRef.current?.scrollToLeft();
          scrollbarsRef.current?.scrollToTop();
        }
      } else {
        if (selectedTrigger) {
          const elementToScrollTo = document.getElementById(
            `${selectedTrigger.id}`
          );

          const scrollLeft = elementToScrollTo.offsetLeft;

          const scrollTop = elementToScrollTo.offsetTop;

          scrollbarsRef.current.scrollTo(scrollLeft - 300, scrollTop - 200);
          // scrollbarsRef.current.centerAt(scrollLeft, scrollTop);
        }
      }
    }
  }, [selectedTrigger]);

  const checkNullAndAppend = () => {
    if (actions.includes(null)) {
      dispatch(appendNullToAction());
    } else {
      return;
    }
  };

  const handleScroll = () => {
    const scrollLeft = scrollbarsRef.current.scrollLeft;
    const scrollTop = scrollbarsRef.current.scrollTop;

    if (scrollLeft !== prevScrollLeft) {
      setLeftScroll(true);
    } else if (scrollTop !== prevScrollTop) {
      setTopScroll(true);
    }

    setPrevScrollLeft(scrollLeft);
    setPrevScrollTop(scrollTop);
  };

  return (
    <div
      className="h-[93vh] text-center"
      style={{
        backgroundImage: 'url("/Grid.png")',
      }}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(canvasClicked());
        dispatch(removeNullFromAction());
        dispatch(removeNullFromTrigger());
      }}
      ref={drop1}
    >
      <Scrollbar
        style={{ width: "100%", height: "100%" }}
        horizontal="true"
        className={`customScroll ${!leftScroll ? "left-scroll" : ""} ${
          !topScroll ? "right-scroll" : ""
        }`}
        onScroll={handleScroll}
        onScrollStop={() => {
          setTopScroll(false);
          setLeftScroll(false);
        }}
        ref={scrollbarsRef}
        scrollDetectionThreshold={1000}
      >
        <ActionTriggerLine onClick={(e) => e.stopPropagation()} />
        <TriggersLine />
        <div
          className={`${
            (isTriggerModalOpen ||
              isDetailModalOpen ||
              isVersionHistoryOpen ||
              isActionSidebarOpen) &&
            "mr-96"
          } ${
            isSearchSidebarOpen && "ml-96"
          }  canvass handle inline-flex flex-col items-center justify-center p-[100px] text-left  
          ${
            // fitToScreen ? "  " : ""
            ""
          } 
          
          `}
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "50% 0",
          }}
          // onClick={(e) => e.stopPropagation()}
          ref={canvasRef}
        >
          <Xwrapper>
            {triggers.length < 1 && <DragHere />}

            {triggers.length > 0 && (
              <div
                className="relative flex flex-col items-center justify-center "
                onClick={(e) => e.stopPropagation()}
              >
                <p
                  className="font-inter mb-2 text-sm font-medium uppercase leading-3  text-gray-500"
                  id="triggerCenter"
                >
                  {triggers.length > 1 ? "Triggers" : "Trigger"}
                </p>
                <div className="flex flex-col items-center justify-center ">
                  {/* pl-[37px] */}
                  <div
                    className={`flex h-[70px]  
                    `}
                  >
                    {triggers.map((item, index) => {
                      return (
                        <div key={index}>
                          <TriggerDrop index={index} />
                          <TriggerTarget
                            object={item}
                            key={index}
                            index={index}
                            canvas={true}
                          />
                        </div>
                      );
                    })}

                    {/* <TriggerLastDrop /> */}
                  </div>
                  {triggers.length > 1 && (
                    <div
                      className=" mt-[4.5rem] h-[0px] w-[1.5px] "
                      id="triggerJoin"
                    ></div>
                  )}
                </div>
                <div>
                  {actions.length === 0 && (
                    <Plus2
                      className=" mt-5  h-[41px] w-[41px] cursor-pointer items-center justify-center   rounded-full border border-[#D0D5DD] bg-[#F2F4F7]  p-2 text-[#667085]   transition ease-in-out"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(openActionSidebar());
                        dispatch(addNullToAction());
                      }}
                    />
                  )}
                </div>
              </div>
            )}

            {/* action list */}
            <div
              className={`${
                triggers.length === 1 ? "mt-8" : "mt-20"
              }   flex flex-col items-center `}
              id="line0"
              onClick={(e) => e.stopPropagation()}
            >
              {actions.length > 0 && (
                <p
                  className="   
   font-inter my-2 text-sm  font-medium uppercase leading-3   text-gray-500"
                >
                  {actions.length > 1 ? "Actions" : "Action"}
                </p>
              )}
              <div className="flex min-h-[100px] max-w-[307px] flex-col items-center ">
                {actions.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={`${
                          index !== 0 ? "" : ""
                        } flex     flex-col  items-center  justify-center  `}
                        id={`actionsConnectingLine${index}`}
                      >
                        {actions.length === 1 && actions[0] === null && (
                          <div className="h-[30px] w-[1.5px]   bg-gray-300 "></div>
                        )}
                        {actions.length > 0 && actions[0] !== null && (
                          <div className=" ">
                            <ActionLine index={index} />
                          </div>
                        )}
                        {actions.length > 1 && actions[0] === null && (
                          <div className=" ">
                            <ActionLine index={index} />
                          </div>
                        )}
                        {/* <ActionDrop index={index} /> */}
                        <Target
                          object={item}
                          key={index}
                          canvas={true}
                          index={index}
                        />
                      </div>
                    </div>
                  );
                })}
                {actions.length > 0 && actions[0] !== null && <ActionTopDrop />}
              </div>
              <div>
                {actions.length > 0 && actions[0] !== null && (
                  <Plus2
                    className={`h-[41px] w-[41px] cursor-pointer items-center justify-center   rounded-full border border-[#D0D5DD] bg-[#F2F4F7]  p-2 text-[#667085] transition ease-in-out ${
                      activeActionIndex !== null ? "mt-[45px]" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(openActionSidebar());
                      dispatch(removeNullFromAction());
                      checkNullAndAppend();
                    }}
                  />
                )}
                {actions.length > 0 && actions[0] === null && (
                  <Plus2
                    className={`mt-6 h-[41px] w-[41px] cursor-pointer items-center justify-center   rounded-full border border-[#D0D5DD] bg-[#F2F4F7]  p-2 text-[#667085] transition ease-in-out `}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(openActionSidebar());
                      dispatch(removeNullFromAction());
                      checkNullAndAppend();
                    }}
                  />
                )}
              </div>
            </div>
          </Xwrapper>
        </div>

        {isAlertOpen && (
          <Alert
            variant="success"
            className="fixed bottom-4 left-4 z-10 w-auto pr-3"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle className="h-5 w-5 flex-none" />
            <AlertTitle className="text-success-600">{alertText}</AlertTitle>
          </Alert>
        )}
      </Scrollbar>

      {/* sidebars */}
      <div className="text-left" onClick={(e) => e.stopPropagation()}>
        {isTriggerModalOpen && <Sidebar />}
        {isActionSidebarOpen && <ActionSideBar />}
        {isDetailModalOpen && <DetailSidebar />}
        {isVersionHistoryOpen && <VersionSidebar />}
        {isSearchSidebarOpen && <SearchSidebar />}
        {isLogicTestOpen && <WorkflowTest />}
        <WorkflowTest2 />
      </div>
    </div>
  );
};

export default Canvas;
