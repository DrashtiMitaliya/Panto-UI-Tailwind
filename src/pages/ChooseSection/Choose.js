import React from 'react'
import { chooseData } from '../../components/constant/ChooseData';
import aero from '../../Assets/images/orange_aero.svg'
const Choose = () => {



    return (
        <div className='grid'>
            <div className="row flex px-[80px] py-[120px]">
                <div className="column w-1/4 font-[Gilroy-Bold] text-[42px] " >
                    <p className='w-[242px] leading-[49px] mt-[38px]'>Why Choosing Us</p>
                </div>
                <div className='column w-3/4 ms-[100px]'>
                    <div className="row flex">
                        {chooseData.map((item) => (
                            <div className='mr-[28px]'>
                                <div>
                                    <p className='font-[Gilroy-Bold] text-[24px] mb-[20px] leading-[28px] opacity-[0.9]'>{item.name}</p>
                                </div>
                                <div>
                                    <p className='font-[Gilroy-Regular] text-[16px] mb-[14px] leading-[30px] opacity-[0.9] w-[284px]'>{item.detail}</p>
                                </div>
                                <div className='flex' >
                                    <span>More Info</span>
                                    <img src={aero} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose