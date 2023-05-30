import React from "react";
import Header from "../../components/common/Header";
import search from "../../Assets/images/searchButton.svg";

const Hero = () => {
  return (
    <div className="bg-hero-img h-[1084px] bg-no-repeat bg-center bg-cover max-xs:h-[830px]">
      <Header />

     <div className="">
     <div className="text-[white] mt-[92px] mx-[289px] text-center tracking-[-0.01em] text-[80px] leading-[104px] font-Gilroy-Bold mb-[14px] max-xs:mx-[15px] max-xs:text-[25px] max-xs:leading-[45px] max-xs:mt-[51px] max-xs:mb-[5px] max-sm:mx-[20px] max-sm:text-[30px]  max-sm:leading-[50px] max-sm:mt-[75px]   max-md:mx-[20px] max-md:text-[43px] max-md:leading-[56px] max-lg:mx-[30px] max-xl:mx-[50px]  max-xxl:mx-[60px] max-xxl:mt-[125px] max-[1438px]:mx-[129px] max-lg:text-[58px] max-lg:leading-[74px] max-lg:mt-[108px]">
        Make Your Interior More Minimalistic & Modern
      </div>

      <div className="font-Gilroy-Regular text-[24px] leading-[38px] text-center opacity-[0.8] mx-[416px] text-[white] mb-[45px] max-xxl:mx-[300px] max-xxl:text-[20px] max-xxl:leading-[35px] max-xxl:mb-[14px] max-xs:mx-[40px] max-xs:leading-[21px] max-xs:text-[13px] max-xs:mb-[15px] max-sm:text-[15px] max-sm:mx-[60px] max-md:mx-[30px] max-lg:mx-[35px]  ">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </div>

      <div className="mx-auto w-[300px] sm:w-[344px] relative">
        <input
          className="w-full rounded-[42px] py-[15.5px] pl-[20px] text-[white] outline-0 right-0 ring-transparent  bg-[#ffffff26] font-Gilroy-Regular border-[0.86px] border-[#ffffff99]  opacity-[0.8] text-[18px] leading-[27px] sm:placeholder:text-[18px] max-xs:py-[12px] "
          type="text"
          placeholder="Search furniture"
        />
        <img className="absolute top-[8px] right-[8px] " src={search} alt="" />
      </div>
     </div>
    </div>
  );
};

export default Hero;
