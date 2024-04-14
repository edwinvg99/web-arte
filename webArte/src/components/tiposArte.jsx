import React from "react";
export default function TiposArte({ titulo, descripcion, children}) {
  return (
    <section className="text-gray-400 body-font border-b-2 border-indigo-500 ">
      <div className="container px-5 py-10 mx-auto mt-20 ">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              {titulo}
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            {descripcion}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
        {children}

        </div>
      </div>
    </section>
  );
}
