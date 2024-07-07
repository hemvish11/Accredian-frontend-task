import React from 'react'
import People from "../../../assets/Hero/People.png"
import ReferBtn from '../refer/button/ReferBtn'
import Money from "../../../assets/Hero/Money.png";


const PeopleWithMobile = ({referBoxOpened,setReferBoxOpened}) => {
    return (
        <div className='relative bg-[#EEF5FF] flex shadow-custom-dark rounded-2xl lg:w-[960px] xl:w-[1160px] 2xl:w-[1260px]  3xl:w-[1360px] h-[364px] lg:h-[400px] xl:h-[480px] 2xl:h-[550px]  3xl:h-[600px] mx-4 lg:mx-auto mb-16'>
            <img src={Money} alt="money" className='z-20 absolute top-0 left-0  w-[75px] lg:w-[100px] 2xl:w-[125px] 3xl:w-[150px]' />
            <div className=" mt-2 xl:mt-4 3xl:mt-8 bg-[#EEF5FF] p-8 text-center z-10 rounded-2xl w-1/2 flex flex-col justify-between items-start">
                <h1 className=" text-left text-[40px]/[40px] md:text-[60px]/[60px] lg:text-[75px]/[75px] xl:text-[85px]/[85px] 2xl:text-[93px]/[88px] 3xl:text-[110px]/[98px] font-bold mb-4 text-[#1A202C] ">Let's Learn & Earn</h1>
                <div>
                    <p className="text-left text-[21px]/[40px] lg:text-[35px]/[50px] 2xl:text-[40px]/[60px] 3xl:text-[44px]/[65px] ">Get a chance to win</p>
                    <p className=" mb-4 text-left text-[21px]/[40px] lg:text-[35px]/[50px] 2xl:text-[40px]/[60px] 3xl:text-[44px]/[65px] ">up-to <span className="text-[#1A73E8] font-bold">Rs. 15,000</span></p>
                </div>
                <ReferBtn referBoxOpened={referBoxOpened} setReferBoxOpened={setReferBoxOpened} />
            </div>

            <img src={People} height={900} width={800} alt="People with mobile" className="rounded-2xl w-1/2 h-[364px] lg:h-[400px] xl:h-[480px] 2xl:h-[550px]  3xl:h-[600px]" />
        </div>
    )
}

export default PeopleWithMobile