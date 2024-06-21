import React, { useState } from 'react'
import installAddonsIcons from '../img/install-addons-icons.png'
import installAddonsP from '../img/install-addons-p.png'
import instagramStore from '../img/business-intelligent.svg'
function InstallAddons(props) {

    const [isClickedInstall, setIsClickedInstall] = useState(false);
    const changeInstallClick = () => {
        setIsClickedInstall(true)
        console.log(isClickedInstall)
    }

    return (
        <>
            <div className='sm:mt-[85px]'>
                <h2 className={`${!isClickedInstall ? '' : 'thePara'} font-calSans font-semibold text-[24px] text-[#1F272E] mx-auto text-center leading-[30px] sm:w-[245px]`}>
                    Install addons app to your workspace</h2>

                <h2 className={`${!isClickedInstall ? 'mt-[-60px]' : 'thePara1 '} mt-[-60px] opacity-0 font-calSans font-semibold text-[24px] text-[#1F272E] mx-auto text-center leading-[30px] sm:w-[245px]`}>
                    Application is being install to your site.</h2>
            </div>

            <div className={`mx-auto mt-[40px] sm:w-[243px] flex ${!isClickedInstall ? 'justify-between' : 'justify-between'}  items-center`}>
                <img className={`${!isClickedInstall ? 'ml-0' : 'buttonClicked1'}`} src={instagramStore} alt="" />


                <img src={installAddonsIcons} className={` ${!isClickedInstall ? '' : 'opacity-[0]'} `} alt="" />


                <img className={`${!isClickedInstall ? 'ml-0' : 'buttonClicked'}`} src={installAddonsP} alt="" />
            </div>

            <div className='mx-auto mt-[45px] sm:w-[360px] text-center'>
                <h3 className='font-calSans font-semibold text-[15px] text-[#1F272E] leading-[18px]'>Allow instagram app to</h3>
                <p className='font-inter font-normal text-[13px] text-[#687178] leading-[20px] mt-[15px]'>Selldone allows you to manage multiple stores per account and sell various product types. Connect to Selldone by clicking the login or sign-up.</p>
            </div>

            {!isClickedInstall ?
                <div className='sm:w-[220px] mx-auto mt-[50px] flex justify-evenly'>
                    <button onClick={changeInstallClick} className='py-[10px] px-[18px] bg-[#000000] rounded-lg font-inter font-semibold text-base text-[#FFFFFF]' style={{ boxShadow: '0px 4px 8px 0px #00000033' }}>Install apps</button>
                    <button onClick={props.closePopUp} className='font-calSans font-semibold text-base leading-[19.2px] text-[#1F272E] ml-6'>Cancel</button>
                </div> : <div className='sm:w-[220px] mx-auto mt-[50px] text-center'> <button onClick={props.closePopUp} className='py-[10px] px-[18px] bg-[#000000] rounded-lg font-inter font-semibold text-base text-[#FFFFFF]' style={{ boxShadow: '0px 4px 8px 0px #00000033' }}>Back to dashboard</button></div>}


            {!isClickedInstall ?
                <div className='sm:w-[227px] mx-auto mt-[70px] text-center'>
                    <p className='font-inter font-normal leading-[16.82px] text-xs text-[#687178]'>By connecting this application to your account, you accept its <span className='text-[#0066CC]'> Privacy Policy </span> and <span className='text-[#0066CC]'>Terms of Service.</span></p>
                </div> : null}

        </>
    )
}

export default InstallAddons
