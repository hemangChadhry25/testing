import React from "react";
import { DragLayerMonitor, useDragLayer } from "react-dnd";
const CustomDragLayer = () => {
  const { isDragging, currentOffset, item } = useDragLayer((monitor) => {
    return {
      isDragging: monitor.isDragging(),
      currentOffset: monitor.getSourceClientOffset(),
      item: monitor.getItem(),
    };
  });

  return isDragging && currentOffset ? (
    <div
      className="z-[100] rounded-lg  bg-none"
      style={{
        transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
        position: "absolute",
        top: "35px",
        left: "140px",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "5px",
        height: "5px",
        // border: "1px solid rgb(48, 108, 254)",
        color: "black",
        background: "rgba(100, 100, 111, 0.2)",
        // background: "red",
        borderRadius: "10px",
        boxShadow: "0 0 200px rgba(0, 0, 0, 0.5)",
      }}
    ></div>
  ) : null;
};

export default CustomDragLayer;
