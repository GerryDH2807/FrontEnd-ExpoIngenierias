import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';

import Usure from '../../../components/BotonConfirmacion/ConfBot'

import "./ProjEdition.css"

import ToggleBarStudent from '../../../components/TogglebarStudent/togglebarStudent.js';
import axios from 'axios';

const URI = 'http://localhost:8000/projects/resume/'

export default function ProjRegisterCont(){
    return (
        <>
        <ToggleBarStudent />
        <div className='container w-50 mt-4 mb-4 bg-white'>
            <div className='row p-2'>
                <div className='col p-4'>
                    <FormExample />
                </div>
            </div>
        </div>
        </>
    );
}

function FormExample() {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [linkPoster, setLinkPoster] = useState("");
    const [linkVideo, setLinkVideo] = useState("")

    const {id} = useParams();
  
    const handleSubmit = async (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      else{
        await axios.put(URI+14,{
            title: title,
            description: description,
            linkVideo: linkVideo,
            linkPoster: linkPoster
        })
      }
  
      setValidated(true);
      
    };

    useEffect(()=> {
        getProjectById()
    },[])
   

    const getProjectById = async () =>{
        const res = await axios.get(URI+14)
        setTitle(res.data.title)
        setDescription(res.data.description)
        setLinkVideo(res.data.linkVideo)
        setLinkPoster(res.data.linkPoster)
        
    }

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
                                        value={title}
                                        onChange={(e)=> setTitle(e.target.value)}
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
                                    <Form.Control as="textarea" className='InputDescrFormat' rows={5} required  
                                    value={description}
                                    onChange={(e)=> setDescription(e.target.value)}
                                    />
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
                                    value={linkPoster}
                                    onChange={(e)=> setLinkPoster(e.target.value)}
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
                                    value={linkVideo}
                                    onChange={(e)=> setLinkVideo(e.target.value)}
                                    type="text"
                                    placeholder="Link de youtube"
                                    className='InputFormat'
                                    />                
                                </div>
                            </div>            
                        </div>
                    </Form.Group>
                </Row>

                <center><Usure Path={'/resumen'}></Usure></center>
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