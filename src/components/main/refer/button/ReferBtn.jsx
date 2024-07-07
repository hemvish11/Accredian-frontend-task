import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsReferralBoxOpened } from '../../../../features/referralBoxSlice';

const ReferBtn = () => {
    const dispatch = useDispatch();
    const isReferralBoxOpened = useSelector((state)=>state.box.isReferralBoxOpened);

    const handleClose = () => {
        dispatch(setIsReferralBoxOpened(!isReferralBoxOpened));
    }
    return (
        <button onClick={() => handleClose()} className="bg-[#1A73E8] text-white px-8 py-2 rounded-md text-[15px]/[24px] lg:text-[16px]/[24px] 3xl:text-[20px]/[24px]">Refer Now</button>
    )
}

export default ReferBtn