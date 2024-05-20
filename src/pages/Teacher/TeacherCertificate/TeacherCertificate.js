import Menu from '../../../components/Togglebar/togglebar.js';
import './TeacherCertificate.css';

import Button from 'react-bootstrap/Button';

function Card() {
    return (
        <>
            <div className='col ContainerNotifi'>
                <div className='container-fluid ContainerInfoNoti w-75'>
                    <div className='row '>
                        <div className='col NotiFoto bg-primary'>

                        </div>
                    </div>

                    <div className='row p-1 '>
                        <div className='col'>
                            <p className='text-center'>El tecn le otroga a</p>
                        </div>    
                    </div>

                    <div className='row p-1'>
                        <div className='col'>
                            <p className='text-center'>Gerardo Deustua Hernandez</p>
                        </div>    
                    </div>
                    <div className='row p-1'>
                        <div className='col'>
                            <p className='text-center'>La constancia a existir</p>
                        </div>    
                    </div>  
                    <div className='row p-1'>
                        <div className='col p-3 d-flex justify-content-center'>
                            <Button className='btn-lg ButtonMaterials'>Descargar constancia<i className='bi bi-download ps-3'></i></Button>
                        </div>    
                    </div>                  
                </div>
            </div>       
        </>

    );
  }
export default function ConstanciaTeacher(){
    return(
        <>
        <Menu />
        <div className='container-fluid mt-2 p-3 w-100'>
            <div className='row p-3 cont-cert m-4'>
                <div className='col-12 col-md-12'>
                <Card></Card>
                </div>
            </div>
        </div>
        </>
    );
}