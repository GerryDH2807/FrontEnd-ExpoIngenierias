import { Link } from 'react-router-dom';

import '../ProjectSelection/Juez.css';
import '../ProjectSelection/Badge.css';

import './Constancia.css';

import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';

function CardCalif({categoria}) {
  

    return (
        <>
            <div className='col-auto p-3'>

                <div className="card mb-1 me-0">

                    {categoria === 'Concepto' && (

                        <div className="imag ConstanciaCardPhoto">
                                    
                        </div>

                    )}

                    {categoria === 'Prototipo' && (

                        <div className="imag algoimagProto">
                                    
                        </div>

                    )}

                    {categoria === 'Prototipo finalizado' && (

                        <div className="imag algoimagFinish">
                                    
                        </div>

                    )}

            
                    <div className="text">
                
                        <Link to="" className="btn23">Descargar Constancia</Link>
                        
                    </div>
                </div>
            </div>    
        </>
    );
  }
  

export default function ProjSelection({ConstCheck}){
    return(

        <>
            <StudentToggle NameSection={"Constancias"}></StudentToggle>
            <div className='container-fluid centered-containerProjSelc'>
                <div className='row m-4 p-3 TitleSelectContainer'>
                    <div className='col '>
                        <h1 className='TituloProjSEL text-center'>Constancias recibidas</h1>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>

                {ConstCheck === "False" && (
                    <>
                        <div className='container-fluid  p-3'>
                            <center>
                                <div className='row p-3 m-3 NoProjContainer'>
                                    <div className='col p-3'>
                                        <p className='mb-0 fw-bold'>Aun no puedes visualizar o descargar las constancias que hayas adquirido durante el evento. Espera a que acabe el evento y vuelve a esta pestaña para descargar tus constancias.</p>
                                    </div>
                                </div>
                            </center>

                        </div>
                    </>

                )}

                {ConstCheck === "True" && (
                    <div className='row d-flex flex-col justify-content-evenly'>

                
                        <CardCalif 
                            categoria={"Concepto"}
                        />


                    </div>
                )}
            </div>        
        </>

    );
}