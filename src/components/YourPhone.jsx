import React from "react";
import PhoneImg from "../assets/images/webp/phone-Img.webp";
import { LocationelleipesLeft } from "../common/icon";
const YourPhone = () => {
  return (
    <section
      id="findyour"
      className="max-w-[1920px] mx-auto relative sm:z-10 max-sm:pt-[78px] overflow-x-clip"
    >
      <div className="absolute bottom-0 left-0 pointer-events-none max-sm:hidden">
        <LocationelleipesLeft />
      </div>
      <div className="max-w-[1164px] mx-auto px-6 sm:px-3">
        <div className="bg-[url(./assets/images/webp/newsletter-img.webp)] bg-no-repeat bg-full max-sm:rounded-2xl max-[450px]:translate-y-[28%] translate-y-[35%] sm:translate-y-[20%] lg:translate-y-[44%]">
          <div className="flex md:flex-row flex-col justify-end items-center pt-[26px] pb-[46px] sm:py-16 lg:py-[98px] px-[30px] sm:px-14 lg:px-[140px] relative">
            <div className="max-md:translate-x-4 max-md:-translate-y-[70%] sm:-translate-y-[27%] -translate-y-14 md:absolute top-20 lg:top-[5%] left-0 lg:left-3 max-sm:min-w-[380px] max-w-[380px]  max-sm:min-h-[240px] lg:max-w-[606px] -z-10 max-[420px]:h-[180px] max-sm:h-[230px] max-md:h-[340px]  max-lg:h-[320px]">
              <img
                className="w-[98%] sm:w-[99%]"
                src={PhoneImg}
                alt="phoneimg"
              />
            </div>
            <div className="w-full md:w-7/12 lg:w-6/12 md:px-3">
              <h2
                data-aos="fade-down"
                className="font-light text-white text-2xxl sm:text-4xl md:text-5xl !leading-[116%] sm:!leading-[100%] text-center"
              >
                Find your <span className="font-extrabold">phone</span>
              </h2>
              <p className="font-normal text-white text-sm sm:text-base leading-normal text-center mt-3 sm:mt-2">
                Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper
                <span className="xl:block">
                  nisi sit elit rhoncus vestibulum fames libero id.
                </span>
              </p>
              <button
                aria-label="startnow"
                className="block mx-auto mt-[26px] sm:mt-8 font-semibold text-sm sm:text-base !leading-[166%] text-dark-blue max-sm:w-full bg-white py-[14px] sm:py-4 px-7 rounded hover:bg-dark-blue hover:text-white duration-300 relative z-[1] after:absolute after:h-full after:w-1 after:top-0 after:skew-x-12 after:blur-[3px] overflow-hidden after:left-[-20%] after:bg-white hover:after:animate-moveToX"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourPhone;
