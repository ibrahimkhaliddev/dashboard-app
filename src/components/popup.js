import React, { useState } from 'react';
import chevronDown from '../img/chevron-down.png'
import linkImg from '../img/link.png'
import frameT from '../img/frameT.png'
import dot from '../img/dot.svg'
import searchIcon from '../img/searchIcon.svg'
import johnWalker from '../img/johnWalker.png'
import chom from '../img/chom.png'
import lemonMemon from '../img/lemonMemon.png'
import closeIcon from '../img/closeIcon.svg'
function Popup({ closePopUp }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPending, setIsOpenPending] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const [selectedList, SetSelectedList] = useState('สมาชิก');
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [selectedFilterList, setSelectedFilterList] = useState('ตัวกรอง');
    const [selectedRole, setSelectedRole] = useState(0);
    const [selectedRoleList, setSelectedRoleList] = useState('ตัวกรอง');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [borderColor, setBorderColor] = useState('#F4F5F6');
    const [members, setMembers] = useState([
        {
            image: johnWalker,
            name: 'John Walker',
            email: 'example@mail.com',
            isOwner: true,
            role: 'แอดมิน',
        },
        {
            image: chom,
            name: 'Chom Chom',
            email: 'example@mail.com',
            role: 'สมาชิก',
        },
        {
            image: lemonMemon,
            name: 'Lemon Memon',
            email: 'example@mail.com',
            role: 'สมาชิก',
        },
        {
            image: lemonMemon,
            name: 'Lemon Memon',
            email: 'example@mail.com',
            role: 'สมาชิก',
        },
        {
            image: lemonMemon,
            name: 'Lemon Memon',
            email: 'example@mail.com',
            role: 'สมาชิก',
        },
        {
            image: johnWalker,
            name: 'John Walker',
            email: 'example@mail.com',
            role: 'สมาชิก',
        },
        {
            image: lemonMemon,
            name: 'Lemon Memon',
            email: 'example@mail.com',
            role: 'สมาชิก',
        },]);

    const [isOpenRole, setIsOpenRole] = useState(new Array(members.length).fill(false));
    const roleList = [
        { title: 'สมาชิก', description: 'ไม่สามารถเข้าส่วนตั้งค่าระบบได้' },
        { title: 'แอดมิน', description: 'สามารถทำทุกอย่างได้เหมือนคุณ' },
        { title: 'ลบออกจากทีม', description: 'ลบสมาชิกออกจากทีม' },
    ];

    const handleRoleDropdown = (index) => {
        setIsOpenRole((prevIsOpenRole) => {
            const updatedState = prevIsOpenRole.map((isOpen, i) => (i === index ? !isOpen : false));
            return updatedState;
        });
        setIsOpen(false);
        setIsOpenPending(false);
        setIsOpenFilter(false);
    };

    const handleRoleClick = (index, title) => {
        const updatedMembers = [...members];
        updatedMembers[index].role = title;
        setIsOpenRole((prevIsOpenRole) => {
            const updatedState = [...prevIsOpenRole];
            updatedState[index] = !updatedState[index];
            return updatedState;
        });
        setMembers(updatedMembers);
    };



    const handleClick = (index, title) => {
        setSelectedItem(index);
        SetSelectedList(title)
        setIsOpen(!isOpen)
    };

    const handleFilterClick = (index, title) => {
        setSelectedFilter(index);
        setSelectedFilterList(title);
        setIsOpenFilter(false);
    };



    const handlePandingDropdown = () => {
        setIsOpen(false)
        setIsOpenPending(!isOpenPending)
    }



    const handleFilterDropdown = () => {
        setIsOpenFilter(!isOpenFilter);
        setIsOpen(false);
        setIsOpenPending(false);
        setIsOpenRole(new Array(members.length).fill(false));
    };

    const listItems = [
        { title: 'สมาชิก', description: 'ไม่สามารถเข้าส่วนตั้งค่าระบบได้' },
        { title: 'ผู้ดูแล', description: 'สามารถทำทุกอย่างได้เหมือนคุณ' }
    ];

    const pendingList = [
        { title: 'ยกเลิกคำเชิญ', description: 'ยกเลิกการเชิญเข้าร่วมทีม' }
    ];

    const filterList = [
        { title: 'ทั้งหมด' },
        { title: 'แอดมิน' },
        { title: 'สมาชิก' },
    ];

    const handleDropdownList = () => {
        setIsOpenPending(false)
        setIsOpen(!isOpen)
        setIsOpenFilter(false)
        setIsOpenRole(new Array(members.length).fill(false));
    }

    const handleClosePopup = () => {
        closePopUp()
    }

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
        setFilterBorderColor('#F4F5F6');
    };

    const [filterBorderColor, setFilterBorderColor] = useState('#F4F5F6');
    const handleFilterFocus = () => {
        setFilterBorderColor('#DDDDDD');
    };



    return (
        <>
            <div>
                <div className='py-6 px-5 border-b border-[#e6e2e2]'>
                    <div className='flex justify-between'>
                        <h3 className='font-sukhumvit font-bold text-[#333333] text-lg'>เพิ่มสมาชิก</h3>
                        <button onClick={handleClosePopup}> <img src={closeIcon} alt="" /></button>
                    </div>
                </div>
                <div className='p-6 border-b border-[#e6e2e2]'>

                    <div>
                        <p className='font-sukhumvit font-medium text-[#333333] text-[13px]'> ส่งคำเชิญสมาชิกเข้าทีมผ่านอีเมลหรือลิงก์ </p>
                        <div className='flex justify-between items-end'>
                            <div style={{ border: `1px solid ${borderColor}` }} className={`bg-[#F4F5F6] border border-[${borderColor}] rounded-md mt-2 flex justify-between items-center px-1 h-[32px] w-[80%]`}>
                                <input type="email" placeholder='กรุณากรอกอีเมลของสมาชิกในทีม' onBlur={handleEmailBlur} onFocus={handleEmailFocus} onChange={handleEmailChange} className={`bg-[#F4F5F6] font-sukhumvit w-full font-medium text-[12px] placeholder-[#9CA3AF] ml-4 focus:outline-none w-full`} />
                                <div className='flex items-center w-[120px] justify-end'>
                                    <div>
                                        <div className='flex items-center cursor-pointer ' onClick={handleDropdownList}>

                                            <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>{selectedList}</button>
                                            <img src={chevronDown} className='w-[7px] ml-2' alt="" />
                                        </div>
                                        {isOpen && (
                                            <div className=' shadow-md w-[160px] absolute right-[10%] bg-white border border-[#F2F2F2] rounded-md p-1 mt-4'>
                                                <ul className='space-y-1'>
                                                    {listItems.map((item, index) => (
                                                        <li
                                                            key={index}
                                                            className={`hover:bg-[#0099FF] hover:cursor-pointer py-2 px-1 rounded-md list-class list-none ${selectedItem == index ? 'selected-li' : ''
                                                                }`}
                                                            onClick={() => handleClick(index, item.title)}
                                                        >
                                                            <h4 className='font-inter font-normal text-xs text-black'>
                                                                <span className="list-class">{item.title}</span>
                                                            </h4>
                                                            <p className='font-sukhumvit font-normal text-[10px] text-black'>{item.description}</p>
                                                        </li>
                                                    ))}
                                                </ul>

                                            </div>
                                        )}
                                    </div>
                                    <div className='bg-white w-[22px] h-[21px] mr-[1px] rounded-[5px] flex justify-center items-center ml-3 relative tooltipButton'>
                                        <th className="tooltip  font-sukhumvit">คัดลอก</th>
                                        <img src={linkImg} className='w-[17px] h-[13px]' alt="" />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleFormSubmit} style={{ boxShadow: '0px 4px 4px rgba(0, 153, 255, 0.2)' }} className="sm:w-[75px] w-[100px] h-[32px] ml-4 bg-[#0099FF] cursor-default text-white rounded-md shadow-md font-sukhumvit font-bold text-[13px]">
                                ส่งคำเชิญ
                            </button>
                        </div>
                    </div>
                    {error && (<p className='font-normal text-[12px] mt-1 font-sukhumvit text-[#EF4444]'> {error} </p>)}
                    <div className='mt-6 flex items-center'>
                        <div className='w-[40px]'>
                            <img src={frameT} alt="" className='w-[40px] aspect-1 rounded-md' />
                        </div>
                        <div className='flex justify-between w-full ml-5'>
                            <div>
                                <h3 className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>กำลังรอการตอบรับ...</h3>
                                <p className='font-inter font-normal text-[12px] text-[#687178]'>thinkoutthebox@email.com</p>
                            </div>
                            <div className='flex items-center cursor-pointer' onClick={handlePandingDropdown}>
                                <button className='font-sukhumvit font-medium text-[12px] text-[#687178]'>สมาชิก</button>
                                <img src={chevronDown} className='w-[6px] ml-2' alt="" />
                            </div>
                            {isOpenPending && (
                                <div className=' shadow-md w-[160px] absolute right-[10px] bg-white border border-[#F2F2F2] rounded-md p-1 mt-8'>
                                    <ul className='space-y-1'>
                                        {pendingList.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`hover:bg-[#0099FF] hover:cursor-pointer py-2 px-1 rounded-md list-class list-none 
                                                                }`}
                                            >
                                                <h4 className='font-inter font-normal text-xs text-black'>
                                                    <span className="list-class">{item.title}</span>
                                                </h4>
                                                <p className='font-sukhumvit font-normal text-[10px] text-black'>{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='p-6 pr-0'>
                    <div className='pr-6'>
                        <div className='flex items-center'>
                            <p className='font-sukhumvit font-medium text-[13px] text-[#1F272E]'>สมาชิกในทีม</p>
                            <img src={dot} className='ml-2' alt="" />
                            <p className='font-sukhumvit font-medium text-[13px] text-[#1F272E] ml-2'>สมาชิก 10 คน</p>
                        </div>
                        <div className='flex mt-2 items-center justify-between'>
                            <div style={{ border: `1px solid ${filterBorderColor}` }} className='bg-[#F4F5F6] flex items-center rounded-md px-3 h-[32px] w-full'>
                                <img src={searchIcon} className='w-[14px] h-[14px]' alt="" />
                                <input type="text" onBlur={handleEmailBlur} onFocus={handleFilterFocus} onChange={handleEmailChange} placeholder='ค้นหาสมาชิก' className='bg-[#F4F5F6] w-full font-sukhumvit font-medium text-[12px] placeholder-[#9CA3AF] ml-4 focus:outline-none' />
                            </div>
                            <div>
                                <button
                                    className="flex justify-between items-center bg-[#F3F3F3] w-[75px] h-[32px] ml-4 rounded-md p-2"
                                    onClick={handleFilterDropdown}
                                >
                                    <span className="font-sukhumvit font-bold text-[13px] text-[#333333]">{selectedFilterList}</span>
                                    <img src={chevronDown} className="w-[8px]" alt="" />
                                </button>
                                {isOpenFilter && (
                                    <div className=" shadow-md w-[160px] z-10 absolute right-[10px] bg-white border border-[#F2F2F2] rounded-md p-1 mt-3">
                                        <ul className="space-y-1">
                                            {filterList.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={`hover:bg-[#0099FF] hover:cursor-pointer py-2 px-1 rounded-md list-class list-none ${selectedFilter === index ? 'selected-li' : ''
                                                        }`}
                                                    onClick={() => handleFilterClick(index, item.title)}
                                                >
                                                    <h4 className="font-inter font-normal text-xs text-black">
                                                        <span className="list-class">{item.title}</span>
                                                    </h4>
                                                    <p className="font-sukhumvit font-normal text-[10px] text-black">{item.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='h-[200px] overflow-auto scrollbarDiv mt-5 space-y-4'>
                        {members.map((member, index) => (
                            <div className="flex items-center pr-6" key={index}>
                                <div className="w-[40px]">
                                    <img src={member.image} alt="" className="w-[40px] aspect-1 rounded-md" />
                                </div>
                                <div className="flex justify-between w-full ml-5">
                                    <div>
                                        <h3 className="font-inter font-medium text-[13px] text-[#1F272E]">{member.name}</h3>
                                        <p className="font-inter font-normal text-[12px] text-[#687178]">{member.email}</p>
                                    </div>
                                    {member.isOwner ? (
                                        <div>
                                            <p className="font-sukhumvit font-medium text-[12px] text-[#687178]">เจ้าของ</p>
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <div className="flex items-center cursor-pointer" onClick={() => handleRoleDropdown(index)}>
                                                <button className="font-sukhumvit font-medium text-[12px] text-[#687178]">
                                                    {member.role || "ตัวกรอง"}
                                                </button>
                                                <img src={chevronDown} className="w-[6px] ml-2" alt="" />
                                            </div>
                                            {isOpenRole[index] && (
                                                <div className="absolute mt-[10px] w-[160px] bg-white z-20 right-0 border border-[#F2F2F2] rounded-md p-1">
                                                    <ul className="space-y-1">
                                                        {roleList.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                className={`hover:bg-[#0099FF] hover:cursor-pointer py-2 px-1 rounded-md list-class list-none`}
                                                                onClick={() => handleRoleClick(index, item.title)}
                                                            >
                                                                <h4 className="font-inter font-normal text-xs text-black">
                                                                    <span className="list-class">{item.title}</span>
                                                                </h4>
                                                                <p className="font-sukhumvit font-normal text-[10px] text-black">{item.description}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Popup
