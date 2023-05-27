import React from 'react';
import facebook from '../../../Assets/images/Facebook.svg';
import twitter from '../../../Assets/images/Twitter.svg';
import instagram from '../../../Assets/images/Instagram.svg'

const Footer = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <div className='container m-auto '>
            <div className=' py-[118px] max-lg:py-[50px] max-sm:py-[30px] max-xs:py-[25px] xl:flex max-md:text-center'>
                <div className=' w-auto '>
                    <div className='font-Gilroy-Bold text-[28px] leading-[33px] tracking-[0.01em] mb-[29px] ml-[52px] max-md:mx-0 max-lg:text-center max-lg:m-auto max-lg:w-full max-xl:m-auto max-xl:w-full max-xl:text-center'>Panto</div>
                    <div className='font-Gilroy-Medium leading-[24px] opacity-[0.8] w-[293px]  ml-[52px] max-md:w-full max-md:ml-0 max-md:px-2 max-lg:text-center max-lg:m-auto max-lg:p-5 max-lg:w-full max-xl:m-auto max-xl:w-full max-xl:text-center max-xl:p-5'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</div>
                </div>
                <div className=' w-auto xl:flex max-md:mt-[30px] lg:flex md:flex max-lg:justify-around max-xl:justify-start max-lg:mt-[50px]  max-xl:mt-[60px]'>
                    <ul className='ml-[170px] max-md:ml-0 max-lg:ml-0  '>
                        <li className='text-[#F6973F] font-DM-Sans text-[17px] leading-[22px] mb-[20px]'>Services</li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'> <a href="">Email Marketing</a></li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'><a href="">Campaings</a></li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'><a href="">Branding</a></li>
                    </ul>
                    <ul className='ml-[170px] max-md:ml-0 max-lg:ml-0'>
                        <li className='text-[#F6973F] font-DM-Sans text-[17px] leading-[22px] mb-[20px]'>Furniture</li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'> <a href="">Beds</a></li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'><a href="">Chair</a></li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'><a href="">All</a></li>
                    </ul>
                    <ul className='ml-[170px] max-md:ml-0 max-lg:ml-0 '>
                        <li className='text-[#F6973F] font-DM-Sans text-[17px] leading-[22px] mb-[20px]'>Follow Us</li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'> <a href="" className='flex gap-[1.5rem] max-md:justify-center'> <img src={facebook}  alt="" />Facebook</a></li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'><a href=""  className='flex gap-3 max-md:justify-center'><img src={twitter} alt="" />Twitter</a></li>
                        <li className='font-Gilroy-Medium leading-[24px] text-[15px] opacity-[0.8] mb-[16px]'><a href=""  className='flex gap-3 max-md:justify-center'><img src={instagram} alt="" />Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className='xl:flex lg:flex max-md:text-center pb-[56px] '>
                <div className='xl:w-1/2 w-full ml-[52px] opacity-[0.5] font-DM-Sans text-[15px] tracking-[400] max-lg:ml-0 max-lg:text-center max-xl:ml-[163px]
                max-lg:pb-5'>Copyright © 2021</div>
                <div className='xl:flex max-md:text-center xl:w-1/2 w-full justify-evenly max-lg:text-center ' >
                    <div className="text-[15px] opacity-[0.8]   font-Gilroy-Medium">Terms & Conditions</div>
                    <div className='text-[15px] opacity-[0.8]  font-Gilroy-Medium'>Privacy Policy</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer