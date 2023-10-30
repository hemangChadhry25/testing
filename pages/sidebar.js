import React from "react";
import {
  AppEvent,
  ArrowRight2,
  Message,
  Search,
  TimeDelay,
  Webhook,
  WorkFlow,
} from "../components/icons";
import { InputGroup } from "../components/ui/input-group";
import { Input } from "../components/ui/input";
import { InputLeftElement } from "../components/ui/input-element";
import PopularApps from "../components/workflow/PopularApp";
const Sidebar = () => {
  return (
    <main className="  flex h-[733px] w-[386px]  flex-col items-start border-l border-solid border-gray-100 px-0 py-5 shadow-lg ">
      <nav className="sticky top-0 z-10 flex h-[76px] w-full flex-col items-start gap-3 self-stretch bg-white px-5 pb-2 pt-0 ">
        <div className="flex  items-center justify-between self-stretch ">
          <span className="font-inter text-base font-medium text-gray-900">
            Add a New Trigger
          </span>
          <button className="text-sm font-semibold text-primary-500 hover:underline">
            View All
          </button>
        </div>
        <InputGroup>
          <Input
            placeholder="Find triggers"
            className=" ml-[-2px] flex h-9 w-[346px] gap-2 border border-gray-200  text-sm font-normal text-gray-400"
          />
          <InputLeftElement className="  px-0 py-0  ">
            {/* <Lupa /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.9999 13L10.0999 10.1M11.6665 6.33333C11.6665 9.27885 9.27873 11.6667 6.33321 11.6667C3.38769 11.6667 0.999878 9.27885 0.999878 6.33333C0.999878 3.38781 3.38769 1 6.33321 1C9.27873 1 11.6665 3.38781 11.6665 6.33333Z"
                stroke="#98A2B3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputLeftElement>
        </InputGroup>
      </nav>
      {/* <div className="fixed right-[370px] top-40 z-10 flex cursor-pointer  items-center justify-center gap-2 rounded-full border border-gray-300 bg-white p-2 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            onClick={() => dispatch(closeTriggerSidebar())}
            className="h-6 w-6"
          >
            <path
              d="M6 3.8335L10.6666 8.50013L6 13.1668"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div> */}

      <div className="relative z-0 flex w-full cursor-pointer flex-col items-end gap-2 self-stretch overflow-scroll  px-5 py-0">
        <div
          className=" mt-5 inline-flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-white p-3  shadow-xs 
        hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
        >
          <section className="flex h-11 w-11 items-center justify-center rounded-lg border-[1.5px] border-gray-200">
            {/* <AppEvent />App */}
            <AppEvent />
          </section>
          <section className="flex w-[204px]   items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              <span className="font-inter text-sm font-medium text-gray-900">
                App Event
              </span>
              <span className="font-inter text-xs font-normal text-gray-500">
                Choose this to start your workflow
              </span>
            </div>
          </section>
        </div>
        <div
          className=" inline-flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-xs 
    hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
        >
          <section className="flex h-[44px] w-[44px] items-center justify-center rounded-lg border-[1.5px] border-gray-200">
            {/* <Webhook /> <Webhook /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M13.9999 11.5C12.6192 11.5 11.4999 12.6193 11.4999 14C11.4999 15.3807 12.6192 16.5 13.9999 16.5C15.3807 16.5 16.4999 15.3807 16.4999 14C16.4999 12.6193 15.3807 11.5 13.9999 11.5ZM13.9999 11.5V5.66667C13.9999 5.22464 13.8243 4.80072 13.5118 4.48816C13.1992 4.17559 12.7753 4 12.3333 4H9.83327M3.99994 6.5C5.38065 6.5 6.49994 5.38071 6.49994 4C6.49994 2.61929 5.38065 1.5 3.99994 1.5C2.61923 1.5 1.49994 2.61929 1.49994 4C1.49994 5.38071 2.61923 6.5 3.99994 6.5ZM3.99994 6.5V16.5"
                stroke="#306CFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </section>
          <section className="flex w-[204px]   items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              {" "}
              <span className="font-inter text-sm font-medium text-gray-900">
                Webhook
              </span>
              <span className="font-inter text-xs font-normal text-gray-500">
                Choose this to start your workflow
              </span>
            </div>
          </section>
        </div>
        <div
          className=" inline-flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-xs 
    hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
        >
          <section className="flex h-[44px] w-[44px] items-center justify-center rounded-lg border-[1.5px] border-gray-200">
            {/* <BlueClock /> */}
            {/* <TimeDelay /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                d="M7.9999 7.9165V11.2498L10.0832 12.4998M7.9999 4.1665C4.08788 4.1665 0.916565 7.33782 0.916565 11.2498C0.916565 15.1619 4.08788 18.3332 7.9999 18.3332C11.9119 18.3332 15.0832 15.1619 15.0832 11.2498C15.0832 7.33782 11.9119 4.1665 7.9999 4.1665ZM7.9999 4.1665V1.6665M6.33323 1.6665H9.66657M14.9407 4.65987L13.6907 3.40987L14.3157 4.03487M1.05908 4.65987L2.30908 3.40987L1.68408 4.03487"
                stroke="#306CFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </section>
          <section className="flex h-[38px]  w-[204px]  items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              {" "}
              <span className="font-inter text-sm font-medium text-gray-900">
                Schedule
              </span>
              <span className="font-inter text-xs font-normal text-gray-500">
                Choose this to start your workflow
              </span>
            </div>
          </section>
        </div>
        <div
          className=" inline-flex w-full items-center gap-3 rounded-lg border border-gray-100  bg-white p-3 shadow-xs 
    hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
        >
          <section className="flex h-[44px] w-[44px] items-center justify-center rounded-lg border-[1.5px] border-gray-200">
            {/* <BlueClock /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.6663 1.89111V5.33323C11.6663 5.79994 11.6663 6.0333 11.7571 6.21156C11.837 6.36836 11.9645 6.49584 12.1213 6.57574C12.2995 6.66656 12.5329 6.66656 12.9996 6.66656H16.4417M11.6663 14.1665H6.66628M13.3329 10.8332H6.66628M16.6663 8.32336V14.3332C16.6663 15.7333 16.6663 16.4334 16.3938 16.9681C16.1541 17.4386 15.7717 17.821 15.3013 18.0607C14.7665 18.3332 14.0664 18.3332 12.6663 18.3332H7.33295C5.93282 18.3332 5.23275 18.3332 4.69797 18.0607C4.22757 17.821 3.84511 17.4386 3.60543 16.9681C3.33295 16.4334 3.33295 15.7333 3.33295 14.3332V5.6665C3.33295 4.26637 3.33295 3.56631 3.60543 3.03153C3.84511 2.56112 4.22757 2.17867 4.69797 1.93899C5.23275 1.6665 5.93282 1.6665 7.33295 1.6665H10.0094C10.6209 1.6665 10.9266 1.6665 11.2144 1.73558C11.4695 1.79682 11.7133 1.89783 11.937 2.0349C12.1893 2.18951 12.4055 2.4057 12.8379 2.83808L15.4947 5.49493C15.9271 5.92731 16.1433 6.1435 16.2979 6.39579C16.435 6.61947 16.536 6.86333 16.5972 7.11842C16.6663 7.40614 16.6663 7.71188 16.6663 8.32336Z"
                stroke="#306CFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </section>
          <section className="flex h-[38px]  w-[204px]  items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              {" "}
              <span className="font-inter text-sm font-medium text-gray-900">
                Forms
              </span>
              <span className="font-inter text-xs font-normal text-gray-500">
                Choose this to start your workflow
              </span>
            </div>
          </section>
        </div>
        <div
          className=" inline-flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-xs 
        hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
        >
          <section className="flex h-[44px] w-[44px] items-center justify-center rounded-lg border-[1px] border-gray-200">
            {/* <Workflow /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_2052_620)">
                <path
                  d="M9.16663 3.74984H15.25C16.1834 3.74984 16.6501 3.74984 17.0066 3.93149C17.3202 4.09128 17.5752 4.34625 17.735 4.65985C17.9166 5.01637 17.9166 5.48308 17.9166 6.4165V7.49984C17.9166 8.27641 17.9166 8.66469 17.7898 8.97098C17.6206 9.37936 17.2961 9.70381 16.8878 9.87297C16.5815 9.99984 16.1932 9.99984 15.4166 9.99984M10.8333 16.2498H4.74996C3.81654 16.2498 3.34983 16.2498 2.99331 16.0682C2.67971 15.9084 2.42474 15.6534 2.26495 15.3398C2.08329 14.9833 2.08329 14.5166 2.08329 13.5832V12.4998C2.08329 11.7233 2.08329 11.335 2.21016 11.0287C2.37932 10.6203 2.70377 10.2959 3.11215 10.1267C3.41844 9.99984 3.80672 9.99984 4.58329 9.99984M8.58329 12.0832H11.4166C11.65 12.0832 11.7667 12.0832 11.8558 12.0378C11.9342 11.9978 11.9979 11.9341 12.0379 11.8557C12.0833 11.7665 12.0833 11.6499 12.0833 11.4165V8.58317C12.0833 8.34982 12.0833 8.23314 12.0379 8.14401C11.9979 8.06561 11.9342 8.00187 11.8558 7.96192C11.7667 7.9165 11.65 7.9165 11.4166 7.9165H8.58329C8.34994 7.9165 8.23326 7.9165 8.14413 7.96192C8.06573 8.00187 8.00199 8.06561 7.96204 8.14401C7.91663 8.23314 7.91663 8.34982 7.91663 8.58317V11.4165C7.91663 11.6499 7.91663 11.7665 7.96204 11.8557C8.00199 11.9341 8.06573 11.9978 8.14413 12.0378C8.23326 12.0832 8.34994 12.0832 8.58329 12.0832ZM14.8333 18.3332H17.6666C17.9 18.3332 18.0167 18.3332 18.1058 18.2878C18.1842 18.2478 18.2479 18.1841 18.2879 18.1057C18.3333 18.0165 18.3333 17.8999 18.3333 17.6665V14.8332C18.3333 14.5998 18.3333 14.4831 18.2879 14.394C18.2479 14.3156 18.1842 14.2519 18.1058 14.2119C18.0167 14.1665 17.9 14.1665 17.6666 14.1665H14.8333C14.5999 14.1665 14.4833 14.1665 14.3941 14.2119C14.3157 14.2519 14.252 14.3156 14.212 14.394C14.1666 14.4831 14.1666 14.5998 14.1666 14.8332V17.6665C14.1666 17.8999 14.1666 18.0165 14.212 18.1057C14.252 18.1841 14.3157 18.2478 14.3941 18.2878C14.4833 18.3332 14.5999 18.3332 14.8333 18.3332ZM2.33329 5.83317H5.16663C5.39998 5.83317 5.51666 5.83317 5.60579 5.78776C5.68419 5.74781 5.74793 5.68407 5.78788 5.60567C5.83329 5.51654 5.83329 5.39986 5.83329 5.1665V2.33317C5.83329 2.09982 5.83329 1.98314 5.78788 1.89401C5.74793 1.81561 5.68419 1.75187 5.60579 1.71192C5.51666 1.6665 5.39998 1.6665 5.16663 1.6665H2.33329C2.09994 1.6665 1.98326 1.6665 1.89413 1.71192C1.81573 1.75187 1.75199 1.81561 1.71204 1.89401C1.66663 1.98314 1.66663 2.09982 1.66663 2.33317V5.1665C1.66663 5.39986 1.66663 5.51654 1.71204 5.60567C1.75199 5.68407 1.81573 5.74781 1.89413 5.78776C1.98326 5.83317 2.09994 5.83317 2.33329 5.83317Z"
                  stroke="#306CFE"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2052_620">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </section>
          <section className="flex h-[38px]  w-[204px]  items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              {" "}
              <span className="font-inter text-sm font-medium text-gray-900">
                Workflow
              </span>
              <span className="font-inter text-xs font-normal text-gray-500">
                Choose this to start your workflow
              </span>
            </div>
          </section>
        </div>
        <div
          className=" inline-flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-xs 
    hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
        >
          <section className="flex h-[44px] w-[44px] items-center justify-center rounded-lg border-[1px] border-gray-200">
            {/* <Message /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.3332 4.99967C18.3332 4.08301 17.5832 3.33301 16.6665 3.33301H3.33317C2.4165 3.33301 1.6665 4.08301 1.6665 4.99967M18.3332 4.99967V14.9997C18.3332 15.9163 17.5832 16.6663 16.6665 16.6663H3.33317C2.4165 16.6663 1.6665 15.9163 1.6665 14.9997V4.99967M18.3332 4.99967L9.99984 10.833L1.6665 4.99967"
                stroke="#306CFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </section>
          <section className="flex h-[38px]  w-[204px]  items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              {" "}
              <span className="font-inter text-sm font-medium text-gray-900">
                Message
              </span>
              <span className="font-inter text-xs font-normal text-gray-500">
                Choose this to start your workflow
              </span>
            </div>
          </section>
        </div>

        <div
          className=" inline-flex w-full items-center gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-xs 
    hover:border-gray-300 hover:ring-1 hover:ring-gray-300 hover:transition-colors hover:duration-300 hover:ease-out"
        >
          <section className="flex h-[44px] w-[44px] items-center justify-center rounded-lg border-[1px] border-gray-200 ">
            {/* <AlertBlue /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <path
                d="M10 6.50019V9.83353M10 13.1669H10.0083M8.8461 2.24329L1.99203 14.0821C1.61186 14.7388 1.42177 15.0671 1.44986 15.3366C1.47437 15.5716 1.59751 15.7852 1.78864 15.9242C2.00777 16.0835 2.38716 16.0835 3.14593 16.0835H16.8541C17.6128 16.0835 17.9922 16.0835 18.2114 15.9242C18.4025 15.7852 18.5256 15.5716 18.5501 15.3366C18.5782 15.0671 18.3881 14.7388 18.008 14.0821L11.1539 2.24329C10.7751 1.58899 10.5857 1.26184 10.3386 1.15196C10.123 1.05612 9.87697 1.05612 9.66142 1.15196C9.41431 1.26184 9.22491 1.58899 8.8461 2.24329Z"
                stroke="#306CFE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </section>
          <section className="flex h-[38px]  w-[204px]  items-start gap-3 ">
            <div className="flex h-[38px] flex-col items-start">
              {" "}
              <span className="font-inter text-sm font-medium text-gray-900">
                Alert
              </span>
              <span className="font-inter text-xs font-normal text-gray-500">
                Choose this to start your workflow
              </span>
            </div>
          </section>
        </div>
        <PopularApps />
      </div>
    </main>
  );
};

export default Sidebar;
