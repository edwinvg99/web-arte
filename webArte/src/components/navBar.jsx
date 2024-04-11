import React from "react";
import {NavLink} from "react-router-dom";
import LogoImageSvg from "./svgImage/logo";

export default function NavBar() {
const btnLinck = 'block inline-block cursor-pointer mr-5 hover:text-blue-400'
const activeLinck = 'block inline-block cursor-pointer mr-5 text-blue-400'

  return (
    <header class="text-gray-300 body-font border-b-2 border-blue-400 mb-5 ">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-4--">
     
        {/* operador ternario= className={({isActive})=>isActive?verdadero:falso} */}
        <div className=" w-full flex max-sm:flex-col ">
        
          <LogoImageSvg/>

          <div class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md-flex-col	flex flex-wrap items-center text-base justify-center max-md:ml-5 max-sm:ml-0 ">
            <NavLink to='/' className={({isActive})=>isActive?activeLinck:btnLinck}>Home</NavLink>
            <NavLink to='/artistas' className={({isActive})=>isActive?activeLinck:btnLinck}>Artistas</NavLink>
          </div>
          <div class=" md:ml-4 md:py-1 md:pl-4 00	flex flex-wrap items-center text-base justify-end max-sm:justify-center">
            <NavLink to='/login' className={({isActive} )=>isActive?activeLinck:btnLinck}>Login</NavLink>
            <NavLink to='/register' className={({isActive})=>isActive?activeLinck:btnLinck}>Register</NavLink>
          </div>

        </div>
      
      </div>
    </header>
  );
}
