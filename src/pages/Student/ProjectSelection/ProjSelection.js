import { Link } from 'react-router-dom';

import Badge from './Badge';
import './Juez.css';
import './Badge.css';
import Placeholder from 'react-bootstrap/Placeholder';

import './ProjSelection.css';
import Button from 'react-bootstrap/esm/Button.js';
import { projects } from './data.js';

import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';
import BotonElim from '../../../components/BotonConfirmacion/ConfBot.js';
import Spinner from 'react-bootstrap/Spinner';

function CardCalif({projects, IsLoaded}) {
    const truncateText = (text, limit) => {
        if (!text || typeof text !== 'string' || text.length <= limit) {
            return text;
        }
        return text.slice(0, limit) + '...';
    };

    const icono =<i className='bi bi-trash-fill'></i>

    const PlaceBadge = <center><Spinner animation="grow" size="sm"/></center>


    return (
        <>
            {IsLoaded === 'True' && (
                <>
                    <div className='col-12 d-flex flex-col justify-items-center'>
                        {projects.map((item) => (

                            <div className="card card-container m-4 w-100">
                                {/* Contenido de la tarjeta */}
                                {item.categoria === 'Concepto' && (
                                    <div className="imag algoimagConcept"></div>
                                )}
                                {item.categoria === 'Prototipo' && (
                                    <div className="imag algoimagProto"></div>
                                )}
                                {item.categoria === 'Prototipo finalizado' && (
                                    <div className="imag algoimagFinish"></div>
                                )}
                                <div className="text">
                                    <p className="h3">{truncateText(item.title, 50)}</p>
                                    <p className="p">{truncateText(item.description, 100)}</p>
                                    <div className="badge-container">
                                        <Badge data={item.categoria} className="badge text-wrap" />
                                        <Badge data={item.id_Proyecto} className="badge" />
                                        {item.status === "En revisión" && (
                                            <div className="badge-container">
                                                <div className="badge">{item.status}</div>
                                            </div>
                                        )}
                                        {item.status === "Rechazado" && (
                                            <div className="badge-container">
                                                <div className="badge2">{item.status}</div>
                                            </div>
                                        )}
                                        {item.status === "Aceptado" && (
                                            <div className="badge-container">
                                                <div className="badge3">{item.status}</div>
                                            </div>
                                        )}
                                    </div>
                                    <Link to="/resumen-proyecto-estudiante" className="btn23">Ver Proyecto</Link>
                                </div>
                                {/* Contenedor para BotonElim */}
                                <div className="button-container">
                                    <BotonElim Path={"/principal-estudiante"} className={"ButtonEliminar"} Texto={icono}></BotonElim>
                                </div>
                            </div>

                        ))}
                    </div>
                </>
            )}
            
            {IsLoaded === 'False' && (
                <>
                    <div className='col-12 d-flex flex-col justify-items-center'>
                        {projects.map((item) => (

                            <div className="card card-container m-4 w-100">

                                <div className="imag d-flex align-items-center justify-content-center">
                                     <center><Spinner animation="border"/></center>
                                </div>

                                <div className="text">
                                    <p className="h3">
                                        <Placeholder animation="glow" className="w-100">
                                            <Placeholder xs={12} bg="Dark" size="lg" />
                                        </Placeholder>
                                    </p>
                                    <p className="p">                                        
                                        <Placeholder animation="glow" className="w-100">
                                            <Placeholder xs={12}  size="xs" />
                                            <Placeholder xs={12}  size="xs" />
                                            <Placeholder xs={12}  size="xs" />
                                        </Placeholder>
                                    </p>
                                    <div className="badge-container">
                                        <Badge data={PlaceBadge} className="badge text-wrap" />
                                        <Badge data={PlaceBadge} className="badge" />
                                        <div className="badge">{PlaceBadge}</div>
                
                                    </div>
                                    <Button className="btn23" disabled> <Spinner animation="border" size='sm' className='me-2'/> Ver Proyecto</Button>
                                </div>
                                {/* Contenedor para BotonElim */}
                                <div className="button-container">
                                    <BotonElim Path={"/principal-estudiante"} className={"ButtonEliminar"} Texto={icono}></BotonElim>
                                </div>
                            </div>

                        ))}
                    </div>
                </>
            )}            
        </>
    );
}

  

export default function ProjSelection({ProjCheck}){
    return(

        <>

            <StudentToggle NameSection={"Mis proyectos"}></StudentToggle>

            <div className='container-fluid'>

                {ProjCheck === "False" && (
                    <>
                        <div className='container-fluid centered-containerProjSelc'>
                            <div className='row m-4 p-3 TitleSelectContainer'>
                                <div className='col '>
                                    <h1 className='TituloProjSEL text-center'>Proyectos en los que participas</h1>
                                </div>
                            </div>
                        </div>

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

                    <>
                        <div className='container-fluid '>
                            <div className='row'>
                                <div className='col-2 mt-2 p-3'>
                                    <Link to={'/registro-proyecto'} className='bi bi-plus-square-fill NuevoRegister'></Link>
                                </div>
                                <div className='col-10 mt-2 p-3'>
                                   <center><h1 className='TituloProjSEL p-3 text-center TitleSelectContainerVF'>Proyectos en los que participas</h1></center>
                                </div>
                            </div>
                        </div>

                        <div className='row d-flex flex-col justify-content-evenly'>          
                            <CardCalif projects={projects} IsLoaded={"True"}/>
                        </div>                  
                    </>


                )}
            </div>        
        </>

    );
}