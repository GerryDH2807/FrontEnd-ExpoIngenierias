import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom'

import ToggleBar from '../../../components/Togglebar/togglebar.js';
import CardConcept from '../../../img/CardConcept.png';
import CardProto from '../../../img/CardProto.png';
import CardFinish from '../../../img/CardFinish.png';

import Badges from '../../Student/ProjectSelection/Badge.js'

import { people } from './data.js';

import './TeacherHome.css';
function HorizontalSlider ({data}){
  const imagenes = {
    "idea": CardConcept,
    "prototipo": CardProto,
    "prototipo finalizado": CardFinish
  };
  return (
    <div className="slider-container">
      {data.map((item) => (
        <div className='slider-item cardProf m-3' key={item.id}>
        <img src={imagenes[item.categoria]} alt={item.id}  className='card-img-top ImagProfe'/>
      <div className='card-body '>
          <h5 className=' card-title m-2'>{item.id}</h5>
          <div className='container-fluid'>
            <div className='row d-flex justify-content-evenly mb-4'>
              <div className='badge-container mb-3'>
                <Badges className={"badge p-2"} data={item.area}></Badges>

                <Badges className={"badge p-2 text-wrap"} data={item.categoria}></Badges>

                {item.status === "Rechazado" && (
                    <div className="badge-container">
                        <div className="badge2 p-2">{item.status}</div>
                    </div>
                )}

                {item.status === "Aceptado" && (
                    <div className="badge-container">
                        <div className="badge3 p-2">{item.status}</div>
                    </div>
                )}

                {item.status === "En revisión" && (
                  <div className="badge-container">
                    <div className="badge p-2">{item.status}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Link to="/resumen-proyecto" className='custom-btn3 mb-5'>Ver Proyecto</Link>
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
      <div className='col-md-7 pt-5 ps-4 pe-4'>
          
        <div className="container-fluid BGResume-profesor w-100 ">
            <div className ="row p-2 BGBar">
            <div className="col-md-12"><span style={{display: 'inline-block', width: '100%', height: 0}}></span></div>
            </div>                          
          <div className='m-4 p-0'>
            <div className="container-fluid welcomeContent">
              <div className="row">
                <div className="col-md-5 proj-sub text-start" ><h3 className='text-break'>Cierre de Registro</h3></div>
              </div>
              <div className="row">
                <div className="col-md-6 proj-sub text-start" ><h3 className='text-break'>{horas}</h3></div>
              </div>
              <div className="row">
                <div className="col-md-10 proj-sub text-start" ><h1 className='text-break'>Bienvenido {profesor}</h1></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default function Hometeacher(){
    return(
      <>
      <ToggleBar NameSecProf={"Inicio"} />
    <div className='container-fluid centered-container'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-between'>
            <div className="col-md-1"></div>
          <ProjResume horas={"20 dias, 12 horas, 4 min "} profesor={"Sarai Santiago"}></ProjResume>        
          <Resumeteacher Total={"10"} revisados={"4"} faltantes={"6"} progreso={"40%"}></Resumeteacher>
          <div className="col-md-1"></div>
          <div className='row d-flex justify-content-between align-items-center'>
          <div className="col-md-1"></div>
          <div className="col-md-10 ">
          <div className='container-fluid'  id="imgfondo">
            <h3 className ="Titulo p-3">Proyectos Que faltan de revisar</h3>
            <HorizontalSlider data={people}/></div>
            </div>
          <div className="col-md-1"></div>
          </div>
          <div className='row d-flex justify-content-between align-items-center'>
          <div className="col-md-1"></div>
          <div className="col-md-10 ">
          <div className='container-fluid' id="imgfondo">
            <h3 className ="Titulo p-3">Proyectos Revisados</h3>
            <HorizontalSlider data={people}/></div>
            </div>
          <div className="col-md-1"></div>
          </div>
        </div>
        </div>
      </div>
      </>
      );
      
}