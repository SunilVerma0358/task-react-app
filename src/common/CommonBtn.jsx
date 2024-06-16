import React from "react";

const CommonBtn = (props) => {
  return (
    <>
      <button
        aria-label={props.arialabel}
        className={`${props.class} py-2 px-[18px] sm:py-4 sm:px-7 rounded bg-dark-blue text-sm sm:text-base text-white font-semibold leading-[166%] hover:text-dark-blue relative hover:bg-white duration-300 border-transparent border-2 hover:border-dark-blue z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue hover:after:animate-moveToX`}
      >
        {props.btn}
      </button>
    </>
  );
};

export default CommonBtn;
