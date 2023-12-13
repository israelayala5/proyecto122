import React from 'react'
import Carousel6 from '../componentes/carousel/Carousel6'
import Imax6 from '../componentes/Imax6'
import ReactPlayer from 'react-player'
import Correo1 from '../componentes/Correo1';
import Footer0 from '../componentes/Footer0';
const Pje6 = () => {
  const vidUrl="https://youtu.be/y-hfOhGbpRE?si=liGFuEea-iMn_M_O" 
  return (
    <section className='cajas1'>
    <div>
    <h2>STEVE JOBS</h2>
      <Imax6/>
      <p className='lead'>Steve Jobs, reconocido por su visión y su capacidad innovadora, fue una figura central en la revolución tecnológica del siglo XX. Fue uno de los fundadores de Apple Inc., una empresa que ha transformado la informática y la tecnología de consumo. A través de su liderazgo y su perspicacia para los negocios, Jobs logró llevar a Apple a la cima de la industria tecnológica.</p>

      <p className='lead'>Jobs fue conocido por su enfoque minucioso y su atención al detalle. Creía firmemente en la integración de la tecnología y las artes, y esta filosofía se refleja en los productos de Apple, que son tan funcionales como estéticamente agradables. La vida y carrera de Steve Jobs fueron una mezcla de altibajos, pero su influencia en la informática y la tecnología en general sigue siendo innegable.</p>

      <p className='lead'>Aunque Jobs falleció en 2011, su legado en informática y su influencia en la industria tecnológica persisten. Este artículo explorará la vida y carrera de Steve Jobs, su impacto en la informática y cómo su legado continúa hoy en día.</p>


      <p className='lead'>Desde joven, Steve Jobs mostró un interés por la electrónica y la ingeniería. Pasó mucho tiempo en el garaje de su casa, trabajando en proyectos de electrónica y aprendiendo sobre los componentes de los ordenadores. Este interés temprano en la tecnología fue el precursor de su carrera en informática.</p>

<p className='lead'>Jobs fue un estudiante promedio en la escuela, pero su interés en la informática le llevó a asistir a reuniones del Homebrew Computer Club con Steve Wozniak. Fue durante este tiempo que Jobs vio las posibilidades de la informática personal. Veía a los ordenadores no sólo como herramientas para empresas, sino como dispositivos que podían mejorar la vida cotidiana de las personas.</p>
<p className='lead'>Steve Jobs tuvo un impacto en la vida moderna. Su visión de los ordenadores como herramientas accesibles y fáciles de usar cambió la forma en que la gente percibe y utiliza la tecnología. La introducción del Macintosh, con su interfaz gráfica de usuario, marcó el comienzo de una nueva era en la informática personal.</p>

<p className='lead'>Además de sus innovaciones en hardware, Jobs también fue pionero en la creación de software. El sistema operativo Mac OS, con su enfoque en la usabilidad y la estética, ha sido un modelo para otros sistemas operativos. Además, la tienda de aplicaciones de Apple, introducida bajo el liderazgo de Jobs, cambió la forma en que se distribuye el software y creó un nuevo modelo de negocio para los desarrolladores de aplicaciones.</p>

<p className='lead'>Sin embargo, el impacto de Jobs va más allá de la informática. Sus ideas sobre el diseño y la experiencia del usuario han influenciado a muchas otras industrias, desde la música hasta el cine.</p>
   <Carousel6/>
    </div>
    <div id='videoturing1'> 
    <h3 id='h331'>BIBLIOGRAFIA</h3>
    <ReactPlayer
           url={vidUrl}
           playing={true}
           volume={0.5}
           /> 
    </div>
    <div id='imageness1'>
    <h3>CONFUNDADOR DE APPLE</h3>
    <img src="img/777.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/jobs2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo1/>
    </div>
    <Footer0/>
    </section>
  )
}

export default Pje6