import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './css/ResumeTeacher.css'
import Lienzo from './components/Lienzo.js';

function InfoProj({lead,judge,status}){
  const diccionario = {
    "aprobado": "green",
    "rechazado": "red",
    "en revision": "gold"
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
                <div className="col-md-auto" style={{ backgroundColor: diccionario[status], color: colors[diccionario[status]]}}>
                    <span className ="Subtitulo">{status}</span>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            </div>
        </div>
  );
}

function ProjResume({type, area, descr, title}){
  return(
    <div className='col-md-7 pt-4 ps-4 pe-4 '>
        
      <div className="container-fluid BGResume  w-100 ">
          <div className ="row p-2 BGBar">

            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Tipo de proyecto: {type}</span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'>{area}</span></div>

          </div>                          
        <div className='m-4 p-0'>
          <div className="container-fluid ">
            <div className="row ">
              <div className="col-xxl-5 proj-sub text-start" ><span className='text-break'>{descr}</span></div>
              <div className="col-xxl-7 proj-tit text-end'wrap "><span className='text-break'>{title}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentCont({role}){
  return(
    <div className ="col-12">
      <h1 className ="Titulo text-break">Comentarios del {role} y aprobación </h1>

      <div className ='container-fluid p-1'>
          <textarea class="form-control" rows="5" id="comentarioProfe"></textarea>
      </div>
    </div>
  );
}

function BotonStatus(){
  return(
    <>
    <div className="col-md-6 centered-container2">
        <button className="custom-btn">Aceptar</button>
    </div>
    <div className='col-md-6 centered-container3'>
      <button className="custom-btn2">Rechazar</button>
    </div>
    </>
);
}

function CommenSec(){
  return(
    <div className='col-md-5'>
      <div className="Info m-auto p-4">
        <div className='container-fluid'>
          <div className ='row pb-6 align-items-center'>
            <CommentCont role={"Profesor"}></CommentCont>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectFile(){
  return(
    <div className='col-md-5'>
      <div className="Info m-4 p-4">

        <h1 className ="Titulo text-break">Archivos del proyecto</h1>

        <div className ='container-fluid p-1 m-2centered-FinalRescontainer '>
          <div className ="row pb-3 align-items-center">
            <div className ='col-md-6 d-flex justify-content-center align-items-center'>
            <a href="" className="file d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width= "40%" height="auto" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
</svg></a>
</div>
<div className ='col-md-6 d-flex justify-content-center align-items-center'>
<a href="" className="file d-flex justify-content-center align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width= "40%" height="auto" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a>
            </div>   
            <div className ='col-md-1'></div>           
          </div>
        </div>
      </div>
    </div>
  );
}




export default function ProjResumeCont(){
  return(
    <>
    <Lienzo></Lienzo>
    <div className='container-fluid centered-container'>
        <div className='row'>
            <div className="col-md-1"></div>
          <ProjResume type={"Prototipo"} area={"Biotecnologia"} descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."} title={"Robot automata para automatizar automatas"}></ProjResume>        
          <InfoProj lead={"Gerardo Deustúa Hernández"} judge={"Marcela Dominguez Rosas"} status={"en revision"}></InfoProj>
          <div className="col-md-1"></div>
        </div>

        <div className='row m-2 w-100 align-items-center'>
          <div className="col-md-1"></div>
          <CommenSec />       
          <ProjectFile />
          <div className="col-md-1"></div>
        </div>
        <div className='row m-4 w-100 justify-content-between'>
          <BotonStatus />
        </div>
      </div>
    </>
  );
}