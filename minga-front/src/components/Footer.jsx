import React from 'react'
import Button from './Button'

export default function Footer() {
  return (
    <footer className='flex flex-col box-border w-[100vw] justify-between items-center mt-10 bg-white'>
        <img className="rounded-b-[50%] hidden md:block" src="../public/images/one-piece-footer.png"></img>
        <div className='pt-20 flex flex-col justify-between items-center w-[80vw] md:flex-row'>
          <div className='flex justify-center gap-5 items-center pb-5'>
            <a href='#' className='text-xl'>Home</a>
            <a href='#' className='text-xl'>Mangas</a>
          </div>
          <img src='../goodies/logo.png' className='w-20 pb-5'></img>
          <div className='flex flex-col items-center pb-5'>
              <div className='flex'>
                  <img src="../public/images/facebook-black.svg" className='h-7 w-7 m-1'></img>
                  <img src="../public/images/twitter-black.svg" className='h-7 w-7 m-1'></img>
                  <img src="../public/images/youtube-black.svg" className='h-7 w-7 m-1'></img>
                  <img src="../public/images/vimeo-black.svg" className='h-7 w-7 m-1'></img>
              </div>
              <Button title='Donate ♥'/>
          </div>
        </div>
        <div className='h-5 w-full max-w-[80vw] opacity-20 border-t-2 border-t-[#222] border-solid'></div>
      </footer>
  )
}
