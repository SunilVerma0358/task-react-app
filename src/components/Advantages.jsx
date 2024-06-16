import React from "react";
import { AdvantagesArray } from "../common/helper";
import CommonBtn from "../common/CommonBtn";
import { LocationelleipesLeft, LocationelleipesRight } from "../common/icon";

const Advantages = () => {
  return (
    <section className="relative  z-10 pt-8 lg:pt-6 max-w-[1920px] mx-auto">
      <div className="absolute -top-0 sm:top-12 left-0 z-[-1] pointer-events-none">
        <LocationelleipesLeft />
      </div>
      <div className="absolute -bottom-10 sm:-bottom-14 z-[-1] right-0 pointer-events-none">
        <LocationelleipesRight />
      </div>
      <div className="max-w-[1162px] mx-auto px-6 sm:px-3">
        <h2
          data-aos="fade-down"
          className="font-light text-dark-blue text-2xxl max-sm:mt-4 sm:text-4xl md:text-5xl !leading-[116%] sm:!leading-[100%] text-center"
        >
          Advantages of <span className="font-extrabold">Celltracker</span>
        </h2>
        <p className="font-normal text-black opacity-70 text-sm sm:text-base leading-normal text-center  mt-3 sm:mt-2">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          elit
          <span className="sm:block"> rhoncus vestibulum fames libero id.</span>
        </p>
        <div className="flex flex-row flex-wrap -mx-3 mt-6 sm:mt-7">
          {AdvantagesArray.map((obj, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-3/12 px-[9px] pt-[18px] sm:pt-6"
            >
              <div
                className={`${
                  index % 2 !== 0 && "lg:mt-6"
                } bg-white shadow-AdvantagesCard border-2 border-light-gray-custom outline-1 outline outline-transparent rounded-xl p-[19px] sm:p-3 xl:p-[19px] h-full transition-all duration-300 ease-linear hover:outline-dark-blue hover:border-transparent max-md:min-h-[184px]`}
              >
                <div>{obj.svg}</div>
                <h3 className="text-dark-blue text-xl sm:text-2xl font-normal !leading-[120%] mt-4 xl:mt-1">
                  {obj.heading}
                </h3>
                <p className="text-black text-sm sm:text-base leading-normal font-normal opacity-70 mt-[6px] max-md:pr-2">
                  {obj.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-[42px] sm:pt-12 md:mt-6">
          <CommonBtn
            arialabel="createyouraccount"
            class="max-sm:w-full py-3 sm:py-[14px] sm:!px-[26px]"
            btn="Create your Account"
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
