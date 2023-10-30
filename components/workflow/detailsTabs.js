import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "../ui/index";
import {
  CheckCircle,
  Logo,
  Gmail,
  ArrowRight2,
  Plus,
  ChevronDown,
} from "../icons";

import { Scrollbar } from "react-scrollbars-custom";
import SingleTriggerTest from "./SingleTriggerTest";
import SingleTestSuccess from "./SingleTestSuccess";
import Svg from "./Svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectTab,
  // getEventsTrigger,
  setConnectionId,
  // getEventsAction,
  setEvent,
} from "@/redux/workflow/workflowSlice";
import Search from "../inputComponents/SearchField";
import LongTextPreview from "../inputComponents/LongText";
import DropDown from "../inputComponents/DropDown";
import Email from "../inputComponents/Email";
import Number from "../inputComponents/Numbers";
import { PasswordPreview } from "../inputComponents/Password";
import ShortText from "../inputComponents/ShortText";
import Toggle from "../inputComponents/Toggle";
import Website from "../inputComponents/WebSite";
import FileUpload from "../inputComponents/FileUpload";
import ImageUpload from "../inputComponents/ImageUpload";
import VideoUpload from "../inputComponents/Vedio";
import Address from "../inputComponents/Address";
import IntegrationLogo from "../ui/integrationLogo";
const DetailsTabs = () => {
  const dispatch = useAppDispatch();
  const [testTrigger, setTestTrigger] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [eventSelect, setEventSelect] = useState();

  const {
    activeDetailTab,
    selectedTrigger,
    events,
    triggersData,
    actionsData,
  } = useAppSelector((state) => state.workflow);

  // here fetch events from the react query
  useEffect(() => {
    if (selectedTrigger && selectedTrigger.type === "trigger") {
      const triggerId = triggersData.find(
        (i) => i.name === selectedTrigger.name
      );

      // dispatch(getEventsTrigger(triggerId.id));
    }
    if (selectedTrigger && selectedTrigger.type === "action") {
      const actionId = actionsData.find((i) => i.name === selectedTrigger.name);

      // dispatch(getEventsAction(actionId.id));
    }
    if (selectedTrigger.eventId) {
      const specificEvent = events.find(
        (i) => i.id === selectedTrigger.eventId
      );
      setEventSelect(specificEvent);
    }
  }, [selectedTrigger]);
  const handleSignInWithGoogle = () => {
    localStorage.setItem("SELECTED_TRIGGER", JSON.stringify(selectedTrigger));

    const googleSignInUrl = "/auth-app";

    const newWindow = window.open(
      googleSignInUrl,
      "_blank",
      "width=640,height=549"
    );
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "https://your-popup-origin.com") {
        // Not the expected origin: reject the message!
        // return;
      }

      if (event.data.id) {
        dispatch(setConnectionId(event.data.id));
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Tabs value={activeDetailTab} defaultValue={activeDetailTab}>
      <TabsList className="grid grid-cols-3">
        <TabsTrigger
          value="setup"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(selectTab("setup"));
          }}
        >
          Setup
          <CheckCircle className="text-success-500" />
        </TabsTrigger>
        <TabsTrigger
          value="conditions"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(selectTab("conditions"));
          }}
        >
          Conditions
        </TabsTrigger>
        <TabsTrigger
          value="test"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(selectTab("test"));
          }}
        >
          Test
        </TabsTrigger>
      </TabsList>
      <div className="h-[80vh] pb-[90px]">
        <Scrollbar>
          <TabsContent value="setup">
            <div className="p-5">
              <div className="rounded-lg">
                <div>
                  <h4 className=" mb-[12px]  text-sm font-medium text-gray-900 ">
                    Which event will start the workflow?
                  </h4>
                </div>
                <div className="gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`${
                        eventSelect
                          ? "font-normal text-gray-800"
                          : "font-medium text-gray-400"
                      }  inline-flex h-9 w-full items-center justify-between gap-x-2 rounded-[5px] border px-[14px] py-2 text-sm  capitalize   shadow-xs transition-colors focus:ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50`}
                    >
                      {eventSelect ? eventSelect.name : " Select Event "}
                      <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="  mb-2 w-[334px] ">
                      {events.map((item, i) => {
                        return (
                          <DropdownMenuItem
                            key={i}
                            onClick={() => {
                              setEventSelect(item);
                              dispatch(setEvent(item.id));
                            }}
                            className="capitalize"
                          >
                            {item.name}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              {eventSelect && (
                <section className="flex flex-col items-start  gap-3 self-stretch pb-0  pt-5">
                  <div>
                    <span className=" text-sm font-medium text-gray-900">
                      Connect your account
                    </span>
                  </div>
                  <div className="flex h-[68px] w-[343px] items-center gap-3 rounded-lg border border-gray-200 bg-white py-3 pl-3 pr-[18px] shadow-sm">
                    <div className="flex h-11 min-w-[44px] items-center justify-center gap-[10px] rounded-lg border-[1.5px] border-gray-200">
                      <IntegrationLogo id={selectedTrigger.integrationId} />
                    </div>
                    <div className=" flex ">
                      <span className=" font-inter  w-[138px] text-[12px] font-medium leading-[1.25] text-gray-900">
                        Connect your {selectedTrigger.name} account{" "}
                      </span>
                    </div>
                    <div>
                      <Button
                        leftIcon={<Plus />}
                        variant="outlined"
                        visual="gray"
                        className="border-gray-200 "
                        onClick={handleSignInWithGoogle}
                      >
                        Connect
                      </Button>
                    </div>
                  </div>
                </section>
              )}
              {eventSelect && (
                <div>
                  <p className="text-slate-600 my-5  text-xs">
                    <span className="underline">{selectedTrigger.name}</span> is
                    a secure partner with Blend Metrics. Your credentials are
                    encrypted & can be removed at any time, You can manage all
                    of your connected accounts{" "}
                    <span className="underline">here</span>
                  </p>
                </div>
              )}
              {eventSelect &&
                eventSelect.configurations &&
                eventSelect.configurations.map((i, index) => {
                  if (i.kind === "short-text")
                    return (
                      <div key={index} className="my-4">
                        <ShortText
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );

                  if (i.kind === "long-text") {
                    return (
                      <div key={index} className="my-4">
                        <LongTextPreview
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "search") {
                    return (
                      <div key={index} className="my-4">
                        <Search
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "dropdown") {
                    return (
                      <div key={index} className="my-4">
                        <DropDown
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "toggle") {
                    return (
                      <div key={index} className="my-4">
                        <Toggle
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "password") {
                    return (
                      <div key={index} className="my-4">
                        <PasswordPreview
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "email") {
                    return (
                      <div key={index} className="my-4">
                        <Email
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "numbers") {
                    return (
                      <div key={index} className="my-4">
                        <Number
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "website") {
                    return (
                      <div key={index} className="my-4">
                        <Website
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "video") {
                    return (
                      <div key={index} className="my-4">
                        <VideoUpload
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "file-upload") {
                    return (
                      <div key={index} className="my-4">
                        <FileUpload
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "image-upload") {
                    return (
                      <div key={index} className="my-4">
                        <ImageUpload
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  if (i.kind === "address") {
                    return (
                      <div key={index} className="my-4">
                        <Address
                          {...i}
                          event={eventSelect.id}
                          selectedTrigger={selectedTrigger}
                        />
                      </div>
                    );
                  }
                  return <p key={index}>invalid component</p>;
                })}
            </div>
          </TabsContent>
          <TabsContent value="conditions" className="gap-4 self-stretch py-4">
            <div className="p-5">
              <div className="mb-4 text-sm">Only continue if:</div>
              <div className="flex items-center text-sm text-primary-500">
                <Plus />
                <div className="ml-2 cursor-pointer"> Add Condition</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="test">
            <div className="p-5">
              <div className="mt-4 h-full  bg-white">
                {testTrigger && (
                  <div>
                    <div>
                      <p className="mb-2 text-sm  leading-5">
                        Test your trigger
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        we will find a recent email in your gmail account to
                        confirm that the right account is connected and your
                        trigger is set up correctly
                      </p>
                    </div>
                    <div className="my-4 flex items-center justify-between rounded-lg border px-3 py-2 ">
                      <div className="my-2 flex items-center">
                        <div className="mr-2   flex h-[48px] w-[48px] cursor-pointer  items-center justify-center  rounded-lg border ">
                          <Gmail className="h-8 w-8" />
                        </div>
                        <ArrowRight2 className="text-gray-400" />
                        <div className="ml-2  flex h-[48px] w-[48px] cursor-pointer  items-center justify-center   rounded-lg border text-primary-500">
                          <Logo className="h-8 w-8" />
                        </div>
                      </div>
                      <div>
                        <Button
                          variant="outlined"
                          visual="gray"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTestTrigger(false);
                            setShowError(true);
                          }}
                        >
                          Test Trigger
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                {showError && (
                  <SingleTriggerTest
                    setShowError={setShowError}
                    setShowSuccess={setShowSuccess}
                    setTestTrigger={setTestTrigger}
                  />
                )}
                {showSuccess && (
                  <SingleTestSuccess
                    setShowError={setShowError}
                    setShowSuccess={setShowSuccess}
                    setTestTrigger={setTestTrigger}
                  />
                )}
              </div>
            </div>
          </TabsContent>
        </Scrollbar>
      </div>
    </Tabs>
  );
};

export default DetailsTabs;
