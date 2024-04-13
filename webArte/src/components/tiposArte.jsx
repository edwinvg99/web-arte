import React from "react";
import CardTipoArtista from "./cardTipoArtista";
export default function TiposArte({ titulo, descripcion }) {
  return (
    <section className="text-gray-400 body-font bg-gray-00 border-b-2 border-indigo-500 ">
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
          <CardTipoArtista
            urlImage={
              "https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-1/427987804_930853691954342_7264008690099277796_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yJ_8JXiLz1EAb7GxL_0&_nc_ht=scontent-bog2-2.xx&oh=00_AfA__fk1HA7JeEc_2NWjSeYS-Y_bdrpm0gQtgNTB2FC_bQ&oe=66209154"
            }
            fecha="1997 † viviendo"
            name="edwin velasquez"
            descripcion="DESCRIPCION"
          />
          <CardTipoArtista
            urlImage={
              "https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-1/427987804_930853691954342_7264008690099277796_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yJ_8JXiLz1EAb7GxL_0&_nc_ht=scontent-bog2-2.xx&oh=00_AfA__fk1HA7JeEc_2NWjSeYS-Y_bdrpm0gQtgNTB2FC_bQ&oe=66209154"
            }
            fecha="1997 † viviendo"
            name="edwin velasquez"
            descripcion="DESCRIPCION"
          />
          <CardTipoArtista
            urlImage={
              "https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-1/427987804_930853691954342_7264008690099277796_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yJ_8JXiLz1EAb7GxL_0&_nc_ht=scontent-bog2-2.xx&oh=00_AfA__fk1HA7JeEc_2NWjSeYS-Y_bdrpm0gQtgNTB2FC_bQ&oe=66209154"
            }
            fecha="1997 † viviendo"
            name="edwin velasquez"
            descripcion="DESCRIPCION"
          />
          
          <CardTipoArtista
            urlImage={
              "https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-1/427987804_930853691954342_7264008690099277796_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yJ_8JXiLz1EAb7GxL_0&_nc_ht=scontent-bog2-2.xx&oh=00_AfA__fk1HA7JeEc_2NWjSeYS-Y_bdrpm0gQtgNTB2FC_bQ&oe=66209154"
            }
            fecha="1997 † viviendo"
            name="edwin velasquez"
            descripcion="Iván Ivánovich Shishkin fue un pintor paisajista, grabador y
                miembro fundador de la Sociedad de Exposiciones Artísticas
                Itinerantes."
          />
        </div>
      </div>
    </section>
  );
}
