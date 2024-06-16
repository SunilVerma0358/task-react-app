import React from "react";

const PreLoader = () => {
  return (
    <section>
      <div className="min-h-screen fixed top-0 left-0 bg-white z-[100] w-full flex flex-col gap-5 justify-center items-center">
        <h2 className=" text-dark-blue text-5xl font-extrabold">celltracker</h2>
        <div className="sm:w-[200px] w-[100px] h-[100px] pointer-events-none  animate-spin sm:h-[200px] border-t-2 border-r-[50px] sm:border-r-[100px] border-r-dark-blue  border-dark-blue border-b-2 border-l-2 rounded-full relative z-[1] after:absolute after:right-[-65%] bg-white after:top-[-1px] after:w-[100%] after:h-[50%] after:bg-dark-blue after:rounded-full before:absolute before:left-[37%]  before:bottom-0 before:w-[100%] before:h-[53%] before:bg-white before:rounded-full"></div>
      </div>
    </section>
  );
};

export default PreLoader;
