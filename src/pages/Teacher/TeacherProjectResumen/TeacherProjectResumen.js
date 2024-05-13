import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import CardConcept from '../../../img/CardConcept.png';
import CardProto from '../../../img/CardProto.png';
import CardFinish from '../../../img/CardFinish.png';
import './TeacherProjectResumen.css'
import ToggleBar from '../../../components/Togglebar/togglebar.js';

const URI = 'http://localhost:8000/projects/14'

function MemberCont({NombreMiembro}){
  return(
    <li className="Texto text-wrap ps-3 mb-0">{NombreMiembro}</li>
  );
}

function InfoProj({lead,members,status}){
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
            {members.map((student, index) => (
              <MemberCont NombreMiembro={student.name + " " + student.lastName}></MemberCont>
            ))}
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
    "Prototipo finalizado": CardFinish
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


export default function ProjResumeCont(){
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



  useEffect(()=>{
    //fetch('http://localhost:8000/projects/'+id_post)
    fetch('http://localhost:8000/projects/resume/'+14)
    .then((res)=> res.json())
    .then((data)=>setProject(data))
},[id_project])

  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const [switchPdf, setSwitchPdf] = useState(false); // Estado para controlar el primer switch
const [switchVideo, setSwitchVideo] = useState(false);

  const handleSubmit = async (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    
  }else{
    await axios.post(URI, {statusPoster:switchPdf, statusVideo:switchVideo });
    navigate('/')
  }

  setValidated(true);
};
  return(
    <>
    <ToggleBar />
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-md-1"></div>
          <ProjResume type={project.category.title} area={project.area.name} title={project.title}></ProjResume>        
          <InfoProj lead={project.student.name + " " + project.student.lastName} members={project.team.students} status={project.statusGeneral}></InfoProj>
          <div className="col-md-1"></div>
        </div>

      
      <Form className='forms' noValidate validated={validated}  onSubmit={handleSubmit}>
        <div className='row m-2 align-items-center'>
        <div className="col-md-1"></div>
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
                    <a href={project.linkPoster} className="file"><i className="bi bi-filetype-pdf icono" id="logo"></i></a>
                    <div className='row d-flex m-2 check mt-5'>
                      <div className='col-md-6'>
                        <center>
                          {/* Uso de una expresión ternaria para cambiar el placeholder del primer switch */}
                          <Form.Group as={Col} md="12" controlId="validationCustom06" className='ChecksPosition'>
                            <center>
                              <Form.Check type="switch" id='switchExternos1' label={switchPdf ? "Aceptado" : "Rechazado"} onChange={() => setSwitchPdf(!switchPdf)}></Form.Check>
                            </center>
                          </Form.Group>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6 justify-content-center align-items-center'>
                    <a href={project.linkVideo} className="file"><i className="bi bi-youtube icono" id="logo"></i></a>
                    <div className='row d-flex m-2 check mt-5 '>
                      <div className='col-6  col-md-6 justify-content-center'>
                        <center>
                          {/* Uso de una expresión ternaria para cambiar el placeholder del segundo switch */}
                          <Form.Group as={Col} md="12" controlId="validationCustom04" className='ChecksPosition'>
                            <center>
                              <Form.Check type="switch" id='switchExternos2' label={switchVideo ? "Aceptado" : "Rechazado"} onChange={() => setSwitchVideo(!switchVideo)}></Form.Check>
                            </center>
                          </Form.Group>
                        </center>
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
    <span>{project.description}</span>
    </div>
    </div>
    </div>
    </div>
  </div>     
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
        </Form>
      </div>
      
    </>
  );
}

//MODIFICAR DE AQUI HACIA ABAJO


