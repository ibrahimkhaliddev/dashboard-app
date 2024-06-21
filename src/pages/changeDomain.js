import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

const ChangeDomain = () => {
    const [isModifiedFree, setIsModifiedFree] = useState(false);
    const [isModifiedPro, setIsModifiedPro] = useState(false);
    const [openPro, setOpenPro] = useState(false)

    const cancelButtonRef = useRef(null)

    const backToFree = () => {
      setOpenPro(false);
      document.getElementById("free").checked = true;
    }

    const typeDomain = () => {
      if (document.getElementById("free").value === ""){
        setIsModifiedFree(false);
      } else {
        setIsModifiedFree(true);
      }
    }

    const plans = [
      { id: 'free', name: 'ใช้ .getzaviago โดเมนฟรี', description: 'หากเลือกเป็น ส่วนลดส่วนบุคคล จำเป็นต้องเลือกรายชื่อลูกค้าสำหรับมอบส่วนลด', pro: false, input: (
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="getzaviago-domain"
            id="getzaviago-domain"
            className="block bg-[#F4F5F6] text-sm p-3 pr-40 w-[500px] focus-within:outline-none"
            onChange={typeDomain}
          />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 bg-[#F4F5F6]">
              <span className="text-gray-500 sm:text-sm">.aca.fc.zaviago.com</span>
            </div>
        </div>
      )},
      { id: 'pro', name: 'เชื่อมต่อโดเมนที่คุณเป็นเจ้าของ', pro: true, description: 'เชื่อมต่อโดเมนที่คุณเป็นเจ้าของ', input: (
        <div>
          <div className="relative mt-1 rounded-md shadow-sm w-[500px]">
          <input
            type="text"
            name="own-domain"
            id="own-domain"
            className="block bg-[#F4F5F6] text-sm p-3 w-[500px] focus-within:outline-none"
            placeholder="www.mywebsite.com" disabled
            onChange={typeDomain}
          />
          </div>
        </div>
      ) },
    ]

    return (
        <div className="page-section">
          <div className="mx-auto dashboard-container pb-5 gap-x-8 pt-16">
            <h1 className="font-bold text-[20px] text-[#1F272E]">โดเมนตั้งค่าเอง</h1>
            <p className="sukhumvit mt-[9px] mb-[31px] text-[#505A62] text-sm">โดเมนคือชื่อของ URL ที่เราต้องการให้แสดงบนลิ้งของเว็บไซต์ <br/>โดยคุณสามารถเปลี่ยนชื่อโดเมนของคุณเองได้</p>

            <fieldset>
              <legend className="sr-only">Plan</legend>
                <div className="border border-gray-200 bg-white p-10 border-b-0" style={{ borderRadius: "20px 20px 0 0" }}>
                  <div className="space-y-10">
                    <div key='free' className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id='free'
                          aria-describedby={`free-description`}
                          name="plan"
                          type="radio"
                          defaultChecked={true}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onClick={() => {document.getElementById("pro").checked ? setOpenPro(true) : setOpenPro(false)}}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor='free' className="font-medium text-gray-700 text-[18px]">
                          <span style={{fontFamily:"Eventpop"}}>
                          ใช้ .getzaviago โดเมนฟรี
                          </span>
                        </label>
                        <p id={`free-description`} className="text-gray-500">
                          <span className="sukhumvit mt-[10px] mb-4 inline-block">สามารถใช้ A-Z, a-z, 0-9 และ - ได้เท่านั้น</span>
                          <div className="flex items-center m-auto">
                            <div className="relative mt-1 rounded-md">
                              <input
                                type="text"
                                name="getzaviago-domain"
                                id="getzaviago-domain"
                                className="block bg-[#F4F5F6] text-sm p-3 pr-40 w-[500px] focus-within:outline-none rounded-md"
                                onChange={typeDomain}
                              />
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 bg-[#F4F5F6] rounded-md">
                                <span className="text-gray-500 sm:text-sm">.aca.fc.zaviago.com</span>
                              </div>
                            </div>
                            <button type="submit" className={isModifiedFree ? "bg-[#2490EF] text-white px-5 py-3 rounded-md font-13 btn-primary-shadow mt-1 ml-4" : "bg-[#F4F5F6] text-[#B0B0B0] px-5 py-3 rounded-md font-13 mt-1 ml-4"} disabled={isModifiedFree ? 'true' : 'false'}>ตรวจสอบ</button>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 bg-white p-10" style={{ borderRadius: "0 0 20px 20px" }}>
                  <div className="space-y-10">
                    <div key='pro' className="relative flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id='pro'
                          aria-describedby={`pro-description`}
                          name="plan"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onClick={() => {document.getElementById("pro").checked ? setOpenPro(true) : setOpenPro(false)}}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor='pro' className="font-medium text-gray-700 text-[18px]" style={{fontFamily:"Eventpop"}}>
                        ใช้โดเมนที่คุณเป็นเจ้าของ<span className="ml-[9px] inline-flex items-center rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">Pro</span>
                        </label>
                        <p id={`pro-description`} className="text-gray-500">
                          <span className="sukhumvit mt-[10px] mb-4 inline-block">คุณสามารถใช้ชื่อโดเมนที่คุณเป็นเจ้าของแทนโดเมนของเราได้</span>
                          <div className="flex items-center m-auto">
                            <div>
                              <div className="relative mt-1 rounded-md w-[500px]">
                              <input
                                type="text"
                                name="own-domain"
                                id="own-domain"
                                className="block bg-[#F4F5F6] text-sm p-3 w-[500px] focus-within:outline-none rounded-md"
                                placeholder="www.mywebsite.com" disabled
                                onChange={typeDomain}
                              />
                              </div>
                            </div>
                            <button type="submit" className={isModifiedPro ? "bg-[#2490EF] text-white px-5 py-3 rounded-md font-13 btn-primary-shadow mt-1 ml-4" : "bg-[#F4F5F6] text-[#B0B0B0] px-5 py-3 rounded-md font-13 mt-1 ml-4"} disabled={isModifiedPro ? 'true' : 'false'}>ตรวจสอบ</button>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </fieldset>
          </div>

          <Transition.Root show={openPro} as={Fragment}>
            <Dialog as="div" className="relative z-[99]" initialFocus={cancelButtonRef} onClose={backToFree}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 max-w-lg p-6">
                    <div>
                      <div className="mt-3 text-center">
                        <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-[#333333] sukhumvit">
                          ใช้โดเมนที่คุณเป็นเจ้าของ
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md paras sukhumvit">
                          อัปเดตแพ็กเกจ <span className="inline-flex items-center rounded-full bg-[#E5F5FF] px-2.5 py-0.5 text-xs font-medium text-[#0099FF]">Pro</span> <br/>เพื่อเปิดใช้งานฟังก์ชันนี้
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-[30px]">
                      <button
                        type="button"
                        className="bg-[#F4F5F6] text-[#B0B0B0] px-5 py-3 rounded-md font-13"
                        onClick={backToFree}
                        ref={cancelButtonRef}
                      >
                        ยกเลิก
                      </button>
                      <button
                        type="button"
                        className="bg-[#2490EF] text-white px-5 py-3 rounded-md font-13 btn-primary-shadow mt-1 ml-4"
                        onClick={backToFree}
                      >
                        อัปเดตแพ็กเกจ
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    )
}

export default ChangeDomain