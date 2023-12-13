import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img src="img/htt.png" width="60px" height="60px"></img>
    <a className="navbar-brand" href="#">PERSONAJES DESTACADOS DE INFORMÁTICA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/ '>INICIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to='/creditos'>CREDITOS</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PERSONAJES DESTACADOS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to='/pje0'><button type="button" className="btn btn-secondary btn-lg">Alan Turing</button></Link></li>
            <li><Link className="dropdown-item"to='/pje1'><button type="button" className="btn btn-secondary btn-lg">Ada Lovelace</button></Link></li>
            <li><Link className="dropdown-item"to='/pje2'><button type="button" className="btn btn-secondary btn-lg">Tim Berners-Lee</button></Link></li>
            <li><Link className="dropdown-item"to='/pje3'><button type="button" className="btn btn-secondary btn-lg">Grace Hopper </button></Link></li>
            <li><Link className="dropdown-item"to='/pje4'><button type="button" className="btn btn-secondary btn-lg">Linus Torvalds</button></Link></li>
            <li><Link className="dropdown-item"to='/pje5'><button type="button" className="btn btn-secondary btn-lg">Bill Gates</button></Link></li>
            <li><Link className="dropdown-item"to='/pje6'><button type="button" className="btn btn-secondary btn-lg">Steve Jobs</button></Link></li>
            <li><Link className="dropdown-item"to='/pje7'><button type="button" className="btn btn-secondary btn-lg">Vinton Cerf</button></Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar