import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Placeholder from 'react-bootstrap/Placeholder';

import Menu from '../../../components/TogglebarStudent/togglebarStudent.js';
import './StudentProfile.css';


function Datos({name,email,type,id,IsLoaded}){
    return(
        <>
            {IsLoaded === "True" && (
                <>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Nombre: </h3>
                        </div>
                        <div className='col-6 col-md-6'>
                            <span className='text-break'>{name}</span>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Correo: </h3>
                        </div>
                        <div className='col-6 col-md-6'>
                            <span className='text-break'>{email}</span>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Matricula: </h3>
                        </div>
                        <div className='col-6 col-md-6'>
                            <span>{id}</span>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Usuario: </h3>
                        </div>
                        <div className='col-6 col-md-6 mb-4'>
                            <span>{type}</span>
                        </div>
                    </div>
                </>
            )}

            {IsLoaded === "False" && (
                <>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Nombre: </h3>
                        </div>
                        <div className='col-6 col-md-6'>
                            <Placeholder animation="glow" className="w-100">
                                <Placeholder xs={7} size="lg" />
                            </Placeholder>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Correo: </h3>
                        </div>
                        <div className='col-6 col-md-6'>
                        <Placeholder animation="glow" className="w-100">
                                <Placeholder xs={5} size="lg" />
                            </Placeholder>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Matricula: </h3>
                        </div>
                        <div className='col-6 col-md-6'>
                            <Placeholder animation="glow" className="w-100">
                                <Placeholder xs={4} size="lg" />
                            </Placeholder>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-6 col-md-6'>
                        <h3>Usuario: </h3>
                        </div>
                        <div className='col-6 col-md-6 mb-4'>
                            <Placeholder animation="glow" className="w-100">
                                <Placeholder xs={3} size="lg" />
                            </Placeholder>
                        </div>
                    </div>
                </>
            )}

        </>
    );
}
export default function Perfil(){
    return(
        <>
        <Menu NameSection={"Perfil de usuario"} />
        <div className='container-fluid m-5 perfil cont-principal mx-auto'>
            <div className='row p-2'>
                <i className="bi bi-person-circle icon-p"></i>
            </div>
            <div className='row p-2 '>
                <div className='col-md-12'>
                    <h1>Perfil</h1>
                </div>
            </div>
            <Datos IsLoaded={"True"} name={"Gerardo Deustúa Hernández"} type={"Estudiante"} id={"A01736455"}  email={"A01736455@tec.mx"}/>
            
        </div>
        </>
    );
}