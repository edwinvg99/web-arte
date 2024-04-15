import React from "react";
import LikeButton from "../components/svgImage/likeButton";

export default function CardTipoArtista({
  urlImage,
  fecha,
  name,
  descripcion,
}) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4 min-h-82 ">
      <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg ">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6 "
          src={urlImage}
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
          {fecha}
        </h3>
        <h2 className="text-lg text-white font-medium title-font mb-4">
          {name}
        </h2>
        <p className="leading-relaxed text-base overflow-y-auto   max-h-40 p-1">{descripcion}</p>
        <LikeButton/>
      </div>

    </div>
  );
}
