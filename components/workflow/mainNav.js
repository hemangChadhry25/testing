import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  AvatarFallback,
  DropdownMenuSeparator,
  Avatar,
  AvatarImage,
} from "../ui";

import {
  Home,
  BarChartSquare,
  ThreeLayers,
  Users,
  LifeBouy,
  Settings,
  UserPlus,
  LogOut,
  Belling,
  HelpCircle,
  User,
  Logo,
  Link,
} from "../icons";

const mainNav = () => {
  return (
    <nav className="flex h-screen w-[70px] flex-col items-center border-r border-gray-200 bg-white">
      <div className="py-[22px]">
        <Link
          className="text-primary-500 focus:outline-none"
          aria-label="Logo"
          href="/"
        >
          <Logo />
        </Link>
      </div>
      <div className="flex flex-auto flex-col items-center justify-between self-stretch border-t border-gray-200">
        <div className="flex flex-col gap-y-5 pt-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                <Home />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="right">
                Home
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                <BarChartSquare />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="right">
                Stats
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                <ThreeLayers />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="right">
                Projects
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                <Users />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="right">
                Team
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex flex-col gap-y-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                <LifeBouy />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="right">
                Support
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary-500 focus:outline-none">
                <Settings className="h-[18px] w-[18px]" />
              </TooltipTrigger>
              <TooltipContent className="font-semibold" side="right">
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="/man.jpg" alt="Man" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right">
              <DropdownMenuLabel className="font-normal" size="md">
                <div className="inline-flex items-center gap-x-3">
                  <Avatar size="md">
                    <AvatarImage src="/man.jpg" alt="Man" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700">
                      Christopher Torres
                    </span>
                    <span className="text-sm text-gray-500">
                      chris@blendmetrics.com
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <User />
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus />
                Invite Team members
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Belling />
                Belling
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle />
                Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default mainNav;
