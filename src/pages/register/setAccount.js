import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition, RadioGroup } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import crmApps from "../../img/crm-apps.svg";
import pmApps from "../../img/pm-apps.svg";
import insightApps from "../../img/insight-apps.svg";
import hrApps from "../../img/hr-apps.svg";
import salesteamApps from "../../img/salesteam-apps.svg";
import ordersApps from "../../img/orders-apps.svg";
import loadingGif from '../../img/loading.gif'
import checked from '../../img/circle-check.svg'

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const appsList = [
  {
    title: 'CRM',
    description: 'รวบรวมข้อมูลเกี่ยวกับลูกค้า',
    img: crmApps,
    background: '#E5F5FF',
    shadow: '0 4px 32px 0 #88888833'
  },
  {
    title: 'Project Management',
    description: 'ควบคุมการทำงานของทีม',
    img: pmApps,
    background: '#E5F5FF',
    shadow: '0 4px 32px 0 #88888833'
  },
  {
    title: 'Insight',
    description: 'ข้อมูลเชิงลึกทางการตลาด',
    img: insightApps,
    background: '#F6F3FF',
    shadow: '0 4px 32px 0 #88888833'
  },
  {
    title: 'Human Resources',
    description: 'จัดการการทำงานและ<br>รายได้ของบุคคล',
    img: hrApps,
    background: '#F7EBFF',
    shadow: '0 4px 32px 0 #88888833'
  },
  {
    title: 'Sales Team',
    description: 'ข้อมูลและการจัดการทีมเซลล์',
    img: salesteamApps,
    background: '#F7E3F1',
    shadow: 'none'
  },
  {
    title: 'Orders Management',
    description: 'ข้อมูลการสั่งซื้อ',
    img: ordersApps,
    background: '#FFE5E5',
    shadow: 'none'
  },
]

