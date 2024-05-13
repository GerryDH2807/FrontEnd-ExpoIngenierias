import { Link } from 'react-router-dom';

import Badge from './Badge';
import './Juez.css';
import './Badge.css';

import './ProjSelection.css';

import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';
import BotonElim from '../../../components/BotonConfirmacion/ConfBot.js';

function CardCalif({ title, description, categoria, id_Proyecto, status }) {
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
                            {status === "Rechazado" && (
                                <div className="badge-container">
                                    <div className="badge2">{status}</div>
                                </div>
                            )}
                            {status === "Aceptado" && (
                                <div className="badge-container">
                                    <div className="badge3">{status}</div>
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
            </div>
        </>
    );
}

  

export default function ProjSelection({ProjCheck}){
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

                        <CardCalif 
                            title={'Robot automata para automatizar automatas'}
                            description="Robot Automata para Automatizar Autómatas  es un proyecto innovador para desarrollar un sistema robótico que automatiza tareas complejas en la industria. Utiliza algoritmos avanzados de inteligencia artificial y aprendizaje automático para aumentar la eficiencia y precisión en la producción, optimizando recursos."
                            categoria={"Prototipo"}
                            id_Proyecto={"NPF103"}
                            status={"Aceptado"}
                        />
                
                        <CardCalif 
                            title={'Maquina perpetua que alimenta maquinas perpetuas'}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            categoria={"Prototipo finalizado"}
                            id_Proyecto={"CP543"}
                            status={"Rechazado"}
                        />


                    </div>
                )}
            </div>        
        </>

    );
}