import React from "react";
import Button from "../components/button";

export default function Error404() {
  return (
   
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-20 ">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center mb-8 text-red-700">
          <span className=" text-blue-400">404!</span> Parece que esta obra de
          arte se ha escondido en el lienzo digital.
        </h1>
        <h2 className="text-lg sm:text-2xl lg:text-3xl text-center text-blue-300">
          Mientras tanto, siéntete libre de explorar otras galerías virtuales.
          ¡La creatividad nunca se pierde por completo en la web!
        </h2>
        <a href="/"><button className="mt-20  bg-blue-400 text-black border-b-4 border-indigo-500 font-bold rounded-md p-2" >REGRESAR</button></a>
      </div>
 
  
  );
}
