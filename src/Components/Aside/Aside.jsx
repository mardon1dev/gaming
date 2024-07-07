import React from 'react';
import Profile from "../../assets/admin.png";
import NewGame from '../../assets/game3.png';
import Download from '../../assets/download.png';

const Aside = () => {
  return (
    <div className=' max-w-[326px] w-full pt-[50px] pb-[76px] px-[11px] min-h-[100vh] h-full sticky top-0'>
        <div className='flex items-center justify-between pr-[20px]'>
            <div className='flex items-center gap-[14px]'>
                <img src={Profile} alt="Profile" width={40} height={40} />
                <strong>William jonson</strong>
            </div>
            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2722 7C16.2722 5.4087 15.6528 3.88258 14.5503 2.75736C13.4477 1.63214 11.9524 1 10.3932 1C8.83399 1 7.33864 1.63214 6.23612 2.75736C5.13359 3.88258 4.5142 5.4087 4.5142 7C4.5142 14 1.57471 16 1.57471 16H19.2117C19.2117 16 16.2722 14 16.2722 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0883 20C11.9161 20.3031 11.6688 20.5547 11.3713 20.7295C11.0738 20.9044 10.7365 20.9965 10.3932 20.9965C10.0499 20.9965 9.71263 20.9044 9.41514 20.7295C9.11764 20.5547 8.87038 20.3031 8.69812 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className='mt-[32px] flex flex-col items-start' >
            <h3 className='font-[500] text-[24px] leading-[22px]'>Live Game</h3>
            <div className='flex flex-col mt-[20px] justify-between gap-y-[15px]'>
                <div className='py-[5px] pl-[5px] pr-[15px] rounded-lg flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer'>
                    <img src={NewGame} alt="new game" width={71} height={62}/>
                    <div>
                        <h4 className='font-semibold text-[15px] leading-[17px]'>PUBG</h4>
                        <p className='font-normal text-[12px] leading-[10px] mt-1'>War Battle</p>
                    </div>
                </div>
                <div className='py-[5px] pl-[5px] pr-[15px] rounded-lg flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer'>
                    <img src={NewGame} alt="new game" width={71} height={62}/>
                    <div>
                        <h4 className='font-semibold text-[15px] leading-[17px]'>PUBG</h4>
                        <p className='font-normal text-[12px] leading-[10px] mt-1'>War Battle</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-[41px] w-full max-w-[302px]'>
            <img src={Download} alt="Download" width={302} height={218} />
            <div className='mt-[20px]'>
                <h3 className='font-[500] text-[28px] leading-[22px]'>Need For Speed</h3>
                <span className='font-normal text-[18px] leading-[10px] mt-[6px]'>Racing</span>
                <p className='font-normal text-[12px] leading-[10px] mt-2'>Rating:
                        <span className='font-semibold text-[12px] leading-[10px] text-[#FFC107]'> 4.7</span>
                </p>
                <p className='font-normal text-[14] leading-[20px] mt-3'>Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.</p>
            </div>

            <a href='#' className='button block w-full text-white text-center py-[15px] bg-[#FC8B40] mt-[33px] rounded-lg cursor-pointer'>Download Now</a>
        </div>
    </div>
  )
}

export default Aside