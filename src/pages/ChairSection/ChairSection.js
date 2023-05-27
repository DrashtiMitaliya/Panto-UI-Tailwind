import React from "react";
import plus from "../../Assets/images/Vector.svg";
import aero from "../../Assets/images/orange_aero.svg";
import Slider from "react-slick";
import fiveStar from "../../Assets/images/5Star.svg";
import ChairDataNew from "../../constant/ChairData";

const ChairSection = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {ChairDataNew.map((chair) => (
        <div className="relative px-[21px]  mt-[130px] max-xl:w-60 ">
          <div className="h-[255px]  bg-[#FAFAFA]">
            <img src={chair.url} className="absolute top-[-35px] max-xxl:left-[35px] left-[2rem] z-100 " alt="" />
          </div>
          <div className="px-[21px] rounded-b-[20px] pt-[13px] pb-[27px] bg-[white]">
            <div className="font-Inter text-[17px] leading-[20px] text-[#8D8D8D] mb-[6px]">
              Chair
            </div>
            <div className="font-Inter text-[21px] leading-[26px] mb-[8px] font-[600]">
              {chair.name}
            </div>
            <img src={fiveStar} alt="" />

            <div className="mt-[38px] justify-between flex items-center">        
                <div className="flex  justify-around font-Inter text-[21px] font-[600]">
                  <span className="mb-[5px] text-[15px] mr-[3px]">$</span>
                  {chair.price} 
                </div>
                <button className="bg-[black] rounded-[31px] w-[48px] h-[48px] flex items-center justify-center"> <img src={plus}   alt="" /></button>
  
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ChairSection;
