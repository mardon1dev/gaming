import React, { useContext } from 'react'
import Popular from '../Popular/Popular'
import NewGames from '../NewGames/NewGames'
import GamingContext from '../../Context/Context'
import Image from "../../../assets/img.png"

const Dashboard = () => {

  const {data} = useContext(GamingContext);
  const mainGame = data[0];

  if (!mainGame) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="bg-[#20232B] dashboard pt-[50px] px-[35px] pb-[40px] max-w-[995px] w-full">
      <div className='flex justify-between items-center'>
        <ul className="flex items-center justify-start gap-[38px]">
          <li>
            <a className='text-[#fff] text-[17px] font-[500] leading-[22px]' href="#">Game</a>
          </li>
          <li>
            <a className='text-[#fff] text-[17px] font-[500] leading-[22px]' href="#">Live Score</a>
          </li>
          <li>
            <a className='text-[#fff] text-[17px] font-[500] leading-[22px]' href="#">Statistics</a>
          </li>
          <li>
            <a className='text-[#fff] text-[17px] font-[500] leading-[22px]' href="#">Analytics</a>
          </li>
          <li>
            <a className='text-[#fff] text-[17px] font-[500] leading-[22px]' href="#">Forecasts</a>
          </li>
        </ul>
        <div>
          <input type="search" placeholder='Search games' className='rounded-lg px-2 py-2 text-[14px] font-semibold text-[#202020] placeholder:text-[14px] placeholder:text-[#202020] outline-none'/>
        </div>
      </div>
      <div className='my-[25px] dashboard-bg w-full rounded-lg relative'>
        <img src={mainGame.background_image} alt="Image" className='bg-image w-full rounded-lg'/>
        <div className='py-[64px] pl-[30px] flex flex-col items-start max-w-[494px] w-full absolute bottom-0'>
          <h1 className='font-semibold leading-[48px] text-[42px]'>{mainGame.name}</h1>
          <a className='px-[29px] py-[15px] mt-[30px] bg-[#FC8B40] rounded-[8px] button font-[500] text-[17px] leading-[25px]' href="#">More Details</a>
        </div>
      </div>
      <Popular/>
      <NewGames/>
    </div>
  )
}

export default Dashboard