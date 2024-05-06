import Form from 'react-bootstrap/Form';

import {Link} from 'react-router-dom';

import './TeacherAdvertisements.css'
import Menu from '../../../components/Togglebar/togglebar.js';
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

function AnnounInfo({Fecha, Titulo}){

    return(
        <Link to={'/announ1-teacher'} className='row m-3 p-2 AnnounInfoContainer d-flex align-items-center'>
            <div className='col-10 d-flex align-items-center'>
                <i className='bi bi-envelope-fill AnnounIcon'></i> <span className='Titulo'> {Titulo}</span>
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
                <AnnounInfo Titulo={'Titulo del anuncio 1'} Fecha={'20/02/24'}></AnnounInfo>
                <AnnounInfo Titulo={'Titulo del anuncio 2'} Fecha={'15/05/19'}></AnnounInfo>
                <AnnounInfo Titulo={'Titulo del anuncio 3'} Fecha={'28/07/03'}></AnnounInfo>
            </div>

        </div>
    );
}
export default function TeacherAdvertisements(){
    return(
        <>
        <Menu />
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