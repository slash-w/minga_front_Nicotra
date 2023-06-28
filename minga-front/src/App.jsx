import ClassComponent from './ClassComponent'
import vitelogo from '../public/vite.svg'

function App() {
    
  return (
    <div className="flex flex-col min-h-screen w-full justify-between items-center bg-white m-auto md:w-11/12">
      <nav className='flex w-full justify-between items-center px-5 h-20 absolute top-0 z-10'>
        <img className='h-14 p-1 text-[#F472B6] hover:text-white bg-white hover:bg-[#F472B6] rounded-lg' src="../goodies/Menu.png"></img>
        <img className="h-14 p-1" src='../goodies/logo.png'></img>
      </nav>
      <main className='md:pt-20 w-full min-h-screen'>
        <div className='mt-10 p-2 h-[250px] flex gap-4 items-center bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] rounded-lg text-white hidden md:flex'>
          <img className='shadow-lg rotate-180 bg-white p-1 rounded-full' src='../public/goodies/arrow.svg'></img>
          <img className='relative bottom-8' src="../public/images/someone.png"></img>
          <img className='relative bottom-10' src="../public/images/manga1.png"></img>
          <div className='m-auto flex flex-col gap-2 ml-10'>
            <h3 className='text-white text-2xl font-medium leading-[95.187%]'>Shonen</h3>
            <p className='text-xs'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <img className='shadow-lg bg-white p-1 rounded-full' src='../public/goodies/arrow.svg'></img>
        </div>
        <div className='px-20 pt-20 w-full h-screen flex flex-col gap-1 justify-center items-center text-white mx-auto bg-[url("../public/images/background-gamabunta-mobile.png")] bg-top bg-cover md:bg-[left_calc(50%)_top_calc(15%)] md:mt-5 md:mb-10 md:h-96 md:rounded-lg md:items-start md:flex-grow'>
          <h3 className='font-bold text-4xl mb-1 text-center md:text-left xl:text-6xl'>
            Live the emotion of the manga
          </h3>
          <p className='text-1xl mb-1 text-center'>
            Find the perfect manga for you
          </p>
          <p className='text-lg hidden font-bold md:flex'>#MingaForever 🔥</p>
          <a href="#" className='bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] w-60 p-3 flex justify-center text-xl rounded-lg'>
            Explore
          </a>
        </div>
      </main>

      <footer className='flex flex-col w-full justify-between items-center pb-5 bg-white'>
        <img className="rounded-b-[50%] hidden md:block" src="../public/images/one-piece-footer.png"></img>
        <div className='flex flex-col items-center px-5 w-full md:w-11/12 md:flex-row md:justify-between '>
          <div className='flex justify-evenly items-center mt-2'>
            <a href='#' className='mr-10 text-xl'>Home</a>
            <a href='#' className='text-xl'>Mangas</a>
          </div>
          <img src='../goodies/logo.png' className='my-4 w-20'></img>
          <div className='flex flex-col items-center mt-2'>
              <div className='flex'>
                  <img src="../public/images/facebook-black.svg" className='h-7 w-7 m-1'></img>
                  <img src="../public/images/twitter-black.svg" className='h-7 w-7 m-1'></img>
                  <img src="../public/images/youtube-black.svg" className='h-7 w-7 m-1'></img>
                  <img src="../public/images/vimeo-black.svg" className='h-7 w-7 m-1'></img>
              </div>
              <a className='bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] w-40 p-1 flex justify-center items-center text-xl text-white mt-2 rounded-full'>
            Donate
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
