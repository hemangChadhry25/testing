import React, { useEffect } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { useSelector } from "react-redux";

const TriggersLine = () => {
  const updateXarrow = useXarrow();
  const {
    actions,
    triggers,
    triggerDropActive,
    isLastTriggerActive,
    isDetailModalOpen,
    isSearchSidebarOpen,
  } = useSelector((state) => state.workflow);

  useEffect(() => {
    updateXarrow();
  }, [
    actions,
    triggers,
    isLastTriggerActive,
    triggerDropActive.active,
    isDetailModalOpen,
    isSearchSidebarOpen,
  ]);
  return (
    <div>
      {actions.length === 0 &&
        triggers.length > 1 &&
        triggers.map((t, index) => {
          return (
            <div key={index}>
              <Xarrow
                start={`trigger${index + 1}`}
                end={`triggerJoin`}
                lineColor="#D0D5DD"
                showHead={false}
                startAnchor="bottom"
                endAnchor="right"
                curveness={0.5}
                strokeWidth={2}
                zIndex={0}
                // labels="label"
              />

              {/* {triggerDropActive.active && (
                <Xarrow
                  start={`triggerDrop${triggerDropActive.index}`}
                  end={`triggerJoin`}
                  lineColor="#D0D5DD"
                  showHead={false}
                  startAnchor="bottom"
                  endAnchor="right"
                  curveness="0.5"
                  strokeWidth="1.5"
                  zIndex={0}
                  // labels="label"
                />
              )} */}
            </div>
          );
        })}
      {isLastTriggerActive && triggers.length > 1 && (
        <Xarrow
          start={`lastTriggerDrop`}
          end={`triggerJoin`}
          lineColor="#D0D5DD"
          showHead={false}
          startAnchor="bottom"
          endAnchor="right"
          curveness={0.5}
          strokeWidth={2}
          zIndex={0}
          // labels="label"
        />
      )}
    </div>
  );
};

export default TriggersLine;
