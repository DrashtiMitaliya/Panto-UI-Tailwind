import React, { useState } from "react";
import ChairSection from "../ChairSection/ChairSection";
import orangeAero from '../../Assets/images/orange_aero.svg'

const Product = () => {
  const [activeProduct, setActiveProduct] = useState("Chair");

  return (
    <div className="bg-productBgColor my-[18px]">
      <div className="text-titleColor font-Gilroy-Bold text-[42px] py-[32px] text-center  max-xs:text-[25px] max-sm:text-[28px] max-md:text-[35px] max-lg:text-[38px] max-xl:text-[40px]">
        Best Selling Product
      </div>

      <div className="text-center flex bg-productButtonBgColor w-[348px] p-[6px] rounded-[44px] m-auto justify-around  max-xs:w-[250px] max-xs:p-[4px] ">
        <div
          className={`products  py-[10px] ${
            activeProduct === "Chair" ? "active" : ""
          }`}
        >
          <button>
            <div
              className="px-[21px] max-xs:px-[10px] max-xs:text-[14px]  font-Gilroy-Medium opacity-[0.8] "
              eventKey="chair"
              onClick={() => setActiveProduct("Chair")}
            >
              Chair
            </div>
          </button>
        </div>

        <div
          className={`products  py-[10px] ${
            activeProduct === "Beds" ? "active" : ""
          }`}
        >
          <button>
            <div
              className="px-[21px] max-xs:px-[10px]  max-xs:text-[14px] font-Gilroy-Medium opacity-[0.8]"
              eventKey="beds"
              onClick={() => setActiveProduct("Beds")}
            >
              Beds
            </div>
          </button>
        </div>

        <div
          className={`products  py-[10px] ${
            activeProduct === "Sofa" ? "active" : ""
          }`}
        >
          <button>
            <div
              className="px-[21px] max-xs:px-[10px] max-xs:text-[14px] font-Gilroy-Medium opacity-[0.8]"
              eventKey="sofa"
              onClick={() => setActiveProduct("Sofa")}
            >
              Sofa
            </div>
          </button>
        </div>

        <div
          className={`products  py-[10px] ${
            activeProduct === "Lamp" ? "active" : ""
          }`}
        >
          <button>
            <div
              className="px-[21px] max-xs:px-[10px]  max-xs:text-[14px] font-Gilroy-Medium opacity-[0.8]"
              eventKey="lamp"
              onClick={() => setActiveProduct("Lamp")}
            >
              Lamp
            </div>
          </button>
        </div>
      </div>

      <div className="container pb-[87px] px-[16px] max-xxl:m-auto">
        <ChairSection />
      </div>

      <div className="flex justify-center pb-[50px] ">
        <span className="font-Gilroy-Medium text-[18px] text-[#E58411] pr-2 ">
          View All
        </span>
        <img src={orangeAero} alt="" />
      </div>
    </div>
  );
};

export default Product;
