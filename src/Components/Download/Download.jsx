import React, { useContext } from 'react'
import GamingContext from '../Context/Context'

const Download = () => {

    const {data} = useContext(GamingContext);
    const games = data
  return (
    
        games.slice(0, 1).map((game, index) => {
            return(            
                <div className='mt-[41px] w-full max-w-[302px]' key={index}>
                    <img src={games[19].background_image} alt="Download" width={302} height={218} />
                    <div className='mt-[20px]'>
                        <h3 className='font-[500] text-[28px] leading-[22px]'>{games[19].name}</h3>
                        <span className='block font-normal text-[18px] leading-[10px] mt-2'>{games[19].genres[0].name}</span>
                        <p className='font-normal text-[12px] leading-[10px] mt-2'>Rating:
                            <span className='font-semibold text-[12px] leading-[10px] text-[#FFC107]'> {games[19].rating}</span>
                        </p>
                        <p className='font-normal text-[14] leading-[20px] mt-3'>Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.</p>
                    </div>
                    <a href='#' className='button block w-full text-white text-center py-[15px] bg-[#FC8B40] mt-[33px] rounded-lg cursor-pointer'>Download Now</a>
                </div>
            )
        })
    
  )
}

export default Download;