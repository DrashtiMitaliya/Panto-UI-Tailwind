import React from 'react'
import Slider from "react-slick";
import { ClientReview } from "../../constant/ClientReview";
import fiveStar from '../../Assets/images/5Star.svg'

const ReviewSlider = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 4,
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
    <div className="container mx-auto xl:max-w-[1186px] pb-[214px] max-xs:pb-[100px] max-sm:pb-[120px] max-md:pb-[150px] max-lg:pb-[19  0px]">
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
              className="h-[476px] w-[370px] relative max-[390px]:object-cover max-[390px]:w-[277px] max-[390px]:rounded-[19px]"
            >
              <div className="w-full absolute h-[245px]  bottom-[8px]  bg-center   bg-union bg-contain bg-no-repeat  max-[390px]:w-[97%]  max-[390px]:left-[1.5%] max-[390px]:bottom-[-4.5%]  ">
                <img src={client.image} className='absolute top-[3%] left-[43%]  max-[390px]:left-[41%] max-[390px]:top-[13%]' alt="" />
                <div className="text-center absolute top-[28%] left-[18%]  max-[390px]:left-[4%] max-[390px]:top-[35%]">
                    <div className='font-Gilroy-Bold text-[18px] leading-[21px] mb-[6px] max-[390px]:text-[16px]'>{client.title}</div>
                    <div className="font-Gilroy-Regular text-[12px] leading-[14px] opacity-[0.6] mb-[22px] max-[390px]:text-[11px] max-[390px]:leading-[11px] max-[390px]:mb-[10px]   ">{client.name}</div>
                    <div className="font-Gilroy-Regular text-[14px] leading-[16px] opacity-[0.8] w-[252px] m-auto mb-[23px] max-[390px]:text-[12px] max-[390px]:leading-[15px] max-[390px]:mb-[14px]">{client.review}</div>
                    <img src={fiveStar} className='m-auto' alt="" />
                </div>
              </div>
            </div>
          </>
        ))}
      </Slider>

    </div>
  )
}

export default ReviewSlider