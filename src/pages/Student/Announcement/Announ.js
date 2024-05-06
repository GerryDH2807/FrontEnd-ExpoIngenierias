import Form from 'react-bootstrap/Form';

import {Link} from 'react-router-dom';

import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';

import './Announ.css'


function AnnounSearch(){
    return(
        <div className='col-12 p-2'>
            <Form.Control
                required
                type="text"
                placeholder="Ingresa el titulo de un anuncio para buscar"
                className='InputFormat'
            ></Form.Control>
        </div>
    );
}

function AnnounInfo({Fecha, Titulo, Cuerpo}){

    const truncatedText = (text, limit) => {
        if (!text || typeof text !== 'string' || text.length <= limit) {
          return text;
        }
        return text.slice(0, limit) + '...';
    };    

    return(
        <Link to={'/announ1-estudiante'} className='row m-3 p-2 AnnounInfoContainer d-flex align-items-center'>
            <div className='col-auto d-flex align-items-center'>
                <i className='bi bi-envelope-fill AnnounIcon'></i> <span className='Titulo'> {Titulo}</span>
            </div>

            <div className='col-7 d-flex align-items-center'>
                <span className='TextoAnnoun'>{truncatedText(Cuerpo, 100)}</span>
            </div>

            <div className='col-2 text-end'>
                <span className='Subtitulo text-wrap'>{Fecha}</span>
            </div>
        </Link>
    );
}

function AnnounInfoCont(){
    return(
        <div className='col-12 p-12'>
            
            <div className='container-fluid'>
                <AnnounInfo Titulo={'Titulo del anuncio 1'} Fecha={'20/02/24'} Cuerpo={"sadgasgasgasgasdgasdgasdgaasdggasadgasdgasgasgasgasgsdgasdgsadgasdgasdgasdgasdgsagsdgasdgasgsagasgsgsgsdgsdsdyugsguinsighs8gshdghg8wb8g"}></AnnounInfo>
                <AnnounInfo Titulo={'Titulo del anuncio 2'} Fecha={'15/05/19'} Cuerpo={"sadgasgasgasgasdgasdgasdgaasdggasadgasdgasgasgasgasgsdgasdgsadgasdgasdgasdgasdgsagsdgasdgasgsagasgsgsgsdgsdsdyugsguinsighs8gshdghg8wb8g"}></AnnounInfo>
                <AnnounInfo Titulo={'Titulo del anuncio 3'} Fecha={'28/07/03'} Cuerpo={"sadgasgasgasgasdgasdgasdgaasdggasadgasdgasgasgasgasgsdgasdgsadgasdgasdgasdgasdgsagsdgasdgasgsagasgsgsgsdgsdsdyugsguinsighs8gshdghg8wb8g"}></AnnounInfo>
            </div>

        </div>
    );
}

export default function AnnounCont(){
    return(

        <>
            <StudentToggle NameSection={"Anuncios"}></StudentToggle>
            <div className='container-fluid mt-3 p-3'>
                <div className='row p-3 ContainerAnnoun'>

                    <AnnounSearch></AnnounSearch>
                </div>

                <div className='row p-3 mt-4 ContainerAnnoun'>
                    <AnnounInfoCont></AnnounInfoCont>
                </div>

            </div>        
        </>

    );
}