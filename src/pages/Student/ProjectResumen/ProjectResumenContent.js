import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Placeholder from 'react-bootstrap/Placeholder';
import Spinner from 'react-bootstrap/Spinner';

import './Page.css';
import './Resume.css';

import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';

import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function RubricaCalf({Calf1, Calf2, Calf3, Calf4, Calf5, Rubri1, Rubri2, Rubri3, Rubri4, Rubri5, IsLoaded}) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 1: </span> <span className='Texto Resultado'>{!hasData(Calf1) && (<Spinner animation="grow" size="sm" />)}{hasData(Calf1) && (Calf1 + " pts")}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri1}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 2: </span> <span className='Texto Resultado'> {!hasData(Calf2) && (<Spinner animation="grow" size="sm" />)}{hasData(Calf2) && (Calf2 + " pts")}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri2}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 3: </span> <span className='Texto Resultado'>{!hasData(Calf3) && (<Spinner animation="grow" size="sm" />)}{hasData(Calf3) && (Calf3 + " pts")}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri3}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 4: </span> <span className='Texto Resultado'> {!hasData(Calf4) && (<Spinner animation="grow" size="sm" />)}{hasData(Calf4) && (Calf4 + " pts")}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri4}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><span className='Subtitulo'>Calificación rubro 5: </span> <span className='Texto Resultado'> {!hasData(Calf5) && (<Spinner animation="grow" size="sm" />)}{hasData(Calf5) && (Calf5 + " pts")}</span></Accordion.Header>
        <Accordion.Body>
          {Rubri5}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function MemberCont({NombreMiembro}){
  return(
    <li className="Texto text-wrap mb-0">{NombreMiembro}</li>
  );
}

function InfoProj({lead, profLead,members, IsLoaded}){
  return(

    <div className='col-md-3 '>

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
              <span className="Texto text-wrap ps-3"> {IsLoaded && (lead)} {!IsLoaded && (<Placeholder animation="glow" className="w-100"><Placeholder xs={9} bg="Dark" size="lg" /></Placeholder>)}</span>
            </div>
          </div>

          <div className ="row pb-1"> 
            <div className ='col-md pe-0'>
              <span className ="Subtitulo">Profesor líder:</span>
            </div>

          </div>

          <div className ="row pb-4">
            <div className ='col-md ps-0'>
              <span className="Texto text-wrap ps-3">{IsLoaded  && (profLead)} {!IsLoaded && (<Placeholder animation="glow" className="w-100"><Placeholder xs={9} bg="Dark" size="lg" /></Placeholder>)}</span>
            </div>
          </div>

          <div className ="row pb"> 
            <div className ='col-md pe-0'>
              <span className ="Subtitulo">Miembros del proyecto:</span>
            </div>
          </div>

          <div className ="row pb-1">
            {!IsLoaded && (
              <div className ='col-md ps-4'>
                <Placeholder animation="glow" className="w-100">
                    <Placeholder xs={10} bg="Dark" size="lg" />
                </Placeholder>
              </div>            
            )}

            {IsLoaded && (

              <div className ='col-md ps-0'>
                {members.map((student, index) => (
                  <MemberCont NombreMiembro={student.name + " " + student.lastName}></MemberCont>
                ))}
                  
              </div>            
            )}

          </div>
        </div>
      </div>
    </div>  
  );
}

