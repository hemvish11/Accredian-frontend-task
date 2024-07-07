import React from 'react'
import RightBlack from "../../../assets/Arrows/RightBlack.svg";

const SideBarBtn = ({title}) => {
    return (
        <>
            <a href="#" className="flex gap-2 items-center justify-between py-3 px-6 text-gray-700 hover:bg-gray-100">
                <span>{title}</span>
                <img src={RightBlack} alt="RightBlack" />
            </a>
            <p className=' border-b border-b-[#ccc] border-b-[80%] w-[90%] mx-auto mt-1'></p>
        </>
    )
}

export default SideBarBtn