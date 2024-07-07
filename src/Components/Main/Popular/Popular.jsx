import React from 'react'
import Game from "../../../assets/game.png"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "./Popular.css"


const Popular = () => {
  return (
    <div className='flex flex-col items-start'>
        <h2 className='font-semibold leading-[26px] text-[24px]'>Most popular Game</h2>
        <div className='mt-[25px] flex w-full gap-[20px]'>
        <Swiper
            spaceBetween={42}
            slidesPerView={4}
            className='w-full'
        >
            <SwiperSlide className='cursor-pointer'>
                <div className='relative game'>
                    <div className='absolute bottom-2 left-2'>
                        <h3 className='font-semibold leading-[26px] text-[24px]'>Sniper 2</h3>
                        <p className='font-semibold leading-[18px] text-[16px] mt-[15px] game-text pl-[17px]'>8.6 / 10 Action</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer'>
                <div className='relative game'>
                    <div className='absolute bottom-2 left-2'>
                        <h3 className='font-semibold leading-[26px] text-[24px]'>Sniper 2</h3>
                        <p className='font-semibold leading-[18px] text-[16px] mt-[15px] game-text pl-[17px]'>8.6 / 10 Action</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer'>
                <div className='relative game'>
                    <div className='absolute bottom-2 left-2'>
                        <h3 className='font-semibold leading-[26px] text-[24px]'>Sniper 2</h3>
                        <p className='font-semibold leading-[18px] text-[16px] mt-[15px] game-text pl-[17px]'>8.6 / 10 Action</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer'>
                <div className='relative game'>
                    <div className='absolute bottom-2 left-2'>
                        <h3 className='font-semibold leading-[26px] text-[24px]'>Sniper 2</h3>
                        <p className='font-semibold leading-[18px] text-[16px] mt-[15px] game-text pl-[17px]'>8.6 / 10 Action</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer'>
                <div className='relative game'>
                    <div className='absolute bottom-2 left-2'>
                        <h3 className='font-semibold leading-[26px] text-[24px]'>Sniper 2</h3>
                        <p className='font-semibold leading-[18px] text-[16px] mt-[15px] game-text pl-[17px]'>8.6 / 10 Action</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='cursor-pointer'>
                <div className='relative game'>
                    <div className='absolute bottom-2 left-2'>
                        <h3 className='font-semibold leading-[26px] text-[24px]'>Sniper 2</h3>
                        <p className='font-semibold leading-[18px] text-[16px] mt-[15px] game-text pl-[17px]'>8.6 / 10 Action</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Popular