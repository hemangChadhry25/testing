import React from "react";

const PublishPopup = ({ content, setModalOpen, handleClick }) => {
  return (
    <div
      className="relative z-50 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-[#344054B2]  bg-opacity-25 transition-opacity"
        onClick={() => setModalOpen(false)}
      ></div>

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-lg font-semibold text-gray-black">
            {content.title}
          </h2>
          <p className="text-sm text-gray-500">{content.text}</p>
        </div>
        <div className="mt-8 flex grid-cols-2 justify-end gap-3">
          <button
            className="inline-flex h-9 items-center justify-center gap-x-2 rounded-[5px] border border-gray-300 px-[14px] py-2 text-sm font-semibold text-gray-800 shadow-xs transition-colors hover:bg-gray-50 focus:ring focus:ring-gray-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            type="button"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="inline-flex h-9 items-center justify-center gap-x-2 rounded-[5px] bg-primary-500 px-[14px] py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-primary-600 focus:ring focus:ring-primary-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            type="button"
            onClick={() => handleClick(content.state, content.alertTexts)}
          >
            Yes, {content.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PublishPopup;
