import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import '../Page.css';
import './Resume.css'

import Accordion from 'react-bootstrap/Accordion';

function RubricaCalf({Calf1, Calf2, Calf3, Calf4, Calf5, Rubri1, Rubri2, Rubri3, Rubri4, Rubri5}) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 1: </span> <span className='Texto Resultado'> {Calf1 + " pts"}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri1}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 2: </span> <span className='Texto Resultado'> {Calf2 + " pts"}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri2}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 3: </span> <span className='Texto Resultado'> {Calf3 + " pts"}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri3}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 4: </span> <span className='Texto Resultado'> {Calf4 + " pts"}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri4}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 5: </span> <span className='Texto Resultado'> {Calf5 + " pts"}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri5}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function InfoProj({lead,profLead,judge}){
  return(

    <div className='col-md-3'>

      <div className="Info m-2 p-4">

        <h1 className ="Titulo text-wrap ps-0">Información del proyecto</h1>

        <div className ='container-fluid p-1'>
          <div className ="row pb-1"> 
            <div className ='col-md pe-0'>
              <span className ="Subtitulo">Líder:</span> 
            </div>
          </div>

          <div className='row pb-4'>
            <div className ='col-md ps-0'>
              <span className="Texto text-wrap ps-3"> {lead}</span>
            </div>
          </div>

          <div className ="row pb-1"> 
            <div className ='col-md pe-0'>
              <span className ="Subtitulo">Profesor líder:</span>
            </div>

          </div>

          <div className ="row pb-4">
            <div className ='col-md ps-0'>
              <span className="Texto text-wrap ps-3">{profLead}</span>
            </div>
          </div>

          <div className ="row pb"> 
            <div className ='col-md pe-0'>
              <span className ="Subtitulo">Juez:</span>
            </div>
          </div>

          <div className ="row pb-1">
            <div className ='col-md ps-0'>
              <span className="Texto text-wrap ps-3"> {judge}</span>
            </div>
          </div>

        </div>
      </div>
    </div>  
  );
}

function ProjResume({type, area, descr, title}){
  return(
    <div className='col-md-6 pt-4 ps-4 pe-4 '>
        
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

function ProjVal({finalRes, postVal, vidVal}){
  return(
    <div className='col-md-3'>
      <div className="Info m-2 p-4">

        <h1 className ="Titulo text-wrap ps-0">Validación de documentos</h1>

        <div className ='container-fluid p-1'>
          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <i class="bi bi-file-earmark-pdf docu-icon"></i>
              <span className ="TextoValid">Poster</span> 
            </div>   

            <div className ='col-md-auto'> 

              {postVal === "Aceptado" &&(
                
                <i class="bi bi-check-circle Aceptado"> {postVal}</i>

              )}

              {postVal === "Rechazado" &&(
                
                <i class="bi bi-x-circle Rechazado"> {postVal}</i>

              )}

              {postVal === "En revisión" &&(
                
                <i class="bi bi-hourglass-split Espera"> {postVal}</i>

              )}
              
            </div>               
          </div>

          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <i class="bi bi-youtube docu-icon"></i>
              <span className ="TextoValid">Video</span> 
            </div>   

            <div className ='col-md-auto'> 
              {vidVal === "Aceptado" &&(
                  
                <i class="bi bi-check-circle Aceptado"> {vidVal}</i>

              )}

              {vidVal === "Rechazado" &&(
                
                <i class="bi bi-x-circle Rechazado"> {vidVal}</i>

              )}

              {vidVal === "En revisión" &&(
                
                <i class="bi bi-hourglass-split Espera"> {vidVal}</i>

              )}

            </div>               
          </div>

          <div className ="row pb-3 mt-3">
            <div className ='col-md-auto'>
              <span className ="Subtitulo1">Resultado:</span>
            </div>

            <div className ='col-md-auto'>


              {finalRes === "Aceptado" &&(
                
                <span className ="AceptadoCont">
                  <i className='bi bi-check-circle'> {finalRes}</i>
                </span>

              )}

              {finalRes === "Rechazado" &&(
                
                <span className ="RechazadoCont">
                  <i className='bi bi-x-circle'> {finalRes}</i>
                </span>

              )}

              {finalRes === "En revisión" &&(
                
                <span className ="EsperaCont">
                  <i className='bi bi-hourglass-split'> {finalRes}</i>
                </span>

              )}



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommentCont({role, comment}){
  return(
    <div className ="col-xxl-3 Slider-Test-Item">
      <h1 className ="Titulo ps-0">Comentarios del {role}</h1>

      {role === 'Profesor' && (     
        <div className ='container-fluid p-1'>
          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <p className='text-break'>{comment}</p>
            </div>   
          </div>
        </div>
      )}

      {role === 'Juez' && (     
        <div className ='container-fluid p-3 ContCommentIndiJudge '>

          <div className ="row align-items-center">
            <div className ='col-md-auto '>
              <p className='text-wrap fw-bold'>Comentario del juez 1:</p>
            </div>   
          </div>

          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <p className='text-break'>{comment}</p>
            </div>   
          </div>
        </div>
      )}


    </div>
  );
}

function Rubrica(){
  return(
    <div className ="col-xxl-3">
      <h1 className ="Titulo ps-0">Desgloce de rubrica</h1>

      <div className ='container-fluid p-1 mb-3'>
        <RubricaCalf Calf1={'10'} Calf2={'6'} Calf3={'8'} Calf4={'7'} Calf5={'9'} Rubri1={'Hola perro'} Rubri2={'Hello'} Rubri3={'ASIAPSFNAPSOFNAPSFN'} Rubri4={'slgnlsakdnglsdnglsng'} Rubri5={"s;kdgslknglsnglasnglsag"}/>
      </div>
    </div>
  );
}


function CommenSec(){
  return(
    <div className='Info col-md-12'>
      <div className="m-auto p-4">

        <div className='container-fluid'>
          <div className ='row'>

            <CommentCont role={"Profesor"} comment ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></CommentCont>
            <CommentCont role={"Juez"} comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></CommentCont>
            <Rubrica></Rubrica>
            <FinalCalf finalCalf={"9"}></FinalCalf>
            
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCalf({finalCalf}){
  return(
    <>
      <div className='col-md-3'>
        <h1 className ="Titulo text-break">Calificación final</h1>
        <div className="Info m-1 p-0 ">

          <div className ='container-fluid p-1 centered-FinalRescontainer '>
            <div className ="row pb-3 align-items-center">
              <div className ='col-md-auto ContFinalRes text-center p-3'>
                <span className ="FinalResul text-center">{finalCalf}/10</span> 
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
    <div className='container-fluid centered-container'>
      <div className='container-fluid'>
        <div className='row justify-content-between d-flex align-items-center'>
          <InfoProj lead={"Gerardo Deustúa Hernández"} profLead={"Michel Lara Wainstein"} judge={"Marcela Dominguez Rosas"}></InfoProj>

          <ProjResume type={"Prototipo"} area={"Biotecnologia"} descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate."} title={"Robot automata para automatizar automatas"}></ProjResume>        

          <ProjVal postVal={"Rechazado"} vidVal={"Aceptado"} finalRes={"En revisión"}></ProjVal>
        </div>

        <div className='row m-2 justify-content-between d-flex align-items-center w-100'>
          <CommenSec />       
        </div>
      </div>
    </div>
  );
}