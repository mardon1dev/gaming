import React from 'react'
import Popular from '../Popular/Popular'
import NewGames from '../NewGames/NewGames'

const Dashboard = () => {
  return (
    <div className="bg-[#20232B] dashboard pt-[50px] px-[35px] pb-[40px] max-w-[995px] w-full">
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
      <div className='my-[25px] dashboard-bg w-full rounded-[14px] pr-[30px]'>
        <div className='py-[64px] pl-[30px] flex flex-col items-start max-w-[494px] w-full'>
          <h1 className='font-semibold leading-[48px] text-[42px]'>The Forbidden Kingdom Adventure War</h1>
          <a className='px-[29px] py-[15px] mt-[30px] bg-[#FC8B40] rounded-[8px] button font-[500] text-[17px] leading-[25px]' href="#">More Details</a>
        </div>
      </div>
      <Popular/>
      <NewGames/>
    </div>
  )
}

export default Dashboard