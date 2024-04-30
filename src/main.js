import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import convocatoria from './img/convocatoria.jpg'

import Menu from './components/menu.js';
import portada from './img/MenosSaturado.png'
import carrusel1 from './img/carruselexp2.jpg';
import carrusel2 from './img/carruselexp3.jpg';
import carrusel3 from './img/carruselexp4.jpg';
import './css/main.css';

export default function Main(){
  const Ref = useRef(null);
  
// The state for our timer
const [timer, setTimer] = useState('00:00:00');


const getTimeRemaining = (endTime) => {
  const countdownDateTime = new Date(endTime).getTime();
  const currentTime = new Date().getTime();
  const remainingDayTime = countdownDateTime - currentTime;
  
  const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
  const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

  return {
    totalDays, totalHours, totalMinutes, totalSeconds
  };
}

const startTimer = (endTime) => {
  const { totalDays, totalHours, totalMinutes, totalSeconds } = getTimeRemaining(endTime);

  // update the timer
  setTimer(
    (totalDays > 9 ? totalDays : '0' + totalDays) + ':' +
    (totalHours > 9 ? totalHours : '0' + totalHours) + ':' +
    (totalMinutes > 9 ? totalMinutes : '0' + totalMinutes) + ':' +
    (totalSeconds > 9 ? totalSeconds : '0' + totalSeconds)
  );
}

const clearTimer = (endTime) => {
  setTimer('00:00:00');
  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
    startTimer(endTime);
  }, 1000);
  Ref.current = id;
}

useEffect(() => {
  const endTime = new Date("2024-06-17T00:00:00");
  clearTimer(endTime);
}, []);
    return(
        <>
        <Menu/>
        <div className='container-fluid portadaimg p-5'></div>
        <div className='container-fluid participar d-flex'>
          <div className='row mt-1 align-items-center'>
          <div className='col-md-6'>
          <div className='container-fluid texto-participar'>
          <h2 className='m-3 p-2'>¿Cómo participar?</h2>
          <div className='row indicaciones'>
            <div className='col-md-11'>
            <ol className='ms-3'>
              <li>Registrarse el lider de equipo</li>
              <li>Registrar el proyecto antes de la fecha limite</li>
              <li>Ya registrado el proyecto, el profesor encargado te autorizará o hará correcciones</li>
              <li>Ya autorizado. Esperar las indicacionespara ese día y Listo ! </li>
            </ol>
            </div>
          </div>
          <div className='row m-1 mt-4'>
            <div className='col-md-12'>
            <h2>Fecha: 17 de Junio de 2024</h2>
            <h4 className='text-center p-3'>Días antes del evento: </h4>
            <h3 className="timer">{timer}</h3>
            </div>
          </div>
          </div>
          </div>
          <div className='col-md-6 convocatoria-foto'>
            <img src={convocatoria} className='img-fluid'></img>
          </div>
          </div>
          
        </div>
        <div className='container-fluid carrusel-main'>
        <div className='row justify-content-center align-items-center'>
        <div className='col-md-8'>
        <Carousel fade>
      <Carousel.Item>
        <img src={carrusel1} />
        <Carousel.Caption className='carrusel-text'>
            <h3>Ediciones Pasadas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carrusel2} />
        <Carousel.Caption className='carrusel-text'>
        <h3>Ediciones Pasadas</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carrusel3}  />
        <Carousel.Caption className='carrusel-text' >
        <h3>Ediciones Pasadas</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='col-md-4 coment'>
      <div className='container-fluid d-flex flex-column'>
      <div className='row'>
        <div className='col-md-10 mt-3 mb-3 text-conoce'>
        <h6>¿Quieres conocer a ganadores, así como proyecto de ediciones pasadas?</h6>
        </div>
      </div>
      <div className='row '>
      <div className='col-md-12 boton-container'>
      <Link to="/Ediciones-pasadas" className='boton-carrusel'>Conoce Más</Link>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
        </>
    );
}