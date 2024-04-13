import React from 'react'

export default function TiposArte ({titulo, descripcion})  {
  return (
<section className="text-gray-400 body-font bg-gray-900 border-b-2 border-indigo-500">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">{titulo}</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">{descripcion}</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="data:image/jpeg;base64,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" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">1819 † 1877</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">GUSTAVE COURBET</h2>
          <p className="leading-relaxed text-base">Gustave Courbet fue el principal representante del realismo en Francia y por lo tanto influyó en el desarrollo de los siguientes estilos artísticos.

</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.reprodart.com/images/template-pics/Biografien/self_portrait_millet.jpg" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">1814 † 1875</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">JEAN-FRANÇOIS MILLET</h2>
          <p className="leading-relaxed text-base">illet fue nombrado Caballero de la Legión de Honor. A fines de la década de 1960, Jean-François Millet recibió el reconocimiento correcto por su trabajo, seguido por el éxito financiero. Sus obras han sido expuestas en exposiciones internacionales.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHwshlWEEliibN9jB6NrTszRhzHe3jpbLsqmW5xb62IGyuwyY9JQZX1DA0bcXl5RhW6A&usqp=CAU" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">1815 † 1905</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">ADOLPH FRIEDRICH</h2>
          <p className="leading-relaxed text-base">Con su técnica pictórica y su estilo personal, Menzel fue un artista adelantado a su tiempo. Su expresión pictórica libre y sus pinceladas abiertas no encontraron el favor de un público más amplio hasta más tarde.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ivan_Shishkin_restoration.jpg/220px-Ivan_Shishkin_restoration.jpg" alt="content"/>
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">1832 † 1898</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">IWAN IWANOWITSCH</h2>
          <p className="leading-relaxed text-base">Iván Ivánovich Shishkin fue un pintor paisajista, grabador y miembro fundador de la Sociedad de Exposiciones Artísticas Itinerantes.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
