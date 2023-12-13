import React from 'react'
import Carousel4 from '../componentes/carousel/Carousel4'
import Imax4 from '../componentes/Imax4'
import ReactPlayer from 'react-player'
import Correo1 from '../componentes/Correo1';
import Footer0 from '../componentes/Footer0';
const Pje4 = () => {
  const vidUrl="https://youtu.be/RcnOKgkzzQw?si=PuuHtjMLhC1YAM7E" 
  return (
    <section className='cajas1'>
    <div>
    <h2>LINUS TORVALDS</h2>
      <Imax4/>
      <p className='lead'>El desarrollo del sistema operativo comenzó en 1991 cuando era un estudiante de sistemas de la Universidad de Helsinki quien, según se cuenta el propio Linus Torvalds, al no poder costear una de las caras versiones de Unix comerciales y cansado del pobre Minix decidió construir su propia versión de UNIX, basándose en el código de MINIX.</p>

      <p className='lead'>Publicó la siguiente carta en el grupo de noticias os.comp.minix (el newsgroup de el sistema Minix): ¿Añoras los maravillosos días del MINIX-1.1, cuando los hombres eran hombres y escribían sus propios drivers? ¿Careces de proyectos interesantes y te mueres por desafiar a un sistema operativo que puedas modificar a tu antojo? ¿Te resulta frustrante que todo funciones con MINIX? ¿Estás harto de trasnochar para poder conseguir que funcione un programa? Entonces, esta carta puede ser justamente para ti. Como comenté hace un mes, estoy trabajando en una versión libre de un sistema tipo MINIX para computadoras AT-386. Finalmente ha sido mejorado el entorno, que incluso se puede utilizar, y estoy deseoso de sacar las fuentes de una distribución más potente. Es solo la versión 0.02... pero ha conseguido que funcionen bien bash, gcc, gnu-make, gnu-se, compress, etc., bajo él".</p>

      <p className='lead'> la primavera de 1991, desarrolla un kernel (núcleo del sistema operativo) basado en Unix para computadoras con microprocesadores Intel. Una vez acabado, lo puso al servicio de todos a través de un servidor FTP.</p>


      <p className='lead'>Linus Torvalds bautizó a su creación como Freax (free+freak+x), pero el gestor del servidor prefirió Linux, que era el nick de Linus en la universidad. Desde entonces el crecimiento que ha operado en el mercado ha sido tan espectacular que para muchos analistas supuso poner en riesgo la primacía de Windows, del gigante Microsoft.</p>

      <p className='lead'>Linux se llama así por su primer desarrollador, Linus Torvald, con un cambio de "s" por "x" en honor de Unix, el sistema operativo (líder en el mundo de los grandes servidores) del cual procede.</p>

      <p className='lead'> en un héroe de la red, una especie de hacker amante del conocimiento que liberó un programa que puede ser descargado por cualquiera de la red y si tiene los conocimientos puede incluso ser mejorado.</p>

      <p className='lead'>Acogiéndose a la licencia pública general, varias compañías crearon sus propias versiones de Linux, que se llaman "distribuciones", todas ellas basadas en el mismo código fuente, pero con mejoras diversas.</p>

   <Carousel4/>
    </div>
    <div id='videoturing4'> 
    <h3 id='h331'>BIBLIOGRAFIA</h3>
    <ReactPlayer
           url={vidUrl}
           playing={true}
           volume={0.5}
           /> 
    </div>
    <div id='imageness1'>
    <h3>CREADOR DEL SISTEMA OPERATIVO LINUX </h3>
    <img src="img/too1.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/too2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo1/>
    </div>
    <Footer0/>
    </section>
  )
}

export default Pje4