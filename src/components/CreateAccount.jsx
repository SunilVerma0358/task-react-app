import React, { useEffect, useState } from "react";
import { CreateAccountArr } from "../common/helper";
import VisaIcon from "../assets/images/svg/VisaIcon.svg";
import {
  CalendarIcon,
  CardNumberIcon,
  EmailIcon,
  HomeAddressIcon,
  LocationelleipesLeft,
  LocationelleipesRight,
  SecurityCodeIcon,
} from "../common/icon";
import CommonBtn from "../common/CommonBtn";
const CreateAccount = () => {
  const [inputData, setInputData] = useState({
    Address: "",
    CardNumber: "",
    ExpireDate: "",
    SecuitryCode: "",
    Email: "",
  });
  const [formError, setFormError] = useState({
    Address: "",
    CardNumber: "",
    ExpireDate: "",
    SecuitryCode: "",
    Email: "",
  });
  const [Success, setSuccess] = useState(false);
 const inputControl = (e) => {
   const { name, value } = e.target;
   const maxLengths = {
     SecuitryCode: 3,
     CardNumber: 16,
     ExpireDate: 4, // Set the maxLength for ExpireDate including the slash
   };

   if (name === "ExpireDate") {
     // Remove all non-digits and limit length to 4 (2 for month and 2 for year)
     let numericValue = value.replace(/\D/g, "").slice(0, 4);

     // Add a slash after the month if the length is more than 2
     let formattedValue =
       numericValue.length > 2
         ? numericValue.slice(0, 2) + "/" + numericValue.slice(2)
         : numericValue;

     setInputData({
       ...inputData,
       [name]: formattedValue,
     });
   } else if (maxLengths[name]) {
     // Handle other inputs with maxLength constraints
     setInputData({
       ...inputData,
       [name]: value.slice(0, maxLengths[name]),
     });
   } else {
     // For inputs without a maxLength constraint
     setInputData({
       ...inputData,
       [name]: value,
     });
   }
 };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    const regex = {
      Address: /^[a-zA-Z\s]+$/,
      Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
      CardNumber: /^\d{12}$/,
      ExpireDate: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
      SecuitryCode: /^\d{4}$/,
    };
    const error = {};
    if (!regex.Address.test(inputData.Address)) {
      error.Address = "Address is invaild";
    }
    if (!regex.Email.test(inputData.Email)) {
      error.Email = "Email is invaild";
    }
    if (!regex.CardNumber.test(inputData.CardNumber)) {
      error.CardNumber = " CardNumber is invaild";
    }
    if (!regex.ExpireDate.test(inputData.ExpireDate)) {
      error.ExpireDate = " ExpireDate is invaild";
    }
    if (!regex.SecuitryCode.test(inputData.SecuitryCode)) {
      error.SecuitryCode = "Security Code is invaild";
    }

    setFormError(error);
    if (Object.keys(error).length === 0) {
      setSuccess(true);
    }
  };

  const handlePopupClose = () => {
    setSuccess(false);
    setInputData({
      Address: "",
      CardNumber: "",
      ExpireDate: "",
      SecuitryCode: "",
      Email: "",
    });
    setFormError({
      Address: "",
      CardNumber: "",
      ExpireDate: "",
      SecuitryCode: "",
      Email: "",
    });
  };
  useEffect(() => {
    if (Success) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [Success]);

  return (
    <section
      id="login"
      className={`${
        Success ? "z-[100]" : " z-[2]"
      } relative max-w-[1920px] mx-auto py-16 sm:pt-20 sm:pb-10  md:pt-[98px] lg:pb-[93px]`}
    >
      <div className="absolute top-4 sm:top-20 left-0 -z-10 pointer-events-none">
        <LocationelleipesLeft />
      </div>
      <div className="absolute -bottom-4 sm:bottom-[21%] right-0 -z-10 pointer-events-none">
        <LocationelleipesRight />
      </div>
      <div className="max-w-[1164px] mx-auto px-6 sm:px-3">
        <h2
          data-aos="fade-down"
          className="font-light text-dark-blue text-2xxl sm:text-4xl md:text-5xl leading-[100%] text-center"
        >
          Create your <span className="font-extrabold">Account</span>
        </h2>
        <p className=" font-normal text-black opacity-70 text-base sm:text-base leading-normal text-center mt-2">
          Join now and protect your family's phones
        </p>
        <div className="flex flex-row max-md:flex-wrap gap-5  mt-8 sm:mt-14 md:mt-[72px] items-center justify-center md:justify-between">
          <div className=" w-full max-w-[424px]  ">
            <h3 className="font-light text-2xl sm:text-3xl md:text-3xxl text-dark-blue !leading-[120%] mb-4">
              Get a <span className="font-extrabold">24 hour</span> trial!
            </h3>
            {CreateAccountArr.map((obj, index) => (
              <p
                key={index}
                className="flex items-center gap-2 mt-[18px] md:mt-[11.5px]"
              >
                <span>{obj.Icon}</span>
                <span className="font-normal text-black leading-normal sm:text-base text-sm opacity-70">
                  {obj.heading}
                </span>
              </p>
            ))}
            <div className="bg-white rounded-xl shadow-CreateAccountCard max-sm:p-6 sm:p-[18px] max-w-[424px] mt-7 sm:mt-10">
              <p className="font-normal text-sm sm:text-base text-black opacity-70 leading-normal text-center ">
                Terms: Users must be 16 or over. Pricing options are shown on
                the payment page. Create an account to start a 24 hour trial
                with full access to all our tools. The service can be cancelled
                by the user at any time from within their account.{" "}
                <span className="text-dark-sky">View full terms.</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-[679px] mt-[32px] md:mt-0">
            <div className="flex justify-between items-center bg-dark-blue py-6 px-2 sm:px-5 sm:py-[14px] rounded-t-xl">
              <h3 className="flex items-center gap-[6px] sm:gap-3">
                <span className="w-[20px] sm:w-[22px] h-[20px] sm:h-[22px] bg-white rounded-[22px] border-[3px] sm:border-4 border-dark-sky"></span>
                <span className="font-normal text-2xl sm:text-xl lg:text-3xxl text-white !leading-[120%]">
                  Debit/Credit Card
                </span>
              </h3>
              <div className="max-w-16 sm:max-w-[164px]">
                <img className="w-full" src={VisaIcon} alt="visa icon" />
              </div>
            </div>
            <div className="bg-white shadow-AdvantagesCard border border-dark-gray-custom border-t-0 rounded-b-xl sm:pt-[30px] px-2 sm:px-[23px] py-[42px] sm:pb-9">
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <p className="font-normal sm:text-base text-sm text-dark-blue !leading-6">
                    {" "}
                    Your Address
                  </p>
                  <div className="flex border border-light-gray-custom rounded mt-[6px] sm:mt-2">
                    <div className="w-12 h-[45px] sm:h-[52px] bg-gray-ededed rounded-s flex justify-center items-center">
                      <HomeAddressIcon />
                    </div>
                    <label htmlFor="address"></label>
                    <input
                      onChange={inputControl}
                      name="Address"
                      id="address"
                      value={inputData.Address}
                      type="text"
                      placeholder="Address Line 1"
                      className="placeholder:text-dark-blue placeholder:font-normal placeholder:text-sm sm:placeholder:text-base max-sm:px-5 max-sm:py-[10.5px] sm:p-[14px] w-full outline-none"
                    />
                  </div>
                  <p
                    className={` ${
                      formError.Address
                        ? "text-red-700"
                        : "text-gray-959595"
                    } font-normal sm:text-base text-sm leading-normal mt-2 sm:mt-1`}
                  >
                    {formError.Address
                      ? formError.Address
                      : "Our enter address manually"}
                  </p>
                </div>
                <div className="mt-[18px] sm:mt-5 relative">
                  {" "}
                  <p className="font-normal sm:text-base text-sm text-dark-blue leading-normal mt-[18px] sm:mt-5">
                    {" "}
                    Email Address
                  </p>
                  <div className="flex border border-light-gray-custom rounded mt-[6px] sm:mt-2">
                    <div className="w-12 h-[45px] sm:h-[52px] bg-gray-ededed rounded-s flex justify-center items-center">
                      <EmailIcon />
                    </div>
                    <label htmlFor="email"></label>
                    <input
                      name="Email"
                      onChange={inputControl}
                      type="email"
                      id="email"
                      value={inputData.Email}
                      placeholder="Email Address"
                      className=" placeholder:text-dark-blue placeholder:font-normal placeholder:text-sm sm:placeholder:text-base max-sm:px-5 max-sm:py-[10.5px] sm:p-[14px] w-full outline-none"
                    />
                  </div>
                  {formError.Email && (
                    <p className="absolute left-0 -bottom-6 font-normal sm:text-base text-sm text-red-700 leading-normal mt-2 sm:mt-1">
                      {formError.Email}
                    </p>
                  )}
                </div>
                <div className="mt-[18px] sm:mt-5 relative">
                  <p className="font-normal sm:text-base text-sm text-dark-blue leading-normal ">
                    Card Number (Visa or Mastercard)
                  </p>
                  <div className="flex border border-light-gray-custom rounded mt-[6px] sm:mt-2">
                    <div className="w-12 h-[45px] sm:h-[52px] bg-gray-ededed rounded-s flex justify-center items-center">
                      <CardNumberIcon />
                    </div>
                    <label htmlFor="cardnumber"></label>
                    <input
                      name="CardNumber"
                      onChange={inputControl}
                      value={inputData.CardNumber}
                      type="number"
                      id="cardnumber"
                      placeholder="Valid Card Number"
                      className="placeholder:text-dark-blue placeholder:font-normal placeholder:text-sm sm:placeholder:text-base max-sm:px-5 max-sm:py-[10.5px] sm:p-[14px] w-full outline-none"
                    />
                  </div>
                  {formError.CardNumber && (
                    <p className="font-normal sm:text-base text-sm text-red-700 leading-normal mt-2 sm:mt-1 absolute left-0 -bottom-6">
                      {formError.CardNumber}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-[18px] sm:mt-5">
                  <div className="w-1/2 relative">
                    <p className="font-normal sm:text-base text-sm text-dark-blue leading-normal ">
                      Expiry Date
                    </p>
                    <div className="flex border border-light-gray-custom rounded mt-[6px] sm:mt-2">
                      <div className="w-12 h-[45px] sm:h-[52px] bg-gray-ededed rounded-s flex justify-center items-center">
                        <CalendarIcon />
                      </div>
                      <label htmlFor="expiredate"></label>
                      <input
                        name="ExpireDate"
                        onChange={inputControl}
                        value={inputData.ExpireDate}
                        type="text"
                        id="expiredate"
                        placeholder="MM/YY"
                        className=" placeholder:text-dark-blue placeholder:font-normal placeholder:text-sm sm:placeholder:text-base max-sm:px-5 max-sm:py-[10.5px] sm:p-[14px] w-full outline-none"
                      />
                    </div>
                    {formError.ExpireDate && (
                      <p className="font-normal sm:text-base text-sm text-red-700 leading-normal mt-2 sm:mt-1 absolute left-0 -bottom-6">
                        {formError.ExpireDate}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2 relative">
                    <p className="font-normal sm:text-base text-sm text-dark-blue leading-normal ">
                      Card Security Code
                    </p>
                    <div className="flex border border-light-gray-custom rounded mt-[6px] sm:mt-2">
                      <div className="w-12 h-[45px] sm:h-[52px] bg-gray-ededed rounded-s flex justify-center items-center">
                        <SecurityCodeIcon />
                      </div>
                      <label htmlFor="securitycode"></label>
                      <input
                        id="securitycode"
                        name="SecuitryCode"
                        onChange={inputControl}
                        value={inputData.SecuitryCode}
                        type="number"
                        maxLength={3}
                        placeholder="E.x @ 0123"
                        className=" placeholder:text-dark-blue placeholder:font-normal placeholder:text-sm sm:placeholder:text-base max-sm:px-5 max-sm:py-[10.5px] sm:p-[14px] w-full outline-none"
                      />
                    </div>
                    {formError.SecuitryCode && (
                      <p className="font-normal sm:text-base text-sm text-red-700 leading-normal mt-2 sm:mt-1 absolute left-0 -bottom-6">
                        {formError.SecuitryCode}
                      </p>
                    )}
                  </div>
                </div>
                <CommonBtn
                  arialabel="buynow"
                  type="submit"
                  class="w-full mt-[30px] sm:mt-[46px] py-3 sm:py-4"
                  btn="Buy Now (50C)"
                />
              </form>
              {Success && (
                <div className="bg-black bg-opacity-40  fixed top-0 left-0 right-0 bottom-0 z-50">
                  {" "}
                  <div className="bg-white px-4 py-3 rounded-md shadow-inputNumber fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">
                    <p className="text-black font-semibold text-center  ">
                      Form submitted successfully
                    </p>
                    <div className="flex items-center gap-3 justify-center pt-5">
                      <button
                        aria-label="close"
                        onClick={handlePopupClose}
                        className="bg-blue-700 text-white rounded-lg px-3 py-2"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CreateAccount;
