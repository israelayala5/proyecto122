import React from 'react'
import Carousel3 from '../componentes/carousel/Carousel3'
import Imax3 from '../componentes/Imax3'
import ReactPlayer from 'react-player'
import Correo1 from '../componentes/Correo1';
import Footer0 from '../componentes/Footer0';
const Pje3 = () => {
  const vidUrl="https://youtu.be/i2a50hFnnEw?si=JHDEZirMQs0CAVoA" 
  return (
    <section className='cajas1'>
    <div>
    <h2>GRACE HOOPER</h2>
      <Imax3/>
      <p className='lead'>Grace Murray Hopper nació el 9 de diciembre de 1906, en Nueva York, y murió en Arlington, Virginia (USA) el 1 de enero de 1992. Grace Hopper fue un distinguido oficial de la marina estadounidense y una destacada científica computacional. Hopper fue uno de los programadores del primer gran ordenador, el Mark I. Su trabajo dió lugar al primer lenguaje compilador para ordenadores. También trabajó en el desarrolo del COBOL, uno de los primeros lenguajes de programación.</p>

      <p className='lead'>Acuñó el término "bug" (chinche, bicho) para referirse a un error de programación, cuando descubrió una pequeña mariposa dentro de los circuitos que hacía cometer errores de ejecución. En 1973, aunque en la reserva, fue la primera mujer en llegar a capitán de navío de la marina estadounidense.</p>

      <p className='lead'>Aunque ya estaba retirada, fue llamada de nuevo al servicio activo de la marina en 1967. En 1983, fue nombrada Rear Admiral, y cuando de nuevo se retiró en agosto de 1986, era el oficial más viejo en activo de EEUU. Después de su retiro trabajó como consejero de la Digital Equipment Corporation hasta su muerte.</p>

      <p className='lead'>En 1969, recibió la distinción de Man of the Year de la Data Processing Management Association. Después de 40 años de trabajo pionero con ordenadores, Hopper decía que su mayor contribución había sido entrenar a muchos jóvenes.</p>

      <p className='lead'>Grace Brewster Murray se graduó en la universidad de Vassar, con un B.A. en matemáticas en 1928 y trabajó bajo la dirección del algebrista Oystein Ore en Yale para su M.A., en 1930, y su Ph.D. (tesis doctoral) en 1934.</p>

      <p className='lead'>Se casó en 1930, con Vincent Foster Hopper, un educador, y comenzó a trabajar enseñando matemáticas en Vassar en 1931. Consiguió el nombramiento de profesor asociado en 1941 cuando ganó una beca para estudiar en el New York University's Courant Institute for Mathematics.</p>

      <p className='lead'>Hopper procedía de una familia con tradición militar, así renunció a su puesto en la universidad de Vassar para entrar en la Navy WAVES (Women Accepted for Voluntary Emergency Service) en diciembre de 1943. Fue nombrada teniente en julio de 1944 y destinada al Bureau of Ordenance Computation Project de la Harvard University, fue la tercera persona en unirse al equipo de investigación del profesor y teniente de la reserva naval Howard H. Aiken. El primer trabajo con la Mark I (ordenador electromecánico) fue calcular los coeficientes del desarrolo en serie del arco coseno.</p>

   <Carousel3/>
    </div>
    <div id='videoturing3'> 
    <h3 id='h331'>BIBLIOGRAFIA</h3>
    <ReactPlayer
           url={vidUrl}
           playing={true}
           volume={0.5}
           /> 
    </div>
    <div id='imageness1'>
    <h3>DESAROLLO EL PRIMER COMPILADOR DE LA HISTORIA</h3>
    <img src="img/ho1.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/ho2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo1/>
    </div>
    <Footer0/>
    </section>
    
  )
}

export default Pje3