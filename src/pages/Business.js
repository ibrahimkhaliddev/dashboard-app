import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import websiteMade from '../img/website-made.png'
// import businessIntelligent from '../img/business-intelligent.svg'
import appsMarketplace from '../img/app-marketplace.svg'
import connectBusiness from '../img/connect-business.svg'
import purpleRhombus from '../img/purple-rhombus.svg'
import redLightning from '../img/red-lightning.svg'
import blueCircles from '../img/blue-circles.svg'
import learnMore from '../img/learn-more.png'
import startupGuideImg from '../img/startup-guide.png'
import platformMarketplace from '../img/platform-marketplace.png'
import startupDomains from '../img/startup-dommains.png'
import startupDomainsIcon from '../img/startup-domain-icon.png'
import terms from '../img/terms.png'
import play from '../img/play.png'
import finlabLogo from "../img/finlab-logo.svg";
import UOBLogo from "../img/uob.svg";
import testVideo from '../img/test.mp4'
import blog1 from '../img/blog1.png'
import blog2 from '../img/blog2.png'
import blog3 from '../img/blog3.png'
import POSLogo from '../img/POSLogo.svg'
import star from '../img/star.png'
import instagramLogo from '../img/instagram.svg'
import businessIntelligent from '../img/business-intelligent.svg'
import translationImg from '../img/translation.svg'
import payPalLogo from '../img/payPal.svg'
import applicationName from '../img/applicationName.svg'
import applicationName1 from '../img/applicationName1.svg'
import connectBusinessLogo from '../img/connectBusinessLogo.svg'

import freedlyLogo from '../img/freedlyLogo.svg'
import bulbYello from '../img/bulbYello.svg'
import googleLogo from '../img/googleLogo.svg'
import flipIconPlus from '../img/flipIconPlus.png'
import dropboxLogo from '../img/drpBoxLogo.svg'
import FlipBox from '../components/flipBox'
import flipIconMinus from '../img/flipIconMinus.png'
import flipBoxLogos from '../img/flipBoxLogos.png'

