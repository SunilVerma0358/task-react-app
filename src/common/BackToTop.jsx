import React, { useEffect, useState } from "react";
import { BackToTopIcon } from "./icon";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bg-white hover:bg-black rounded-full duration-300 z-[51] bottom-5 right-5"
      >
        <BackToTopIcon />
      </button>
    )
  );
};

export default BackToTop;
