import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='px-20 pt-20 w-full h-screen flex flex-col gap-1 justify-center items-center text-white mx-auto bg-[url("../public/images/background-gamabunta-mobile.png")] bg-top bg-cover md:bg-[url("../public/images/naruto-background-pc.png")] md:bg-[left_calc(50%)_top_calc(0%)] md:mt-5 md:mb-10 md:h-[400px] md:rounded-lg md:items-start'>
        <h3 className="font-bold text-4xl mb-1 text-center md:text-left xl:text-6xl">
          Live the emotion of the manga
        </h3>
        <p className="text-1xl mb-1 text-center">
          Find the perfect manga for you
        </p>
        <p className="text-lg hidden font-bold md:flex">#MingaForever 🔥</p>

        <Button title='Explore' />
    </div>
  )
}
