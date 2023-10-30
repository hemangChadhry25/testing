import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "../components/ui";
import { Gmail, Logo } from "../components/icons";
import { Input, Label } from "../components/ui";
import { ArrowsIcon } from "../components/workflow/icons/arrows";
import { useRouter } from "next/router";
import Svg from "../components/workflow/Svg";
import axios from "axios";
const Api = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState(null);
  const [IntegrationId, setIntegrationId] = useState(null);

  const fetchInputs = async (id) => {
    const response = await axios.get(
      `https://h6ywcglhn5.execute-api.us-east-1.amazonaws.com/integration/getIntegrationType?integrationId=${id}`
    );

    if (response.data.length > 0) {
      setInputs(response.data[0].auth_fields);

      setIntegrationId(response.data[0]);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const { integrationId } = router.query;

      fetchInputs(integrationId);
    }, 1000);
  }, [router.query]);

  return (
    <div className="google-auth">
      <div className="flex flex-col items-center justify-center gap-6 p-7 px-24 ">
        <div className="flex flex-col items-center gap-6">
          {IntegrationId && IntegrationId.logo && (
            <div className="flex items-center gap-5">
              <Svg svgString={IntegrationId.logo} />
              <ArrowsIcon />
              <Logo className="text-[#306cfe]" />
            </div>
          )}
          <div className="flex flex-col items-center gap-2">
            <div>
              <p className="font-inter text-center text-[18px] font-bold leading-4 text-[#1D2939]">
                Log in and Authorize
              </p>
            </div>
            <div>
              <p className="text-sm font-normal text-[#667085]">
                Log in to authorize your {IntegrationId && IntegrationId.name}{" "}
                account to <span className="font-[700]">Blend Metrics</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 self-stretch">
          {inputs &&
            inputs.map((i, index) => {
              return (
                <div
                  className="flex flex-col items-start gap-2 self-stretch"
                  key={index}
                >
                  <Label className="text-am font-medium leading-5 text-[#344054]">
                    {i.label}
                  </Label>
                  <Input
                    placeholder={`enter your ${i.key}`}
                    type={i.type}
                    onChange={() => handleOneC}
                  />
                </div>
              );
            })}

          {/* <div className="flex flex-col items-start gap-2 self-stretch">
            <Label className="text-am font-medium leading-5 text-[#344054]">
              Password
            </Label>
            <div className="relative w-full">
              <Input placeholder="Enter your Password" />
            </div>
          </div> */}

          {inputs && (
            <div className="flex items-center gap-3 self-stretch ">
              <Button variant="outlined" visual="gray" className="w-full">
                Cancel
              </Button>
              <Button className="w-full">Log In</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Api;

//  <span className="absolute right-3 top-3">
//    <svg
//      xmlns="http://www.w3.org/2000/svg"
//      width="20"
//      height="16"
//      viewBox="0 0 20 16"
//      fill="none"
//    >
//      <path
//        d="M0.833252 8.00016C0.833252 8.00016 4.16658 1.3335 9.99992 1.3335C15.8333 1.3335 19.1666 8.00016 19.1666 8.00016C19.1666 8.00016 15.8333 14.6668 9.99992 14.6668C4.16658 14.6668 0.833252 8.00016 0.833252 8.00016Z"
//        stroke="#667085"
//        strokeWidth="1.66667"
//        strokeLinecap="round"
//        strokeLinejoin="round"
//      />
//      <path
//        d="M9.99992 10.5002C11.3806 10.5002 12.4999 9.38087 12.4999 8.00016C12.4999 6.61945 11.3806 5.50016 9.99992 5.50016C8.61921 5.50016 7.49992 6.61945 7.49992 8.00016C7.49992 9.38087 8.61921 10.5002 9.99992 10.5002Z"
//        stroke="#667085"
//        strokeWidth="1.66667"
//        strokeLinecap="round"
//        strokeLinejoin="round"
//      />
//    </svg>
//  </span>;