const Register = () => {
  const [account, setAccount] = useState(true);
  const [tellUs, setTellUs] = useState(false);
  const [site, setSite] = useState(false);
  const [apps, setApps] = useState(false);

  const [warnFillName, setWarnFillName] = useState(false);
  const [warnFillSurname, setWarnFillSurname] = useState(false);
  const [warnFillBirthdate, setWarnFillBirthdate] = useState(false);
  const [warnFillEmail, setWarnFillEmail] = useState(false);
  const [warnAccept, setWarnAccept] = useState(false);

  const [warnFillCompany, setWarnFillCompany] = useState(false);

  const [warnFillSite, setWarnFillSite] = useState(false);

  const [selectedApp, setSelectedApp] = useState(appsList[0])

  const [errorInputBorder, setErrorInputBorder] = useState('#F4F5F6')

  // const [errordomainBorder, setE]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [inputEmailValue, setInputEmailValue] = useState('');
  useEffect(() => {
    setIsValidEmail(validateEmail(inputEmailValue));
  }, [inputEmailValue]);

  const handleAccount = () => {
    setIsValidEmail(validateEmail(inputEmailValue));
    console.log(isValidEmail)
    if (document.getElementById('firstname').value === '') {
      setWarnFillName(true);
      setErrorInputBorder('#EF4444')
    } else {
      setWarnFillName(false);
    }

    if (document.getElementById('surname').value === '') {
      setWarnFillSurname(true);
    } else {
      setWarnFillSurname(false);
    }

    if (document.getElementById('date').value === '') {
      setWarnFillBirthdate(true);
    } else {
      setWarnFillBirthdate(false);
    }

    if (document.getElementById('email').value === '') {
      setWarnFillEmail(true);
    } else {
      setWarnFillEmail(false);
    }

    if (!isValidEmail) {
      setWarnFillEmail(true);
    } else {
      setWarnFillEmail(false);
    }

    if (document.getElementById('accept').checked === false) {
      setWarnAccept(true);
    } else {
      setWarnAccept(false);
    }

    setWarnFillEmail(!isValidEmail);

    if (
      document.getElementById('firstname').value !== '' &&
      document.getElementById('surname').value !== '' &&
      document.getElementById('date').value !== '' &&
      document.getElementById('email').value !== '' &&
      document.getElementById('accept').checked === true &&
      isValidEmail
    ) {
      setAccount(false);
      setTellUs(true);
    }
  }

  const [warnBusiness, setWarnBusiness] = useState(false);
  const [warnNum, setWarnNum] = useState(false)
  const [warnGoal, setWarnGoal] = useState(false)
  const handleSite = () => {
    if (document.getElementById('companyname').value === '') {
      setWarnFillCompany(true);

      setErrorOtpBorder('#EF4444')
    }

    if (selectedValueBusiness == 'เลือกประเภทธุรกิจและสินค้า') {
      setTellUs(true);
      setWarnBusiness(true)
      setSite(false);
    } else {
      setWarnBusiness(false);
    }

    if (selectedValueNum == 'เลือกจำนวนทีมของคุณ') {
      setWarnNum(true)
    } else {
      setWarnNum(false)
    }

    if (selectedValueGoal == 'เลือกเป้าหมายการใช้งาน') {
      setWarnGoal(true)
    } else {
      setWarnGoal(false)
    }


    if (selectedValueBusiness != 'เลือกประเภทธุรกิจและสินค้า' && selectedValueNum != 'เลือกจำนวนทีมของคุณ' && selectedValueGoal != 'เลือกเป้าหมายการใช้งาน') {
      setTellUs(false);
      setSite(true);
      setErrorOtpBorder('#F4F5F6')
    }
  }

  const [domainChecked, setDomainChecked] = useState(false);
  const handleApps = () => {
    if (document.getElementById('getzaviago-domain').value === '') {
      setWarnFillSite(true);
    } else {
      setDomainValidateButton(false);
      setTimeout(() => {
        setDomainValidateButton(true);
        setDomainChecked(true);

        // setSite(false);
        // setApps(true);
      }, 3000);
    }
  }

  const moveToApps = () => {
    setSite(false);
    setApps(true);
  }

  const startApp = () => {
    window.location.href = '/'
  }

  const [inputValue, setInputValue] = useState('');
  const [domainValidateButton, setDomainValidateButton] = useState('true');
  const handleInputChange = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^a-zA-Z0-9-]/g, '');
    const limitedValue = sanitizedValue.slice(0, 25);
    setInputValue(limitedValue);
  };

  const [selectedValueBusiness, setSelectedValueBusiness] = useState('เลือกประเภทธุรกิจและสินค้า');
  const handleChangeBusiness = (event) => {
    setSelectedValueBusiness(event.target.value);
  };

  const [selectedValueNum, setSelectedValueNum] = useState('เลือกจำนวนทีมของคุณ');
  const handleChangeNum = (event) => {
    setSelectedValueNum(event.target.value);
  };

  const [selectedValueGoal, setSelectedValueGoal] = useState('เลือกเป้าหมายการใช้งาน');
  const handleChangeGoal = (event) => {
    setSelectedValueGoal(event.target.value);
  };



  const [errorOtpBorder, setErrorOtpBorder] = useState('#F4F5F6')

  return (
    <div className='flex items-center justify-center h-screen relative z-[101] bg-white'>
      {account && (
        <div className="login-box flex flex-col justify-center  rounded-lg">
          <h1 className="text-[#1F272E] font-bold text-[18px]" style={{ fontFamily: "Eventpop" }}>ตั้งค่าบัญชีของคุณ</h1>
          <div className="mt-[20px]">
            <div>
              <label htmlFor="firstname" className="block font-medium text-[#505A62] font-sukhumvit text-[13px]">ชื่อ<span className="required">*</span></label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="ชื่อของคุณ"
                  className="block w-[304px] h-[28px]  focus:border-[#DDDDDD] focus:border focus:outline-none rounded-md text-xs font-normal text-[#1F272E] font-sukhumvit border-gray-300 shadow-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 px-[12px]"
                  onKeyUp={() => setWarnFillName(false)}
                  style={warnFillName ? { border: `1px solid ${errorInputBorder}` } : {}}
                />
              </div>
              {warnFillName && (<p className="required text-[10px] mt-[10px] mb-4 warn">จำเป็นต้องกรอกข้อมูล</p>)}
            </div>

            <div className="mt-[17px]">
              <label htmlFor="surname" className="block font-medium text-[#505A62] font-sukhumvit text-[13px]">นามสกุล<span className="required">*</span></label>
              <div className="mt-2">
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="นามสกุลของคุณ"
                  className="block w-[304px] h-[28px]  focus:border-[#DDDDDD] focus:border focus:outline-none rounded-md text-xs font-normal text-[#1F272E] font-sukhumvit border-gray-300 shadow-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 px-[14px]"
                  onKeyUp={() => setWarnFillSurname(false)}
                  style={warnFillSurname ? { border: `1px solid ${errorInputBorder}` } : {}}
                />
              </div>
              {warnFillSurname && (<p className="required text-[10px] mt-[10px] mb-4 warn">จำเป็นต้องกรอกข้อมูล</p>)}
            </div>

            <div className="mt-[17px]">
              <label htmlFor="date" className="block font-medium text-[#505A62] font-sukhumvit text-[13px]">วัน-เดือน-ปีเกิด<span className="required">*</span></label>
              <div className="mt-2">
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="DD-MM-YYYY"
                  className="block w-[304px] h-[28px]  focus:border-[#DDDDDD] focus:border focus:outline-none rounded-md text-xs font-normal text-[#1F272E] font-sukhumvit border-gray-300 shadow-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 px-[14px]"
                  onChange={() => setWarnFillBirthdate(false)}
                  style={warnFillBirthdate ? { border: `1px solid ${errorInputBorder}` } : {}}
                />
              </div>
              {warnFillBirthdate && (<p className="required text-[10px] mt-[10px] mb-4 warn">จำเป็นต้องกรอกข้อมูล</p>)}
            </div>

            <div className="mt-[17px]">
              <label htmlFor="email" className="block font-medium text-[#505A62] font-sukhumvit text-[13px]">อีเมล<span className="required">*</span></label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="customer@mail.com"
                  className="block w-[304px] h-[28px]  focus:border-[#DDDDDD] focus:border focus:outline-none rounded-md text-xs font-normal text-[#1F272E] font-sukhumvit border-gray-300 shadow-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 px-[14px]"
                  onKeyUp={(e) => {
                    setWarnFillEmail(false);
                    setInputEmailValue(e.target.value);
                  }}
                  style={warnFillEmail ? { border: `1px solid ${errorInputBorder}` } : {}}
                />
              </div>
              {warnFillEmail && (<p className="required text-[10px] mt-[10px] mb-4 warn">จำเป็นต้องกรอกข้อมูล</p>)}
            </div>

            <fieldset className="space-y-5 w-[304px]">
              <legend className="sr-only">Notifications</legend>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="accept"
                    aria-describedby="accept"
                    name="accept"
                    type="checkbox"
                    className="h-4 w-4 rounded-full shadow-md border-[#C0C6CC] text-indigo-600 focus:ring-indigo-500"
                    onChange={() => setWarnAccept(false)}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="accept" className={`font-medium ${warnAccept ? 'text-[#FF0000]' : 'text-[#1F272E]'} font-sukhumvit font-medium text-[12px] leading-[21px]`}>
                    รับทราบและให้ความยอมรับ <span className=" sukhumvit cursor-pointer decoration-solid underline">ข้อกำหนดการใช้การบริการ</span> และ <span className=" sukhumvit cursor-pointer decoration-solid underline">นโยบายความเป็นส่วนตัว</span>
                  </label>
                </div>
              </div>
            </fieldset>

            <button className="inline-block bg-[#0099FF] h-[30px] text-white rounded-lg mt-[40px] w-[304px] text-[13px] font-bold m-auto btn-primary-shadow font-sukhumvit" onClick={handleAccount}>ยืนยัน</button>
          </div>
        </div>
      )}

      {tellUs && (
        <div className="login-box flex flex-col justify-center w-[320px] py-[60px] rounded-lg">
          <h1 className="text-[#1F272E] font-bold leading-[21px] text-[18px]" style={{ fontFamily: "Eventpop" }}>บอกเราอีกสักนิดเกี่ยวกับธุรกิจของคุณ</h1>
          <p className="font-sukhumvit text-xs font-medium leading-[19px] mt-[10px] text-[#505A62]">บอกเราสักเล็กน้อยว่าคุณเป็นใคร เพื่อให้เราสามารถมอบ<br />ดีที่สุดให้กับคุณ</p>
          <div className="mt-[20px]">
            <label htmlFor="companyname" className="block text-sm font-medium text-[#505A62] sukhumvit">ชื่อธุรกิจของคุณ<span className="required">*</span></label>
            <div className="mt-1">
              <input
                type="text"
                name="companyname"
                id="companyname"
                placeholder="ชื่อธุรกิจของคุณ"
                className="block w-[304px] h-[28px] font-sukhumvit font-xs font-normal rounded-md shadow-sm focus:border focus:brder-[#EF4444] focus:outline-none text-sm focus:ring-indigo-500 bg-[#F4F5F6] py-2 px-[12px]"
                onKeyUp={() => setWarnFillCompany(false)}
                style={warnFillCompany ? { border: `1px solid ${errorOtpBorder}` } : {}}
              />
            </div>
            {warnFillCompany && (<p className="required text-[10px] mt-[10px] warn">จำเป็นต้องกรอกข้อมูล</p>)}

            <label htmlFor="business-type" className="block text-sm font-medium text-[#505A62] sukhumvit mt-[16px]"

            >ประเภทธุรกิจและสินค้า<span className="required">*</span></label>
            <div className="w-[304px] h-[28px]">
              <select
                id="business-type"
                name="business-type"
                className="mt-1 font-sukhumvit text-xs block h-[30px] w-full rounded-md border-gray-300 py-2 px-[12px] font-medium focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                onChange={handleChangeBusiness}
                value={selectedValueBusiness}
                style={{ color: selectedValueBusiness === 'เลือกประเภทธุรกิจและสินค้า' ? '#9CA3AF' : '#000', ...(warnBusiness ? { border: `1px solid ${errorOtpBorder}` } : {}) }}
              >
                <option selected disabled>เลือกประเภทธุรกิจและสินค้า</option>
                <option>การเกษตร</option>
                <option>การออกแบบและศิลปะ</option>
                <option>ยานยนต์</option>
                <option>การศึกษา</option>
                <option>พลังงานและสาธารณูปโภค</option>
                <option>องค์กรหรือสถาบัน</option>
                <option>ธุรกิจบริการ</option>
                <option>การเงินและการบัญชี</option>
                <option>ร้านอาหารและเครื่องดื่ม</option>
                <option>องค์กรไม่แสวงหากำไร</option>
                <option>ภาครัฐบาลและรัฐวิสาหกิจ</option>
                <option>สุขภาพและความงาม</option>
                <option>บริการทางธุรกิจ</option>
                <option>กฎหมาย</option>
                <option>อุตสาหกรรมและการก่อสร้าง</option>
                <option>สื่อและธุรกิจบันเทิง</option>
                <option>อสังหาริมทรัพย์</option>
                <option>ค้าขาย, ร้านค้า</option>
                <option>เซลล์และการตลาด</option>
                <option>ยาและเวชภัณฑ์</option>
                <option>เทคโนโลยีและ IT</option>
                <option>การคลังสินค้า</option>
                <option>การขนส่งและโลจิสติก</option>
                <option>โรงแรมและการท่องเที่ยว</option>
                <option>อื่นๆ</option>
              </select>
              {warnBusiness && (<p className="required text-[10px] mt-[10px] mb-5 warn">จำเป็นต้องเลือกคำตอบ</p>)}
            </div>

            <label htmlFor="num-team" className="block text-sm font-medium text-[#505A62] sukhumvit"
              style={{ ...(warnBusiness ? { marginTop: `40px` } : { marginTop: `16px` }) }}
            >จำนวนทีมของคุณ<span className="required">*</span></label>
            <div className="w-[304px] h-[28px]">
              <select
                id="num-team"
                name="num-team"
                className="mt-1 font-sukhumvit text-[#9CA3AF] text-xs block h-[30px] w-full rounded-md border-gray-300 py-2 px-[12px] font-medium focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                style={{ color: selectedValueNum == 'เลือกจำนวนทีมของคุณ' ? '#9CA3AF' : '#000', ...(warnNum ? { border: `1px solid ${errorOtpBorder}` } : {}) }}
                onChange={handleChangeNum}
                value={selectedValueNum}
              >
                <option selected disabled>เลือกจำนวนทีมของคุณ</option>
                <option>แค่ฉันคนเดียว</option>
                <option>2-9 คน</option>
                <option>10-99 คน</option>
                <option>100-500 คน</option>
                <option>มากกว่า 500 คน</option>
              </select>
              {warnNum && (<p className="required text-[10px] mt-[10px] mb-5 warn">จำเป็นต้องเลือกคำตอบ</p>)}
            </div>

            <label htmlFor="goal" className="block text-sm font-medium text-[#505A62] sukhumvit"
              style={{ ...(warnNum ? { marginTop: `40px` } : { marginTop: `16px` }) }}
            >เป้าหมายของคุณคืออะไร<span className="required">*</span></label>
            <div className="w-[304px] h-[28px]">
              <select
                id="goal"
                name="goal"
                className="mt-1 font-sukhumvit text-[#9CA3AF] text-xs block h-[30px] w-full rounded-md border-gray-300 py-2 px-[12px] font-medium focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-[#F4F5F6]"
                style={{ color: selectedValueGoal == 'เลือกเป้าหมายการใช้งาน' ? '#9CA3AF' : '#000', ...(warnGoal ? { border: `1px solid ${errorOtpBorder}` } : {}) }}
                onChange={handleChangeGoal}
                value={selectedValueGoal}
              >
                <option selected disabled>เลือกเป้าหมายการใช้งาน</option>
                <option>บริหารและจัดการธุรกิจ</option>
                <option>ขายสินค้า</option>
                <option>รวบรวมยอดขายและสร้างรีฟอร์ตประจำเดือน</option>
                <option>รวบรวมข้อมูลลูกค้าสำหรับทำ CRM</option>
                <option>เผยแพร่ความรู้และประสบการณ์</option>
                <option>เครื่องมือสำหรับทำโปรเจค</option>
                <option>โปรโมตธุรกิจ</option>
                <option>เก็บแบบฟอร์มสำหรับการทำวิจัย</option>
                <option>นำเสนอผลงานสุดเจ๋งของตัวเอง</option>
                <option>ยังไม่มีเป้าหมายที่ชัดเจน อยากลองใช้ระบบดูก่อน</option>
              </select>
              {warnGoal && (<p className="required text-[10px] mt-[10px] mb-5 warn">จำเป็นต้องเลือกคำตอบ</p>)}
            </div>

            <button className="inline-block font-sukhumvit bg-[#0099FF] text-white rounded-lg mt-[40px] font-bold w-[304px] h-[30px] text-[13px] m-auto btn-primary-shadow" onClick={handleSite}>สร้างบัญชี</button>
          </div>
        </div>
      )}

      {site && (
        <div className="login-box flex flex-col justify-center text-center px-10 py-[60px] rounded-lg">
          <h1 className="text-[#1F272E] font-bold text-[18px] mb-[10px]" style={{ fontFamily: "Eventpop" }}>ตั้งชื่อ Site ของคุณ</h1>
          <p className="text-[#505A62] sukhumvit text-xs">ตั้งชื่อ Site ของคุณซึ่งจะเป็นชื่อ URL สำหรับหน้าเว็บไซต์ของคุณ สามารถใช้ A-Z , a-z , 0-9 <br />และ - ได้เท่านั้น และสามารถเปลี่ยนชื่อ Site ได้ในภายหลัง</p>
          <div className="mt-[24px] w-[441px]">

            <div className="relative mt-1 rounded-md shadow-sm" style={warnFillSite ? { border: `1px solid #EF4444` } : {}}>
              <input
                type="text"
                name="getzaviago-domain"
                id="getzaviago-domain"
                className="block bg-[#F4F5F6] rounded-md text-[#1F272E] font-inter placeholder:text-[#9CA3AF] placeholder:font-sukhumvit text-xs font-normal p-3 pr-40 w-[440px] h-[30px] focus-within:outline-none"
                onKeyUp={() => setWarnFillSite(false)}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="mywebsite-name"
              />
              <div className="pointer-events-none rounded-md absolute inset-y-0 right-0 flex items-center pr-3 bg-[#F4F5F6]">
                <span className="text-[#1F272E] font-sukhumvit text-[13px] font-normal">{!domainChecked ? '.aca.fc.zaviago.com' : <img src={checked} />}</span>
              </div>
            </div>
            {warnFillSite && (<p className="required text-[10px] mt-[10px] warn">กรุณาตั้งชื่อ Site ของคุณ</p>)}
            <div className="mt-8">
              <button
                className=" bg-[#0099FF] flex justify-center items-center h-[30px] text-white rounded-lg text-[13px] font-bold font-sukhumvit w-[440px] text-xs m-auto btn-primary-shadow"
                disabled={!domainValidateButton}
                onClick={!domainChecked ? handleApps : moveToApps}
                style={{ opacity: domainValidateButton ? 1 : 0.5 }}

              >
                {!domainValidateButton && <img src={loadingGif} className="w-[20px] mr-2" />}
                ต่อไป
              </button>
            </div>
          </div>
        </div>
      )}

      {apps && (
        <div className="login-box flex flex-col justify-center px-10 py-[60px] rounded-lg text-center">
          <h1 className="text-[#1F272E] font-bold text-[18px] mb-[10px]" style={{ fontFamily: "Eventpop" }}>เลือก Apps ที่ต้องการติดตั้ง</h1>
          <p className="text-[#505A62] sukhumvit text-xs">เลือก Apps ที่ต้องการติดตั้งใน Site เริ่มต้นของคุณ ลองเลือกสัก Apps ที่คุณต้องการใช้งานมากที่สุด <br />ไม่ต้องกังวลไปเพราะคุณสามารถติดตั้ง Apps อื่นๆ เพิ่มเติมได้ในภายหลัง</p>
          <div className="mt-[20px]">
            <fieldset className="space-y-5">
              <legend className="sr-only">Apps</legend>
              <div className="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 place-items-center">
                {appsList.map((item) => (
                  <div className="relative block" key={item.title}>
                    <div className="text-sm">
                      <input
                        id={item.title}
                        aria-describedby={item.description}
                        name="apps"
                        type="checkbox"
                        className="rounded text-indigo-600 focus:ring-indigo-500 checkbox-apps hidden"
                      />
                      <label htmlFor={item.title} className="font-medium select-app-input block w-[187px] h-[167px] cursor-pointer focus:outline-none">
                        <div className="block text-sm font-medium w-full h-[90%] box-border" style={{ backgroundColor: item.background, borderRadius: "7px 7px 0 0" }}>
                          <img src={item.img} className="m-auto relative top-[18px]" style={{ boxShadow: item.shadow }} />
                        </div>
                        <div className="absolute bottom-0 m-auto w-full py-[10px] app-desc min-h-[77px]" style={{ borderRadius: "0 0 8px 8px" }}>
                          <h2 className="text-sm font-bold leading-5 font-inter text-[#1F272E] mb-1">{item.title}</h2>
                          <p className="font-normal text-xs text-[#505A62] sukhumvit px-3" dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                      </label>
                    </div>
                  </div>
                ))}

              </div>
            </fieldset>
            <button className="inline-block bg-[#0099FF] font-sukhumvit font-bold h-[30px] text-white rounded-lg w-[584px] mt-[40px] text-[13px] m-auto btn-primary-shadow" onClick={startApp}>เริ่มต้นการใช้งาน</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Register