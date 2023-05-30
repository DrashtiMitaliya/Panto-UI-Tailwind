import React from "react";
import ReviewSlider from "../ReviewSlider/ReviewSlider";

const Review = () => {
  return (
    <div className="mt-[240px] max-xs:mt-[100px] max-sm:mt-[100px] max-md:mt-[150px] max-lg:mt-[170px]">
      <div className="text-[#E58411] font-Gilroy-Medium text-center tracking-[0.175em] mb-[20px] max-xs:text-[14px] max-sm:text-[15px] max-md:text-[16px]">
        TESTIMONIALS
      </div>
      <div className="font-Gilroy-Bold text-center text-[42px] leading-[49px] mb-[60px] max-xs:text-[30px] max-xs:leading-[37px] max-sm:text-[32px] max-sm:leading-[40px] max-md:text-[38px] max-md:leading-[38px] max-lg:text-[40px] max-l;g:leading-[40px] max-xs:mb[30px] max-sm:mb-mb[40px] max-md:mb-[50px] max-lg:mb-[55px]">
        Our Client Reviews
      </div>
      <ReviewSlider />
    </div>
  );
};

export default Review;
