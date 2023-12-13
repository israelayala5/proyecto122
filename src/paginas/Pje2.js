import React from 'react'
import Carousel2 from '../componentes/carousel/Carousel2'
import Imax2 from '../componentes/Imax2'
import ReactPlayer from 'react-player'
import Correo1 from '../componentes/Correo1';
import Footer0 from '../componentes/Footer0';

const Pje2 = () => {
  const vidUrl="https://youtu.be/SNw4m1m_2GE?si=wXxxl7KinAY2FrAV"
  return (
    <section className='cajas1'>
    <div>
    <h2>TIM BERNERS-LEE</h2>
      <Imax2/>
      <p className='lead'>La World Wide Web es parte integrante de nuestra vida cotidiana. Ha transformado nuestra forma de comunicarnos, trabajar y acceder a la información. Pero, ¿se ha preguntado alguna vez quién estuvo detrás de la creación de esta tecnología revolucionaria? Conozca a Tim Berners-Lee, el padre de la World Wide Web.</p>

      <p className='lead'>Tim Berners-Lee es un informático inglés que inventó la World Wide Web en 1989 mientras trabajaba en el CERN, la Organización Europea para la Investigación Nuclear. También es el director del Consorcio World Wide Web (W3C), una comunidad internacional que desarrolla estándares web. El invento de Berners-Lee ha transformado el mundo y revolucionado la forma en que nos conectamos y compartimos información.</p>


      <p className='lead'>Berners-Lee nació el 8 de junio de 1955 en Londres, Inglaterra. Creció en una familia de matemáticos y científicos, lo que influyó en su interés por la ciencia y la tecnología. De niño, Berners-Lee estaba fascinado por la electrónica y construyó su primer ordenador con un soldador, un viejo televisor y algunas piezas de repuesto.</p>

      <p className='lead'>Tras completar su educación, Berners-Lee trabajó como ingeniero de software en varias empresas. A principios de los 80, se incorporó al CERN, donde trabajó en el desarrollo de software para controlar aceleradores de partículas.</p>

      <p className='lead'>En el CERN, Berners-Lee tuvo acceso a una gran cantidad de datos e información. Sin embargo, le resultaba difícil compartir esta información con sus colegas, que se encontraban en distintos lugares del mundo. Se dio cuenta de que era necesario un sistema que permitiera a los científicos compartir información de forma fácil y eficaz.</p>

      <p className='lead'>Para resolver este problema, Berners-Lee empezó a trabajar en un nuevo sistema que permitiera compartir información a través de Internet. A este sistema lo llamó World Wide Web.</p>

      <p className='lead'>La idea de la World Wide Web</p>
      <p className='lead'>La idea de la World Wide Web era crear una red global de información a la que pudiera acceder cualquier persona con conexión a Internet. Berners-Lee imaginó un sistema que permitiera a los usuarios navegar por una vasta red de información utilizando hipervínculos.</p>

   <Carousel2/>
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
    <h3>CREADOR DE LA WORD WIDE WEB</h3>
    <img src="img/tim1.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/tim2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo1/>
    </div>
    <Footer0/>
    </section>

  )
}

export default Pje2