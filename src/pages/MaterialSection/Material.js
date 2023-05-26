import React from "react";
import materialImg from "../../Assets/images/material_image_2.svg";
import orangeAero from "../../Assets/images/orange_aero.svg";

const Material = () => {
  return (
    <div className="mt-[270px]  max-xs:mt-[80px] max-sm:mt-[100px] max-md:mt-[120px] max-lg:mt-[160px] ">
      <div className="container-fluid">
        <div className="flex max-xl:flex-col">
          <div className="xl:w-1/2 w-full mt-[83px] pl-[80px] max-xl:text-center max-xl:p-3 max-xxl:pl-[50px] max-xs:mt-[28px] max-sm:mt-[50px]  max-md:mt-[60px]  max-lg:mt-[70px] max-xl:order-2">
            <div className="font-Gilroy-Medium text-[#E58411] text-[18px] leading-[21px] mb-[20px] tracking-[0.175em] max-xs:text-[14px] max-sm:text-[15px] max-md:text-[16px]">
              MATERIALS
            </div>
            <div className="font-Gilroy-Bold text-[42px] leading-[49px] mb-[20px] w-[413px] max-xl:w-full max-xs:text-[30px] max-xs:leading-[37px] max-sm:text-[32px] max-sm:leading-[40px] max-md:text-[38px] max-md:leading-[38px] max-lg:text-[40px] max-lg:leading-[40px]">
              Very Serious Materials For Making Furniture
            </div>
            <div className="font-Gilroy-Regular text-[18px] leading-[33px] opacity-[0.8] mb-[24px] w-[556px] max-xl:w-full  max-xs:text-[12px] max-xs:leading-[28px] max-sm:text-[15px] max-sm:leading-[30px] max-md:text-[16px] max-md:leading-[32px] max-lg:text-[17px]">
              You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality
              materials
            </div>
            <div className="flex max-xl:justify-center">
              <span className="text-[#E58411] font-Gilroy-Medium text-[14px] leading-[26px] mr-[17px] max-xs:text-[11px] max-xs:mr-[2px] max-sm:text-[12px] max-sm:mr-[4px] max-md:text-[13px] max-md:mr-[8px] max-lg:text-[13.5px] max-lg:mr-[10px]">
                More Info{" "}
              </span>
              <img src={orangeAero} alt="" />
            </div>
          </div>
          <div className="xl:w-1/2 w-full">
            <img src={materialImg} alt="" className="max-w-full max-xl:ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material;
