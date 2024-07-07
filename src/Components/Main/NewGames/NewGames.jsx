import React, { useContext } from 'react'
import NewGame from "../../../assets/game2.png"
import GamingContext from '../../Context/Context'

const NewGames = () => {

    const {data} = useContext(GamingContext);
    const games = data

  return (
    <div className='mt-[30px]' >
        <h3 className='font-semibold leading-[25px] text-[24px]'>New Released Games</h3>
        <div className='flex flex-wrap mt-[20px] justify-between gap-y-4'>
            {
                games.slice(7, games.length - 1).map((game, index) => {
                    return (
                        <div className='bg-[#191B1F] max-w-[225px] w-full py-[5px] pl-[5px] pr-[15px] rounded-lg flex items-center gap-2 hover:scale-105 duration-300 cursor-pointer' key={index}>
                            <div className='max-w-[90px]'>
                                <img src={game.background_image} alt="new game" className='w-full object-cover rounded-lg h-[60px]'/>
                            </div>
                            <div>
                                <h4 className='font-semibold text-[14px] leading-[17px]'>{game.name}</h4>
                                <p className='font-normal text-[12px] leading-[10px] mt-1'>{game.genres[0].name}</p>
                                <p className='font-normal text-[12px] leading-[10px] mt-2'>Rating: 
                                    <span className='font-semibold text-[12px] leading-[10px] text-[#FFC107]'> {game.rating}</span>
                                </p>
                            </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default NewGames