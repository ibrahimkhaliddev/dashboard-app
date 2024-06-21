import React, { useState } from 'react';
import chevronDown from '../img/chevron-down.png'
import closeIcon from '../img/closeIcon.svg'

function CompanyPopup({ closePopUp2 }) {

const [input, setInput] = useState('')

    const handleClosePopup = () => {
        closePopUp2()
    }

    const handleInputChange =(event)=>{
        setInput(event.target.value)
    }

    const [email, setEmail] = useState('');
    const [borderColor, setBorderColor] = useState('#F4F5F6');
    const [error, setError] = useState('');
    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setError('');
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setError('กรุณากรอกอีเมลที่ถูกต้อง');
            setBorderColor('#EF4444');
            return;
        } else {
            setBorderColor('#DDDDDD');
            setError('');
        }
    };

    const handleEmailFocus = () => {
        console.log(error.length)
        if (error.length > 0) {
            setBorderColor('#DDDDDD');
        } else if (email.length === '') {
            setBorderColor('none');
        } else {
            setBorderColor('#DDDDDD');
        }
        setError('');
    };

    const handleEmailBlur = () => {
        setBorderColor('#F4F5F6');
    };

    return (
        <>
            <div className='p-6'>
                <div className=''>
                    <div className='flex justify-between'>
                        <h3 className='font-sukhumvit font-bold text-[#333333] text-lg'>แก้ไขชื่อทีม</h3>
                        <button onClick={handleClosePopup}> <img src={closeIcon} alt="" /></button>
                    </div>
                </div>
                <div className='mt-4'>
                        <p className='font-sukhumvit font-medium text-[#333333] text-[13px]'> กรอกชื่อที่คุณต้องการแก้ไข </p>
                        <div className=''>
                            <div className={`bg-[#F4F5F6] rounded-md mt-2 px-1 h-[32px]`} style={{ border: `2px solid ${borderColor}` }}>
                                <div>
                                    <input type="text" value={email} onBlur={handleEmailBlur} onFocus={handleEmailFocus} onChange={handleEmailChange} placeholder='Zaviago' className={`bg-[#F4F5F6] font-sukhumvit font-medium text-[12px] placeholder-[9CA3AF] pl-4 focus:outline-none h-[17px] w-full`} />
                                </div>
                                {error && (<p className='font-normal text-[12px] mt-2 font-sukhumvit text-[#EF4444]'> {error} </p>)}
                            </div>
                            <div className='mt-5 text-right'>
                            <button onClick={handleClosePopup} className='sm:w-[75px] w-[67px] h-[32px] cursor-pointer ml-4 bg-[#F3F3F3] text-[#333333] rounded-md font-sukhumvit font-bold text-[13px]'>ยกเลิก</button>
                            <button  style={{boxShadow: 'rgba(0, 153, 255, 0.2) 0px 4px 4px'}}  className='sm:w-[75px] w-[67px] h-[32px] cursor-pointer ml-4 bg-[#0099FF] text-white rounded-md font-sukhumvit font-bold text-[13px]'>บันทึก</button>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default CompanyPopup
