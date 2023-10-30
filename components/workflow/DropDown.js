import React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui";
import { MoreHorizontal } from "../icons/more-horizontal";
import { Copy } from "../icons/copy";
import { Edit, Trash, Zap } from "../icons";
const DropDown = () => {
  return (
    <main>
      <section className="">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="flex ">
            <button className="h-[15px] w-[15px]  text-gray-500 hover:text-gray-black ">
              <MoreHorizontal />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-[144px] min-w-[182px] gap-1 px-0 py-1 ">
            <DropdownMenuItem
              className="
                flex cursor-pointer select-none items-center px-3 py-2.5 text-[13px] leading-[13.25px] text-gray-500 outline-none data-[state=open]:bg-gray-100 hover:bg-gray-50 hover:text-gray-black focus:bg-gray-100 focus:text-gray-black disabled:pointer-events-none disabled:opacity-50"
            >
              <Edit />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]">
              <Copy /> Duplicate
            </DropdownMenuItem>
            <DropdownMenuItem className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]">
              <Zap />
              Run Test
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2 self-stretch px-3 py-[10px]"
              visual="destructive"
            >
              <Trash />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </main>
  );
};

export default DropDown;

{
  /* {canvas && (
                <div className={` `}>
                  {
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild >
                        {
                          <Button
                            
                            className={`${
                              showIcons && "bg-none"
                            } border-grey-300  h-8  w-8 items-center justify-center  gap-2 rounded border-0 bg-white p-2 shadow-none hover:bg-gray-100 focus:ring-0 `}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {showIcons && (
                              <MoreHorizontal className="  shrink-0 text-[#306CFE]   " />
                            )}
                          </Button>
                        }
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuItem
                          onClick={(e) => e.stopPropagation()}
                          className="cursor-pointer"
                        >
                          <PencilLine /> Edit
                        </DropdownMenuItem>
                        {triggers.length < 5 && (
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={(e) => {
                              dispatch(duplicateTrigger(item, index))
                              e.stopPropagation()
                            }}
                          >
                            <Copy /> Duplicate
                          </DropdownMenuItem>
                        )}
                        {triggers.length === 5 && item.type === "action" && (
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={(e) => {
                              dispatch(duplicateTrigger(item, index))
                              e.stopPropagation()
                            }}
                          >
                            <Copy /> Duplicate
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation()
                            dispatch(runSingleTriggerTest())
                          }}
                          className="cursor-pointer"
                        >
                          <Zap /> Run Test
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          visual="destructive"
                          onClick={(e) => {
                            dispatch(openDeleteTriggerModal(item))
                            e.stopPropagation()
                          }}
                          className="cursor-pointer"
                        >
                          <Trash /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  }
                </div>
              )} */
}
