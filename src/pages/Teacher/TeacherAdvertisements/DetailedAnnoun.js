import "./DetailedAnnoun.css";

import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import Menu from '../../../components/Togglebar/togglebar.js';

function AnnounTitle({ TituloDetailed, Fecha, isLoaded }) {
    return (
      <>
        {isLoaded ? (
          <>
            <div className="col-10 p-3">
              <i className="bi bi-envelope-fill AnnounIcon"></i>
              <span className="TituloAnnoun">{TituloDetailed}</span>
            </div>
            <div className="col-2">
              <div className="container-fluid">
                <div className="row SubjectCont p-4">
                  <div className="col-2">
                    <span className="Subtitulo text-wrap">Fecha: </span>
                  </div>
                  <div>
                    <span className="text-wrap">{Fecha && Fecha.substring(0, 10)}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-10 p-3 d-flex align-items-center">
              <i className="bi bi-envelope-fill AnnounIcon"></i>
              <Placeholder animation="glow" className="w-75">
                <Placeholder xs={12} bg="primary" className="ms-4" size="lg" />
              </Placeholder>
            </div>
            <div className="col-2">
              <div className="container-fluid">
                <div className="row SubjectCont p-4">
                  <div className="col-2">
                    <span className="Subtitulo text-wrap">Fecha: </span>
                  </div>
                  <div>
                    <Placeholder animation="glow" className="w-100">
                      <Placeholder xs={10} bg="dark" size="lg" />
                    </Placeholder>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
  
  function AnnounBody({ Contenido, isLoaded }) {
    return (
      <>
        {isLoaded ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col p-3">
                <span className="texto">{Contenido}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row">
              <div className="col p-3">
                <Placeholder animation="glow" className="w-75">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <Placeholder key={index} xs={12} bg="secondary" size="xs" />
                  ))}
                </Placeholder>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default function DetailedAnnounCont() {
    const [announDet, setAnnounDet] = useState({
      title: "",
      description: "",
      createdAt: ""
    });
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('http://localhost:8000/announ/' + 9)
        .then((res) => res.json())
        .then((data) => {
          setAnnounDet(data);
          setIsLoading(false); // Datos obtenidos, desactivar estado de carga
        });
    }, []);
    return(
        <>
        <Menu NameSecProf={"Anuncios"}/>
        <div className="container-fluid mt-3 p-3">
            <div className="row p-3 ContainerAnnoun d-flex align-items-center">
                <AnnounTitle TituloDetailed={"TItulo de los anuncio"} Fecha={"26/07/24"}></AnnounTitle>
            </div>

            <div className="row mt-4 p-3 ContainerAnnoun d-flex align-items-center">
                <AnnounBody Fecha={"26/07/24"} Contenido ={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus ut nunc molestie rhoncus. Quisque et facilisis elit. Aliquam in ante rhoncus, fermentum diam vel, efficitur neque. Nam sapien nulla, sodales et massa sed, luctus tincidunt mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget egestas nibh, vel rhoncus mi. Mauris volutpat eu nisi nec molestie. Etiam non leo tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dolor augue, faucibus in ex a, vehicula rutrum tortor. Aenean tempus ligula eget sem tempus finibus. Duis sit amet velit interdum, vulputate sem et, vestibulum magna. Nullam suscipit enim sapien, at accumsan tellus gravida nec. Proin lectus dui, faucibus finibus metus quis, pulvinar dapibus mauris. Donec vehicula nisi vel viverra malesuada.'}></AnnounBody>
            </div>      

            <Link to={'/anuncios-profesor'} className="row mt-4 p-3 ContainerAnnounBut ButtReturn d-flex justify-items-center">
                <Link to={'/anuncios-profesor'} className="text-center ButtReturn">Regresar a anuncios</Link>
            </Link>       
        </div>
        </>
    );
}