function ProjResume({ type, area, descr, title, IsLoaded }) {
  const [showFullText, setShowFullText] = useState(false);
  
  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = (text, limit) => {
    if (!text || typeof text !== 'string' || text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  return(
    <div className='col-md-6 ps-4 pe-4 '>

      {!IsLoaded && (

        <div className="container-fluid BGResumeConcept  w-100 ">
          <div className ="row p-1 BGBar">

            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Categoría: <Placeholder animation="glow" className="w-100"><Placeholder xs={7} bg="Dark" size="sm" /></Placeholder></span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'><Placeholder animation="glow" className="w-100"><Placeholder xs={9} bg="Dark" size="sm" /></Placeholder></span></div>

          </div>                          
        
          <div className='m-4 p-0'>
            <div className="container-fluid">
              <div className="row ">
                <div className="col-xxl-5 proj-sub text-start TesteoSlider" >
                    <Placeholder animation="glow" className="w-100">
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                    </Placeholder>
                </div>
                <div className="col-xxl-7 proj-tit text-end'wrap "><p className='text-break'><center><Spinner animation="border" size="xs" className='BolitaDeCarga' /></center></p></div>
              </div>
            </div>
          </div>
        </div>

      )}

      {type === "Concepto" && (

        <div className="container-fluid BGResumeConcept  w-100 ">
          <div className ="row p-1 BGBar">

            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Categoría: {type}</span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'>{area}</span></div>

          </div>                          
        
          <div className='m-4 p-0'>
            <div className="container-fluid">
              <div className="row ">
                <div className="col-xxl-5 proj-sub text-start TesteoSlider" >
                  <p className='text-break' onClick={toggleShowFullText}>
                    {showFullText ? descr : truncatedText(descr, 200)}
                  </p>
                </div>
                <div className="col-xxl-7 proj-tit text-end'wrap "><p className='text-break'>{title}</p></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "Prototipo" && (

        <div className="container-fluid BGResumeProto  w-100 ">
          <div className ="row p-1 BGBar">

            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Categoría: {type}</span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'>{area}</span></div>

          </div>                          
        
          <div className='m-4 p-0'>
            <div className="container-fluid">
              <div className="row ">
                <div className="col-xxl-5 proj-sub text-start TesteoSlider" >
                  <p className='text-break' onClick={toggleShowFullText}>
                    {showFullText ? descr : truncatedText(descr, 200)}
                  </p>
                </div>
                <div className="col-xxl-7 proj-tit text-end'wrap "><p className='text-break'>{title}</p></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === "Prototipo finalizado" && (

        <div className="container-fluid BGResumeFinish  w-100 ">
          <div className ="row p-1 BGBar">
            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Categoría: {type}</span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'>{area}</span></div>
          </div>                          
        
          <div className='m-4 p-0'>
            <div className="container-fluid">
              <div className="row ">
                <div className="col-xxl-5 proj-sub text-start TesteoSlider" >
                  <p className='text-break' onClick={toggleShowFullText}>
                    {showFullText ? descr : truncatedText(descr, 200)}
                  </p>
                </div>
                <div className="col-xxl-7 proj-tit text-end'wrap "><p className='text-break'>{title}</p></div>
              </div>
            </div>
          </div>
        </div>
      )}     
    </div>
  );
}

function hasData(variable) {
  if (variable === null || variable === undefined) {
      return true;
  }
  
  if (typeof variable === 'string' || Array.isArray(variable)) {
      return variable.length > 0;
  }

  if (typeof variable === 'object') {
      return Object.keys(variable).length > 0;
  }

  return false; // Para tipos de datos como números o booleanos, que siempre tienen un valor
}

function ProjVal({finalRes, postVal, vidVal,id_project}){
  return(
    <div className='col-md-3'>
      <div className="Info2 m-2 p-4">

        <h1 className ="Titulo text-wrap ps-0">Validación de documentos</h1>

        <div className ='container-fluid p-1'>
          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <i class="bi bi-file-earmark-pdf docu-icon"></i>
              <span className ="TextoValid">Poster</span> 
            </div>   

            <div className ='col-md-auto'> 
              {!hasData(postVal) && (
                <Spinner animation="border" size="xl" />
              )}

              {postVal === "aprobado" &&(
                
                <i class="bi bi-check-circle Aceptado"> Aceptado</i>

              )}

              {postVal === "rechazado" &&(
                
                <i class="bi bi-x-circle Rechazado"> Rechazado</i>

              )}

              {postVal === "en revision" &&(
                
                <i class="bi bi-hourglass-split Espera"> En revisión</i>

              )}
              
            </div>               
          </div>

          <div className ="row pb-3 align-items-center">
            <div className ='col-md-auto '>
              <i class="bi bi-youtube docu-icon"></i>
              <span className ="TextoValid">Video</span> 
            </div>   

            <div className ='col-md-auto'> 

              {!hasData(vidVal) && (
                <Spinner animation="border" size="xl" />
              )}

              {vidVal === "aprobado" &&(
                  
                <i class="bi bi-check-circle Aceptado"> Aceptado</i>

              )}

              {vidVal === "rechazado" &&(
                
                <i class="bi bi-x-circle Rechazado"> Rechazado</i>

              )}

              {vidVal === "en revision" &&(
                
                <i class="bi bi-hourglass-split Espera"> En revisión</i>

              )}

            </div>               
          </div>

          <div className ="row pb-3 mt-3">
            <div className ='col-md-auto'>
              <span className ="Subtitulo1">Resultado:</span>
            </div>

              {!hasData(vidVal) && (
                <Spinner animation="border" size="xl" />
              )}

              {finalRes === "aprobado" &&(
                <div className ='col-md-auto'>
                  <span className ="AceptadoCont">
                    <i className='bi bi-check-circle'> Aceptado</i>
                  </span>
                </div>
              )}

              {finalRes === "rechazado" &&(
                <>
                    <div className ='col-md-auto'>
                      <span className ="RechazadoCont">
                        <i className='bi bi-x-circle'> Rechazado</i>
                      </span>
                    </div>

                  <div className='row mt-4'>
                    <div className='col'><center>
                      <Link to={'/EditProject/'+id_project} className='TextoEdit'>Editar tu proyecto</Link>
                    </center></div>  
                  </div>                
                </>

              )}

              {finalRes === "en revision" &&(
                <div className ='col-md-auto'>
                  <span className ="EsperaCont">
                    <i className='bi bi-hourglass-split'> En revisión</i>
                  </span>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

function JuezContComment({comment,id_judge}){
  return(
    <div className ='container-fluid p-3 mt-3 mb-3 ContCommentIndiJudge'>
      <div className ="row align-items-center">
        <div className ='col-md-auto'>
          <p className='text-wrap fw-bold'>Comentario del juez {id_judge}:</p>
        </div>   
      </div>

      <div className ="row pb-3 align-items-center">
        <div className ='col-md-auto '>
          <p className='text-break ComentariosCOntenidoWrap'>{comment}</p>
        </div>   
      </div> 
    </div> 
  );
}

function CommentCont({role, comment,IsLoaded}){
  return(
    <>
      {role === 'Profesor' && (   
        <>
          {!IsLoaded && (
            <div className ="col-xxl-3 h-50">
              <h1 className ="Titulo ps-0">Comentarios del {role}</h1>
              <div className ='container-fluid p-1'>
                <div className ="row pb-3 align-items-center">
                  <div className ='col-md-12 '>
                    <Placeholder animation="glow" className="w-100">
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                      <Placeholder xs={12} size="xs" />
                    </Placeholder>
                  </div>   
                </div>
              </div>  
            </div>
          )}

          {IsLoaded && (
            <div className ="col-xxl-3 h-50">
              <h1 className ="Titulo ps-0">Comentarios del {role}</h1>
              <div className ='container-fluid p-1'>
                <div className ="row pb-3 align-items-center">
                  <div className ='col-md-auto '>
                    <p className='text-break ComentariosCOntenidoWrap'>{comment}</p>
                  </div>   
                </div>
              </div>  
            </div>
          )}      
        </>  

      )}

      {role === 'Juez' && (     
        <>
          {!IsLoaded && (
            <div className ="col-xxl-3 SilderCont">
              <h1 className ="Titulo ps-0">Comentarios de {role}</h1>
              <center><Spinner animation="border" size="xs" className='BolitaDeCargaJuez' /></center>
            </div>
          )}

          {IsLoaded && (
            <div className ="col-xxl-3 SilderCont">
              <h1 className ="Titulo ps-0">Comentarios de {role}</h1>
              <JuezContComment comment={comment} id_judge={1}></JuezContComment>
            </div>
          )}
        </>
      )}

    
    </>

  );
}

function Rubrica({Calf11, Calf21, Calf31, Calf41, Calf51, Rubri11, Rubri21, Rubri31, Rubri41, Rubri51, IsLoaded}){
  return(
    <div className ="col-xxl-3 h-75">
      <h1 className ="Titulo ps-0">Desgloce de rubrica</h1>

      <div className ='container-fluid p-1 mb-3'>
        <RubricaCalf IsLoaded={IsLoaded} Calf1={Calf11} Calf2={Calf21} Calf3={Calf31} Calf4={Calf41} Calf5={Calf51} Rubri1={Rubri11} Rubri2={Rubri21} Rubri3={Rubri31} Rubri4={Rubri41} Rubri5={Rubri51}/>
      </div>
    </div>
  );
}



function FinalCalf({finalCalf, IsLoaded}){
  return(
    <>
      <div className='col-xxl-3 h-50'>
        <h1 className ="Titulo text-break">Calificación final</h1>
          <div className ='container-fluid p-1 centered-FinalRescontainer '>
            <div className ="row pb-3 align-items-center">
              <div className ='col-md-auto ContFinalRes text-center p-3'>
                {!IsLoaded && (
                  <Spinner animation="border" size="xs" className='BolitaDeCargaCalFin' />
                )}
                {IsLoaded && (
                  <span className ="FinalResul text-center">{finalCalf}/10</span> 
                )}
              </div>              
            </div>
        </div>
    </div>
    </>
  );


}



/* ~*~*~*~*~*~ FUNCIÓN PRINCIPAL DE CONTROL ~*~*~*~*~*~  */

export default function ProjResumeCont(){
  const [IsLoaded, setIsLoaded] = useState(false);

  const [project, setProject] = useState({
    id_project: 0,
    title: "",
    description: "",
    linkVideo: "",
    linkPoster: "",
    statusGeneral: "",
    statusPoster: "",
    statusVideo: "",
    area: "",
    category: "",
    person: "",
    student: "",
    team: {students: []}
  });
  const { id_project } = useParams();

  useEffect(() => {
    //fetch('http://localhost:8000/projects/'+id_post)
    fetch('http://localhost:8000/projects/resume/'+id_project)
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setIsLoaded(true); // Cambiamos IsLoaded a true cuando los datos están cargados
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoaded(true); // En caso de error, también cambiamos IsLoaded a true para evitar bucles infinitos de carga
      });
  }, [id_project]);

  return(
    <>
    <StudentToggle NameSection={"Resumen de proyecto"}></StudentToggle>
    <div className='container-fluid centered-container mt-3 '>
      <div className='container-fluid'>
        <div className='row justify-content-between d-flex align-items-center'>
          <InfoProj IsLoaded={IsLoaded} lead={project.student.name + " " + project.student.lastName} profLead={project.person.name + " " + project.person.lastName} members={project.team.students}></InfoProj>
          <ProjResume IsLoaded={IsLoaded} type={project.category.title} area={project.area.name} descr={project.description} title={project.title}></ProjResume>
          <ProjVal postVal={project.statusPoster} vidVal={project.statusVideo} finalRes={project.statusGeneral} id_project={id_project}></ProjVal>
        </div>
  
        <div className='row m-2 justify-content-between d-flex align-items-center w-100 mb-4'>
          <div className='Info col-md-12'>
            <div className="m-auto p-4">
              <div className='container-fluid'>
                <div className ='row'>
                  <CommentCont IsLoaded={IsLoaded} role={"Profesor"} comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></CommentCont>
                  <CommentCont IsLoaded={IsLoaded} role={"Juez"} comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></CommentCont>
                  <Rubrica IsLoaded={IsLoaded} Calf11={"10"} Calf21={"6"} Calf31={"8"} Calf41={"9"} Calf51={"7"} Rubri11={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} Rubri21={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} Rubri31={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} Rubri41={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} Rubri51={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></Rubrica>
                  <FinalCalf IsLoaded={IsLoaded} finalCalf={"9"}></FinalCalf>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
  }