import React from 'react'
import Carousel5 from '../componentes/carousel/Carousel5'
import Imax5 from '../componentes/Imax5'
import ReactPlayer from 'react-player'
import Correo1 from '../componentes/Correo1';
import Footer0 from '../componentes/Footer0';
const Pje5 = () => {
  const vidUrl="https://youtu.be/Dsz72ioTryo?si=vo-bVXwrgJkjhbA1" 
  return (
    <section className='cajas1'>
    <div>
    <h2>BILL GATES</h2>
      <Imax5/>
      <p className='lead'>William Henry GATES III nació el 28 de octubre de 1955 en Seattle (Estado de Washington). Segundo de los tres hijos del importante abogado, William Henry Gates II, y de Mary Gates, una ejecutiva del First Interstate Bank y profesora de la Universidad de Washington. Cursó sus estudios primarios en una escuela pública, y a los 13 años pasó a estudiar en el colegio privado de élite de Lakeside en Seattle, donde descubrió muy pronto su pasión por los ordenadores gracias al Club de Madres, quienes, tras una rifa benéfica, compraron un ordenador para el colegio. Bill Gates y su amigo Paul Allen programaban juegos sencillos sentados frente a aquel enorme, pesado y lento aparato, llamado PDP-8, fabricado por Digital Equipment y que costaba 18.000.- $. Ocupaba el tamaño de un pequeño armario de metro y medio de altura. "Estoy seguro de que una de las razones por las que estaba tan decidido a ayudar a que se desarrollara el ordenador personal era porque quería tener uno para mí", ha dicho Bill Gates varias veces.</p>
 
      <p className='lead'>En 1973 ingresó en la Universidad de Harvard. Un día, en 1975, Gates y Allen descubrieron en la revista Popular Electronics un microordenador que se vendía por 397.- $ para ensamblarlo en casa. Su nombre era Altair e incorporaba un innovador chip 8080 de Intel. Paul Allen consiguió el manual del 8080 y con Gates se dedicó a escribir durante cinco semanas una version del lenguaje de programación BASIC. A partir de ese momento abandonaron la Universidad y se trasladaron a Alburquerque (Nuevo México), donde crearon un equipo que diseñaba prototipos de programas orientados al microordenador Altair, que luego vendían a la compañía MITS. En ese año, 1975, Gates y Allen fundaron la empresa de producción de software informático, Microsoft Corporation. En los tres primeros años de andadura Gates era agente comercial, llevaba las finanzas y el marketing, y mejoraba su propio programa. La aparición del microprocesador supuso un abaratamiento y disminución del tamaño de los ordenadores, disparando la carrera hacia la expansión de la informática en las empresas y los hogares. Estaba naciendo la industria del ordenador personal y las empresas informáticas acudían a Microsoft con toda clase de proyectos. El volumen de trabajo era tan desmesurado que Gates recurrió a un viejo compañero de la universidad llamado Steve Ballmer para que se ocupara de dirigir la compañía, ya que Gates no quería dedicar más de un 10% de su esfuerzo mental a los negocios. Las ventas de Microsoft crecieron por encima de sus mejores expectativas. En 1979 la empresa trasladó su sede a Seattle en el Estado de Washington.</p>
 
      <p className='lead'>Por su parte, Steve Jobs y Stephen Wozniak, a mediados de la década de los setenta, habían construido una placa de circuitos en el garaje familiar de Jobs, que supuso una gran innovación en la construcción de ordenadores. En 1976 crearon la compañía Apple. Y un año más tarde se comercializó Apple II, segunda versión del ordenador personal, que incorporaba un sistema operativo que marcó un hito en la historia de la informática personal.</p>
 
      

   <Carousel5/>
    </div>
    <div id='videoturing5'> 
    <h3 id='h331'>BIBLIOGRAFIA</h3>
    <ReactPlayer
           url={vidUrl}
           playing={true}
           volume={0.5}
           /> 
    </div>
    <div id='imageness1'>
    <h3>CREADOR DEL SISTEMS OPERATIVO POPULAR MICROSOFT-WINDOWNS</h3>
    <img src="img/gaa1.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/gaa2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo1/>
    </div>
    <Footer0/>
    </section>
  )
}

export default Pje5