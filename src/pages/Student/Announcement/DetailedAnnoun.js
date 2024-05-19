import "./DetailedAnnoun.css";
import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';

import {Link} from 'react-router-dom';
import { useState, useEffect } from "react";


function AnnounTitle({TituloDetailed,Fecha}){
    return(
        <>
            <div className="col-10 p-3  ">
                <i className="bi bi-megaphone-fill AnnounIcon"></i>
                <span className="TituloAnnoun">{TituloDetailed}</span>
            </div>

            <div className="col-2 ">
                    <div className="container-fluid">
                        <div className="row SubjectCont p-4">
                            <div className="col-2">
                                <span className="Subtitulo text-wrap">Fecha: </span>
                            </div>

                            <div>
                                <span className="text-wrap"> {Fecha && Fecha.substring(0,10)}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

function AnnounBody({Contenido}){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3">
                    <span className="texto"> {Contenido}</span>
                </div>
            </div>
        </div>
    );
}

export default function DetailedAnnounCont(){

    const [announDet, setAnnounDet] = useState({
        title: "",
        description: "",
        createdAt: ""
      });

    useEffect(() => {
        fetch('http://localhost:8000/announ/' + 9)
          .then((res) => res.json())
          .then((data) => {
            setAnnounDet(data);
          });
      }, []); // Lista de dependencias vacía para ejecutar solo una vez
   
    return(

        <>
            <StudentToggle NameSection={"Anuncios"}></StudentToggle>
            <div className="container-fluid mt-3 p-3">
                <div className="row p-3 ContainerAnnoun d-flex align-items-center">
                    <AnnounTitle TituloDetailed={announDet.title} Fecha={announDet.createdAt}></AnnounTitle>
                </div>

                <div className="row mt-4 p-3 ContainerAnnoun d-flex align-items-center">
                    <AnnounBody Contenido ={announDet.description}></AnnounBody>
                </div>      

                <Link to={'/anuncio-estudiante'} className="row mt-4 p-3 ContainerAnnounBut ButtReturn d-flex justify-items-center">
                    <Link to={'/anuncio-estudiante'} className="text-center ButtReturn">Regresar a anuncios</Link>
                </Link>       
            </div>       
        </>

    );
}