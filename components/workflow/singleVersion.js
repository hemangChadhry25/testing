import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  Button,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../ui";
import {
  MoreHorizontal,
  PencilLine,
  Copy,
  Trash,
  Link,
  History,
} from "../icons";
import { Star } from "./icons/star";
import moment from "moment";
import { useAppDispatch } from "@/redux/hooks";
import {
  restoreVersion,
  setEditingVersion,
  openVersionNameModal,
} from "@/redux/workflow/workflowSlice";

const SingleVersion = ({ time, version }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex cursor-pointer flex-col  justify-between border-t border-gray-200 bg-white py-3 hover:bg-[#EAF0FF]">
      <div className="flex items-start justify-between px-[20px]">
        <p className="font-sans text-[14px] font-medium text-gray-900">
          {version.name ? version.name : "New Team Version"}
        </p>
        <div className="flex items-center gap-2">
          <Star />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-6 px-1.5 py-1 text-gray-500"
                variant="ghost"
                visual="gray"
              >
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem
                onClick={() => {
                  dispatch(openVersionNameModal());
                  dispatch(setEditingVersion(version));
                }}
              >
                <PencilLine /> Name this Version
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy /> Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  dispatch(restoreVersion(version));
                }}
              >
                <History /> Restore this version
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link /> Link
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem visual="destructive">
                <Trash /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="px-[20px]">
        <p className=" text-[14px] text-gray-500">
          {moment(time).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <div className="my-2 flex">
          <Avatar isOnline className=" ">
            <AvatarImage alt="Man" src="/man.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <p className="ml-3 font-sans text-[14px] font-[400] text-gray-500">
            Manually saved by Ronald Richards
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleVersion;
