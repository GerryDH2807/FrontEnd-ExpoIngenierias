import "./DetailedAnnoun.css";
import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';

import {Link} from 'react-router-dom';


function AnnounTitle({TituloDetailed,Fecha}){
    return(
        <>
            <div className="col-11 p-3  ">
                <i className="bi bi-megaphone-fill AnnounIcon"></i>
                <span className="TituloAnnoun">{TituloDetailed}</span>
            </div>

            <div className="col-1 ">
                    <div className="container-fluid">
                        <div className="row SubjectCont p-4">
                            <div className="col-2">
                                <span className="Subtitulo text-wrap">Fecha: </span>
                            </div>

                            <div>
                                <span className="text-wrap"> {Fecha}</span>
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
    return(

        <>
            <StudentToggle NameSection={"Anuncios"}></StudentToggle>
            <div className="container-fluid mt-3 p-3">
                <div className="row p-3 ContainerAnnoun d-flex align-items-center">
                    <AnnounTitle TituloDetailed={"TItulo de los anuncio"} Fecha={"26/07/24"}></AnnounTitle>
                </div>

                <div className="row mt-4 p-3 ContainerAnnoun d-flex align-items-center">
                    <AnnounBody Fecha={"26/07/24"} Contenido ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus ut nunc molestie rhoncus. Quisque et facilisis elit. Aliquam in ante rhoncus, fermentum diam vel, efficitur neque. Nam sapien nulla, sodales et massa sed, luctus tincidunt mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget egestas nibh, vel rhoncus mi. Mauris volutpat eu nisi nec molestie. Etiam non leo tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dolor augue, faucibus in ex a, vehicula rutrum tortor. Aenean tempus ligula eget sem tempus finibus. Duis sit amet velit interdum, vulputate sem et, vestibulum magna. Nullam suscipit enim sapien, at accumsan tellus gravida nec. Proin lectus dui, faucibus finibus metus quis, pulvinar dapibus mauris. Donec vehicula nisi vel viverra malesuada.'}></AnnounBody>
                </div>      

                <Link to={'/anuncio-estudiante'} className="row mt-4 p-3 ContainerAnnounBut ButtReturn d-flex justify-items-center">
                    <Link to={'/anuncio-estudiante'} className="text-center ButtReturn">Regresar a anuncios</Link>
                </Link>       
            </div>       
        </>

    );
}