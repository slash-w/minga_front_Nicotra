import React from 'react'

export default function Anchor({title}) {
  return (
    <a className="font-extrabold w-[80%] py-[1rem] rounded-md hover:bg-white hover:text-[#F472B6] transition-all duration-200 ease-in-out " href="#">{title}</a>
  )
}
