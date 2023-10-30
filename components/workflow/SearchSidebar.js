import React, { useEffect, useRef, useState } from "react";
import { Search, ChevronDown, ChevronLeft } from "../icons";
import { Input } from "../workflow/icons/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  closeSearchSidebar,
  selectTrigger,
  // setFocusElement,
} from "@/redux/workflow/workflowSlice";
import { Scrollbar } from "react-scrollbars-custom";
import { DownChevron } from "./icons/downchevron";

const SearchSidebar = () => {
  const dispatch = useAppDispatch();
  const { triggers, actions, isSearchSidebarOpen } = useAppSelector(
    (state) => state.workflow
  );
  const inputRef = useRef();
  const [search, setSearch] = useState("");
  const [Triggers, setTriggers] = useState([]);
  const [Actions, setActions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [totalResult, setTotalResult] = useState(0);
  const [showActions, setShowActions] = useState(true);
  const [showTriggers, setShowTriggers] = useState(true);

  // select trigger
  const [selectedSearchTrigger, setSelectedSearchTrigger] = useState(null);
  const [triggerIndex, setTriggerIndex] = useState(-1);
  const [actionIndex, setActionIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const handleDownArrow = () => {
    /**
     * If Only Trigger data is present
     */
    if (Triggers.length === 0 && Actions.length !== 0) {
      actionDown();
    }
    /**
     * If Only Actions data is present
     */
    if (Triggers.length !== 0 && Actions.length === 0) {
      triggerDown();
    }
    /**
     * If both Trigger and Actions data is present and selected search trigger is null
     */
    if (
      Triggers.length !== 0 &&
      Actions.length !== 0 &&
      selectedSearchTrigger === null
    ) {
      triggerDown();
    }
    /**
     * If both Trigger and Actions data is present and selected search trigger is not null
     */
    if (
      Triggers.length !== 0 &&
      Actions.length !== 0 &&
      selectedSearchTrigger !== null
    ) {
      if (selectedSearchTrigger === Actions[actionIndex]) {
        actionDown();
      }
      if (selectedSearchTrigger === Triggers[triggerIndex]) {
        if (triggerIndex === Triggers.length - 1) {
          triggerToAction();
        } else {
          triggerDown();
        }
      }
    }
  };

  const handleUpArrow = () => {
    /**
     * If Only Actions data is present
     */
    if (Triggers.length === 0 && Actions.length !== 0) {
      actionUp();
    }
    /**
     * If Only Trigger data is present
     */
    if (Triggers.length !== 0 && Actions.length === 0) {
      triggerUp();
    }
    /**
     * If both Trigger and Actions data is present and selected search trigger is null
     */
    if (
      Triggers.length !== 0 &&
      Actions.length !== 0 &&
      selectedSearchTrigger === null
    ) {
      return false;
    }
    /**
     * If both Trigger and Actions data is present and selected search trigger is not null
     */
    if (
      Triggers.length !== 0 &&
      Actions.length !== 0 &&
      selectedSearchTrigger !== null
    ) {
      if (selectedSearchTrigger === Actions[actionIndex]) {
        if (actionIndex === 0) {
          actionToTrigger();
        } else {
          actionUp();
        }
      }
      if (selectedSearchTrigger === Triggers[triggerIndex]) {
        triggerUp();
      }
    }
  };

  const triggerDown = () => {
    if (Triggers.length > triggerIndex) {
      if (
        triggerIndex === -1 ||
        triggerIndex === 0 ||
        (triggerIndex >= 0 && triggerIndex < Triggers.length - 1)
      ) {
        setTriggerIndex(triggerIndex + 1);
        setSelectedSearchTrigger(Triggers[triggerIndex + 1]);
        dispatch(selectTrigger(Triggers[triggerIndex + 1]));
        dispatch(setFocusElement(Triggers[triggerIndex + 1]));
      }
      if (triggerIndex === Triggers.length - 1) {
        return false;
      }
    }
  };

  const actionDown = () => {
    if (Actions.length > actionIndex) {
      if (
        actionIndex === -1 ||
        actionIndex == 0 ||
        (actionIndex >= 0 && actionIndex < Actions.length - 1)
      ) {
        setActionIndex(actionIndex + 1);
        setSelectedSearchTrigger(Actions[actionIndex + 1]);
        dispatch(selectTrigger(Actions[actionIndex + 1]));
        dispatch(setFocusElement(Actions[actionIndex + 1]));
      }
      if (actionIndex === Actions.length - 1) {
        return false;
      }
    }
  };

  const triggerToAction = () => {
    setActionIndex(0);
    setSelectedSearchTrigger(Actions[0]);
    dispatch(selectTrigger(Actions[0]));
  };

  const actionUp = () => {
    if (actionIndex > 0) {
      setSelectedSearchTrigger(Actions[actionIndex - 1]);
      dispatch(selectTrigger(Actions[actionIndex - 1]));
      dispatch(setFocusElement(Actions[actionIndex - 1]));
      setActionIndex(actionIndex - 1);
    }
  };

  const triggerUp = () => {
    if (triggerIndex > 0) {
      setSelectedSearchTrigger(Triggers[triggerIndex - 1]);
      dispatch(selectTrigger(Triggers[triggerIndex - 1]));
      dispatch(setFocusElement(Triggers[triggerIndex - 1]));
      setTriggerIndex(triggerIndex - 1);
    }
  };

  const actionToTrigger = () => {
    if (triggerIndex >= 0) {
      setSelectedSearchTrigger(Triggers[Triggers.length - 1]);
      dispatch(selectTrigger(Triggers[Triggers.length - 1]));
      dispatch(setFocusElement(Triggers[Triggers.length - 1]));
      setTriggerIndex(Triggers.length - 1);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    if (search === "") {
      setSuggestions([]);
      setActions([]);
      setTriggers([]);
      setTotalResult(0);
      setSuggestionIndex(0);
      setSelectedSuggestion(null);
    } else {
      if (search.length >= 3) {
        const query = search;
        const regex = new RegExp(query, "i");
        const filteredActions = actions.filter((i) => regex.test(i.value));
        const filteredTriggers = triggers.filter((i) => regex.test(i.value));
        setActions(filteredActions);
        setTriggers(filteredTriggers);
        setSuggestions([...filteredActions, ...filteredTriggers]);
        setTotalResult(filteredActions.length + filteredTriggers.length);
      }
    }
  }, [search]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (selectedSuggestion !== null) {
        setSearch(selectedSuggestion.value);
        setSuggestions([]);
        setActionIndex(0);
      }
    }
  };
  const handleKeyDown = (e) => {
    if (suggestionIndex < suggestions.length - 1) {
      if (e.key === "ArrowDown") {
        if (selectedSuggestion === null) {
          setSelectedSuggestion(suggestions[suggestionIndex]);
        } else {
          setSuggestionIndex(suggestionIndex + 1);
          setSelectedSuggestion(suggestions[suggestionIndex + 1]);
        }
      }
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "ArrowUp") {
      if (suggestionIndex > 0) {
        if (selectedSuggestion === null) {
          setSuggestionIndex(suggestions.length - 1);
          setSelectedSuggestion(suggestions[suggestionIndex]);
        } else {
          setSuggestionIndex(suggestionIndex - 1);
          setSelectedSuggestion(suggestions[suggestionIndex - 1]);
        }
      }
    }
  };
  const inputClasses = isFocused ? "border-blue-500" : "border-gray-300";

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div
        onClick={(e) => {
          dispatch(closeSearchSidebar());
        }}
        className="fixed left-[365px] top-36 z-20 flex    h-[42px]  w-[42px] cursor-pointer   items-center justify-center gap-2 rounded-full border  border-gray-300 bg-white p-2 shadow transition-all animate-in slide-in-from-left-8 duration-100"
      >
        <ChevronLeft style={{ height: "24px", width: "24px" }} />
      </div>
      <div
        className={`0.5s tops fixed  left-0   h-[95vh] w-[386px] transform self-stretch bg-white     pb-10  shadow-lg  animate-in ${
          isSearchSidebarOpen ? "slide-in-from-left-8" : "slide-in-from-right-0"
        } duration-500 ease-in-out`}
      >
        <div className="p-5">
          <div
            className={`  flex h-10  w-[340px] items-center justify-between gap-2 self-stretch   rounded-[5px]   border border-[#DOD%DD]   bg-white   
       px-3    text-gray-black    placeholder:text-gray-500 invalid:pr-11   hover:ring-2 hover:ring-primary-50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50  ${inputClasses}`}
          >
            <Search className="absolute   cursor-pointer text-gray-500" />
            <div className="ml-2 ">
              <Input
                placeholder="Find triggers and Actions"
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                className="text-sm"
              />
            </div>
            {search !== "" && (
              <p
                className="cursor-pointer text-sm  text-gray-400 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearch("");
                  setSelectedSearchTrigger(null);
                  setTriggerIndex(-1);
                  setActionIndex(-1);
                }}
              >
                clear
              </p>
            )}
          </div>
          {/* <div
            className="fixed z-50 mt-[20px] flex w-[340px] flex-col rounded-lg bg-white shadow-md "
            onClick={() => setSuggestions([])}
          >
            {suggestions.length > 0 &&
              suggestions.map((i, index) => {
                return (
                  <div
                    key={index}
                    className={` cursor-pointer px-[14px] py-[8px]  ${
                      selectedSuggestion && selectedSuggestion.id === i.id
                        ? "bg-primary-400"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      setSearch(i.value);
                      inputRef.current.focus();
                      setSuggestionIndex(index);
                      setSelectedSuggestion(i);
                    }}
                  >
                    {i.value}
                  </div>
                );
              })}
          </div> */}
        </div>

        <div className=" h-[0.5px]  bg-gray-300"></div>
        <Scrollbar height={"80vh"}>
          {totalResult > 0 && (
            <div className="p-5 ">
              <div className="mx-2   flex items-center justify-between">
                <p className="text-sm text-gray-500">{totalResult} Results</p>
                <div className="flex">
                  <div
                    className="p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownArrow();
                    }}
                  >
                    <ChevronDown className="mx-2 cursor-pointer rounded-full text-gray-500 " />
                  </div>
                  <div
                    className="cursor-pointer p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpArrow();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12 10L8.00003 6L4.00003 10"
                        stroke="#667085"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {Triggers.length > 0 && (
                <div>
                  {/* trigger dropdown */}
                  <div
                    className="group my-4 flex cursor-pointer items-center  justify-between  transition-all ease-in"
                    data-collapse-target="animated-collapse-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowTriggers(!showTriggers);
                    }}
                  >
                    <div className="flex items-center">
                      <DownChevron className="mx-2" />
                      <p className="text-sm text-gray-800">Triggers</p>
                    </div>

                    <p className="mr-4 text-gray-500">{Triggers.length}</p>
                  </div>
                  {/* trigger results */}
                  <div
                    className="h-0 overflow-hidden  transition-all duration-300    ease-in-out"
                    data-collapse="animated-collapse-2"
                    style={{
                      maxHeight: showTriggers ? "800px  " : "0px",
                      height: showTriggers ? "100%   " : "0",
                    }}
                  >
                    {Triggers.map((i, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex   cursor-pointer items-center 
                          hover:bg-[#EAF0FF] ${
                            selectedSearchTrigger &&
                            selectedSearchTrigger.id === i.id
                              ? " bg-[#EAF0FF]"
                              : ""
                          } `}
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(selectTrigger(i));
                            setSelectedSearchTrigger(i);
                            setTriggerIndex(index);
                            setFocusElement(i);
                          }}
                        >
                          <div className="m-4 flex h-11 w-11 items-center justify-center rounded-lg border bg-white p-2">
                            {i.icon}
                          </div>
                          <div>
                            <p className="text-sm">{i.value}</p>
                            <div>
                              <p className="text-xs text-gray-500">
                                Small Description
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {Actions.length > 0 && (
                <div>
                  {/* action dropdown */}
                  <div
                    className="group my-4 flex cursor-pointer items-center  justify-between  transition-all ease-in"
                    data-collapse-target="animated-collapse-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowActions(!showActions);
                    }}
                  >
                    <div className="flex items-center">
                      <DownChevron className="mx-2" />
                      <p className="text-sm text-gray-800">Actions</p>
                    </div>

                    <p className="mr-4 text-gray-500">{Actions.length}</p>
                  </div>
                  {/* action results */}
                  <div
                    className={`  overflow-hidden  transition-all duration-300    ease-in-out`}
                    data-collapse="animated-collapse-2"
                    style={{
                      maxHeight: showActions ? "800px  " : "0px",
                      height: showActions ? "100%   " : "0",
                    }}
                  >
                    {Actions.map((i, index) => {
                      return (
                        <div
                          key={index}
                          className={`flex cursor-pointer items-center hover:bg-[#EAF0FF] ${
                            selectedSearchTrigger &&
                            selectedSearchTrigger.id === i.id
                              ? "bg-[#EAF0FF]"
                              : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(selectTrigger(i));
                            setSelectedSearchTrigger(i);
                            setActionIndex(index);
                            setFocusElement(i);
                          }}
                        >
                          <div className="m-4 flex h-11 w-11 items-center justify-center  rounded-lg border bg-white p-2">
                            {i.icon}
                          </div>
                          <div>
                            <p className="text-sm">{i.value}</p>
                            <div>
                              <p className="text-xs text-gray-500">
                                Small Description
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </Scrollbar>
      </div>
    </div>
  );
};

export default SearchSidebar;