function Business() {
  const popularApps = [
    {
      id: 1,
      title: 'Connect Business',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: businessIntelligent,
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: instagramLogo,
      rating: 4.5,
    },
    {
      id: 3,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: translationImg,
      rating: 4.5,
    },
    {
      id: 4,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: payPalLogo,
      rating: 4.5,
    },
    {
      id: 5,
      title: 'Connect Business Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: applicationName,
      rating: 4.5,
    },
    {
      id: 6,
      title: 'Connect Business',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: applicationName1,
      rating: 4.5,
    },
  ];

  const mostPopularApps = [
    {
      id: 1,
      title: 'Application name here',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: freedlyLogo,
      rating: 5.0,
    },
    {
      id: 2,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: bulbYello,
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: googleLogo,
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Application name here Intelligent',
      description: 'Facilitate payments and pay out sellers or service providers.',
      image: dropboxLogo,
      rating: 4.9
    },
  ];

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="sm:p-10 p-5 page-section" style={{ paddingTop: '20px' }}>
        <div className="pt-0 section-container mx-auto">
          <span className="rounded-full px-4 py-1 font-11 font-semibold leading-6 text-slate-400 ring-1 ring-inset ring-slate-300" style={{ fontFamily: "Poppins" }}>
            Beta
          </span>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='text-[#1F272E] font-semibold text-xl font-calSans mt-3'>App Store</h3>
              <p className='font-inter font-normal text-[#687178] text-[13px] mt-1'>Choose professional solutions to power your business</p>
            </div>
            <div className="flex">
              <img src={finlabLogo} alt="" />
              <img src={UOBLogo} className="ml-4" alt="" />
            </div>
          </div>
        </div>

        <div className='section-container mx-auto mt-[30px] rounded-b-[16px]' style={{ boxShadow: '0px 4px 70px 0px #72727240' }}>
          <div className='appBanner'>
            <p className='font-inter font-medium text-[#FFFFFF] text-[13px] mt-1'>Choose professional solutions to power your business</p>
            <h2 className='font-inter text-[32px] font-bold sm:w-[390px] text-[#ffffff] leading-[38.73px] mt-[14px]'>Get the POS system for your store.</h2>
          </div>
          <div className='py-[16px] px-[23px] flex justify-between items-center'>
            <div className='flex items-center'>
              <img src={POSLogo} className='w-[68px] h-[68px] mr-5' alt="" />
              <div>
                <h4 className='font-inter font-semibold text-sm text-[#1A1B25]'>POS software for business</h4>
                <p className='font-inter font-normal text-[13px] text-[#687178] sm:w-[268px]'>Facilitate payments and pay out sellers or service providers.</p>
              </div>
            </div>
            <div>
              <Link to='/singleAppPage'>
              <button className='bg-[#0099FF] font-semibold font-inter text-sm rounded-lg py-2 px-[14px] text-white' style={{ boxShadow: '0px 4px 8px 0px #0099FF33' }}>Get it</button>
              </Link>
            </div>
          </div>
        </div>

        <div className='section-container mx-auto mt-[50px]'>
          <h3 className='text-[#1F272E] font-calSans font-semibold font-sm'>Most popular apps</h3>
          <p className='font-inter font-normal text-[13px] text-[#687178] mt-1'>Explore the apps that a wide range of merchants rely on.</p>
          <div className='grid grid-cols-2 mt-[37px]'>
            {popularApps.map((item, index) =>
              <div className='flex mb-[25px]' key={index}>
                <div><img src={item.image} alt="" className='rounded-xl w-[68px] h-[auto] max-w-[fit-content]' style={{ boxShadow: '0px 4px 15px 0px #00000026' }} /></div>
                <div className='ml-5'>
                  <h3 className='font-inter font-semibold text-sm'>{item.title}</h3>
                  <p className='font-inter font-normal text-[13px] text-[#687178] mt-1'>{item.description}</p>
                  <div className='flex items-center  mt-1'><img src={star} className='w-[18px] h-[18px]' alt="" /><p className='ml-3 font-inter font-semibold text-xs text-[#1A1B25]'>{item.rating}</p></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='section-container mx-auto mt-[60px] flex gap-[14px]'>
          <div className='sm:w-1/2 rounded-[16px]' style={{ boxShadow: '0px 4px 70px 0px #72727240' }}>
            <div className='connectBusiness1 flex items-end h-full  p-6'>
              <h3 className='text-white font-inter font-bold text-[32px] leading-[38.73px]' style={{ boxShadow: '0px 4px 4px 0px #00000040', }}>Sync all sides of your business.</h3>
            </div>
            <div className='bg-white py-[27px] px-[23px] rounded-b-[16px]'>
              <h3 className='font-inter font-semibold text-[14px] text-[#1A1B25] pb-[5px]'>Connect Business Intelligent</h3>
              <p className='font-inter font-normall text-[13px] text-[#687178]'>Facilitate payments and pay out sellers or service providers.</p>
            </div>
          </div>
          <div className='sm:w-1/2 rounded-[16px]' style={{ boxShadow: '0px 4px 70px 0px #72727240' }}>
            <div className='connectBusiness2 flex items-start h-full  p-6'>
              <h3 className='text-white font-inter font-bold text-[32px] leading-[38.73px] sm:w-[190px]' style={{ boxShadow: '0px 4px 4px 0px #00000040', }}>Get the POS system for your store.</h3>
            </div>
            <div className='bg-white py-[27px] px-[23px] rounded-b-[16px]'>
              <h3 className='font-inter font-semibold text-[14px] text-[#1A1B25] pb-[5px]'>Connect Business Intelligent</h3>
              <p className='font-inter font-normall text-[13px] text-[#687178]'>Facilitate payments and pay out sellers or service providers.</p>
            </div>
          </div>
        </div>

        <div className='section-container mx-auto mt-[27px] rounded-b-[16px]' style={{ boxShadow: '0px 4px 70px 0px #72727240' }}>
          <div className='appConnectBusiness flex flex-col items-end text-right justify-end'>
            <p className='font-inter font-medium text-[#FFFFFF] text-[13px] mt-1'>Building your offline business</p>
            <h2 className='font-inter text-[32px] font-bold sm:w-[390px] text-[#ffffff] leading-[38.73px] mt-[14px]'>Get the POS system for your store.</h2>
          </div>
          <div className='py-[16px] px-[23px] flex justify-between items-center'>
            <div className='flex items-center'>
              <img src={connectBusinessLogo} className='w-[68px] h-[68px] mr-5' alt="" />
              <div>
                <h4 className='font-inter font-semibold text-sm text-[#1A1B25] pb-[5px]'>POS software for business</h4>
                <p className='font-inter font-normal text-[13px] text-[#687178] sm:w-[268px]'>Facilitate payments and pay out sellers or service providers.</p>
              </div>
            </div>
            <div>
              <button className='bg-[#0099FF] font-semibold font-inter text-sm rounded-lg py-2 px-[14px] text-white' style={{ boxShadow: '0px 4px 8px 0px #0099FF33' }}>Login </button>
            </div>
          </div>
        </div>

        <div className='section-container mx-auto mt-[80px]'>
          <h3 className='text-[#1F272E] font-calSans font-semibold font-sm'>Most popular apps</h3>
          <p className='font-inter font-normal text-[13px] text-[#687178] mt-1'>Explore the apps that a wide range of merchants rely on.</p>
          <div className='grid grid-cols-2 mt-[50px]'>
            {mostPopularApps.map((item, index) =>
              <div className='flex mb-[30px]' key={index}>
                <div><img src={item.image} alt="" className='rounded-xl w-[68px] max-w-[fit-content]' style={{ boxShadow: '0px 4px 15px 0px #00000026' }} /></div>
                <div className='ml-5'>
                  <h3 className='font-inter font-semibold text-sm'>{item.title}</h3>
                  <p className='font-inter font-normal text-[13px] text-[#687178] mt-1'>{item.description}</p>
                  <div className='flex items-center  mt-1'><img src={star} className='w-[18px] h-[18px]' alt="" /><p className='ml-3 font-inter font-semibold text-xs text-[#1A1B25]'>{item.rating}</p></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='section-container mx-auto mt-[60px] flex items-center'>
          <div className="flipBoxSection">
            <div>
              <div className={`flip-box ${isFlipped ? "rotate-y-180" : ""} flip-box-inner`}>
                <div className="flip-box-front">
                  <div className='h-[60%]'>
                    <h2 className='font-inter font-bold text-[48px] text-white sm:w-[257px] leading-[58.09px] text-left'>Get 2% Daily Cash back</h2>
                    <p className='font-inter font-medium text-[17px] leading-[21.06px] mt-3 sm:w-[190px] text-left text-white'>when you use your iPhone or Apple watch to pay with Apple Card.</p>
                  </div>
                  <div className='h-[40%] flex justify-end items-end'>
                    {/* <img src={flipIconPlus} alt="" className='w-[30px] h-[30px]' onClick={handleFlip} /> */}
                    <button onClick={handleFlip} className='bg-black rounded-full w-[32px] h-[32px] flex justify-center items-center text-white text-xl'>+</button>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className='h-[60%]'>
                    <h2 className='font-inter font-bold text-[48px] sm:w-[290px] leading-[58.09px] text-left'>Shop with select merchants and get even more Daily Cash.</h2>
                    <img src={flipBoxLogos} className='mt-[30px]' alt="" />
                  </div>
                  <div className='h-[40%] flex justify-end items-end'>
                  <button onClick={handleFlip} className='bg-black rounded-full w-[32px] h-[32px] flex justify-center items-center text-white text-xl'>-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:w-[432px] rounded-[16px] -ml-[10px]' style={{ boxShadow: '0px 4px 70px 0px #72727240' }}>
            <div className='flip2 flex rounded-t-[16px] h-full  py-10 px-[29px]'>
              <h3 className='text-white font-inter font-bold text-[32px] leading-[38.73px] sm:w-[190px]' style={{ boxShadow: '0px 4px 4px 0px #00000040', }}>Get the POS system for your store.</h3>
            </div>
            <div className='bg-white rounded-b-[16px] py-10 px-[29px]'>
              <h3 className='font-inter font-semibold text-[13px] text-[#1A1B25] pb-[5px]'>Connect Business Intelligent</h3>
              <p className='font-inter font-normall text-[13px] text-[#687178]'>Facilitate payments and pay out sellers or service providers.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Business