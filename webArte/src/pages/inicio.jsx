import React from "react";
import TiposArte from "../components/tiposArte";
import CardTipoArtista from "../components/cardTipoArtista";
export default function Inicio() {
  const artistasRealismo = [
    {
      urlImage: "https://acortar.link/ptJn1J",
      fecha: "1997 † 1877 ",
      name: "GUSTAVE COURBET",
      descripcion:
        "Courbet combina diferentes elementos visuales. Utilizó tanto el cuchillo como el pincel, produciendo una superficie uniforme y ligeramente pastosa. Otros artistas adoptaron este tipo de técnica en diferentes variantes. ",
    },
    {
      urlImage: "https://acortar.link/d6PjBV",
      fecha: "1814  † 1875  ",
      name: "JEAN-FRANÇOIS",
      descripcion:
        "CMillet fue nombrado Caballero de la Legión de Honor. A fines de la década de 1960, Jean-François Millet recibió el reconocimiento correcto por su trabajo, seguido por el éxito financiero. Sus obras han sido expuestas en exposiciones internacionales. ",
    },
    {
      urlImage: "https://acortar.link/6gieeE",
      fecha: "1815 † 1905",
      name: " Adolph Friedrich",
      descripcion:
        "Con su técnica pictórica y su estilo personal, Menzel fue un artista adelantado a su tiempo. Su expresión pictórica libre y sus pinceladas abiertas no encontraron el favor de un público más amplio hasta más tarde.",
    },
    {
      urlImage: "https://acortar.link/1pPIs9",
      fecha: "1832 † 1898",
      name: "Iwan Iwanowitsch",
      descripcion: "Iván Ivánovich Shishkin fue un pintor paisajista, grabador y miembro fundador de la Sociedad de Exposiciones Artísticas Itinerantes. Shishkin basaba su trabajo en estudios analíticos de la naturaleza. Adquirió gran notoriedad por sus paisajes forestales, y reveló tener además grandes dotes para el dibujo técnico y el grabado.\n\nSus obras destacan por la poética descripción de las diferentes estaciones del año en los bosques y en los campos."
    },
  ];

  const artistasAbstracto = [
    {
      urlImage: "https://acortar.link/EaIA4Q",
      fecha: "1955  † ... ",
      name: "Hermann Angeli",
      descripcion:
        "Para el artista, la pintura abstracta e informal es una búsqueda constante de sí mismo, una inmersión en las profundidades de su alma para ver el mundo con otros ojos. Sólo a través de esta forma de pensar se puede llegar a conocerse a uno mismo y a sus sentimientos y pensamientos.",
    },
    {
      urlImage: "https://acortar.link/JNecQ5",
      fecha: "1879 † 1940",
      name: "Paul Klee",
      descripcion:"La pintura de Klee también incorpora elementos geométricos y simbólicos, con frecuentes referencias a la música e inspiraciones de sus viajes por diversas partes del mundo. Sin embargo, su vida estuvo marcada por la persecución nazi debido a sus raíces judías, influyendo significativamente en su producción artística.",
    },
    {
      urlImage: "https://acortar.link/10B7zf",
      fecha: "1872 † 1944",
      name: "Piet Mondrian",
      descripcion:"Este artista holandés es conocido por su estilo neoplasticista. Su forma de expresarse a través del uso de colores primarios y formas geométricas es tan extraordinario que Yves Saint Laurent diseñó vestidos inspirados en su trabajo. Dos de sus obras más reconocidas, Broadway Boogie-Woogie (1942-1943) y Composition in Planes (1914) se exhiben en el MoMA, y muchas de sus pinturas se encuentran repartidas por el mundo.",
    },
    {
      urlImage: "https://acortar.link/SNTTQJ",
      fecha: "1866  † 1944",
      name: "Vasili Kandinsky",
      descripcion:"Se cree que este artista ruso fue el impulsor del arte abstracto. Kandinsky tuvo una vida muy interesante: nació en Moscú, creció en Odessa, donde estudió arte, y más tarde regresó a Moscú para asistir a la universidad. Después, justo antes de la Revolución Rusa, se trasladó a Múnich. En Alemania, fue testigo del ascenso de los nazis al poder antes de trasladarse a Francia en 1933, donde vivió el resto de su vida. Sus obras, de diferentes estilos artísticos,",
    },
  ];

  return (
    <>
      {/* Estilo Realismo */}
      <TiposArte
        titulo="Estilo artístico Realismo"
        descripcion="El Realismo es un movimiento artístico y literario, originado en Francia a mitad del siglo XIX (1840-1880), cuyo propósito consistió en la representación objetiva de la realidad basándose en la observación de los aspectos cotidianos que brindaba la vida en la época."
      >
        {artistasRealismo.map(({ urlImage, fecha, name, descripcion , }) => (
          <CardTipoArtista
            key={name}
            urlImage={urlImage}
            fecha={fecha}
            name={name}
            descripcion={descripcion}
            
          />
        ))}
      </TiposArte>

      {/* Estilo Abstracto */}
      <TiposArte
        titulo="Estilo artístico Abstracto"
        descripcion="El arte abstracto es el contrario del figurativo (es decir, la representación de objetos identificables mediante imágenes reconocibles). Por tanto la abstracción no representa «cosas» concretas de la naturaleza sino que propone una nueva realidad. Propone un «arte puro» mirando más allá de nuestra realidad."
      >
        {artistasAbstracto.map(({ urlImage, fecha, name, descripcion }) => (
          <CardTipoArtista
            key={name}
            urlImage={urlImage}
            fecha={fecha}
            name={name}
            descripcion={descripcion}
          />
        ))}
      </TiposArte>
    </>
  );
}
