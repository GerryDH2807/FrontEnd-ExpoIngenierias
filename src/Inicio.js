import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import logo from './img/logo.svg';
import logo2 from './img/logo2.svg';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {Routes, Route, Link} from 'react-router-dom';


import ProjRegisterCont from './ProjResgister.js';
import ProjResumeCont from './ProjectResumenContent.js';
import UserRegisterCont from './UserRegister.js';
import CompShowProjects from './ShowProject.js';



import './Page.css';
import './Resume.css';
import './Register.css';



function ToggleBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [section,setSection] = useState("Resumen")

  return (
    <>
      <div className = "ToggleButton">
        <i className='bi bi-list the_bars' onClick={handleShow}></i>
        <img className="ExpoIngLog" src ={logo} alt="" onClick={handleShow}></img>
        <span className="textm no-select" onClick={handleShow}><strong>{section}</strong></span>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>

          <div className='ExpoIngLog2' onClick={handleClose}>
          <center><img className="ExpoIngLog2 w-50 h-50" src ={logo2} alt=""></img></center>  
          </div>

          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <div className='container'>
              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <i class="bi bi-book-fill docu-icon2"></i>
                  <Link to='/inicio' className ="TextoValid2" onClick={() => { handleClose(); setSection("Resumen"); }} >Resumen</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <i class="bi bi-boxes docu-icon2"></i>
                  <Link to='/constancias' className ="TextoValid2" onClick={() => { handleClose(); setSection("Mis Proyectos"); }}>Mis Proyectos</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <i class="bi bi-wrench-adjustable-circle docu-icon2"></i>
                  <Link to='/projregister' className ="TextoValid2" onClick={() => { handleClose(); setSection("Solicitar material extra"); }}>Solicitar material extra</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <i class="bi bi-trophy-fill docu-icon2"></i>
                  <span className ="TextoValid2">Constancia</span> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <i class="bi bi-megaphone-fill docu-icon2"></i>
                  <span className ="TextoValid2">Anuncios</span> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <i class="bi bi-map-fill docu-icon2"></i>
                  <span className ="TextoValid2">Mapa</span> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <i class="bi bi-boxes docu-icon2"></i>
                  <Link to='/projcat' className ="TextoValid2" onClick={() => { handleClose(); setSection("Proyectos"); }}>Proyectos</Link> 
                </div>  
              </div>

            </div>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


function App() {
  return (
    <>
      <div className ="container-fluid">
          <div className="row" id = "NavBar">
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
          <div className="row " id = "NavBar">
            <div className="col-12">
              <ToggleBar />
            </div>
         
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/inicio' element={<ProjResumeCont></ProjResumeCont>}></Route>
        <Route path='/projregister' element={<ProjRegisterCont></ProjRegisterCont>}></Route>
        <Route path='/constancias' element={<UserRegisterCont></UserRegisterCont>}></Route>
        <Route path='/extra' element={<ProjRegisterCont></ProjRegisterCont>}></Route>
        <Route path='/projcat' element={<CompShowProjects></CompShowProjects>}></Route>
      </Routes>

    </>
  );
}

export default App;