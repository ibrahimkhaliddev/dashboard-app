import React, { useState, Fragment } from "react";
import copyBtn from '../img/copy-btn.svg';
import chevronDown from '../img/chevron-down.png'
import editIcon from '../img/editIcon.png';
import johnWalker from '../img/johnWalker.png'
import lemonMemon from '../img/lemonMemon.png'
import chom from '../img/chom.png'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import CompanyPopup from "../components/companyPopup";

const publishingOptions = [
  { title: 'Inviting', description: 'waiting for response', current: true },
  { title: 'Remove from Invite', description: 'Remove a list from invite', current: false },
]

const memberOptions = [
  { title: 'Members', description: 'Can edit all project and invite', current: true },
  { title: 'Admin', description: 'Can manage team setting', current: false },
  { title: 'Remove from team', description: 'Remove a list from a team', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TeamsPage = () => {
  const [selected, setSelected] = useState(publishingOptions[0])
  const [selectedMember, setSelectedMember] = useState(memberOptions[0])

  const [accountName, setAccountName] = useState([
    { name: 'Zaviago', id: '1', email: 'www.zaviago.co.th' },
    { name: 'กำลังรอการตอบรับ...', id: '2', email: 'thinkoutthebox@email.com' },
  ]);

  const users = [
    { id: '1', name: 'John walker', email: 'walktothemoon@email.com', img: johnWalker },
    { id: '2', name: 'Chom Chom', email: 'Chomchom001@email.com', img: chom },
    { id: '3', name: 'Lemon Memon', email: 'lemonmemon@email.com', img: lemonMemon }
  ];

  const [isOpen2, setIsOpen2] = useState(false);
  const handleInviteClick2 = () => {
    setIsOpen2(!isOpen2);
  }
  const closePopUp2 = () => {
    setIsOpen2(false);
    console.log('false')
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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedList, SetSelectedList] = useState('สมาชิก');
  const [selectedItem, setSelectedItem] = useState(0);
  const handleInviteClickDrop = () => {
    setIsOpen(!isOpen);
  }
  const memberItems = [
    {
      title: 'สมาชิก',
      description: 'ไม่สามารถเข้าส่วนตั้งค่าระบบได้'
    },
    {
      title: 'แอดมิน',
      description: 'สามารถทำทุกอย่างได้เหมือนคุณ'
    },
    {
      title: 'ยกเลิกคำเชิญ',
      description: 'ยกเลิกการเชิญเข้าร่วมทีม'
    },
  ];
  const handleClick = (index, title) => {
    setSelectedItem(index);
    SetSelectedList(title)
    setIsOpen(!isOpen)
  };

  const [isOpenPending, setIsOpenPending] = useState(false);
  const pendingList = [
    { title: 'ยกเลิกคำเชิญ', description: 'ยกเลิกการเชิญเข้าร่วมทีม' }
  ];
  const handlePandingDropdown = () => {
    setIsOpen(false)
    setIsOpenPending(!isOpenPending)
  }



  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedFilterList, setSelectedFilterList] = useState('ตัวกรอง');
  const filterList = [
    { title: 'ทั้งหมด' },
    { title: 'แอดมิน' },
    { title: 'สมาชิก' },
  ];
  const handleFilterClick = (index, title) => {
    setSelectedFilter(index);
    setSelectedFilterList(title);
    setIsOpenFilter(false);
  };
  const handleFilterDropdown = () => {
    setIsOpen(false)
    setIsOpenPending(false)
    setIsOpenFilter(!isOpenFilter)
  }

  const [members, setMembers] = useState([
    {
      image: johnWalker,
      name: 'John Walker',
      email: 'example@mail.com',
      role: '',
    },
    {
      image: chom,
      name: 'Chom Chom',
      email: 'example@mail.com',
      role: '',
    },
    {
      image: lemonMemon,
      name: 'Lemon Memon',
      email: 'example@mail.com',
      role: '',
    },
    {
      image: lemonMemon,
      name: 'Lemon Memon',
      email: 'example@mail.com',
      role: '',
    },
    {
      image: lemonMemon,
      name: 'Lemon Memon',
      email: 'example@mail.com',
      role: '',
    },
    {
      image: johnWalker,
      name: 'John Walker',
      email: 'example@mail.com',
      role: '',
    },
    {
      image: lemonMemon,
      name: 'Lemon Memon',
      email: 'example@mail.com',
      role: '',
    },]);

  const [isOpenRole, setIsOpenRole] = useState(new Array(members.length).fill(false));
  const roleList = [
    { title: 'สมาชิก', description: 'ไม่สามารถเข้าส่วนตั้งค่าระบบได้' },
    { title: 'แอดมิน', description: 'สามารถทำทุกอย่างได้เหมือนคุณ' },
    { title: 'ลบออกจากทีม', description: 'ลบสมาชิกออกจากทีม' },
  ];

  const handleRoleDropdown = (index) => {
    setIsOpenRole((prevIsOpenRole) => {
      const updatedState = [...prevIsOpenRole];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
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
  return (
    <div className="page-section">
      <div className="mx-auto dashboard-container pb-5 gap-x-8 pt-16">
        <h1 className="font-bold text-[20px]">ทีมและสมาชิก</h1>
        <p className="mt-[9px] sukhumvit font-medium text-[13px] text-[#505A62]">โดยจะแสดงทีมของและสมาชิกที่คุณได้เข้าร่วม โดยสามารถเปลี่ยนหน้าการตั้งค่าทีมได้จาก<br />ปุ่ม Account --{'>'} Switch Team เพื่อเปลี่ยนทีมที่ต้องการแสดง</p>
        <div className="border border-[#F2F2F2] p-[40px] mt-7 rounded-t-[20px]">
          <div className="flex items-center">
            <div className="w-[39px] h-[39px] bg-[#0788FF] text-white flex items-center justify-center rounded-md text-[23px] font-semibold">{accountName[0].name[0]}</div>
            <div className="relative flex flex-col ml-[15px]">
              <div className="flex">
                <h1 className="font-inter text-[#1F272E] text-lg font-semibold">{accountName[0].name}</h1>
                <button onClick={handleInviteClick2} className="ml-3"> <img src={editIcon} className="w-[11px]" alt="" /> </button>
              </div>
              <p className="paras text-xs">{accountName[0].email}
                <ul className="inline-block list-disc ml-7">
                  <li>Member since : May 20, 2023</li>
                </ul>
              </p>
            </div>
          </div>

          {isOpen2 &&
            <div>
              <div className="popup-overlay"></div>
              <div>
                <div className='sm:w-[511px] w-[40%]  bg-white rounded-2xl sm:right-[30%]  sm:left-auto left-[2%] popup-container z-[199] relative'>
                  <CompanyPopup closePopUp2={closePopUp2} />
                </div>
              </div>
            </div>
          }

          <div className="mt-[30px] font-13">

            <label htmlFor="invite-members" className="block text-[13px] font-sukhumvit font-medium text-gray-700">
              ส่งคำเชิญสมาชิกเข้าทีมผ่านอีเมลหรือลิงก์
            </label>
            <div className="relative mt-[6px] flex items-center">
              <input
                type="text"
                name="invite-members"
                id="invite-members"
                value={email} onBlur={handleEmailBlur} onFocus={handleEmailFocus} onChange={handleEmailChange}
                className="block w-full h-[34px] focus-visible:outline-none rounded-md border-gray-300 font-sukhumvit shadow-sm text-xs bg-[#F4F5F6] py-2 px-[14px]"
                placeholder="เฉพาะเจ้าของเท่านั้นที่สามารถส่งคำเชิญได้"
                style={{ border: `2px solid ${borderColor}` }}
              />
              <div className="absolute right-[90px] inset-y-0 flex items-center" onClick={handleInviteClickDrop}>
                <p
                  id="members-role"
                  name="members-role"
                  className="block font-sukhumvit w-[100%] py-2 mr-4 text-xs focus:outline-none sm:text-xs bg-transparent paras cursor-pointer"
                  defaultValue="Members"
                >
                  {selectedList}
                </p>
                {isOpen && (
                  <div className='w-[160px] absolute mt-[210px] right-[10%] bg-white border border-[#F2F2F2] rounded-md p-1'>
                    <ul className='space-y-1'>
                      {memberItems.map((item, index) => (
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
                <div className="flex bg-white basis-7 h-[26px] w-[26px] p-[4px] rounded-[5px] items-center justify-center relative tooltipButton">
                  <span className="tooltip font-sukhumvit">คัดลอก</span>
                  <button>
                    <img src={copyBtn} />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="ml-3 block items-center rounded-lg border text-center w-[80px] border-transparent text-[13px] font-medium text-white shadow-sm focus:outline-none focus:ring-offset-2 btn font-sukhumvit font-13 btn-primary-shadow h-[34px]"
                style={{ padding: "4px 0px" }}
                onClick={handleFormSubmit}
              >
                ส่งคำเชิญ
              </button>
            </div>
          </div>
          {error && (<p className='font-normal text-[12px] mt-2 font-sukhumvit text-[#EF4444]'> {error} </p>)}

          <div className="mt-10">
            <div className="flex mb-2">
              <h1 className=" text-[#1F272E] font-medium font-sukhumvit text-[13px]">กำลังเชิญ
                <ul className="inline-block list-disc ml-7">
                  <li className="font-sukhumvit font-medium">สมาชิก 1 คน</li>
                </ul>
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="w-[39px] h-[39px] bg-[#0788FF] text-white flex items-center justify-center rounded-md text-[23px] font-semibold">{accountName[1].email[0]}</div>
                <div className="relative flex flex-col ml-[15px]">
                  <h1 className="font-inter text-[#1F272E] text-[13px] font-semibold">{accountName[1].name}</h1>
                  <p className="paras text-xs">{accountName[1].email}</p>
                </div>
              </div>

              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only"> Invite </Listbox.Label>
                    <div className="relative">
                      <div className="inline-flex rounded-md">
                        <div className="inline-flex rounded-md">
                          <div className="inline-flex items-center rounded-l-md py-2 pl-3 paras">
                            <p className="ml-2.5 text-xs font-medium">สมาชิก</p>
                          </div>
                          <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md p-2 text-sm font-medium paras" onClick={handlePandingDropdown}>
                            <span className="sr-only">Invite</span>
                            <ChevronDownIcon className="h-5 w-5 paras" aria-hidden="true" />
                          </Listbox.Button>
                          {isOpenPending && (
                            <div className='w-[160px] absolute right-[10px] bg-white border border-[#F2F2F2] rounded-md p-1 mt-8'>
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
                  </>
                )}
              </Listbox>
            </div>
          </div>
        </div>

        <div className="border border-[#F2F2F2] p-[34px] rounded-b-[20px] border-t-0">
          <div className="flex">
            <h1 className=" text-[#1F272E] font-medium font-sukhumvit text-[13px]">กำลังเชิญ
              <ul className="inline-block list-disc ml-7">
                <li className="font-sukhumvit font-medium">สมาชิก 3 คน</li>
              </ul>
            </h1>
          </div>

          <div className="mt-[30px] font-13">
            <div className="relative mt-[6px] flex items-center">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#545556"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              </div>
              <input
                type="text"
                name="invite-members"
                id="invite-members"
                className="block w-full font-sukhumvit h-[34px] rounded-md border-gray-300 shadow-sm text-sm bg-[#F4F5F6] py-2 px-[14px] pl-9"
                placeholder="ค้นหาสมาชิก"
              />
              <button
                type="button"
                className="ml-3 w-[90px] items-center rounded-lg block border border-transparent text-sm font-medium shadow-sm focus:outline-none focus:ring-offset-2 font-13 h-[34px] bg-[#F3F3F3] text-gray-700"
                style={{ padding: "4px 5px" }}
                onClick={handleFilterDropdown}
              >
                {selectedFilterList}
              </button>
              {isOpenFilter && (
                <div className="w-[160px] absolute right-[10px] bg-white border border-[#F2F2F2] rounded-md p-1 mt-[160px] z-10">
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

          <div className="mt-10">
            <div className="gap-y-[24px]">
              {/* {users.map((user) => (
                <div className="flex justify-between w-full">
                  <div className="flex" key={user.id}>
                    <div className="text-white flex items-center justify-center rounded-md text-[23px] font-semibold">
                      {user.img === '' ? user.name[0] : <img src={user.img} className="w-[48px] h-[48px] rounded-md" alt={user.img} />}
                    </div>
                    <div className="relative flex flex-col ml-[15px]">
                      <h1 className="font-sukhumvit text-[#1F272E] text-[13px] font-semibold">{user.name}</h1>
                      <p className="paras text-xs">{user.email}</p>
                    </div>
                  </div>

                  <Listbox value={selectedMember} onChange={setSelectedMember}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className="sr-only"> Invite </Listbox.Label>
                        <div className="relative">
                          <div className="inline-flex rounded-md">
                            <div className="inline-flex rounded-md">
                              <div className="inline-flex items-center rounded-l-md py-2 pl-3 paras">
                                <p className="ml-2.5 text-xs font-medium">{selectedMember.title}</p>
                              </div>
                              <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md p-2 text-sm font-medium paras">
                                <span className="sr-only">Invite</span>
                                <ChevronDownIcon className="h-5 w-5 paras" aria-hidden="true" />
                              </Listbox.Button>
                            </div>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute right-0 z-10 mt-1 w-72 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {memberOptions.map((option) => (
                                <Listbox.Option
                                  key={option.title}
                                  className={({ active }) =>
                                    classNames(
                                      active ? 'text-white bg-[#0099FF]' : 'text-gray-900',
                                      'cursor-default select-none p-4 text-sm m-2 rounded-[3px]'
                                    )
                                  }
                                  value={option}
                                >
                                  {({ selected, active }) => (
                                    <div className="flex flex-col">
                                      <div className="flex justify-between">
                                        <p className={selected ? 'font-semibold' : 'font-normal'}>{option.title}</p>
                                      </div>
                                      <p className={classNames(active ? 'text-white' : 'text-[#777777]', 'mt-2')}>
                                        {option.description}
                                      </p>
                                    </div>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              ))} */}

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
                      <div className="relative">
                        <div className="flex items-center cursor-pointer" onClick={() => handleRoleDropdown(index)}>
                          <button className="font-sukhumvit font-medium text-[12px] text-[#687178]">
                            {member.role || "ตัวกรอง"}
                          </button>
                          <img src={chevronDown} className="w-[6px] ml-2" alt="" />
                        </div>
                        {isOpenRole[index] && (
                          <div className="absolute mt-1 w-[160px] bg-white z-10 right-[0%] border border-[#F2F2F2] rounded-md p-1">
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
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamsPage;