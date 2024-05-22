import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom'
import React, { useState,useEffect,useRef} from "react";
import { useParams } from "react-router-dom";

import ToggleBar from '../../../components/Togglebar/togglebar.js';
import CardConcept from '../../../img/CardConcept.png';
import CardProto from '../../../img/CardProto.png';
import CardFinish from '../../../img/CardFinish.png';

import Badges from '../../Student/ProjectSelection/Badge.js'
import { useAuth0 } from '@auth0/auth0-react';

import './TeacherHome.css';
function HorizontalSlider ({data}){
  const imagenes = {
    "Concepto": CardConcept,
    "Prototipo": CardProto,
    "Prototipo finalizado": CardFinish
  };
  return (
    <div className="slider-container">
      {data.map((item) => (
        <div className='slider-item cardProf m-3' key={item.id}>
        <img src={imagenes[item.category]} alt={item.id}  className='card-img-top ImagProfe'/>
      <div className='card-body '>
          <h5 className=' card-title m-2'>{item.id}</h5>
          <div className='container-fluid'>
            <div className='row d-flex justify-content-evenly mb-4'>
              <div className='badge-container mb-3'>
                <Badges className={"badge p-2"} data={item.area}></Badges>

                <Badges className={"badge p-2 text-wrap"} data={item.category}></Badges>

                {item.status === "rechazado" && (
                    <div className="badge-container">
                        <div className="badge2 p-2">{item.statusGeneral}</div>
                    </div>
                )}

                {item.status === "aprobado" && (
                    <div className="badge-container">
                        <div className="badge3 p-2">{item.statusGeneral}</div>
                    </div>
                )}

                {item.status === "en revisión" && (
                  <div className="badge-container">
                    <div className="badge p-2">{item.statusGeneral}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link to={`/profesor/projects/${item.id}`} className='custom-btn3 mb-5'>Ver Proyecto</Link>
          </div>
    </div>
      ))}
    </div>
  );
};

function Resumeteacher({Total,revisados,faltantes,progreso}){
    return(
  
      <div className='col-md-3'>
  
        <div className="Info m-4 p-4">
  
          <h1 className ="Titulo text-break">Control de revisión</h1>
  
          <div className ='container-fluid p-1'>
            <div className ="row pb-3"> 
              <div className ='col-md-auto pe-0'>
                <span className ="Subtitulo">Proyectos Faltantes:</span> 
              </div>
            </div>
            <div  className="row">
            <div className ='col-md-auto pe-0'>
            <h6 className="Texto text-break Titulo1">{faltantes}/{Total}</h6>
            </div>
            </div>
            <div className ="row pb-3"> 
              <div className ='col-md-auto pe-0 '>
                <h6 className ="Subtitulo">Proyectos revisados:</h6>
              </div>
            </div> 
            <div  className="row ">
            <div className ='col-md-auto pe-0'>
            <h6 className="Texto text-break Titulo1">{revisados}/{Total}</h6>
            </div>
            </div>
              <div className="row justify-content-between d-flex align-items-center">
                  <div className="col-md-1"></div>
                  <div className="col-md-auto">
                      <span className ="Subtitulo">Progreso: {progreso}</span>
                      </div>
                      <div className="col-md-1"></div>
                  </div>
              </div>
              </div>
          </div>
    );
  }
  
  function ProjResume({horas, profesor}){
    return(
      <div className='col-md-7 pt-4 ps-4 pe-4'>
          
        <div className="container-fluid BGResume-profesor w-100 ">
            <div className ="row p-2 BGBar">
            <div className="col-md-12"><span style={{display: 'inline-block', width: '100%', height: 0}}></span></div>
            </div>                          
          <div className='m-4 p-0'>
            <div className="container-fluid welcomeContent">
              <div className="row">
                <div className="col-md proj-sub text-start" ><h3 className='text-break prof-titulo-h3-1'>Cierre de Registro:</h3></div>
              </div>
              <div className="row">
                <div className="col-md proj-sub text-start" ><center><h3 className='text-break prof-titulo-h3-2'>{horas}</h3></center></div>
              </div>
              
              <hr className='divisor'></hr>

              <div className="row">
                <div className="col-md proj-sub text-start" ><h1 className='text-break prof-titulo-h1'>Bienvenido {profesor}</h1></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default function Hometeacher(){
  const [projects, setProjects] = useState([]);
  const { id_responsable } = useParams(); // Asumiendo que este es el parámetro que obtienes desde la URL
  const { isAuthenticated, isLoading, error, user } = useAuth0();
  console.log(user.sub);
  const Ref = useRef(null);
  
// The state for our timer
const [timer, setTimer] = useState('00:00:00');


const getTimeRemaining = (endTime) => {
  const countdownDateTime = new Date(endTime).getTime();
  const currentTime = new Date().getTime();
  const remainingDayTime = countdownDateTime - currentTime;
  
  const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
  const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

  return {
    totalDays, totalHours, totalMinutes, totalSeconds
  };
}

const startTimer = (endTime) => {
  const { totalDays, totalHours, totalMinutes, totalSeconds } = getTimeRemaining(endTime);

  // update the timer
  setTimer(
    (totalDays > 9 ? totalDays : '0' + totalDays) + ':' +
    (totalHours > 9 ? totalHours : '0' + totalHours) + ':' +
    (totalMinutes > 9 ? totalMinutes : '0' + totalMinutes) + ':' +
    (totalSeconds > 9 ? totalSeconds : '0' + totalSeconds)
  );
}

const clearTimer = (endTime) => {
  setTimer('00:00:00');
  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
    startTimer(endTime);
  }, 1000);
  Ref.current = id;
}

  useEffect(() => {
    //nuevodescr120T
    //http://localhost:8000/projects/responsable/${user.sub}
    fetch(`http://localhost:8000/projects/responsable/nuevodescr120T`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error al obtener los proyectos:', error));
      const endTime = new Date("2024-06-10T00:00:00");
      clearTimer(endTime);
  }, [id_responsable]);
  console.log(projects);
  const falt = projects.filter(project => project.statusGeneral === "en revision");
  const rev = projects.filter(project => project.statusGeneral === "rechazado" || project.statusGeneral === "aprobado");
  const porcentaje = (rev.length*100)/projects.length;
  
    return(
      <>
      <ToggleBar NameSecProf={"Inicio"} />
    <div className='container-fluid centered-container'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-between'>
            <div className="col-md-1"></div>
          <ProjResume horas={timer} profesor={"Sarai Santiago"}></ProjResume>        
          <Resumeteacher Total={projects.length} revisados={rev.length} faltantes={falt.length} progreso={porcentaje+'%'}></Resumeteacher>
          <div className="col-md-1"></div>
          <div className='row d-flex justify-content-between align-items-center'>
          <div className="col-md-1"></div>
          <div className="col-md-10 ">
          <div className='container-fluid'  id="imgfondo">
            <h3 className ="Titulo p-3">Proyectos Que faltan de revisar</h3>
            <HorizontalSlider data={falt} />
            </div>
            </div>
          <div className="col-md-1"></div>
          </div>
          <div className='row d-flex justify-content-between align-items-center'>
          <div className="col-md-1"></div>
          <div className="col-md-10 ">
          <div className='container-fluid' id="imgfondo">
            <h3 className ="Titulo p-3">Proyectos Revisados</h3>
            <HorizontalSlider data={rev} />
            </div>
            </div>
          <div className="col-md-1"></div>
          </div>
        </div>
        </div>
      </div>
      </>
      );
      
}