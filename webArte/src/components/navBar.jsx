import React from "react";
import { NavLink } from "react-router-dom";
import LogoImageSvg from "./svgImage/logo";
import BurguerButton from "./BurguerButton";

export default function NavBar() {
  const btnLinck = "block inline-block cursor-pointer mr-5 hover:text-blue-400 ";
  const activeLinck = "block inline-block cursor-pointer mr-5 text-blue-400";

  return (
    <header className="text-gray-300 body-font border-b-2 border-blue-400  fixed top-0 left-0 w-full bg-gray-800 z-10 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-4--">
        {/* operador ternario= classNameName={({isActive})=>isActive?verdadero:falso} */}
        <div className=" w-full flex max-md:justify-between items-center  ">
          <div className=" sm:bg-transparent flex sm:flex-row max-sm:w-11/12 max-sm:text-nowrap ">
            <a href="/"><LogoImageSvg /></a>
            
          </div>
          <div className="sm:invisible sm:w-0 max-sm:absolute max-sm:right-7">
            <BurguerButton />
          </div>

          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 md-flex-col	flex flex-wrap items-center text-base justify-center max-md:ml-5 max-sm:ml-0 max-sm:invisible">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLinck : btnLinck)}
            >
              Home
            </NavLink>
            <NavLink
              to="/artistas"
              className={({ isActive }) => (isActive ? activeLinck : btnLinck)}
            >
              Artistas
            </NavLink>
          </div>
          <div className=" md:ml-4 md:py-1 md:pl-4 00	flex flex-wrap items-center text-base justify-end max-sm:justify-center max-sm:invisible">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? activeLinck : btnLinck)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? activeLinck : btnLinck)}
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
