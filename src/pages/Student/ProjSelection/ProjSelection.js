import { Link } from 'react-router-dom';

import Badge from './Badge';
import './Juez.css';
import './Badge.css';

import './ProjSelection.css';

import ToggleBarStudent from '../../../components/TogglebarStudent/togglebarStudent.js';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import axios from 'axios';

function CardCalif({ title, description, categoria, id_Proyecto, status }) {
    const truncateText = (text, limit) => {
        if (!text || typeof text !== 'string' || text.length <= limit) {
          return text;
        }
        return text.slice(0, limit) + '...';
    };
  

    return (
        <>
            <div className='col-auto p-3'>

                <div className="card mb-1 me-0">

                    {categoria === 'Concepto' && (

                        <div className="imag algoimagConcept">
                                    
                        </div>

                    )}

                    {categoria === 'Prototipo' && (

                        <div className="imag algoimagProto">
                                    
                        </div>

                    )}

                    {categoria === 'Prototipo finalizado' && (

                        <div className="imag algoimagFinish">
                                    
                        </div>

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
                                    <div className="badge3">{status}</div>
                                </div>
                            )}

                        </div>
                
                        <Link to="/resumen-proyecto-estudiante" className="btn23">Ver Proyecto</Link>
                        
                    </div>
                </div>
            </div>    
        </>
    );
  }
  

export default function ProjSelection(){

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
        fetch('http://localhost:8000/projects/'+11)
        .then((res)=> res.json())
        .then((data)=>setProject(data))
    },[id_project])



    return(

        <>
            <ToggleBarStudent />
            <div className='container-fluid centered-containerProjSelc'>
                <div className='row m-4 p-3 TitleSelectContainer'>
                    <div className='col '>
                        <h1 className='TituloProjSEL text-center'>Proyectos en los que participas</h1>
                    </div>
                </div>
            </div>




            <div className='container-fluid'>
            <div className='row justify-content-end me-5'>
                <div className='col-md-3'>
                <Link to={'/registro-proyecto'} className='col BotonRegistrar p-3'>
                                        Registra un proyecto nuevo
                    </Link>
                    </div>
                    </div>

                <div className='row d-flex flex-col justify-content-evenly'>

                    <CardCalif 
                        title={project.title}
                        description={project.description}
                        categoria={project.category.title}
                        id_Proyecto={project.id}
                        status={project.statusGeneral}
                    />
            
            {/*
                    <CardCalif 
                        title={'Maquina perpetua que alimenta maquinas perpetuas'}
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        categoria={"Concepto"}
                        id_Proyecto={"CP543"}
                        status={"Rechazado"}
                    />
            */}

                </div>
            </div>        
        </>

    );
}