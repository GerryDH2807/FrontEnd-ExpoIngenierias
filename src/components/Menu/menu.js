import React, { useState } from 'react';

import logo from '../../img/logo.svg'
import {Link} from 'react-router-dom'

import './menu.css'

import { useAuth0 } from "@auth0/auth0-react";

const RegisterLink = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
      
        <button onClick={() => loginWithRedirect()} className= "opciones-btn me-3" >Iniciar Sesión</button>
      
    );
  };
export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
    return (
      <>  
      <div className='container-fluid'>
        <div className="row" id = "NavMain">
              <div className="col-10">
                <div className = "ToggleButton">
  
                </div>
              </div>
  
              <div className="col-2">
                <div className = "ToggleButton">
                  <div className="ProfPictFrame">
                    
                  </div>
                </div>
              </div>          
            </div>
          </div>
          <div className="container-fluid p-0 w-100">
            <div className='row'>
              <div className='col-md-12'>
          <nav className='navbar navbar-expand-lg fixed-top' id="NavBar">
      <div className="navbar-brand ms-3">
          <img className="ExpoIngLog img-fluid" src={logo} alt="buenas" />
        </div>
        <button className="navbar-toggler"
        type="button"
        onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${showMenu ? 'show' : ''}`} id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/Ediciones-pasadas" className='nav-link opciones m-2'>Ediciones Pasadas</Link>
            </li>
            <li className="nav-item">
              <Link to="/Catalogo" className='nav-link opciones m-2'>Catalogo</Link>
            </li>
            <li className="nav-item">
              <RegisterLink/>
            </li>
          </ul>
        </div>
    </nav>
    </div>
    </div>  
    </div>    
      </>
  
    );
  }