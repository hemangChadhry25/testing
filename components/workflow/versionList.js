import React, { useState, useEffect } from "react";
import SingleVersion from "./singleVersion";
import axios from "axios";

const VersionList = () => {
  const [versions, setVersions] = useState();
  const getVersions = async () => {
    const response = await axios.get(
      "https://rvdqqwmx57.execute-api.us-east-1.amazonaws.com/createWorkflow/workflow"
    );

    setVersions(response.data.result.Items);
  };
  useEffect(() => {
    getVersions();
  }, []);
  return (
    <div>
      {versions &&
        versions.map((i, index) => {
          return (
            <div key={index}>
              <SingleVersion time={i.createdAt} version={i} />
            </div>
          );
        })}
    </div>
  );
};

export default VersionList;
