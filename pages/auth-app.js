import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Auth = () => {
  const { dropType } = useSelector((state) => state.workflow);
  useEffect(() => {
    const trigger = JSON.parse(localStorage.getItem("SELECTED_TRIGGER"));
    console.log("Received data from parent window:", trigger);
    localStorage.removeItem("SELECTED_TRIGGER");
    if (trigger.integrationId) {
      getRedirectUrl(trigger.integrationId)
        .then((response) => {
          window.location.href = response.data.result;
          console.log(response.data.result);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const getRedirectUrl = async (integrationId) => {
    return await axios.post(
      "https://uwxrv74lyi.execute-api.us-east-1.amazonaws.com/auth/generateUrl",
      {
        integrationId: integrationId,
      }
    );
  };
  return (
    <div className="flex items-center justify-center">
      <h1>loading...</h1>
    </div>
  );
};

export default Auth;
