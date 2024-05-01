import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import logo from './img/logo.svg';
import logo2 from './img/logo2.svg';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {Routes, Route, Link} from 'react-router-dom';

import ProjResumeCont from './ProjResume/ProjectResumenContent.js';
import ProjRegisterCont from './ProjRegister/ProjResgister.js';

import Constancia from './Constancia/Constancia.js';

import Announ from './Announcement/Announ.js';

import RegisterCont from './Register content/RegisterContent.js';
import UserRegister from './UserRegister/UserRegister.js';
import StudentRegister from './StudentRegister/StudentRegister.js';

import DetailedAnnoun from './Announcement/DetailedAnnoun.js';

import Actual from './ProyectosActuales/Actual.js';

import CompShowProjects from './ShowProject.js';



import './Page.css';
import './ProjResume/Resume.css';
import './Announcement/DetailedAnnoun.css'



function ToggleBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [section,setSection] = useState("Expo Ingenierias")

  return (
    <>
      <div className ="ToggleButton">
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
                  <Link to='/resumen' onClick={() => { handleClose(); setSection("Resumen"); }} class="bi bi-book-fill docu-icon2"></Link>
                  <Link to='/resumen' className ="TextoValid2" onClick={() => { handleClose(); setSection("Resumen");}}>Resumen</Link> 
                </div>  
              </div>

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
                  <Link to='/constancia' onClick={() => { handleClose(); setSection("Constancias");}} class="bi bi-trophy-fill docu-icon2"></Link>
                  <Link to='/constancia' className ="TextoValid2" onClick={() => { handleClose(); setSection("Constancias"); }}>Constancia</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <Link to='/anuncios' onClick={() => { handleClose(); setSection("Anuncios");}} class="bi bi-megaphone-fill docu-icon2"></Link>
                  <Link to='/anuncios' className ="TextoValid2" onClick={() => { handleClose(); setSection("Anuncios");}}>Anuncios</Link> 
                </div>  
              </div>

              <div className='row m-2'>
                <div className ='col-md-auto '>
                  <Link to='/mapa' onClick={() => { handleClose(); setSection("Mapa"); }} class="bi bi-map-fill docu-icon2"></Link>
                  <Link to='/mapa' className ="TextoValid2" onClick={() => { handleClose(); setSection("Mapa"); }}>Mapa</Link> 
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
              <ToggleBar />
            </div>
         
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/resumen' element={<ProjResumeCont></ProjResumeCont>}></Route>
        <Route path='/projselection' element={<ProjRegisterCont></ProjRegisterCont>}></Route>
        <Route path='/extramaterial' element={<RegisterCont></RegisterCont>}></Route>
        <Route path='/constancia' element={<Constancia></Constancia>}></Route>
        <Route path='/anuncios' element={<Announ></Announ>}></Route>
        <Route path='/mapa' element={<Actual></Actual>}></Route>

        <Route path='/studentregister' element={<StudentRegister></StudentRegister>}></Route>
        <Route path='/userregister' element={<UserRegister></UserRegister>}></Route>

        <Route path='/announ1' element ={<DetailedAnnoun></DetailedAnnoun>}></Route>

  
        <Route path='/projcat' element={<CompShowProjects></CompShowProjects>}></Route>
 
      </Routes>

    </>
  );
}

export default App;