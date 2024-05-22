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

function CardCalif({ projects, isLoading }) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event, id) => {
        if (event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente
        }

        const form = event ? event.target : null;
        if (form && form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            try {
                await axios.delete(URL + id);
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

    const icono = <i className='bi bi-trash-fill'></i>

    return (
        <>
            {!isLoading && (
                <div className='col-12 mt-5 d-flex align-items-center justify-content-center'>
                    <div class="semicircle">
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isLoading && (
                <div className='col-12 d-flex flex-col justify-items-center'>
                    {projects.map((item) => (
                        <div className="card card-container m-4 w-100" key={item.id}>
                            {item.category.title === 'Concepto' && (
                                <div className="imag algoimagConcept"></div>
                            )}
                            {item.category.title === 'Prototipo' && (
                                <div className="imag algoimagProto"></div>
                            )}
                            {item.category.title === 'Prototipo finalizado' && (
                                <div className="imag algoimagFinish"></div>
                            )}
                            <div className="text">
                                <p className="h3">{truncateText(item.title, 50)}</p>
                                <p className="p">{truncateText(item.description, 100)}</p>
                                <div className="badge-container">
                                    <Badge data={item.category.title} className="badge text-wrap" />
                                    <Badge data={item.id_Proyecto} className="badge" />
                                    {item.status === "en revision" && (
                                        <div className="badge-container">
                                            <div className="badge">En revisión</div>
                                        </div>
                                    )}
                                    {item.status === "rechazado" && (
                                        <div className="badge-container">
                                            <div className="badge2">Rechazado</div>
                                        </div>
                                    )}
                                    {item.status === "aprobado" && (
                                        <div className="badge-container">
                                            <div className="badge3">Aceptado</div>
                                        </div>
                                    )}
                                </div>
                                <Link to={"/resumen-proyecto-estudiante/" + item.id} className="btn23">Ver Proyecto</Link>
                            </div>
                            <div className="button-container">
                                <BotonElim MensajeTitle={"¿Deseas eliminar este proyecto?"} BotonA={'Cancelar'} BotonB={'Eliminar'} Path={"/principal-estudiante/" + item.id} className={"ButtonEliminar"} Texto={icono} onConfirm={(event) => handleSubmit(event, item.id)} recharge={true}></BotonElim>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default function ProjSelection({ ProjCheck }) {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id_student } = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetch(URL + 'auth0|66340f38cfd75a371a1b532b')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setIsLoading(false); // Set to false even if there's an error to avoid infinite loading
            });
    }, [id_student]);

    return (
        <>
            <StudentToggle NameSection={"Mis proyectos"} />
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
                                    <Link to={'/registro-proyecto'} className='col BotonRegistrar p-3'>
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
                            <CardCalif projects={projects} isLoading={isLoading} />
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
