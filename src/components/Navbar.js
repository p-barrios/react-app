import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/Navbar.css';
import 'materialize-css/dist/css/materialize.min.css';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <>
        <nav className='teal darken-1 '>
          <div className="nav-wrapper container row" role="navigation">
          <Link to='/' className="brand-logo col l2"><i className="material-icons">cloud</i></Link>
            <a href="#!" data-target="mobile-icon" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <div className='right hide-on-med-and-down col s2 search-button' >
              <i className="material-icons">search</i>
              <CartWidget elements="6"/>
              <i className="material-icons">account_circle</i>
            </div>
            <ul className="right hide-on-med-and-down col s8">
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/category/1'>Impresiones</Link></li>
              <li><Link to='/category/2'>Sublimaciones</Link></li>
              <li><Link to='/category/3'>Diseño Digital</Link></li>
              <li><Link to='/contact'>Contacto</Link></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-icon">
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/category/1'>Impresiones</Link></li>
              <li><Link to='/category/2'>Sublimaciones</Link></li>
              <li><Link to='/category/3'>Diseño Digital</Link></li>
              <li><Link to='/contact'>Contacto</Link></li>
          <li><hr/></li>
          <li>
            <div className='search-button'>
              <i className="material-icons">search</i>
              <CartWidget elements="6"/>
              <i className="material-icons">account_circle</i>
            </div>
          </li>
        </ul>
    </>
  );
}

export default Navbar;
