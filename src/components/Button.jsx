import React from "react";

const Button = ({ text }) => {
  return (
    <a
      href="#"
      className="rounded-[20px] flex group [&_*]:transition-all [&_*]:duration-[400ms] [&_*]:ease-out"
    >
      <div className="text-blue bg-white text-lg rounded-l-[20px] py-5 px-5 group-hover:rounded-r-[20px] transition-all">
        {text}
      </div>

      <div className="rounded-r-[20px] group-hover:rounded-[100%] bg-white w-[68px] p-3 group-hover:ml-2 transition-all duration-500">
        <div className="bg-green h-full grid place-items-center rounded-[8px] group-hover:rounded-[100%]">
          <img
            src="/chevron-right.svg"
            alt="arrow right"
            className="w-[14px]"
          />
        </div>
      </div>
    </a>
  );
};

export default Button;
