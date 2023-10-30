"use client";
import React, { useEffect, useState } from "react";
import { Trash, PencilLine, Search, History, Dot } from "../icons";
import { ArrowLeft } from "../icons/arrow-left";
import { Copy } from "../icons/copy";
import { MoreHorizontal } from "../icons/more-horizontal";
import { PencilHover } from "../icons/pencilHover";
import { SavedTime } from "../icons/SavedTime";
import { X2 } from "../icons/x2";
import { Zap } from "../icons/zap";
import { useRouter } from "next/navigation";
import moment from "moment";
import {
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  Button,
  TooltipContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui";
import {
  openWorkflowDeleteConfirmation,
  openLogicTest,
  openVersionHistory,
  openSearchSidebar,
  changePublishState,
  showAlert,
  renameWorkflow,
} from "@/redux/workflow/workflowSlice";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { renderToString } from "react-dom/server";
import axios from "axios";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import { PausedIcon } from "./icons/paused";
import { UnpublisedIcon } from "./icons/unpublished";
import { PlayIcon } from "./icons/play";
import { PublishedIcon } from "./icons/published";
import PublishPopup from "../workflow/publishPopup";

const Navbar = ({ params }:{params:string}) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("Workflow");
  const [updatedAt, setUpdatedAt] = useState("");
  const [pencilHover, setPencilHover] = useState(false);
  const { triggers, actions, publishState, workflow } = useAppSelector(
    (state) => state.workflow
  );

  const [publishContent, setPublishContent] = useState({
    title: "",
    text: "",
    buttonText: "",
    alertTexts: "",
    state: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = async () => {
    let Triggers = [];
    let Actions = [];

    for (let i = 0; i < triggers.length; i++) {
      Triggers.push({
        ...triggers[i],
        
      });
    }
    for (let i = 0; i < actions.length; i++) {
      Actions.push({
        ...actions[i],
        
      });
    }

    const id = params;

    const response = await axios.post(
      "https://rvdqqwmx57.execute-api.us-east-1.amazonaws.com/createWorkflow/workflow",
      {
        id,
        triggers: Triggers,
        actions: Actions,
        updatedAt: new Date().toISOString(),
      }
    );
  };

  const handleClick = (state:any, alertText:any) => {
    dispatch(changePublishState(state));
    dispatch(showAlert(alertText));
    setModalOpen(false);
  };
  useEffect(() => {
    if (publishState === "active") {
      handleDownload();
    }
  }, [triggers, actions]);
  useEffect(() => {
    setUpdatedAt(`saved at ${moment(workflow.updatedAt).format("h:mm A")}`);
  }, []);

  return (
    <main
      onClick={(e) => e.stopPropagation()}
      className="navheight flex w-full flex-1 shrink-0 flex-col items-center justify-center gap-[10px] self-stretch border border-gray-200 bg-white px-[17px] py-0"
    >
      <div className="flex h-6 w-full items-center justify-between self-stretch">
        <section className="flex items-center gap-3 self-stretch">
          <div>
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="h-9 px-2.5 text-gray-500 hover:text-gray-black"
                    size="md"
                    variant="outlined"
                    visual="gray"
                  >
                    <ArrowLeft />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Back</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div
            className="relative flex min-w-[100px] max-w-[200px] pr-6"
            onMouseEnter={() => setPencilHover(true)}
            onMouseLeave={() => setPencilHover(false)}
          >
            <input
              className="peer w-full text-base font-semibold text-gray-500 outline-none hover:visible hover:border-b"
              value={workflow.name}
              onChange={(e) => dispatch(renameWorkflow(e.currentTarget.value))}
            />
            <div
              className={`absolute inset-y-0 right-1 my-auto inline-flex items-center justify-center opacity-0 ${
                pencilHover ? "opacity-100 transition-opacity duration-300" : ""
              } `}
            >
              <PencilHover />
            </div>
          </div>
        </section>
        <section className="flex h-8 w-[404px] items-center gap-8"></section>
        <section className="flex items-center gap-3 self-stretch ">
          <div className="flex h-6 w-[151px] flex-row items-center justify-center  gap-[10px] rounded-md py-[10px] hover:bg-gray-200">
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger className="flex h-[36px] w-[151px] flex-row items-center justify-center   gap-[10px] rounded-md py-[10px] hover:bg-gray-200">
                  <div>
                    <SavedTime size="sm" />{" "}
                  </div>
                  <div>
                    <span className="mb-1 items-center text-xs font-normal text-gray-700 ">
                      {updatedAt}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="font-semibold " side="bottom">
                  Edited 5 mins ago
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className="flex   text-gray-500 hover:text-black focus-visible:outline-none"
                      asChild
                    >
                      <div
                        className="flex h-9 items-center justify-center rounded-lg border px-2.5 text-gray-500 hover:text-gray-black"
                      
                      >
                        <MoreHorizontal />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-[144px] min-w-[182px] gap-1 px-0 py-1 ">
                      <DropdownMenuItem className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]">
                        <PencilLine /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]">
                        <Copy />
                        Clone Workflow
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(openLogicTest());
                        }}
                      >
                        <Zap /> Run Workflow Test
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(openSearchSidebar());
                        }}
                      >
                        <Search />
                        Search
                        <span className="font-inter absolute right-4 top-3 h-[16px]   text-xs font-normal leading-3 text-gray-500">
                          ⌘ F
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(openVersionHistory());
                        }}
                      >
                        <History />
                        Version History
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
                        visual="destructive"
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(openWorkflowDeleteConfirmation());
                        }}
                      >
                        <Trash />
                        Delete Workflow
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">
                  Options
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            {publishState === "" && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => handleDownload()}>Publish</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex flex-col gap-y-2">
                      <DialogTitle>Publish this workflow?</DialogTitle>
                      <DialogDescription>
                        Publishing this workflow will make it live and available
                        to your users.
                      </DialogDescription>
                    </div>
                  </DialogHeader>

                  <DialogFooter className="  mt-8  flex justify-end gap-3">
                    <DialogClose asChild>
                      <Button variant="outlined" visual="gray">
                        Cancel
                      </Button>
                    </DialogClose>

                    <DialogClose asChild>
                      <Button
                        onClick={() => {
                          dispatch(changePublishState("active"));
                          dispatch(showAlert("Your Workflow is Active"));
                        }}
                      >
                        Yes, publish
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}

            {publishState === "active" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    leftIcon={<Dot className="text-success-500" />}
                    variant="outlined"
                    visual="gray"
                  >
                    Active
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" ">
                  <DropdownMenuItem
                    onClick={() => {
                      setPublishContent({
                        title: "Paused this workflow?",
                        text: "Pausing this workflow will...",
                        buttonText: "paused",
                        alertTexts: "Your Workflow is paused",
                        state: "paused",
                      });
                      setModalOpen(true);
                    }}
                  >
                    <PausedIcon />
                    Paused
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setPublishContent({
                        title: "Unpublish this workflow?",
                        text: "Unpublishing this workflow will make it...",
                        buttonText: "publish",
                        alertTexts: "Your Workflow is Unpublished",
                        state: "draft",
                      });
                      setModalOpen(true);
                    }}
                  >
                    <UnpublisedIcon />
                    Unpublish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {publishState === "paused" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    leftIcon={<PausedIcon />}
                    variant="outlined"
                    visual="gray"
                  >
                    Paused
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" ">
                  <DropdownMenuItem
                    onClick={() => {
                      setPublishContent({
                        title: "Resume this workflow?",
                        text: "Resuming this workflow will make it live and available to your users.",
                        buttonText: "resume",

                        alertTexts: "Your Workflow is Active",
                        state: "active",
                      });
                      setModalOpen(true);
                    }}
                  >
                    <PlayIcon />
                    Resume
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setPublishContent({
                        title: "Unpublish this workflow?",
                        text: "Unpublishing this workflow will make it...",
                        buttonText: "publish",

                        alertTexts: "Your Workflow is Unpublished",
                        state: "draft",
                      });
                      setModalOpen(true);
                    }}
                  >
                    <UnpublisedIcon />
                    Unpublish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {publishState === "draft" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    leftIcon={<Dot className="text-success-500" />}
                    variant="outlined"
                    visual="gray"
                  >
                    Draft
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" ">
                  <DropdownMenuItem
                    onClick={() => {
                      setPublishContent({
                        title: "Publish this workflow?",
                        text: "Publishing this workflow will make it live and available to your users.",
                        buttonText: "publish",

                        alertTexts: "Your Workflow is Active",
                        state: "active",
                      });
                      setModalOpen(true);
                    }}
                  >
                    <PublishedIcon />
                    Publish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <div>
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="h-9 px-2.5 text-gray-500 hover:bg-gray-100 hover:text-gray-black"
                    size="md"
                    visual="gray"
                  >
                    <X2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="font-semibold">Exit</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>
      </div>
      {modalOpen && (
        <PublishPopup
          content={publishContent}
          setModalOpen={setModalOpen}
          handleClick={handleClick}
        />
      )}
    </main>
  );
};

export default Navbar;
