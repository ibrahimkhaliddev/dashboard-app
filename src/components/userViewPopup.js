import React, { useState } from 'react';
import chevronDown from '../img/chevron-down.png'
import closeIcon from '../img/closeIcon.png'
import MFrame from '../img/MFrame.png'
import addPlus from '../img/addPlus.png'
import ZFrame from '../img/ZFrame.png'
import errorIcon from '../img/errorIcon.png'
import IFrame from '../img/IFrame.png'

function UserViewPopup({ closePopUp2 }) {

    const [input, setInput] = useState('')

    const handleClosePopup = () => {
        closePopUp2()
    }

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleFormSubmit = () => {

    }

    return (
        <>
            <div>
                <div className='py-6 px-5 border-b border-[#e6e2e2]'>
                    <div className='flex justify-between'>
                        <h3 className='font-sukhumvit font-bold text-[#333333] text-lg'>เพิ่มสมาชิก</h3>
                        <button onClick={handleClosePopup}> <img src={closeIcon} alt="" /></button>
                    </div>
                </div>
                <div className=' border-b border-[#e6e2e2]'>

                    <div className='py-6 px-5 '>
                        <h3 className='font-sukhumvit font-semibold text-sm text-[#333333] mb-3'>ทีมของคุณ</h3>
                        <div className='flex items-center'>
                            <div className='w-[40px]'>
                                <img src={MFrame} alt="" className='w-[33px] aspect-1 border border-[white] outline outline-[#0788FF] rounded-md' />
                            </div>
                            <div className='flex justify-between w-full ml-5'>
                                <div>
                                    <h3 className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>Mysite</h3>
                                    <p className='font-inter font-normal text-[12px] text-[#687178]'>www.mybysite.get.zaviago.com</p>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <button className='font-inter font-medium text-[10px] rounded-full shadow-sm px-4 py-1 bg-[#E5F5FF] text-[#113182]'>Active</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mt-5'>
                            <div className='w-[40px]'>
                                <img src={addPlus} alt="" className='w-[40px] aspect-1 rounded-md' />
                            </div>
                            <div className='flex justify-between w-full ml-5'>
                                <div>
                                    <div className='flex'>
                                        <h3 className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>เพิ่มทีมใหม่</h3>
                                        <button className='font-inter font-medium text-[10px] rounded-full shadow-sm px-3 py- bg-[#E5F5FF] text-[#0099FF] ml-2'>Pro</button>
                                    </div>
                                    <p className='font-inter font-normal text-[12px] text-[#687178] mt-1'>อัปเดตแพ็กเกจเป็น Pro เพื่อเพิ่มทีมใหม่</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <h3 className='font-sukhumvit font-semibold text-sm text-[#333333] mb-3'>ทีมอื่นๆ</h3>
                    <div className='flex items-start'>
                        <div className='w-[40px]'>
                            <img src={ZFrame} alt="" className='w-[38px] aspect-1 rounded-md' />
                        </div>
                        <div className='flex justify-between w-full ml-5'>
                            <div>
                                <h3 className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>Zaviago.co.th</h3>
                                <p className='font-inter font-normal text-[12px] text-[#687178]'>www.zaviago.co.th</p>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <button className='font-inter font-medium text-[10px] rounded-full shadow-sm px-4 py-1 bg-[#E5F5FF] text-[#113182]'>Active</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start mt-5'>
                        <div className='w-[40px]'>
                            <img src={IFrame} alt="" className='w-[38px] aspect-1rounded-md' />
                        </div>
                        <div className='flex justify-between w-full ml-5'>
                            <div>
                                <h3 className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>Ink.shop</h3>
                                <p className='font-inter font-normal text-[12px] text-[#687178]'>www.Ink.shop.get.zaviago.com</p>
                                <div className='flex mt-1'>
                                    <img src={errorIcon} className='w-[10px] h-[12px]' alt="" />
                                    <p className='font-sukhumvit font-normal text-[10px] text-[#EF4444] ml-2'>กำลังจะปิดตัวลงในวันที่ 12/03/2023</p>
                                </div>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <button className='font-inter font-medium text-[10px] rounded-full shadow-sm px-4 py-1 bg-[#FFE6E6] text-[#821111]'>Disabled</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start mt-5'>
                        <div className='w-[40px]'>
                            <img src={ZFrame} alt="" className='w-[38px] aspect-1 rounded-md' />
                        </div>
                        <div className='flex justify-between w-full ml-5'>
                            <div>
                                <h3 className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>Zaviago.co.th</h3>
                                <p className='font-inter font-normal text-[12px] text-[#687178]'>www.zaviago.co.th</p>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <button className='font-inter font-medium text-[10px] rounded-full shadow-sm px-4 py-1 bg-[#E5F5FF] text-[#113182]'>Active</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserViewPopup
