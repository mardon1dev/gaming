import React from 'react'
import Menu from "../../assets/menu-icon.svg"
import Home from "../../assets/home.svg"
import Play from "../../assets/play.svg"
import Discuss from "../../assets/discuss.svg"
import Star from "../../assets/star.svg"
import Settings from "../../assets/settings.svg"
import LogOut from "../../assets/log-out.svg"

const SideMenu = () => {
  return (
    <div className='max-w-[130px] w-full flex flex-col items-center justify-start pt-[50px] sticky top-0'>
      <img src={Menu} alt="Icon" width={30} height={25} />
      <div className='flex flex-col items-center justify-start mt-[116px] gap-[30px]'>
        <div className='bg-[#20232B] px-[11px] py-[15px] rounded-[14px] hover:bg-[#FC8B40] menu-item'>
          <img src={Home} alt="Icon" width={30} height={25} />
        </div>
        <div className='bg-[#20232B] px-[11px] py-[15px] rounded-[14px] hover:bg-[#FC8B40] menu-item'>
          <img src={Play} alt="Icon" width={30} height={25} />
        </div>
        <div className='bg-[#20232B] px-[11px] py-[15px] rounded-[14px] hover:bg-[#FC8B40] menu-item'>
          <img src={Discuss} alt="Icon" width={30} height={25} />
        </div>
        <div className='bg-[#20232B] px-[11px] py-[15px] rounded-[14px] hover:bg-[#FC8B40] menu-item'>
          <img src={Star} alt="Icon" width={30} height={25} />
        </div>
        <div className='bg-[#20232B] px-[11px] py-[15px] rounded-[14px] hover:bg-[#FC8B40] menu-item'>
          <img src={Settings} alt="Icon" width={30} height={25} />
        </div>
        <div className='bg-[#20232B] px-[11px] py-[15px] rounded-[14px] hover:bg-[#FC8B40] menu-item'>
          <img src={LogOut} alt="Icon" width={30} height={25} />
        </div>
      </div>

    </div>
  )
}

export default SideMenu