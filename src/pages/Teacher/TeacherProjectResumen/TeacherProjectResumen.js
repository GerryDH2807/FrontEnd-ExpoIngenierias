import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import React, { useState,useEffect } from "react";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

import CardConcept from '../../../img/CardConcept.png';
import CardProto from '../../../img/CardProto.png';
import CardFinish from '../../../img/CardFinish.png';
import './TeacherProjectResumen.css'
import ToggleBar from '../../../components/Togglebar/togglebar.js';

function InfoProj({lead,judge,status}){
  const diccionario = {
    "aprobado": "bi bi-check-circle aceptado1 p-2",
    "rechazado": "bi bi-x-circle rechazado1 p-2",
    "en revision": "bi bi-hourglass-split espera1 p-2"
  };
  const colors = {
    "green": "white",
    "red": "white",
    "en revision": "black"
  };
  return(

    <div className='col-md-3'>

      <div className="Info m-4 p-4">

        <h1 className ="Titulo text-break">Información del proyecto</h1>

        <div className ='container-fluid p-1'>
          <div className ="row pb-3"> 
            <div className ='col-md-auto pe-0'>
              <span className ="Subtitulo">Líder:</span> 
            </div>

            <div className ='col-md-auto ps-0'>
              <span className="Texto text-break">{lead}</span>
            </div>
          </div>

          <div className ="row pb-3"> 
            <div className ='col-md-auto pe-0'>
              <span className ="Subtitulo">Intregantes del equipo:</span>
            </div>

            <div className ='col-md-auto ps-0'>
              <span className="Texto text-break">{judge}</span>
            </div>
          </div>
            <div className="row justify-content-between d-flex align-items-center">
                <div className="col-md-1"></div>
                <div className="col-md-auto">
                    <i class={diccionario[status]}>{status}</i>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            </div>
        </div>
  );
}

function ProjResume({type, area, title}){
  const imagenes = {
    "idea": CardConcept,
    "prototipo": CardProto,
    "prototipo finalizado": CardFinish
  };
  return(
    <div className='col-12 col-md-7 pt-4 ps-4 pe-4 '>
        
        <div className="container-fluid BGResume w-100" style={{ backgroundImage: `url(${imagenes[type]})` }}>
          <div className ="row p-2 BGBar">

            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Tipo de proyecto: {type}</span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'>{area}</span></div>

          </div>                          
        <div className='me-4 ms-4 mb-4 pb-3 pe-3 ps-3 mt-4'>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-xxl-7 proj-tit text-end'wrap"><span className='text-break'>{title}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentCont({role}){
  return(
    <div className ="col-md-12">
      <h1 className ="Titulo text-break">Comentarios del {role} </h1>

      <div className ='container-fluid p-1'>
          <textarea class="form-control" rows="5" id="comentarioProfe"></textarea>
      </div>
    </div>
  );
}

function BotonStatus(){
  return(
    <>
    <div className='col-md-4'></div>
    <div className="col-md-2 centered-container2">
        <button type="submit" className="custom-btn">Guardar</button>
    </div>
    <div className='col-md-4'></div>
    </>
);
}

function CommenSec(){
  return(
    <>
    <div className='col-12 col-md-10'>
      <div className="Infologo m-auto p-4">
        <div className='container-fluid'>
          <div className ='row align-items-center'>
            <CommentCont role={"Profesor"}></CommentCont>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function ProjectFile({descr}){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [textoRecortado, setTextoRecortado] = useState(descr);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 576 && descr.length > 50) {
      setTextoRecortado(descr.substring(0, 50) + '...');
    } else {
      setTextoRecortado(descr);
    }
  }, [windowWidth, descr]);
  return(
    <>
   <div className='col-12 col-md-10'>
   <div className="Infologo m-auto p-4">
    <div className='row'>
    <div className='col-12 col-md-8'>
    <div className="row d-flex">
    <h1 className="Titulologo text-break">Archivos del proyecto</h1>
    </div>
    <div className='container-fluid'>
    <div className="row d-flex">
        <div className='col-12 col-md-6 justify-content-center align-items-center'>
          <a href="https://drive.google.com/file/d/1yq3OXk85Qsl434ORIohYZnFV1FpU45VE/view?usp=sharing" className="file"><i className="bi bi-filetype-pdf icono" id="logo"></i></a>
          <div className='row d-flex m-2 check'>
          <div className='col-6  col-md-6 justify-content-center'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="pdfStatus" id="flexRadioDefault1"/>
            <label className="form-check-label" for="flexRadioDefault1">Aprobado</label>
          </div>
        </div>
        <div className='col-6  col-md-6 justify-content-center'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="pdfStatus" id="flexRadioDefault2" checked />
            <label className="form-check-label" for="flexRadioDefault2">Rechazado</label>
          </div>
        </div>
        </div>
        </div>
        <div className='col-12 col-md-6 justify-content-center align-items-center'>
          <a href="https://youtu.be/Nka4JSBgf7I?si=RpcxX4lmPjYLNczd" className="file"><i className="bi bi-youtube icono" id="logo"></i></a>
          <div className='row d-flex m-2 check'>
          <div className='col-6  col-md-6 justify-content-center'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="videoStatus" id="flexRadioDefault1"/>
            <label className="form-check-label" for="flexRadioDefault1">Aprobado</label>
          </div>
        </div>
        <div className='col-6 col-md-6 justify-content-center'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="videoStatus" id="flexRadioDefault1"/>
            <label className="form-check-label" for="flexRadioDefault1">Rechazado</label>
          </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
    <div className='col-12 col-md-4'>
    <div className="row d-flex">
    <h1 className="Titulologo text-break">Descripcion del proyecto</h1>
    </div>
    <div className="row d-flex">
    <span>{textoRecortado}</span>
    </div>
    </div>
    </div>
    </div>
  </div>

    </>
  );
}




export default function ProjResumeCont(){
  return(
    <>
    <ToggleBar />
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-md-1"></div>
          <ProjResume type={'idea'} area={"Biotecnologia"} title={"Robot automata para automatizar automatas"}></ProjResume>        
          <InfoProj lead={"Gerardo Deustúa Hernández"} judge={"Marcela Dominguez Rosas"} status={"en revision"}></InfoProj>
          <div className="col-md-1"></div>
        </div>

      
      <form className='forms'>
        <div className='row m-2 align-items-center'>
        <div className="col-md-1"></div>
          <ProjectFile descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."} />      
          <div className="col-md-1"></div>
        </div>
        <div className='row m-2 justify-content-between'>
          <div className="col-md-1"></div>
          <CommenSec /> 
          <div className="col-md-1"></div>
        </div>
        <div className='row m-3 justify-content-between'>
          <BotonStatus />
        </div>
        </form>
      </div>
      
    </>
  );
}