import { Link } from 'react-router-dom';

import Badge from './Badge';
import './Juez.css';
import './Badge.css';

import './ProjSelection.css';

import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';
import BotonElim from '../../../components/BotonConfirmacion/ConfBot.js';

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios';

const URL = 'http://localhost:8000/projects/resumeProject/';

function CardCalif({ title, description, categoria, id_Proyecto, status }) {
    const [validated, setValidated] = useState(false);
    const handleSubmit = async (event) => {


        if (event) {
          event.preventDefault(); // Evita que el formulario se envíe automáticamente
        }
        
        const form = event ? event.target : null;
        if (form && form.checkValidity() === false) {
          event.stopPropagation();
        } else {
          try {
            await axios.delete(URL + id_Proyecto);
            setProjects(projects.filter(project => project.id !== id));
          } catch (e) {
            console.log(e);
          }
        }
        
        setValidated(true);
      };
      



    const truncateText = (text, limit) => {
        if (!text || typeof text !== 'string' || text.length <= limit) {
            return text;
        }
        return text.slice(0, limit) + '...';
    };

    const icono =<i className='bi bi-trash-fill'></i>


    return (
        <>
            <div className='col-auto p-3'>
                <div className="card mb-1 me-0 card-container">
                    {/* Contenido de la tarjeta */}
                    {categoria === 'Concepto' && (
                        <div className="imag algoimagConcept"></div>
                    )}
                    {categoria === 'Prototipo' && (
                        <div className="imag algoimagProto"></div>
                    )}
                    {categoria === 'Prototipo finalizado' && (
                        <div className="imag algoimagFinish"></div>
                    )}
                    <div className="text">
                        <p className="h3">{truncateText(title, 50)}</p>
                        <p className="p">{truncateText(description, 100)}</p>
                        <div className="badge-container">
                            <Badge data={categoria} className="badge text-wrap" />
                            <Badge data={id_Proyecto} className="badge" />
                            {status === "rechazado" && (
                                <div className="badge-container">
                                    <div className="badge2">Rechazado</div>
                                </div>
                            )}
                            {status === "aprobado" && (
                                <div className="badge-container">
                                    <div className="badge3">Aceptado</div>
                                </div>
                            )}
                        </div>
                        <Link to={"/resumen-proyecto-estudiante/" + id_Proyecto } className="btn23">Ver Proyecto</Link>
                    </div>
                    {/* Contenedor para BotonElim */}
                    <div className="button-container">
                        <BotonElim Path={"/principal-estudiante"} className={"ButtonEliminar"} Texto={icono} onConfirm={handleSubmit} recharge={true}></BotonElim>
                    </div>
                </div>
            </div>
        </>
    );
}

  

export default function ProjSelection({ProjCheck}){

    const [projects, setProjects] = useState([{
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
      }]);
    const { id_student } = useParams();
      useEffect(()=>{
        fetch(URL+'nuevodescr121S')
        .then((res)=> res.json())
        .then((data)=>setProjects(data))
    },[id_student])



    return(

        <>

            <StudentToggle NameSection={"Mis proyectos"}></StudentToggle>

            <div className='container-fluid centered-containerProjSelc'>
                <div className='row m-4 p-3 TitleSelectContainer'>
                    <div className='col '>
                        <h1 className='TituloProjSEL text-center'>Proyectos en los que participas</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>


                {ProjCheck === "False" && (
                    <>
                        <div className='container-fluid  p-3'>
                            <center>
                                <div className='row p-3 m-3 NoProjContainer'>
                                    <div className='col p-3'>
                                        <p className='mb-0 fw-bold'>Parece ser que aun no te encuentras registrado en ningun proyecto, puedes registrar un proyecto y así ser lider equipo o esperar a que el lider de tu equipo registre el proyecto.</p>
                                    </div>
                                </div>
                            </center>

                            <center>
                                <div className='row p-3 m-3 NoProjContainer'>
                                    <Link to={'/registro-proyecto'}className='col BotonRegistrar p-3'>
                                        Registra un proyecto nuevo
                                    </Link>
                                </div>
                            </center>
                        </div>
                    </>

                )}

                {ProjCheck === "True" && (
                    <div className='row d-flex flex-col justify-content-evenly'>
                    
                    {projects.map((project, index) => (
                        <CardCalif 
                            title={project.title}
                            description={project.description}
                            categoria={project.category.title}
                            id_Proyecto={project.id}
                            status={project.statusGeneral}
                        />
                    ))}
                    </div>
                )}
            </div>        
        </>

    );
}