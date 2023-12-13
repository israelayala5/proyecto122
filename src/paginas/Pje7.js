import React from 'react'
import Carousel7 from '../componentes/carousel/Carousel7'
import Imax7 from '../componentes/Imax7'
import ReactPlayer from 'react-player'
import Correo1 from '../componentes/Correo1';
import Footer0 from '../componentes/Footer0';
const Pje7 = () => {
  const vidUrl="https://youtu.be/mlbzg4--YIU?si=g4GcYzr5YGjwb2bT" 
  return (
    <section className='cajas1'>
    <div>
    <h2>VINTON CERF</h2>
      <Imax7/>
      <p className='lead'>Vinton Cerf es considerado por muchos como el Padre de Internet. Fue Fundador y presidente de la Internet Society.</p>

      <p className='lead'>Con Internet Vinton Cerf revolucionó completamente los procesos de transmisión de la información, permitiendo que ésta fluya sin restricción por todo el mundo. Con una gran visión de futuro, diseñó y estableció los protocolos, la tecnología de interconexión y los servicios de accesibilidad que han hecho posible lo que hace sólo unos años era una utopía. Su trabajo junto con Lawrence Roberts, Robert Kahn y Tim Berners-Lee constituye, en este sentido, un definitivo avance al servicio de la humanidad.Graduado en matemáticas y ciencias de la computación por la Universidad de Stanford, se doctoró posteriormente en Informática en la Universidad de California (UCLA).</p>

      <p className='lead'>En la década de los 70, Vinton Cerf comenzó a trabajar para permitir conectar los ordenadores entre sí, con independencia del tipo de conexión -estaciones de radios, satélites y líneas telefónicas- para la red militar ARPANET, que dependía del Departamento de Defensa norteamericano. Entre 1982 y 1986, Cerf diseñó el primer servicio comercial del correo electrónico que se conectaría a Internet.</p>

      <p className='lead'>Es de destacar el agradecimiento hecho público por Vinton Cerf y Kahn a Al Gore, por “su ayuda a implantar la idea de los enormes beneficios de la alta velocidad en la computación y en las comunicaciones”, desde principios de los años 70.</p>

      <p className='lead'>Hoy en día Vinton Cerf centra su trabajo en la creación de una red interplanetaria denominada Internet Planetary Net que pretende extender Internet al espacio exterior junto a la NASA. Además, compagina sus investigaciones con el cargo de vicepresidente de Internet Architecture and Technology de la WorldCom Corporation. Desde 2005 es el jefe del área de Internet de Google.</p>

      <p className='lead'>En 2002 Vinton Cerf obtuvo el Premio Príncipe de Asturias de Investigación Científico-Técnica. Y en 2004 el Premio Turing, considerado por muchos como el premio Nobel de la Informática.</p>
      <p className='lead'>Las investigaciones, lideradas por Vinton Cerf llevaron al diseño del conjunto de protocolos que hoy son conocidos como TCP/IP (Transmission Control Protocol/Internet Protocol), que fue presentado por Vinton Cerf y Robert Kahn en 1972.</p>

      <p className='lead'>Actualmente Vinton Cerf es el vicepresidente mundial y Chief Internet Evangelist de Google. Es miembro del Consejo Asesor Internacional del Centro Cultural Internacional Oscar Niemeyer de Avilés, Asturias.</p>

      
     <Carousel7/>
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
    <h3> CREADOR DEL PROTOCOLO TCP/IP</h3>
    <img src="img/cerf1.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/cerf2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo1/>
    </div>
    <Footer0/>
    </section>
  )
}

export default Pje7