import React from 'react'

export default function LogoImageSvg (){
  return (
    <a className="flex flex-row title-font font-medium justify-center items-center md:justify-start  text-white ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span className="ml-3 text-xl">Conoce de Arte</span>
  </a>
  )
}
