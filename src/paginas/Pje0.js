import React from 'react'
import Carousel0 from '../componentes/carousel/Carousel0'
import Imax from '../componentes/Imax'
import ReactPlayer from 'react-player'
import Correo0 from '../componentes/Correo0';
import Footer0 from '../componentes/Footer0';

const Pje0 = () => {
  const vidUrl="https://youtu.be/g9JYRHEOiK4?si=wO3VpFN67LIHOGOf" 
  return (
    <section className='cajas'>
    <div>
    <h2>ALAN TURING</h2>
      <Imax/>
<p className='lead'> Alan Turing fue el creador de la máquina electromecánica precursora de los computadores modernos, la cual logró desbloquear los códigos secretos de los submarinos alemanes durante la Segunda Guerra Mundial. Fue un trabajo considerado clave para la obtención de la victoria aliada del mencionado conflicto.</p>

<p className='lead'>Turing nació en Londres el 23 de junio de 1912. Pasó su infancia en la India donde su padre se desempeñaba con funcionario colonial. Desde muy pequeño mostró un gran interés por la lectura, los números y los rompecabezas. En su carrera escolar destacó su aptitud por las matemáticas y por su carácter que lo llevó a seguir sus propias ideas.</p>

<p className='lead'>En 1934 se graduó en la Licenciatura de Matemáticas de la Universidad de Cambridge y en 1936 publicó su artículo «los números computables» en el que hablaba del concepto de algoritmo y exponía las bases de su máquina de calcular denominada “La Máquina Universal” la cual, aunque no se llegó a diseñar, mostraba la posibilidad de realizar varias operaciones con la misma lógica del cálculo humano en un menor tiempo a partir de ciertas bases e instrucciones. La puesta en práctica de la Máquina de Turing fue posible con sus trabajos posteriores durante la Segunda Guerra Mundial.</p>   

<p className='lead'>En 1938 obtuvo el Doctorado por la Universidad de Princeton  y anunció el concepto de hipercomputación, que tomaba como base la Máquina Universal y auguraba una nueva máquina que podría realizar cálculos algorítmicos cuya solución no existiera. Al desencadenarse la Segunda Guerra Mundial. El trabajo de Turing  llamó la atención del departamento de Inteligencia británico que finalmente lo reclutó como criptógrafo. Su  labor consistía en tratar de descifrar los códigos secretos de la marina alemana emitidos por la máquina Enigma y los codificadores de teletipo Fish.</p>

<p className='lead'>Turing encabezó el equipo que ideó la máquina Bombe y varios equipos electrónicos Colossus, considerados por algunos, los primeros computadores de la historia y el inició de la Informática. La función de Bombe fue descifrar los códigos secretos emitidos por Enigma, que rebelaban la posición de los submarinos alemanes en el Atlántico, labor que fue realizada con éxito siendo uno de los puntos decisivos  para lograr la victoria aliada en el conflicto bélico. Finalizada la guerra, Turing recibió, en 1946, la Orden del Imperio Británico que se otorga a personas que hayan realizado hechos relevantes para el Reino Unido.</p>

<p className='lead'>Continuó su carrera en Automatic Computing Engine (ACE) del cual fue Oficial Científico Principal. Durante su estancia en ACE, trabajó en conceptos como las redes de cómputo, la subrutina y la biblioteca de software además de constituir las bases de la red neuronal. En 1948 sus investigaciones se enfocaron en el campo de la Inteligencia Artificial cuyo concepto nació de su mano. En su artículo «Computing Machinery and Inteligence» publicado en 1950 que abordaba el hecho de sí las máquinas pueden pensar o no. Desarrolló el Test de Turing con el que se trataba de reafirmar la existencia de la inteligencia de las máquinas.</p>

<p className='lead'>La amplia carrera de Turing en diversos campos del saber se vio afectada por cuestiones personales. Su condición de homosexual le llevó a ser condenado ya qué en esa época se consideraba un delito tener esta orientación sexual. Le propusieron dos opciones: ir a la cárcel o someterse a una castración química. El connotado científico optó por la segunda que le provocó trastornos físicos y psicológicos que lo llevaron al suicidio en 1954, aunque las circunstancias de su muerte no están del todo claras.</p>

<p className='lead'>El 19 de agosto de 2014, la Reina Isabel II concedió el indulto póstumo a Alan Turing logrando de esta forma recuperar la figura del científico que aportó a la humanidad.</p>
<Carousel0/>
    </div>
    <div id='videoturing'> 
    <h3 id='h33'>BIBLIOGRAFIA</h3>
    <ReactPlayer
           url={vidUrl}
           playing={true}
           volume={0.5}
           /> 
    </div>
    <div id='imageness'>
    <h3>MAQUINA DE TURING</h3>
    <img src="img/t1.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/t2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo0/>
    </div>
    <Footer0/>
    </section>


  )
}

export default Pje0