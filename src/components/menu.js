import ProfPict from '../img/descargar.jpeg'
import logo from '../img/logo.svg'
import {Link} from 'react-router-dom'

import '../css/menu.css'
export default function Menu() {
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
        <nav className='fixed-top'>
          <div className ="container-fluid">
            <div className="row" id = "NavBar">
              <div className="col-4 p-3">
                <div className = "ToggleButton">
                  <img className="ExpoIngLog" src ={logo} alt="buenas"></img>
                </div>
              </div>
              <div className="col-8 nav-main">
                <Link to="/Conocenos" className='opciones'>Conocenos</Link>
                <Link to="/Como-participar" className='opciones'>¿Cómo Participar?</Link>
                <Link to="/Ediciones-pasadas" className='opciones'>Ediciones Pasadas</Link>
                <Link to="/Catalogo" className='opciones'>Catalogo</Link>
                <Link to="/Registro-inicio" className='opciones-btn me-3'>Registrarse</Link>
                <Link to="/login" className='opciones-btn'>Iniciar Sesion</Link>
                </div>        
            </div>
          </div>
        </nav>
      
      </>
  
    );
  }