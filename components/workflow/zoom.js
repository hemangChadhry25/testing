import React, { useState } from "react";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui";
import { CheckCircle, ChevronDown, Search, Minus, Plus2 } from "../icons";
import { Scrollbar } from "react-scrollbars-custom";

const Zoom = ({ canvasRef }) => {
  const [fitToScreen, setFitToScreen] = useState(false);
  const onfitReset = () => {
    const container = canvasRef.current;
    container.style.transform = `scale(1)`;
    // container.style.transformOrigin = `50% 0`;
  };

  const resetZoom = () => {
    if (fit === false) {
      const container = canvasRef.current;
      const containerRect = container.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      let screenHeight;
      if (zoom >= 25 && zoom <= 100) {
        screenHeight =
          actions.length > 10
            ? window.innerHeight - 200
            : window.innerHeight - 100;
      } else if (zoom > 100 && zoom <= 200) {
        screenHeight =
          actions.length > 10
            ? window.innerHeight - 300
            : window.innerHeight - 150;
      }

      const scale = Math.min(
        screenWidth / containerRect.width,
        screenHeight / containerRect.height
      );
      container.style.transform = `scale(${scale})`;

      updateXarrow();
      setFitToScreen(true);
    }
  };

  const zoomIn = () => {
    if (zoom <= 190) {
      setZoom((prevPercentage) => prevPercentage + 10);
    }
  };

  const zoomOut = () => {
    if (zoom >= 30) {
      setZoom((prevPercentage) => prevPercentage - 10);
    }
  };

  return (
    <div>
      {" "}
      {/**zoom  start */}
      {!isSearchSidebarOpen && (
        <div
          className="fixed bottom-5 left-5 z-0 flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className=" shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] flex h-[36px] w-[36px] cursor-pointer items-center justify-center
           gap-2 rounded-md border border-[#D0D5DD] bg-white p-[10px] shadow-[#667085]  "
            onClick={(e) => {
              e.stopPropagation();
              setZoom(100);
              setFit(false);

              setFitToScreen(false);
              scrollbarsRef.current.scrollToTop();
              scrollbarsRef.current.scrollToLeft();
              onfitReset();
            }}
          >
            <Search />
          </div>

          <div className="flex items-center">
            <div
              className=" shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] flex h-[36px] w-[36px] cursor-pointer items-center justify-center
           gap-2 rounded-md rounded-r-none border-b border-l border-t border-[#D0D5DD] bg-white p-[10px] shadow-[#667085] "
              // onClick={() => handleMinusZoom()}
              onClick={(e) => {
                e.stopPropagation();
                setFit(false);
                zoomOut();
                setFitToScreen(false);
              }}
            >
              <Minus />
            </div>
            <div className="h-[36px]   cursor-pointer border border-[#D0D5DD] bg-white p-[10px] ">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex w-[71px] items-center justify-center text-xs">
                  {fit ? "fit" : zoom} %
                  <ChevronDown className="text-slate-500 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="  mb-2 h-[135px] w-[165px] ">
                  <Scrollbar>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        resetZoom();
                        setFit(true);
                      }}
                    >
                      Fit to Screen
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(25);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 25%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(50);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 50%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(75);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 75%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(100);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 100%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(125);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 125%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(150);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 150%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(175);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 175%
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        e.stopPropagation();
                        setFit(false);
                        setZoom(200);
                        setFitToScreen(false);
                      }}
                    >
                      Zoom to 200%
                    </DropdownMenuItem>
                  </Scrollbar>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div
              className=" shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] flex h-[36px] w-[36px] cursor-pointer items-center justify-center
           gap-2 rounded-md rounded-l-none border-b border-r border-t border-[#D0D5DD] bg-white p-[10px] shadow-[#667085]  "
              // onClick={() => handlePlusZoom()}
              onClick={(e) => {
                e.stopPropagation();
                setFit(false);
                zoomIn();
                setFitToScreen(false);
              }}
            >
              <Plus2 />
            </div>
          </div>
        </div>
      )}
      {/**zoom in out end */}
    </div>
  );
};

export default Zoom;
