import React from 'react'

export default function Carrousel() {
  return (
    <div className="sm:hidden lg:flex h-[30rem] w-full  bg-white flex items-center justify-center">
        <div className="h-[20rem] w-[90%] bg-blue-600 bg-[linear-gradient(45deg,#4338CA_0%,#5E52F3_100%)]">
          <img
            className="h-[22rem] relative bottom-[5rem] left-[2rem]"
            src="/src/assets/images/deku.png"
            alt=""
          />
          <img
            className="h-[19rem] relative bottom-[25rem] left-[23rem]"
            src="/src/assets/images/mangabnha.png"
            alt=""
          />
          <div className="h-[20rem] w-[25rem] relative bottom-[35rem] left-[43rem]">
            <h2 className="text-white text-2xl">Shonen:</h2>
            <p className="text-white text-sm">
              Is the manga that is aimed at adolescent boys. They are series
              with large amounts of action, in which humorous situations often
              occur. The camaraderie between members of a collective or a combat
              team stands out.
            </p>
          </div>
        </div>
      </div>
  )
}
