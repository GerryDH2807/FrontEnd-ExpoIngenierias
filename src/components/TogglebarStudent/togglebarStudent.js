import './togglebarStudent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import logo from '../../img/logo.svg';
import logo2 from '../../img/logo2.svg';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Routes, Route, Link} from 'react-router-dom';
function ToggleBarStudent() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [section,setSection] = useState("Expo Ingenierias")
  
    return (
      <>
        <div className ="ToggleButton">
          <i className='bi bi-list the_bars' onClick={handleShow}></i>
          <img className="ExpoIngLog2" src ={logo} alt="" onClick={handleShow}></img>
          <span className="textm no-select" onClick={handleShow}><strong>{section}</strong></span>
        </div>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>
  
            <div className='ExpoIngLog3' onClick={handleClose}>
            <center><img className="ExpoIngLog3 w-50 h-50" src ={logo2} alt=""></img></center>  
            </div>
  
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <hr />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
          <center><i className='bi bi-person-circle docu-icon2'>
            </i><Link to='/perfil-usuario' className='Titulo-toggle'> Pedro Sanchez</Link></center>
          </div>
        </div>
      </div>
      <hr />
      <nav>
            <div className='container'>
              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <Link to='/projselection' onClick={() => { handleClose(); setSection("Mis Proyectos"); }} class="bi bi-boxes docu-icon2"></Link>
                  <Link to='/projselection' className ="TextoValid2" onClick={() => { handleClose(); setSection("Mis Proyectos"); }}>Mis Proyectos</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <Link to ='/extramaterial'onClick={() => { handleClose(); setSection("Solicitar material extra"); }} class="bi bi-wrench-adjustable-circle docu-icon2"></Link>
                  <Link to='/extramaterial' className ="TextoValid2" onClick={() => { handleClose(); setSection("Solicitar material extra"); }}>Solicitar material extra</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <Link to='/constancia-estudiante' onClick={() => { handleClose(); setSection("constancia-estudiante");}} class="bi bi-trophy-fill docu-icon2"></Link>
                  <Link to='/constancia-estudiante' className ="TextoValid2" onClick={() => { handleClose(); setSection("constancia-estudiante"); }}>Constancia</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <Link to='/anuncio-estudiante' onClick={() => { handleClose(); setSection("anuncio-estudiante");}} class="bi bi-megaphone-fill docu-icon2"></Link>
                  <Link to='/anuncio-estudiante' className ="TextoValid2" onClick={() => { handleClose(); setSection("anuncio-estudiante");}}>Anuncios</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <Link to='/mapa' onClick={() => { handleClose(); setSection("Mapa"); }} class="bi bi-map-fill docu-icon2"></Link>
                  <Link to='/mapa' className ="TextoValid2" onClick={() => { handleClose(); setSection("Mapa"); }}>Mapa</Link> 
                </div>  
              </div>


              <div className='row m-2 mt-5'>
                <div className ='col-md-auto mt-5'>
                  <Link to='/mapa' onClick={() => { handleClose(); setSection("Mapa"); }} class="bi bi-box-arrow-left docu-icon2"></Link>
                  <Link to='/mapa' className ="TextoValid2" onClick={() => { handleClose(); setSection("Mapa"); }}>Cerrar sesión</Link> 
                </div>  
              </div>

            </div>
          </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default function Menu(){
  return (
    <>
  <div className ="container-fluid">
  <div className="row" id = "NavBar">
    <div className="col-auto">
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
  <div className="row " id = "NavBar">
    <div className="col-5">
      <ToggleBarStudent />
    </div>
 
  </div>
</div>
</nav>
</>
);

}