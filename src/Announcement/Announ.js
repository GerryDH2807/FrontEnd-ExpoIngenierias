import Form from 'react-bootstrap/Form';

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

function AnnounInfo(){

    return(
        <div className='row m-3 p-2 AnnounInfoContainer d-flex align-items-center'>
            <div className='col-10 d-flex align-items-center'>
                <i className='bi bi-envelope-fill AnnounIcon'></i> <span className='Titulo1'> Titulo del anuncio</span>
            </div>


            <div className='col-2 text-end'>
                <span className='Subtitulo text-break'>20/04/24</span>
            </div>
        </div>
    );
}

function AnnounInfoCont(){
    return(
        <div className='col-12 p-12'>
            
            <div className='container-fluid'>
                <AnnounInfo></AnnounInfo>
                <AnnounInfo></AnnounInfo>
                <AnnounInfo></AnnounInfo>
            </div>

        </div>
    );
}

export default function AnnounCont(){
    return(
        <div className='container-fluid mt-2 p-3'>
            <div className='row p-3 ContainerAnnoun'>
                <AnnounSearch></AnnounSearch>
            </div>

            <div className='row p-3 mt-4 ContainerAnnoun'>
                <AnnounInfoCont></AnnounInfoCont>
            </div>
        </div>
    );
}