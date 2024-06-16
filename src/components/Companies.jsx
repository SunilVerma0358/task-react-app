import React from "react";
import companiesVectorTopImg from "../assets/images/webp/companies-vector-bg.webp";
import companiesVectorBottomImg from "../assets/images/webp/companies-vector-bottom-img.webp";
import { CorrectIcon } from "../common/icon";
import CommonBtn from "../common/CommonBtn";
import { CompaniesArray } from "../common/helper";
const Companies = () => {
  return (
    <section
      id="companies"
      className="relative z-10 bg-[url(./assets/images/webp/companies-bg-img.webp)] bg-no-repeat bg-full pt-32 sm:pt-40 lg:pt-56 pb-20 sm:pb-36 max-w-[1920px] mx-auto"
    >
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <img
          className="w-full min-h-16"
          src={companiesVectorTopImg}
          alt="companies vector"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <img
          className="w-full min-h-16"
          src={companiesVectorBottomImg}
          alt="comaniesVectorBottomImg"
        />
      </div>
      <div className="max-w-[1164px] mx-auto px-6 sm:px-3 pb-6 sm:pb-12">
        <h2
          data-aos="fade-down"
          className="font-light max-sm:max-w-[295px] mx-auto text-white text-2xxl sm:text-4xl md:text-5xl !leading-8 sm:!leading-[48px] text-center"
        >
          Join <span className="font-extrabold">70,000+ companies</span> doing
          <span className="sm:block"> time tracking the easy way</span>
        </h2>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center py-5 sm:py-8 lg:mt-[92px]">
          {CompaniesArray.map((obj, index) => (
            <div
              key={index}
              className={`${index === 0 && "max-w-[467px] lg:min-w-[467px]"}  ${
                index === 1 &&
                "max-w-[467px] lg:min-w-[527px] lg:-translate-x-4 lg:min-h-[433px] lg:-translate-y-[3.2%]"
              } w-full relative pt-[60px] sm:pt-[50px] lg:pt-[34px] bg-white p-6 sm:p-[34px] shadow-AdvantagesCard border-2 border-light-gray-custom  rounded-[12px_0px_12px_0px] max-md:min-h-[461px] mt-[42px] lg:mt-0`}
            >
              <h3 className="font-normal text-2xl sm:text-3xl md:text-3xxl text-dark-blue leading-[120%]">
                {obj.heading}{" "}
                <span className="text-dark-sky">{obj.headingSkyblue}</span>
              </h3>
              <p className="font-normal text-sm sm:text-base text-black leading-normal opacity-70 mt-[18px]">
                {obj.subheading}
              </p>
              <p className="flex items-center gap-2 font-normal text-sm sm:text-base text-black leading-normal opacity-70 mt-3">
                <CorrectIcon />
                <span>{obj.correct}</span>
              </p>
              <p className="flex items-center gap-2 font-normal text-sm sm:text-base text-black leading-normal opacity-70 mt-[6px]">
                <CorrectIcon />
                <span> {obj.correctTwo}</span>
              </p>
              <h3 className="font-normal text-sm sm:text-base text-black leading-normal mt-11">
                <span
                  className="font-normal text-4xl md:text-4xxl text-dark-blue
               leading-normal"
                >
                  ${obj.dollerAdd}
                </span>
                <span className="opacity-70">{obj.buildAnnual}</span>
              </h3>
              <div className="flex flex-col sm:flex-row items-center sm:gap-4 mt-7">
                <CommonBtn
                  arialabel={obj.arialabel}
                  class="!py-3 sm:!py-[16px] sm:!px-[26px] max-sm:w-full"
                  btn={obj.button}
                />
                <p className="font-normal text-sm sm:text-base text-black opacity-70 leading-normal pt-[9px] sm:pt-0">
                  {obj.noCredit}
                </p>
              </div>

              <button
                aria-label="mostpopular"
                className={`${
                  index === 1 &&
                  "absolute !block -top-8 lg:-top-7 right-[50%] max-lg:translate-x-[50%] py-3 px-[21px] lg:-right-5 xl:-right-7  font-normal text-xl sm:text-2xl"
                } py-3 px-[23px] sm:py-[14px] hidden sm:px-[35px] rounded bg-dark-blue text-xl sm:text-2xl text-white font-normal !leading-[166%] pointer-events-none`}
              >
                {obj.mostPopular}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
