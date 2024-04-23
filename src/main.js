import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'

import Menu from './components/menu.js';
import portada from './img/MenosSaturado.png'
import carrusel1 from './img/carruselexp2.jpg';
import carrusel2 from './img/carruselexp3.jpg';
import carrusel3 from './img/carruselexp4.jpg';
import './css/main.css';

export default function main(){
    return(
        <>
        <Menu/>
        <div className='container-fluid portadaimg p-5'></div>
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
        <div className='col-md-10 m-5 text-conoce'>
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