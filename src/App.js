import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import './Page.css';
import './Resume.css'


import ProfPict from './img/descargar.jpeg'
import logo from './img/logo.svg';

function InfoProj({lead,profLead,judge}){
  return(

    <div className='col-md-3  '>

      <div className="Info m-4 p-4">

        <h1 className ="Titulo ">Información del proyecto</h1>

        <div className ='container-fluid p-1'>
          <div className ="row pb-3"> 
            <div className ='col-md-auto pe-0'>
              <span className ="Subtitulo">Líder:</span> 
            </div>

            <div className ='col-md-auto ps-0'>
              <span className="Texto"> {lead}</span>
            </div>
          </div>

          <div className ="row pb-3"> 
            <div className ='col-md-auto pe-0'>
              <span className ="Subtitulo">Profesor líder:</span>
            </div>

            <div className ='col-md-auto ps-0'>
              <span className="Texto">{profLead}</span>
            </div>
          </div>

          <div className ="row pb-3"> 
            <div className ='col-md-auto pe-0'>
              <span className ="Subtitulo">Juez:</span>
            </div>

            <div className ='col-md-auto ps-0'>
              <span className="Texto"> {judge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

function ProjResume({type, area, descr, title}){
  return(
    <div className='col-md-6 p-4 '>
        
      <div className="container-fluid BGResume  w-100 ">
          <div className ="row p-1 BGBar">

            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Tipo de proyecto: {type}</span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'>{area}</span></div>

          </div>                          
        <div className='m-4 p-0'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-5 proj-sub text-start" ><p className='text-break'>{descr}</p></div>
              <div className="col-xxl-7 proj-tit text-end'wrap "><p className='text-break'>{title}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjVal({finalRes}){
  return(
    <div className='col-md-3'>
      <div className="Info m-4 p-4">

        <h1 className ="Titulo ">Validación de documentos</h1>

        <div className ='container-fluid p-1'>
          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <i class="bi bi-file-earmark-pdf docu-icon"></i>
              <span className ="TextoValid">Poster</span> 
            </div>   

            <div className ='col-md-auto '> 
              <i class="bi bi-check-circle aceptado"> Aceptado</i>
            </div>               
          </div>

          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <i class="bi bi-youtube docu-icon"></i>
              <span className ="TextoValid">Video</span> 
            </div>   



            <div className ='col-md-auto '> 
              <i class="bi bi-x-circle rechazado"> Rechazado</i>
            </div>               
          </div>

          <div className ="row pb-3">
        

            <div className ='col-md-auto'>
              <span className ="Subtitulo">Resultado:</span>
            </div>

            <div className ='col-md-auto'>
              <span className ="espera">{finalRes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentCont({role, comment}){
  return(
    <div className ="col-6">
      <h1 className ="Titulo ">Comentarios del {role}</h1>

      <div className ='container-fluid p-1'>
        <div className ="row pb-3 align-items-center">
          <div className ='col-md-auto '>
          <p className='text-break'>{comment}</p>
          </div>   
        </div>
      </div>
    </div>
  );
}



function CommenSec(){
  return(
    <div className='col-md-9'>
      <div className="Info m-auto p-4">

        <div className='container-fluid'>
          <div className ='row '>
            <CommentCont role={"Profesor"} comment ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."}></CommentCont>
            <CommentCont role={"Juez"} comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."}></CommentCont>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCalf({finalCalf}){
  return(
    <div className='col-md-3'>
      <div className="Info m-auto p-4">

        <h1 className ="Titulo ">Calificación final</h1>

        <div className ='container-fluid p-1 centered-FinalRescontainer '>
          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto'>
              <span className ="FinalResul text-center">{finalCalf}</span> 
            </div>              
          </div>

        </div>
      </div>
    </div>
  );
}




function ProjResumeCont(){
  return(
    <div className='container-fluid centered-container'>
      <div className='container-fluid'>
        <div className='row mt-2 justify-content-between d-flex align-items-center'>
          <InfoProj lead={"Gerardo Deustúa Hernández"} profLead={"Michel Lara Wainstein"} judge={"Marcela Dominguez Rosas"}></InfoProj>

          <ProjResume type={"Prototipo"} area={"Biotecnologia"} descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."} title={"Robot automata para automatizar automatas"}></ProjResume>        

          <ProjVal finalRes={"En revisión"}></ProjVal>
        </div>

        <div className='row m-2 justify-content-between d-flex align-items-center w-100'>
          <CommenSec />       

          <FinalCalf finalCalf={"9"}></FinalCalf>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <>
      <nav className='fixed-top'>
        <div className ="container-fluid">
          <div className="row" id = "NavBar">
            <div className="col-10">
              <div className = "ToggleButton">
                <img className="ExpoIngLog" src ={logo} alt=""></img>
                <span className="textm"><strong>Resumen del proyecto</strong></span>
              </div>
            </div>

            <div className="col-2">
              <div className = "ToggleButton">
                <div className="ProfPictFrame">
                  <img src = {ProfPict} alt=""></img>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </nav>

      <ProjResumeCont />
    
    </>

  );
}

export default App;
