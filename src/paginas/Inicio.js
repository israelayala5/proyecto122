import React from 'react'
import ReactPlayer from 'react-player';
import Carousel from '../componentes/carousel/Carousel'
import Teoria from '../componentes/Teoria'
import Correo from '../componentes/Correo';
import Tablas from '../componentes/Tablas';
import Footer from '../componentes/Footer';

const Inicio = () => {
    const vidUrl="https://youtu.be/s2aBkW9ZD7U?si=i2Ain9vEWDehTE60" 
  return (
    <div className="inicio">
         <h2>ALGUNOS PERSONAJES DESTACADOS EN INFORMATICA</h2>
         <p>por Israel Ayala M. | Dic , 2023 | Informática, Internet, Tecnología | 0 Comentarios</p>
           <Carousel/>   
           <Teoria/>
           <div className='player'>
           <ReactPlayer
           url={vidUrl}
           playing={true}
           volume={0.5}
           /> 
          
           </div>
           <Correo/>
           <Tablas/>
           <Footer/>
    </div>
  )
}

export default Inicio