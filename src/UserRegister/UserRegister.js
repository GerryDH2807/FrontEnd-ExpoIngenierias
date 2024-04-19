import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import './UserRegister.css';


export default function FormUser() {
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
            <div className='container-fluid ContainersForm'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Row className="mb-3  ">
                        <Form.Group as={Col} md="12" controlId="validationTitle" >
                        <Form.Label className='Titulo'>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ingresa tu(s) nombre(s) "
                            className='InputFormat'
                        />
                        </Form.Group>            
                    </Row>

                    <Row>
                        <Form.Group as={Col} md="12" controlId="validationTitle" >
                            <Form.Label className='Titulo'>Apellidos</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ingresa tus apellidos"
                                className='InputFormat'
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3  ">
                        <Form.Group as={Col} md="12" controlId="validationMembers">
                        <Form.Label className='Titulo'>Matricula</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="A01XXXXXX"
                            maxLength={9}
                            className='InputFormat'
                        />

                        </Form.Group>

                    </Row>

                    <Row>
                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <Form.Label className='Titulo'>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Crea una contraseña para tu cuenta" required className='InputFormat' />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <br></br>
                            <Form.Check type="switch" id='switchExternos' label="Soy una persona externa al Tecnológico de Monterrey *" ></Form.Check>
                        </Form.Group>
                    </Row>

                    <center><Button type="submit" className='mt-4 btn-lg ButtonRegister'>Registrar usuario</Button></center>
                </Form>
            </div>
        </>

    );
}
    