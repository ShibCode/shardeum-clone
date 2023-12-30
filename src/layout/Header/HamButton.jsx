import React from "react";

const HamButton = ({ isShowingHeader, setIsShowingHeader }) => {
  return (
    <button
      className="rounded-[20px] bg-white w-[68px] aspect-square p-2.5 ml-auto group"
      onClick={() => setIsShowingHeader((prev) => !prev)}
    >
      <div
        className={`h-full flex rounded-[15px] group-hover:rounded-[50%] transition-all duration-300 overflow-hidden ${
          isShowingHeader ? "bg-transparent" : "bg-green"
        }`}
      >
        <div className="flex w-full -translate-x-full group-hover:translate-x-0 transition-transform group-hover:duration-300 duration-0">
          <Icon isShowingHeader={isShowingHeader} />
          <Icon isShowingHeader={isShowingHeader} />
        </div>
      </div>
    </button>
  );
};

export default HamButton;

const Icon = ({ isShowingHeader }) => {
  return (
    <div className="min-w-full flex flex-col items-center justify-center gap-[3px] overflow-hidden">
      <div
        className={`bg-blue h-[4px] w-[40%] rounded-full transition-all duration-[600ms] ${
          isShowingHeader ? "rotate-45 translate-y-[7px]" : ""
        }`}
      ></div>
      <div
        className={`bg-blue h-[4px] w-[40%] rounded-full transition-all duration-[600ms] ${
          isShowingHeader ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`bg-blue h-[4px] w-[40%] rounded-full transition-all duration-[600ms] ${
          isShowingHeader ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      ></div>
    </div>
  );
};
