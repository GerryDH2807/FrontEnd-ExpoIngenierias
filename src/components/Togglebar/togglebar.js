import './togglebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import logo from '../../img/logo.svg';
import logo2 from '../../img/logo2.svg';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link} from 'react-router-dom';


function ToggleBar({SectionName}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
        <div className ="ToggleButton">
          <i className='bi bi-list the_bars' onClick={handleShow}></i>
          <img className="ExpoIngLog2" src ={logo} alt="" onClick={handleShow}></img>
          <span className="textm no-select" onClick={handleShow}><strong>{SectionName}</strong></span>
        </div>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header className='pb-0'>
            <Offcanvas.Title>
  
            <div className='container ExpoIngLog3' onClick={handleClose}>
              <div className='row'>
                <div className='col-10'>
                  <center><img className="ExpoIngLog3 w-50 h-50" src ={logo2} alt=""></img></center>  
                </div>

                <div className='col'>
                  <center> <i className='bi bi-x-circle'></i></center>  
                </div>
              </div>
            </div>
  
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='pt-0'>
          <hr />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
          <center><i className='bi bi-person-circle docu-icon2'>
            </i><Link to='/perfil-profesor' className='Titulo-toggle'> Sarai Santiago Lozano</Link></center>
          </div>
        </div>
      </div>
      <hr />
            <nav>
              <div className='container'>
                <div className='row m-2'>
                  <div className ='col-md-auto '>
                    <Link to='/principal-profesor' onClick={() => { handleClose();  }} class="bi bi-book-fill docu-icon2"></Link>
                    <Link to='/principal-profesor' className ="TextoValid2" onClick={() => { handleClose(); }}>Resumen</Link> 
                  </div>  
                </div>
  
                <div className='row m-2'>
                  <div className ='col-md-auto '>
                    <Link to='/constancia-profesor' onClick={() => { handleClose(); }} class="bi bi-trophy-fill docu-icon2"></Link>
                    <Link to='/constancia-profesor' className ="TextoValid2" onClick={() => { handleClose();  }}>Constancia</Link> 
                  </div>  
                </div>
  
                <div className='row m-2'>
                  <div className ='col-md-auto '>
                    <Link to='/anuncios-profesors' onClick={() => { handleClose(); }} class="bi bi-megaphone-fill docu-icon2"></Link>
                    <Link to='/anuncios-profesor' className ="TextoValid2" onClick={() => { handleClose(); }}>Anuncios</Link> 
                  </div>  
                </div>
 
              </div>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default function Menu({NameSecProf}){
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
      <ToggleBar SectionName={NameSecProf} />
    </div>
 
  </div>
</div>
</nav>
</>
);

}