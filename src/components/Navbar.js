import React from 'react';
import '../assets/Navbar.css';
import 'materialize-css/dist/css/materialize.min.css';

function Navbar() {
  return (
    <>
        <nav className='teal darken-1 '>
          <div className="nav-wrapper container row" role="navigation">
            <a href="#!" className="brand-logo left col s2"><i className="material-icons">cloud</i></a>
            <a href="#!" data-target="mobile-icon" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <div className='right col s2 search-button' >
              <i className="material-icons">search</i>
            </div>
            <ul className="right hide-on-med-and-down col s8">
              <li><a href='#!'>Inicio</a></li>
              <li><a href='#!'>Impresiones</a></li>
              <li><a href='#!'>Sublimaciones</a></li>
              <li><a href='#!'>Diseño Digital</a></li>
              <li><a href='#!'>Contacto</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-icon">
          <li><a href='#!'>Inicio</a></li>
          <li><a href='#!'>Impresiones</a></li>
          <li><a href='#!'>Sublimaciones</a></li>
          <li><a href='#!'>Diseño Digital</a></li>
          <li><a href='#!'>Contacto</a></li>
        </ul>
    </>
  );
}

export default Navbar;