function InfoProj({lead, finalRes}){
  return(

    <div className='col-md-3 mt-3'>

      <div className="Info m-2 p-4 ">

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

          <div className ="row pb"> 
            <div className ='col-md pe-0'>
              <span className ="Subtitulo">Miembros del proyecto:</span>
            </div>
          </div>

          <div className ="row pb-1">
            <div className ='col-md ps-0'>
              <MemberCont NombreMiembro={"Saraí Santiago"}></MemberCont>
              <MemberCont NombreMiembro={"Saraí Santiago"}></MemberCont>
            </div>
          </div>

          <div className ="row pb-3 mt-3">
            <div className ='col-md-auto'>
              <span className ="Subtitulo1">Resultado:</span>
            </div>

            


              {finalRes === "Aceptado" &&(
                <div className ='col-md-auto'>
                  <span className ="AceptadoCont">
                    <i className='bi bi-check-circle'> {finalRes}</i>
                  </span>
                </div>
              )}

              {finalRes === "Rechazado" &&(
                <>
                    <div className ='col-md-auto'>
                      <span className ="RechazadoCont">
                        <i className='bi bi-x-circle'> {finalRes}</i>
                      </span>
                    </div>               
                </>

              )}

              {finalRes === "En revisión" &&(
                <div className ='col-md-auto'>
                  <span className ="EsperaCont">
                    <i className='bi bi-hourglass-split'> {finalRes}</i>
                  </span>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>  
  );
}

function ProjResume({type, area, title}){
  return(
    <div className='col-12 col-md-7 pt-4 ps-4 pe-4 '>
        
        <div className="container-fluid BGResume w-100">
          <div className ="row p-2 BGBar">

            <div className="col proj-sub-bold text-start" ><span className='gemelo'>Tipo de proyecto: {type}</span></div>
            <div className="col proj-sub-bold text-end"><span className='gemelo'>{area}</span></div>

          </div>                          
        <div className='me-4 ms-4 mb-4 pb-3 pe-3 ps-3 mt-4'>
          <div className="container-fluid ">
            <div className="row">
              <div className="col-xxl-6 proj-tit text-end'wrap"><span className='text-break'>{title}</span></div>
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

function ProjectFile({ descr }) {
  const [switchState1, setSwitchState1] = useState(false); // Estado para controlar el primer switch
  const [switchState2, setSwitchState2] = useState(false); // Estado para controlar el segundo switch\

  return (
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
                    <a href="https://drive.google.com/file/d/1yq3OXk85Qsl434ORIohYZnFV1FpU45VE/view?usp=sharing" target="_blank" rel="noreferrer" className="file"><i className="bi bi-filetype-pdf icono" id="logo"></i></a>
                    <div className='row d-flex m-2 check mt-5'>
                      <div className='col-md-6'>
                        <center>
                          {/* Uso de una expresión ternaria para cambiar el placeholder del primer switch */}
                          <Form.Group as={Col} md="12" controlId="validationCustom06" className='ChecksPosition'>
                            <center>
                              <Form.Check type="switch" id='switchExternos1' label={switchState1 ? "Aceptado" : "Rechazado"} onChange={() => setSwitchState1(!switchState1)}></Form.Check>
                            </center>
                          </Form.Group>
                        </center>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-md-6 justify-content-center align-items-center'>
                    <a href="https://youtu.be/Nka4JSBgf7I?si=RpcxX4lmPjYLNczd" target="_blank" rel="noreferrer" className="file"><i className="bi bi-youtube icono" id="logo"></i></a>
                    <div className='row d-flex m-2 check mt-5 '>
                      <div className='col-6  col-md-6 justify-content-center'>
                        <center>
                          {/* Uso de una expresión ternaria para cambiar el placeholder del segundo switch */}
                          <Form.Group as={Col} md="12" controlId="validationCustom04" className='ChecksPosition'>
                            <center>
                              <Form.Check type="switch" id='switchExternos2' label={switchState2 ? "Aceptado" : "Rechazado"} onChange={() => setSwitchState2(!switchState2)}></Form.Check>
                            </center>
                          </Form.Group>
                        </center>
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
                <span>{descr}</span>
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
    <ToggleBar NameSecProf={"Resumen de proyecto"}/>
    <div className='container-fluid'> 
        <div className='row centered-container'>
          <div className="col-md-1"></div>
            <ProjResume type={'idea'} area={"Biotecnologia"} title={"Robot automata para automatizar automatas"}></ProjResume>        
            <InfoProj lead={"Gerardo Deustúa Hernández"} finalRes={"Aceptado"}></InfoProj>
          <div className="col-md-1"></div>
        </div>

      
      <form className='forms '>
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
