import React from "react";
import Slider from "react-slick";
import { ClientReview } from "../../constant/ClientReview";
import union from "../../Assets/images/Union.svg";

const Review = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="mt-[240px]">
      <div className="text-[#E58411] font-Gilroy-Medium text-center tracking-[0.175em] mb-[20px]">
        TESTIMONIALS
      </div>
      <div className="font-Gilroy-Bold text-center text-[42px] leading-[49px] mb-[60px]">
        Our Client Reviews
      </div>
      <div className="container mx-auto xl:max-w-[1186px] ">
      <Slider {...settings}>
        {ClientReview.map((client) => (
          <>
            <div
              style={{
                background: `url('${client.bgImg}')`,
                margin: "auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="h-[476px] w-[95%] relative"
            >
              <div className="absolute h-[206px] w-[334px]  bottom-[18px] left-[60px] bg-center   bg-union bg-contain bg-no-repeat ">
                
              </div>
            </div>
          </>
        ))}
      </Slider></div>
    </div>
  );
};

export default Review;
