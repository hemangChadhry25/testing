import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
  DropdownMenuShortcut,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "../ui";
import { ChevronDown, ArrowLeft, Check } from "../icons";
import { closeVarsionHistory } from "@/redux/workflow/workflowSlice";
import { useAppDispatch } from "@/redux/hooks";
import { HelpIcon } from "./icons/help";

const VersionDropDown = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex w-[364px] flex-col gap-y-3 px-[20px] pb-[12px] pt-2">
      <div className="mt-2 flex">
        <div>
          <p className="flex items-center text-[16px] font-medium text-gray-900">
            Version History
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger>
                  <HelpIcon className="ml-2" />
                </TooltipTrigger>
                <TooltipContent className="font-semibold " side="bottom">
                  Help
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <p className="mt-3 font-sans text-[14px] leading-5 text-gray-500">
            You can view and restore previous versions of your workflows in
            Blend Metrics account
          </p>
        </div>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full justify-between">
            <Button
              variant="outlined"
              visual="gray"
              className="w-full justify-between font-normal"
            >
              All versions
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[325px]">
            <DropdownMenuItem>
              All versions
              <DropdownMenuShortcut>
                <Check />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Named versions
              <DropdownMenuShortcut>
                <Check />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Autosaved versions
              <DropdownMenuShortcut>
                <Check />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Named & Autosaved versions
              <DropdownMenuShortcut>
                <Check />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Published versions
              <DropdownMenuShortcut>
                <Check />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              Favorite versions
              <DropdownMenuShortcut>
                <Check />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Only yours
              <DropdownMenuShortcut>
                <Check />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default VersionDropDown;
