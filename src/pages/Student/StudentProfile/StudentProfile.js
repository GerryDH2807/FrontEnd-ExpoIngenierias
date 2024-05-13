import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import Menu from '../../../components/TogglebarStudent/togglebarStudent.js';
import './StudentProfile.css';


function Datos({name,email,type,id}){
    return(
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
            <Datos name={"Gerardo Deustúa Hernández"} type={"Estudiante"} id={"A01736455"}  email="A01736455@tec.mx"/>
            
        </div>
        </>
    );
}