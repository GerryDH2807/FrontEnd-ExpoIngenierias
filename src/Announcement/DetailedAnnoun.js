import "./DetailedAnnoun.css";

import {Link} from 'react-router-dom';


function AnnounTitle({TituloDetailed}){
    return(
        <>
            <div className="col-12 p-3  ">
                <i className="bi bi-megaphone-fill AnnounIcon"></i>
                <span className="TituloAnnoun">{TituloDetailed}</span>
            </div>
        </>
    );
}

function AnnounBody({Asunto, Fecha, Contenido}){
    return(
        <div className="container-fluid">
            <div className="row p-3 ">
                <div className="col-5 p-3">

                    <div className="container-fluid">
                        <div className="row SubjectCont p-4">
                            <div className="col-2">
                                <span className="Subtitulo text-wrap">Asunto: </span>
                            </div>

                            <div className="col-10">
                                <span className="text-wrap">{Asunto}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-5 ms-3 p-3 ">
                    <div className="container-fluid">
                        <div className="row SubjectCont p-4">
                            <div className="col-2">
                                <span className="Subtitulo text-wrap">Asunto: </span>
                            </div>

                            <div className="col-10">
                                <span className="text-wrap">{Fecha}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col p-3">
                    <span className="texto"> {Contenido}</span>
                </div>
            </div>
        </div>
    );
}

export default function DetailedAnnounCont(){
    return(
        <div className="container-fluid mt-3 p-3">
            <div className="row p-3 ContainerAnnoun d-flex align-items-center">
                <AnnounTitle TituloDetailed={"TItulo de los anuncio alv"}></AnnounTitle>
            </div>

            <div className="row mt-4 p-3 ContainerAnnoun d-flex align-items-center">
                <AnnounBody></AnnounBody>
            </div>      

            <div className="row mt-4 p-3 ContainerAnnounBut d-flex justify-items-center">
                <Link to={'/anuncios'} className="text-center ButtReturn">Regresar a anuncios</Link>
            </div>       
        </div>
    );
}