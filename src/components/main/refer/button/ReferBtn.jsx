import React from 'react'

const ReferBtn = ({referBoxOpened,setReferBoxOpened}) => {
    return (
        <button onClick={() => setReferBoxOpened(!referBoxOpened)} className="bg-[#1A73E8] text-white px-8 py-2 rounded-md text-[15px]/[24px] lg:text-[16px]/[24px] 3xl:text-[20px]/[24px]">Refer Now</button>
    )
}

export default ReferBtn