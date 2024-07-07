import React from 'react'
import howToRefer from "../../../assets/HowDoIRefer.svg";
import ReferBtn from './button/ReferBtn';

const HowDoIRefer = () => {
    return (
        <div className='bg-[#EEF5FF] pb-4 relative'>
            <p className="bg-[#EEF5FF] mt-4 p-4 lg:p-6 lg:pb-8 relative z-20 text-center text-[21px]/[40px] lg:text-[35px]/[50px] 2xl:text-[40px]/[60px] 3xl:text-[44px]/[65px] ">How do I <span className="text-[#1A73E8] font-bold">Refer?</span></p>
            <div className='flex items-center justify-center bg-[#EEF5FF] -mt-[10px]'>
                <img src={howToRefer} alt='How do I refer steps' className='relative z-10' />
            </div>
            <div className='flex items-center justify-center relative -mt-[10px] z-20 py-8'>
                <ReferBtn />
            </div>

        </div>
    )
}

export default HowDoIRefer;