import { Link } from 'react-router-dom';

import '../ProjectSelection/Juez.css';
import '../ProjectSelection/Badge.css';
import { jsPDF } from "jspdf";
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState,useEffect,useRef} from "react";
import logo from '../../../img/logo-certificado.png';
import firma from '../../../img/firma-ejemplo.jpg';

import './Constancia.css';

import StudentToggle from '../../../components/TogglebarStudent/togglebarStudent.js';

const URL = 'http://localhost:8000/projects/resumeProject/';
function CardCalif({categoria,student_name}) {
    

        const doc = new jsPDF();
      const handleOnClick = async () => {
        doc.setFontSize(22);
        doc.setFont('times', 'bold');
        doc.text('Certificado de Participación en Expoingenieria', 20, 70);
        doc.setFontSize(16);
        doc.setFont('times', 'normal');
        doc.text(`Se otorga el presente certificado a`, 20, 80);
        doc.setFontSize(20);
        doc.setFont('times', 'bold');
        doc.text(student_name, 20, 95);
        doc.setFontSize(14);
        doc.setFont('times', 'normal');
        doc.text(`Por su destacada participación y contribución en la ExpoIngeniería 2024, `, 20, 110);
        doc.text('celebrada en el mes de junio de 2024.Su proyecto ha demostrado un alto nivel de ',20,120);
        doc.text('creatividad, innovación y excelencia técnica, reflejando su dedicación y habilidad',20,130);
        doc.text(' en el campo de la ingenieria.',20,140)
        doc.text('A través de este evento, el estudiante ha mostrado una admirable capacidad para aplicar ', 20,150);
        doc.text('reales. El Tecnológico de Monterrey se enorgullece de contar con estudiantes ',20,160);
        doc.text('quienes encarnan los valores de excelencia, innovación y compromiso con la sociedad ',20,170);
        doc.text('Felicitaciones por su logro y por contribuir al avance de la ingeniería.',20,180);
        doc.text('Dado en Puebla, el 17 de junio de 2024.', 20, 190);
        doc.text('Jose Manuel Medina Pozos',20,260);
        const img = new Image();
        img.src = logo;
        const img1 = new Image();
        img1.src = firma;
        img.onload = function() {
            doc.addImage(img, 'PNG', 70, 10, 70, 50); // x, y, width, height
            doc.addImage(img1,'JPG',20,220,30,30);
            doc.save(`${student_name}-certificate.pdf`);
        }
        img.onerror = function() {
            console.error('Error loading image');
          };
        }
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
                
                    <button className="btn23" onClick={handleOnClick}>Descargar Constancia</button>
                        
                    </div>
                </div>
            </div>    
        </>
    );
  }
  

export default function ProjSelection({ConstCheck}){
    const [projects, setProjects] = useState([]);
    const { isAuthenticated, isLoading, error, user } = useAuth0();
    const id_student = user.sub;
    useEffect(() => {
        fetch(URL + 'auth0|66340f38cfd75a371a1b532b')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, [id_student]);
    console.log(projects);

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
            projects.map((item) => (
                item.team.students.map((student,index) =>(
                <div className='row d-flex flex-col justify-content-evenly' key={item.id}>
                <CardCalif 
                categoria={"Concepto"}
                student_name={student.name + " " + student.lastName}
            />


        </div>
                ))))
)}

            </div>        
        </>

    );
}