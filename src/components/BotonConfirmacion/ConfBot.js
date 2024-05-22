import './ConfBot.css'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Usure({Path, className, Texto }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className={className}>
          {Texto}
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Estas seguro de continuar?</Modal.Title>
          </Modal.Header>
          <Modal.Body className='centered-container h-100 d-flex justify-content-evenly'>
              <Button  className='fw-bold' variant="secondary" onClick={handleClose}>
                  Regresar
              </Button>
              <Link to={Path}><Button className='ButtonContinue' variant="primary">Continuar</Button></Link>
          </Modal.Body>
        </Modal>
      </>
    );
  }