import React from 'react';
import cart from '../../Assets/images/Bag.svg';
import smallCart from '../../Assets/images/smallCart.svg'

const Header = () => {

    return (

        <nav className="bg-none">
            <div className=" flex flex-wrap items-center justify-between pt-[40px] mx-[80px] md:pt-[25px] max-xs:pt-[15px] max-xs:mx-[30px] max-sm:pt-[18px] max-sm:mx-[37px] max-md:mx-[40px] max-md:pt-[20px]">
                <a href="#" className="flex items-center">
                    <span className='text-[white] font-Gilroy-Bold text-[28px] leading-[33px] tracking-[0.01em] md:text-[20px] max-xs:text-[25px]'>Panto</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 " aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul class="flex flex-col font-medium  md:p-0 mt-4  text-center rounded-lg text-[white] md:flex-row md:space-x-8 md:mt-0  ">
                        
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center  w-full  pl-5 pr-4   p-0  md:p-0 md:w-auto  text-[white] rounded font-Gilroy-Medium text-[18px] leading-[21px] max-xs:text-[13px] max-md:text-[14px] justify-center">Furniture <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                            <div id="dropdownNavbar" class="z-10 hidden font-normal divide-y  rounded-lg  ">
                                <ul class="py-2 text-sm max-xs:leading-[0.25rem] max-xs:ml-[129px] max-xs:mt-[-37px] max-xs:text-[12px] max-md:ml-[151px] max-md:mt-[-39px] max-md:leading-[8px]" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" class="block px-4 py-2">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2">Earnings</a>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li >
                            <a href="#" className=" xl:ml-[64px] lg:ml-[30px] md:ml-[20px] font-Gilroy-Medium text-[18px] max-md:text-[14px] leading-[21px] max-xs:text-[13px] ">Shop</a>
                        </li>
                        <li >
                            <a href="#" className="xl:ml-[64px] lg:ml-[30px] md:ml-[20px] font-Gilroy-Medium text-[18px]  max-md:text-[14px] leading-[21px] max-xs:text-[13px] ">About Us</a>
                        </li>
                        <li >
                            <a href="#" className=" xl:ml-[64px]  lg:ml-[30px] md:ml-[20px] font-Gilroy-Medium text-[18px] max-md:text-[14px] leading-[21px] max-xs:text-[13px]">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className='relative flex '>
                    <img src={cart} alt="" />
                    <div className='absolute left-[17px]'><img src={smallCart} alt="" /></div>
                </div>
            </div>
        </nav>


    )
}

export default Header