import React from 'react'

const Tablas = () => {
  return (
    <div>
<h3 className='lista'>LISTA PERSONAJES DESTACADOS: </h3> <br/>
<table className="tables">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Año-Contribución</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Alan</td>
      <td>Turing</td>
      <td>(1912-1954)</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ada</td>
      <td>Lovelace</td>
      <td>(1815-1852)</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Tim</td>
      <td>Berners-Lee</td>
      <td>(1955)</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Grace</td>
      <td>Hopper</td>
      <td>(1906-1992)</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Linus</td>
      <td>Torvalds</td>
      <td>(1969)</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Bill</td>
      <td>Gates</td>
      <td>(1955)</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Steve</td>
      <td>Jobs</td>
      <td>(1955-2011)</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>Vinton</td>
      <td>Cerf</td>
      <td>(1943)</td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default Tablas