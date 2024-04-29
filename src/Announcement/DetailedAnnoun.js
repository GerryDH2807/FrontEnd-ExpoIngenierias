import "./DetailedAnnoun.css";

import {Link} from 'react-router-dom';


function AnnounTitle(){
    return(
        <>
            <div className="col-6 p-3  ">
                <i className="bi bi-megaphone-fill AnnounIcon"></i>
                <span className="TituloAnnoun">Titulo del anuncio</span>
            </div>
        </>
    );
}

function AnnounBody(){
    return(
        <div className="container-fluid">
            <div className="row p-3">
                <div className="col-2 p-3 SubjectCont">
                    <span className="Subtitulo">Asunto: </span><span>cuerpo del asunto</span>
                </div>
                <div className="col-2 ms-3 p-3 SubjectCont">
                    <span className="Subtitulo">Fecha: </span><span>24/04/19</span>
                </div>
            </div>
            <div className="row">
                <div className="col p-3">
                    <span className="texto">          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
            </div>
        </div>
    );
}

export default function DetailedAnnounCont(){
    return(
        <div className="container-fluid mt-3 p-3">
            <div className="row p-3 ContainerAnnoun d-flex align-items-center">
                <AnnounTitle></AnnounTitle>
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