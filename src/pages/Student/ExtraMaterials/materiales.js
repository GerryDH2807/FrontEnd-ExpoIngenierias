import './materiales.css';
import Button from 'react-bootstrap/esm/Button.js';
import { Link } from 'react-router-dom';
import Badge from '../ProjectSelection/Badge';
import '../ProjectSelection/Juez.css';
import '../ProjectSelection/Badge.css';
import '../ProjectSelection/ProjSelection.css';
import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';
import BotonElim from '../../../components/BotonConfirmacion/ConfBot.js';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';





const URL = 'http://localhost:8000/projects/resumeProject/';

function CardCalif({ title, quantity, onIncrease, onDecrease, className }) {
    const truncateText = (text, limit) => {
        if (!text || typeof text !== 'string' || text.length <= limit) {
            return text;
        }
        return text.slice(0, limit) + '...';
    };

    return (
        <>
            <div className="cardSelectExtraMateriales card-container m-4">
                <div className={className}></div>
                <div className="textExtraMat">
                    <center><p className="h3">{truncateText(title, 50)}</p></center>
                    <div className='container-fluid'>
                        <div className='row'>
                            <center><div className='col d-flex align-items-center justify-content-center'>
                                <Button className='ButtonAddLessMaterials' onClick={onDecrease}>-</Button>
                                <span className='ContenedorNumActuExtraMat'>{quantity}</span>
                                <Button className='ButtonAddLessMaterials' onClick={onIncrease}>+</Button>
                            </div></center>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function ProjSelection({ ProjCheck }) {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const { id_student } = useParams();
    
    const initialQuantities = { contacto: 0, mampara: 0, pantalla: 0 };
    const [quantities, setQuantities] = useState(initialQuantities);

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

    const handleIncrease = (item) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [item]: prevQuantities[item] + 1
        }));
    };

    const handleDecrease = (item) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [item]: Math.max(prevQuantities[item] - 1, 0)
        }));
    };

    return (
        <>
            <StudentToggle NameSection={"Solicitar materiales extra"} />
            <div className='container-fluid'>
                {ProjCheck === "False" && (
                    <>
                        <div className='container-fluid centered-containerProjSelc'>
                            <div className='row m-4 p-3 TitleSelectContainer'>
                                <div className='col '>
                                    <h1 className='TituloProjSEL text-center'>Hacer solicitud de material extra</h1>
                                </div>
                            </div>
                        </div>
                        <div className='container-fluid p-3'>
                            <center>
                                <div className='row p-3 m-3 NoProjContainer'>
                                    <div className='col p-3'>
                                        <p className='mb-0 fw-bold'>En este momento ya no puedes solicitar materiales extras en caso de que se te hayan olvidado en el registro, dado a que el evento ya ha iniciado</p>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </>
                )}
                {ProjCheck === "True" && (
                    <>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 mt-2 pt-3 ps-3 pe-3'>
                                    <center><h1 className='TituloProjSEL p-3 text-center TitleSelectContainerVFascara'>Hacer solicitud de material extra</h1></center>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex flex-wrap align-items-center justify-content-evenly'>
                                <CardCalif 
                                    className={"imagmaterial algoimagMaterialExtraConector"}
                                    title={"Contacto de 220v"} 
                                    quantity={quantities.contacto}
                                    onIncrease={() => handleIncrease('contacto')}
                                    onDecrease={() => handleDecrease('contacto')}
                                />
                                <CardCalif 
                                    className={"imagmaterial algoimagMaterialExtraMampara"}
                                    title={"Mampara para poster"} 
                                    quantity={quantities.mampara}
                                    onIncrease={() => handleIncrease('mampara')}
                                    onDecrease={() => handleDecrease('mampara')}
                                />
                                <CardCalif
                                    className={"imagmaterial algoimagMaterialExtraTele"} 
                                    title={"Pantalla"} 
                                    quantity={quantities.pantalla}
                                    onIncrease={() => handleIncrease('pantalla')}
                                    onDecrease={() => handleDecrease('pantalla')}
                                />
                            </div>
                        </div>

                        <center>
                            <div className='row BotonMaterialExtraContinuarContainer p-3 m-3'>
                                <Link to={'/principal-estudiante'} className='col BotonRegistrarMaterialesExtra p-3'>
                                    Realizar pedido de materiales
                                </Link>
                            </div>
                        </center>
                    </>
                )}
            </div>
        </>
    );
}