import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BurguerButton = () => {
  const [open, setOpen] = useState(false);
  const btnLink =
    "text-center text-white text-xl hover:bg-blue-400 cursor-pointer py-3  border-2 border-transparent border-b-blue-400";
  const activeLink =
    "text-center text-white text-xl hover:bg-blue-400 cursor-pointer py-3 mb-2 ";

  return (
    <>
      {/* Botón de hamburguesa */}
      <button className="ml-4 z-20 relative" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Fondo oscuro al abrir el menú */}
      {open && (
        <div
          className="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 z-10 backdrop-blur-sm "
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Menú desplegable */}
      <div className={`bg-gray-800 min-h-screen w-64 fixed top-0 right-0 transition-all duration-300 z-20 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-3">
          {/* Botón para cerrar el menú */}
          <button className="ml-4 z-20 relative" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Enlaces del menú */}
          <div className="flex flex-col  ">
            <NavLink to="/" className={btnLink} activeClassName="font-bold">
              Inicio
            </NavLink>
            <NavLink to="/artistas" className={btnLink} activeClassName="font-bold">
              Artistas
            </NavLink>
            <NavLink to="/login" className={btnLink} activeClassName="font-bold">
              Login
            </NavLink>
            <NavLink to="/register" className={btnLink} activeClassName="font-bold">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurguerButton;
