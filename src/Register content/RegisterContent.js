


import './RegisterContent.css';
import { Link } from 'react-router-dom';

export default function UserRegisterCont(){

    return (
        <div className='container w-75 mt-5 mb-2 ContainersForm'>
            <h1 className='Titulo text-center'>Selecciona el tipo de cuenta a crear</h1>
            <div className='row p-2'>
                <div className='col p-4 d-flex justify-content-center'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col d-flex justify-content-center'>
                                <Link to={'/studentregister'} className ="TextoValid3">Registrar estudiante</Link>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col d-flex justify-content-center'>
                                <p className='text-center p-3'>Los estudiantes que participen en Expo-Ingenierias presentando algún proyecto, deberán utilizar este formulario de registro para poder continuar con el registro de tu proyecto</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col p-4 d-flex justify-content-center'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col d-flex justify-content-center'>
                                <Link to={'/userregister'} className ="TextoValid3">Registrar profesor</Link>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col d-flex justify-content-center'>
                                <p className='text-center p-3'>sfasf</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}