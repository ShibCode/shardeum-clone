import React from "react";

const Button = ({ text, maxWidth = "none" }) => {
  return (
    <a
      href="#"
      className="rounded-[20px] flex group [&_*]:transition-all [&_*]:duration-[400ms] [&_*]:ease-out"
    >
      <div
        style={{ maxWidth: maxWidth }}
        className="text-blue bg-white text-lg rounded-l-[20px] h-[68px] leading-[1.2] flex items-center px-5 group-hover:rounded-r-[20px] transition-all shadow-btn border-blue border-l-2 border-t-2 border-b-2 group-hover:border-r-2 flex-1"
      >
        {text}
      </div>

      <div className="rounded-r-[20px] group-hover:rounded-[50%] bg-white w-[68px] p-2.5 group-hover:translate-x-2 transition-all duration-500 shadow-btn border-blue border-r-2 border-t-2 border-b-2 group-hover:border-l-2">
        <div className="bg-green h-full grid place-items-center rounded-[15px] group-hover:rounded-[50%]">
          <img src="/chevron-right.svg" alt="arrow right" className="w-4" />
        </div>
      </div>
    </a>
  );
};

export default Button;
