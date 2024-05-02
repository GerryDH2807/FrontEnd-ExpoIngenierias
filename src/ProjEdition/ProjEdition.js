import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';

import "./ProjEdition.css"

export default function ProjRegisterCont(){
    return (
        <div className='container w-50 mt-4 mb-4 bg-white'>
            <div className='row p-2'>
                <div className='col p-4'>
                    <FormExample />
                </div>
            </div>
        </div>
    );
}

function FormExample() {
    const [validated, setValidated] = useState(false);

  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
   

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Row className="mb-3  ">

                    <Form.Group as={Col} md="12" controlId="validationCustom06">

                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col'>
                                <Form.Label className='Titulo ps-2'>Titulo del proyecto</Form.Label>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Ingresa un titulo para tu proyecto"
                                        className='InputFormat'
                                    />
                                </div>
                            </div>
                        </div> 
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group  controlId="exampleForm.ControlTextarea1">
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col p-0'>
                                    <Form.Label className='Titulo'>Descripción del proyecto</Form.Label>
                                </div>
                            </div>

                            <div className='row '>
                                <div className='col '>
                                    <Form.Control as="textarea" className='InputDescrFormat' rows={5} required />
                                </div>
                            </div>
                        </div>

                    </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} md="12" controlId="validationCustom06">

                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col'>
                                    <Form.Label className='Titulo ps-2'>Poster(PDF)</Form.Label>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder="Link de tu carpeta de drive"
                                    className='InputFormat'
                                    />            
                                </div>
                            </div>
                        </div>

                    </Form.Group>
                </Row>

                <Row className="mb-3  ">

                    <Form.Group as={Col} md="12" controlId="validationCustom06">

                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col'>
                                    <Form.Label className='Titulo ps-2'>Link video</Form.Label>
                                </div>
                            </div>


                            <div className='row'>
                                <div className='col'>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder="Link de youtube"
                                    className='InputFormat'
                                    />                
                                </div>
                            </div>            
                        </div>
                    </Form.Group>
                </Row>

                <center><Button type="submit" className='mt-4 btn-lg ButtonRegister'>Aceptar cambios</Button></center>
            </Form> 
            
            <div className='container-fluid mb-4'>
                    <div className='row'>
                        <div className='col'>
                            <Link to={'/Resumen'} className='bi bi-arrow-left-circle IconBack'> Regresar</Link>
                        </div>
                    </div>
            </div>      

        </>
    );
}