import React from "react";
import HowItWorkImg from "../assets/images/webp/how-it-work-img.webp";
import { HowItWorkArray } from "../common/helper";
import CommonBtn from "../common/CommonBtn";
import { LocationelleipesLeft, LocationelleipesRight } from "../common/icon";
const HowItWork = () => {
  return (
    <section className="pb-5 max-sm:pt-[26px] pt-[69px] overflow-x-clip z-20 relative max-w-[1920px] mx-auto">
      <div className="absolute top-[11%] sm:top-[18%] left-0 -z-[1] pointer-events-none">
        <LocationelleipesLeft />
      </div>
      <div className="absolute right-0 -bottom-6 sm:bottom-4 -z-[1] pointer-events-none">
        <LocationelleipesRight />
      </div>
      <div className="max-w-[1164px] mx-auto px-6 sm:px-3 py-12">
        <h2
          data-aos="fade-down"
          className="font-light text-dark-blue text-2xxl sm:text-4xl md:text-5xl leading-[100%] text-center"
        >
          How it <span className="font-extrabold">works</span>
        </h2>
        <p className=" font-normal max-sm:max-w-[277px] mx-auto text-black opacity-70 text-sm sm:text-base leading-normal text-center  mt-3 sm:mt-2">
          Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi sit
          <span className="sm:block">
            elit rhoncus vestibulum fames libero id.
          </span>
        </p>
        <div className="flex flex-row flex-wrap -mx-3 mt-[42px] md:mt-16 lg:mt-20 ">
          <div className="w-full lg:w-6/12 px-3 ">
            <div className="relative min-h-[365px] max-h-[620px] xl:min-h-[620px">
              <div className=" max-sm:absolute xl:absolute xl:top-0 xl:-left-[6%] max-sm:-right-0 w-full ">
                <img
                  className="w-full max-sm:w-[365px] max-w-[525px] xl:min-w-[600px] h-full mx-auto"
                  src={HowItWorkImg}
                  alt="how it working"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-3 max-lg:mt-[30px]">
            <div className=" max-md:block max-lg:flex gap-5 mt-[18px]">
              {HowItWorkArray.map((obj, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 !== 0 && "lg:mt-[18px] max-md:mt-[18px]"
                  } shadow-AdvantagesCard border-2 border-light-gray-custom rounded-xl p-[18px] h-full transition-all duration-300 ease-linear hover:border-dark-blue max-w-[536px] mx-auto  min-h-[305px] lg:min-h-[274px]`}
                >
                  <div>{obj.svg}</div>
                  <h3 className="text-dark-blue text-xl sm:text-2xl font-normal !leading-[120%] max-w-[465px] mt-2">
                    {obj.heading}
                  </h3>
                  <p className="text-black text-sm sm:text-base leading-normal font-normal opacity-70 mt-[6px] max-sm:pr-3">
                    {obj.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[14px] pt-[42px] md:pt-14 lg:pt-20">
          <CommonBtn
            arialabel="createyouraccount"
            class="max-sm:w-full py-[15px] sm:py-4 sm:!px-[26px]"
            btn="Create your Account"
          />
          <button
            aria-label="gotmore"
            className="border border-dark-blue text-dark-blue font-semibold text-sm sm:text-base leading-[166%] rounded py-[13px] sm:py-4 px-7 max-sm:w-full duration-300 relative z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-dark-blue hover:after:animate-moveToX"
          >
            Got more Question?
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
