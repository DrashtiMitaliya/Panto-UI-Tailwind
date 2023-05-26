import React from "react";
import { chooseData } from "../../constant/ChooseData";
import aero from "../../Assets/images/orange_aero.svg";
const Choose = () => {
  return (
    <div className="my-[120px] max-xl:my-[67px] ">
      <div className="container mx-auto">
        <div className="flex max-xl:flex-col items-center justify-center px-[32px] ">
          <div className="xl:w-1/4 w-full">
            <p className="w-[242px] font-Gilroy-Bold text-[42px] leading-[49px] mt-[38px] max-xl:text-center max-xl:mb-10 max-xl:w-full max-xs:text-[25px] max-xs:mb-[1.5rem] max-sm:text-[28px] max-md:text-[35px] max-lg:text-[38px] max-xl:text-[40px]">
              Why Choosing Us
            </p>
          </div>
          <div className="xl:w-3/4 w-full  ">
            <div className="grid lg:grid-cols-3  grid-cols-1 gap-3 max-lg:text-center">
              {chooseData.map((item) => (
                <div className="ml-[28px] max-xxl:m-0">
                  <div>
                    <p className="font-[Gilroy-Bold] text-[24px] mb-[20px] leading-[28px] opacity-[0.9] max-md:text-center max-lg:text-center max-xs:text-[20px] max-xs:mb-[0.5rem]">
                      {item.name}
                    </p>
                  </div>
                  <div >
                    <p className="font-[Gilroy-Regular] text-[16px] mb-[14px] leading-[30px] opacity-[0.8] w-[284px] max-md:w-full max-lg:text-center max-lg:w-full max-xs:text-[12px]">
                      {item.detail}
                    </p>
                  </div>
                  <div className="flex max-lg:justify-center  ">
                    <span className="font-[Gilroy-Medium] text-[14px] leading-[26px] text-aeroColor max-xs:text-[8px] ">
                      More Info
                    </span>
                    <img src={aero} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
