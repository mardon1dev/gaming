import React, { useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "./Popular.css"
import GamingContext from '../../Context/Context';


const Popular = () => {

    const {data} = useContext(GamingContext);

    console.log(data);

  return (
    <div className='flex flex-col items-start'>
        <h2 className='font-semibold leading-[26px] text-[24px]'>Most popular Game</h2>
        <div className='mt-[25px] flex w-full gap-[20px]'>
        <Swiper
            spaceBetween={42}
            slidesPerView={4}
            className='w-full'
        >
            {
                data.slice(1,7).map((item, index) => {
                    return (
                        <SwiperSlide className='cursor-pointer' key={index}>
                            <div className='relative game'>
                                <img src={item.background_image} alt="Image" className='w-full game-img rounded-lg' />
                                <div className='absolute left-0 w-full p-2 bg-[#20232B] game-text'>
                                    <h3 className='font-semibold leading-[26px] text-[20px] hover:text-[#FC8B40]'>{item.name}</h3>
                                    <p className='font-semibold leading-[18px] text-[16px] mt-[15px] game-text pl-[17px]'>{item.rating} {item.genres[0].name}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </div>
    </div>
  )
}

export default Popular