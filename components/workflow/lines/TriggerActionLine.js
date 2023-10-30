import React, { useEffect } from "react";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";
import { useSelector } from "react-redux";
const TriggerActionLine = () => {
  const updateXarrow = useXarrow();
  const {
    actions,
    triggers,
    isDetailModalOpen,
    isTriggerModalOpen,
    isActionModalOpen,
    isVersionHistoryOpen,
    isActionSidebarOpen,
    isTestModalOpen,
    isDeletePopupOpen,
    isSearchSidebarOpen,
  } = useSelector((state) => state.workflow);
  useEffect(() => {
    updateXarrow();
  }, [
    isDetailModalOpen,
    isTriggerModalOpen,
    isActionModalOpen,
    isVersionHistoryOpen,
    isActionSidebarOpen,
    isTestModalOpen,
    isDeletePopupOpen,
    isSearchSidebarOpen,
    triggers,
    actions,
  ]);
  return (
    <Xwrapper>
      <div>
        {actions.length > 0 &&
          triggers.map((t, index) => {
            return (
              <div key={index}>
                <Xarrow
                  start={`trigger${index + 1}`}
                  end={`line0`}
                  lineColor="#D0D5DD"
                  showHead={false}
                  startAnchor="bottom"
                  endAnchor="top"
                  curveness={0.9}
                  strokeWidth={2}
                  // labels="label"
                />
              </div>
            );
          })}
      </div>
    </Xwrapper>
  );
};

export default TriggerActionLine;
