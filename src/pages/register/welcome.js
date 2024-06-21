import React, { useState, Fragment, useEffect } from "react";
import logo from '../../img/logo.svg'
import particle from '../../img/particle.svg'
import { Link } from "react-router-dom";

const Welcome = () => {
  const [welcome, setWelcome] = useState(true)
  const [fillNum, setFillNum] = useState(false)
  const [fillOTP, setFillOTP] = useState(false)
  const [warnFillOTP, setWarnFillOTP] = useState(false)
  const [countdown, setCountdown] = useState(30);
  const [warnFillPhone, setWarnFillPhone] = useState(false)
  const [errorPhoneBorder, setErrorPhoneBorder] = useState('#F4F5F6')
  const [errorOtpBorder, setErrorOtpBorder] = useState('#F4F5F6')
  const [resendOtpButton, setResendOtpButton] = useState(false)

  const handleWelcome = () => {
    setWelcome(false)
    setFillNum(true)
  }

  const handleFillNum = () => {
    const isValid = /^(8|9|6|0(?=[689]))[0-9]{8,9}$/.test(phoneNumValue) && phoneNumValue.length >= 9 && phoneNumValue.length <= 10;
    if (!isValid) {
      setWarnFillPhone(true);
      setErrorPhoneBorder('#EF4444')
    } else {
      setFillNum(false)
      setFillOTP(true)
      const timer = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 0) {
            clearInterval(timer);
            setResendOtpButton(true)
            return prevCountdown;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
      return () => clearInterval(timer);
    }



  }


  const [phoneNumValue, setPhoneNumValue] = useState("");
  const handleChangePhoneInput = (e) => {
    setPhoneNumValue(e.target.value)
  }

  const handleWarnFillPhone = () => {
    if (document.getElementById("phone-num").value !== "") {
      setWarnFillPhone(false);
    }
  }

  const handleChangeNum = () => {
    setFillOTP(false)
    setFillNum(true)
  }

  const handleFillOTP = () => {
    if (document.getElementById("one").value === "" || document.getElementById("two").value === "" || document.getElementById("three").value === "" || document.getElementById("four").value === "" || document.getElementById("five").value === "" || document.getElementById("six").value === "") {
      setWarnFillOTP(true);
      setErrorOtpBorder('#EF4444')
    } else {
      window.location.href = "/register";
    }
  }

  const handleWarnFillOTP = () => {
    if (document.getElementById("one").value !== "" && document.getElementById("two").value !== "" && document.getElementById("three").value !== "" && document.getElementById("four").value !== "" && document.getElementById("five").value !== "" && document.getElementById("six").value !== "") {
      setWarnFillOTP(false);
    }
  }



  return (
    <>
      {/* Welcome */}
      {welcome && (
        <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
          <div className="login-box flex flex-col justify-center border border-[#F2F2F2] px-10 py-[60px] text-center rounded-lg" style={{ border: "1p solid #F2F2F2", boxShadow: "0 0px 39px 0 #00000008" }}>
            <div className="flex justify-center">
              <img src={logo} width="54px" />
            </div>
            <h1 className="text-[#1F272E] text-[21px] mt-8 text-center font-semibold">ยินดีต้อนรับสู่  <span className="font-bold" style={{ fontFamily: 'Poppins' }}>zaviago</span></h1>
            <button className="inline-block bg-[#11C052] py-[10px] font-sukhumvit font-semibold text-white rounded-lg mt-8 w-[304px] text-[13px] m-auto">สมัครสมาชิกผ่าน LINE</button>

            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-[#EBEEF0]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-[11px] font-medium text-[#333C44] sukhumvit">หรือ</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="sukhumvit text-xs text-[#909090]">มีบัญชีแล้ว? 
                <span className="ml-1 text-[#909090] sukhumvit text-xs font-medium cursor-pointer decoration-solid underline" onClick={handleWelcome}>คลิกที่นี่เพื่อเข้าสู่ระบบ</span>
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Fill Num */}
      {fillNum && (
        <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
          <div className="login-box flex flex-col justify-center px-10 py-[60px] text-center">
            <h1 className="text-[#1F272E] font-bold text-[18px] mt-8 text-center" style={{ fontFamily: "Eventpop" }}>กรอกเบอร์โทรศัพท์เพื่อรับรหัส OTP</h1>
            <p className="font-sukhumvit text-[#1F272E] text-xs font-normal mt-[10px] w-[270px] mx-auto">รหัส OTP จะส่งไปยังหมายเลขโทรศัพท์ของคุณ
              เพื่อทำการยืนยันตัวตน</p>

            <div className="flex gap-x-[11px] w-[304px] m-auto mt-6">
              <div className="w-1/4">
                <select
                  id="location"
                  name="location"
                  className="mt-1 block h-[38px] w-[63px] rounded-md border-gray-300 py-2 px-[10px] text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                  defaultValue="+66"
                >
                  <option>+66</option>
                  <option>+23</option>
                  <option>+88</option>
                </select>
              </div>

              <div className="w-[230px]">
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone-num"
                    id="phone-num"
                    className="block w-full h-[38px] rounded-md shadow-sm focus:outline-none focus:border focus:border-[#DDDDDD] text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 pl-4"
                    placeholder="123-456-7890"
                    onChange={handleChangePhoneInput}
                    value={phoneNumValue}
                    autoComplete="off"
                    style={warnFillPhone ? { border: `1px solid ${errorPhoneBorder}` } : {}}

                  />
                  {warnFillPhone && (<p className="required text-left font-sukhumvit font-medium text-[10px] mt-[10px] warn">หมายเลขไม่ถูกต้อง</p>)}
                </div>
              </div>
            </div>


            <button className="inline-block font-sukhumvit font-bold bg-[#0099FF] text-white leading-[20px] rounded-lg mt-[11px] w-[304px] h-[30px] text-[13px] m-auto btn-primary-shadow" onClick={handleFillNum}>ขอรหัส OTP</button>

            <div className="mt-5">
              <h2 className="font-sukhumvit text-xs font-medium leading-[19.5px] text-[#909090]">หมายเลขโทรศัพท์ที่ระบุจะเพิ่มไปยังโปรไฟล์ของคุณ <br />โปรดศึกษาข้อมูลเพิ่มเติมที่
                <span className="ml-1 text-[#909090] sukhumvit cursor-pointer decoration-solid underline">นโยบายความเป็นส่วนตัว</span>
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Fill OTP */}
      {fillOTP && (
        <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
          <div className="login-box flex flex-col justify-center px-10 py-[60px] text-center">
            <div className="flex justify-center">
              <img src={particle} width="32px" />
            </div>
            <h1 className="text-[#1F272E] font-bold text-[18px] mt-[20px] text-center mb-[19px]" style={{ fontFamily: "Eventpop" }}>ยืนยันรหัส OTP</h1>
            <p className="sukhumvit text-xs font-medium">ระบุรหัส 6 หลักที่คุณได้รับทาง SMS ผ่านเบอร์</p>
            <p className="text-[#1F272E] sukhumvit text-xs font-medium">082-345-6789</p>

            <div className="flex gap-x-[11px] w-[304px] m-auto mt-[24px]">

              <div className="w-full flex gap-x-[18px]">
                <div className="mt-1">
                  <input
                    type="text"
                    name="one"
                    id="one"
                    maxLength={1}
                    className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("two").focus(), 5) : null}
                    style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="two"
                    id="two"
                    maxLength={1}
                    className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("three").focus(), 5) : setTimeout(() => document.getElementById("one").focus(), 5)}
                    style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="three"
                    id="three"
                    maxLength={1}
                    className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("four").focus(), 5) : setTimeout(() => document.getElementById("two").focus(), 5)}
                    style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="four"
                    id="four"
                    maxLength={1}
                    className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("five").focus(), 5) : setTimeout(() => document.getElementById("three").focus(), 5)}
                    style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="five"
                    id="five"
                    maxLength={1}
                    className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? setTimeout(() => document.getElementById("six").focus(), 5) : setTimeout(() => document.getElementById("four").focus(), 5)}
                    style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="six"
                    id="six"
                    maxLength={1}
                    className="block w-full h-[34px] rounded-md focus:outline-none focus:border shadow-sm focus:border-[#DDDDDD] font-bold text-lg text-center focus:ring-indigo-500 bg-[#F4F5F6] py-2" onKeyUp={handleWarnFillOTP} onKeyDown={(e) => e.key !== "Backspace" ? null : setTimeout(() => document.getElementById("five").focus(), 5)}
                    style={warnFillOTP ? { border: `1px solid ${errorOtpBorder}` } : {}}
                  />
                </div>
              </div>

            </div>

            {warnFillOTP && (<p className="required text-left font-sukhumvit font-medium text-[10px] mt-[10px] warn">รหัส OTP ไม่ถูกต้อง</p>)}

            <button className="inline-block bg-[#0099FF] text-white rounded-lg mt-[11px] w-[304px]  h-[30px] text-[13px] font-bold m-auto btn-primary-shadow" onClick={handleFillOTP}>ยืนยัน OTP</button>
            <p className="text-[#909090] text-xs leading-[19.5px] font-medium font-sukhumvit mt-[21px]">
              ขอรหัส OTP ใหม่อีกครั้งใน {' '}
              {resendOtpButton ? (
                <button className="ml-2">Resend</button>
              ) : (`00:${countdown} วินาที`)}
            </p>


            <div className="relative mt-[15px]">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-[#EBEEF0]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-[11px] font-medium text-[#333C44] sukhumvit">หรือ</span>
              </div>
            </div>

            <div className="mt-[15px]">
              <h2 className="sukhumvit text-md">
                <span className="ml-1 text-[#909090] font-sukhumvit text-xs leading-[19.5px] font-medium cursor-pointer decoration-solid underline" onClick={handleChangeNum}>เปลี่ยนเบอร์มือถือ</span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Welcome;