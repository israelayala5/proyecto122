import React from 'react'
import Carousel1 from '../componentes/carousel/Carousel1'
import Imax1 from '../componentes/Imax1'
import ReactPlayer from 'react-player'
import Correo1 from '../componentes/Correo1';
import Footer0 from '../componentes/Footer0';

const Pje1 = () => { 
  const vidUrl="https://youtu.be/0TCpHlsBjSs?si=fPO6wANWfvi3Z7s2" 
  return (
    <section className='cajas1'>
    <div>
    <h2>ADA LOVELACE</h2>
      <Imax1/>
      <p className='lead'>Las mujeres en la ciencia y tecnología han vivido en la sombra de los hombres hasta hace relativamente poco, cuando se empezaron a reivindicar que algunos de los más famosos avances tecnológicos, atribuidos al sexo opuesto, habían sido realizados realmente por mujeres, a las cuales jamás se les había atribuido ningún tipo de mérito.</p>

      <p className='lead'>Muchas mujeres han sido el cerebro de muchas de las invenciones más significativas de la historia, algunas incluso sin darse cuenta. Este fue el caso de Augusta Ada Byron, conocida también como Ada Lovelace.</p>

      <p className='lead'>Muchos historiadores se negaban a atribuirle el mérito que le correspondía porque "no era posible que una mujer de esa época tuviera tantos conocimientos en matemáticas".</p>

      <p className='lead'>Ada Lovelace fue la única hija (legítima) del célebre poeta romántico Lord Byron, aunque éste se fue de su vida cuando ella tan sólo tenía un mes: debido a desavenencias matrimoniales, su madre se marchó y se la llevó, dejándole a él atrás mientras dormía. Jamás le conoció.</p>

      <p className='lead'>Ada Lovelace (WIRED)
Ada siempre había vivido la ciencia de muy cerca, su madre la llevaba de viaje a regiones industrializadas de Inglaterra para visitar algunas de las novedades de la época en tecnología, como el Telar de Jacquard. Su madre se esforzó por erradicar todo rastro de la herencia literaria que su hija llevaba en los genes e insistió mucho en su formación en las ciencias.</p>

<p className='lead'>Para estudiar matemáticas su madre contrató a Mary Somerville, una prestigiosa astrónoma. Fue precisamente ella, quien más adelante, le presentó a Charles Babbage. Tras contraer matrimonio con William King, Ada siguió con sus estudios de matemáticas, y tras tener a su último hijo, comenzó a trabajar con Babbage y su Máquina Analítica.</p>

<p className='lead'>En 1942, Ada decidió apoyar a Babbage traduciendo uno de los artículos sobre su invención al inglés para la revista Scientific Memoirs sobre la Máquina Analítica, en el cual hizo aportaciones personales y teorías en forma de notas sobre el funcionamiento del dispositivo. El artículo lo firmó con las siglas AAL (Ada Augusta Lovelace) para ocultar su identidad. Estas notas terminaron siendo más populares que el contenido del propio artículo, ya que sin darse cuenta, Ada desarrolló conceptos visionarios, como el de lo que, hoy en día, es el algoritmo informático. Ada relataba, asimismo, las muchas otras aplicaciones que le veía al invento de Babbage. Las notas ocuparon tres veces más que el artículo original, y durante los meses de escritura, Ada y Babbage intercambiaban correspondencia a diario, compartiendo ideas.</p>

   <Carousel1/>
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
    <h3>PRIMERA PROGRAMADORA DE LA HISTORIA</h3>
    <img src="img/c1.jpg" className="img-thumbnail" alt="..."></img>
    <img src="img/c2.jpg" className="img-thumbnail" alt="..."></img>
    <Correo1/>
    </div>
    <Footer0/>
    </section>

  )
}

export default Pje1