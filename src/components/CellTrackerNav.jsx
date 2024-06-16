import React, { useState } from "react";
import { Logo, QuickIcon } from "../common/icon";
import { Link } from "react-router-dom";
const CellTrackerNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
  }
  if (first) {
    document.body.classList.add("max-md:overflow-hidden");
  } else {
    document.body.classList.remove("max-md:overflow-hidden");
  }
  return (
    <div className=" relative z-40 max-w-[1164px] mx-auto flex justify-between items-center px-6 md:px-3 pt-8 pb-2.5 md:py-2.5">
      <Link
        onClick={() => setfirst(false)}
        to="/landing"
        aria-label="company"
        className="max-w-[259px] relative z-50 "
      >
        <Logo class={` !fill-white ${first ? "max-md:!fill-dark-blue" : ""}`} />
      </Link>
      <div className="flex items-center">
        <div
          className={`${
            first ? "right-0" : "right-[-100%]"
          } flex  gap-3 sm:gap-0 max-md:w-full h-full fixed bg-white top-0 max-md:pt-[120px]  md:h-unset md:static md:bg-transparent md:justify-end z-40 transition-all ease-linear duration-300 px-6 md:px-0 `}
        >
          {" "}
          <div className="flex items-center md:flex-row flex-col gap-[14px] max-md:w-full max-md:px-[6px] ">
            <a
              aria-label="findyour"
              onClick={() => setfirst(false)}
              href="#findyour"
              className="flex items-center gap-2 font-normal text-base text-white relative z-[1] after:w-0 after:bg-white after:h-[2px] after:-bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full "
            >
              <QuickIcon />
              <span className="text-black  md:text-white">Quick Help</span>
            </a>
            <a
              aria-label="login"
              onClick={() => setfirst(false)}
              href="#login"
              className="font-normal text-base  text-black md:text-white ml-2.5 relative z-[1] after:w-0 after:bg-white after:h-[2px] after:-bottom-1 after:left-[50%] after:duration-300 after:rounded-md after:absolute hover:after:left-0 hover:after:w-full "
            >
              Log in
            </a>
            <a
              href="#login"
              aria-label="createanaccount"
              onClick={() => setfirst(false)}
              className=" max-md:block font-semibold max-md:mt-[115px] text-sm md:text-base !leading-[23px] md:!leading-[27px] text-white md:text-dark-blue max-sm:w-full max-md:max-w-[314px] max-md:mx-auto bg-dark-blue md:bg-white py-[14px] sm:py-4 px-7 rounded hover:bg-dark-blue hover:text-white duration-300 relative z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-white hover:after:animate-moveToX text-center"
            >
              Create an Account
            </a>
          </div>
        </div>
        <button
          aria-label="navshow"
          onClick={setopen}
          className="md:hidden relative z-50"
        >
          {first ? (
            <div className="flex md:hidden flex-col relative z-50 justify-between w-[18px] h-[17px] cursor-pointer">
              <span className="bg-black min-w-[11px] min-h-[2px] relative z-50 transition-all ease-linear duration-300 rotate-[45deg] translate-x-0 -translate-y-1 -bottom-[11px]"></span>
              <span className="bg-black min-w-[11px] min-h-[2px] relative z-50  transition-all ease-linear duration-300 rotate-[-45deg] translate-x-0 translate-y-0 bottom-[8px]"></span>
            </div>
          ) : (
            <div className="flex md:hidden flex-col z-50 justify-between w-[21px] h-[15px] cursor-pointer relative">
              <span className="bg-white rounded-md w-1/2 h-[3px] relative z-50  transition-all ease-linear duration-300"></span>
              <span className="bg-white rounded-md w-full h-[3px] relative z-50  transition-all ease-linear duration-300"></span>
              <span className="bg-white rounded-md w-1/2 h-[3px] ms-auto relative z-50  transition-all ease-linear duration-300"></span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default CellTrackerNav;
