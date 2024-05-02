import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Modal from 'react-bootstrap/Modal';
import './ProjRegister.css';

function ButtonMaterials() {
  const [show, setShow] = useState(false);
  const [extension, setExtension] = useState(0);
  const [table, setTable] = useState(0);
  const [screen, setScreen] = useState(0);
  
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} className='ButtonMaterials'>
        Abrir lista de materiales
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Añadir materiales extra
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
              <div className='row'>
                  <div className='col'>
                      <p>Esta sección no es obligatria, unicamente si necesitas materiales extra para la presentación de tu proyecto</p>
                  </div>
              </div>

              <div className='row align-items-center m-2'>
                  <div className='col-4'>
                      <span className='Subtitulo'>Extensión</span>
                  </div>

                  <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={()=>extension!==0 && setExtension(extension-1)}>-</Button>
                  </div>

                  <div className='col-auto'>
                      <span>{extension}</span>
                  </div>

                  <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={()=>extension !== 3 && setExtension(extension+1)}>+</Button>
                  </div>
              </div>

              <div className='row align-items-center m-2'>
                  <div className='col-4'>
                      <span className='Subtitulo'>Televisión</span>
                  </div>

                  <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={()=>screen !== 0 && setScreen(screen-1)} >-</Button>
                  </div>

                  <div className='col-auto'>
                      <span>{screen}</span>
                  </div>

                  <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={()=>screen !== 3 && setScreen(screen+1)}>+</Button>
                  </div>
              </div>

              <div className='row align-items-center m-2  '>
                  <div className='col-4'>
                      <span className='Subtitulo'>Mesa</span>
                  </div>

                  <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={()=>table !== 0 && setTable(table-1)}>-</Button>
                  </div>

                  <div className='col-auto text-center'>
                      <span>{table}</span>
                  </div>

                  <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={()=>table !== 3 && setTable(table+1)}>+</Button>
                  </div>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

function AreaButtons() {
  return (
    <ToggleButtonGroup type="radio" name="options" defaultValue={1} className='d-flex justify-content-between w-100'>
      <ToggleButton id="tbg-radio-1" value={1} className='ButtonMaterials w-100'>
        Área 1
      </ToggleButton>
      <ToggleButton id="tbg-radio-2" value={2} className='ButtonMaterials w-100'>
        Área 2
      </ToggleButton>
      <ToggleButton id="tbg-radio-3" value={3} className='ButtonMaterials w-100'>
        Área 3
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function CategoryButtons() {
  return (
    <ToggleButtonGroup type="radio" name="options1" defaultValue={1} className='d-flex justify-content-between w-100'>
      <ToggleButton id="tbg-radio-1.1" value={1} className='ButtonMaterials w-100'>
        Cat 1
      </ToggleButton>
      <ToggleButton id="tbg-radio-2.1" value={2} className='ButtonMaterials w-100'>
        Cat 2
      </ToggleButton>
      <ToggleButton id="tbg-radio-3.1" value={3} className='ButtonMaterials w-100'>
        Cat 3
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function FormExample() {
    const [validated, setValidated] = useState(false);
    const [memberNum, setMemberNum] = useState(1);
    const [teacherNum, setTeacherNum] = useState(1);
    const [members, setMembers] = useState([{ id: 1, value: '' }]);
    const [teachers, setTeachers] = useState([{ id: 1, value: '' }]);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    const handleAddMember = () => {
      const newMemberId = memberNum + 1;
      setMemberNum(newMemberId);
      setMembers([...members, { id: newMemberId, value: '' }]);
    };
  
    const handleRemoveMember = (id) => {
      if (members.length === 1) return; // Si hay solo una entrada, no permitir eliminarla
      setMembers(members.filter(member => member.id !== id));
      setMemberNum(memberNum - 1);
    };
  
    const handleAddProf = () => {
      const newTeacherId = teacherNum + 1;
      setTeacherNum(newTeacherId);
      setTeachers([...teachers, { id: newTeacherId, value: '' }]);
    };
  
    const handleRemoveProf = (id) => {
      if (teachers.length === 1) return; // Si hay solo un profesor, no permitir eliminarlo
      setTeachers(teachers.filter(teacher => teacher.id !== id));
      setTeacherNum(teacherNum - 1);
    };  

return (
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
        <Form.Group as={Col} md="12" controlId="validationMembers">
          <Form.Label className='Titulo'>Integrantes</Form.Label>
          {members.map((member, index) => (
            <div key={member.id} className='container'>
              <div className='row pt-2 pb-2 pe-2'>
                {index !== 0 && (
                  <>
                    <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={() => handleRemoveMember(member.id)}>-</Button>
                    </div>
                  </>
                )}
                {index === members.length - 1 && (
                  <div className='col-auto'>
                    <Button className='ButtonAddLessMaterials' onClick={() => handleAddMember()}>+</Button>
                  </div>
                )}
              </div>
              <div className='row'>
                <div className='col'>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresa el nombre(s)"
                    className='InputFormat'
                  />
                </div>
                <div className='col'>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ahora los apellidos"
                    className='InputFormat'
                  />
                </div>

                <div className='col'>
                  <Form.Control
                    required
                    type="text"
                    placeholder="A01XXXXXx"
                    className='InputFormat'
                  />
                </div>

              </div>
              <Form.Control.Feedback type='invalid'>No hay integrantes</Form.Control.Feedback>
            </div>
          ))}
        </Form.Group>
      </Row>

        
    <Row className="mb-3  ">
        <Form.Group as={Col} md="12" controlId="validationArea">
        <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <Form.Label className='Titulo ps-2'>Área</Form.Label>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <AreaButtons/>
              </div>
            </div>
        </div>
        </Form.Group>
    </Row>


    <Row className="mb-3  ">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <Form.Label className='Titulo ps-2'>Categoría</Form.Label>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <CategoryButtons/>
                </div>
            </div>
        </div>
        </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="validationCustom04">
        <Form.Label className='Titulo'>Profesor(es) asesor</Form.Label>
        {teachers.map((teacher, index) => (
          <div key={teacher.id} className='container'>
            <div className='row pt-2 pb-2 pe-2'>
              {index !== 0 && (
                <div className='col-auto'>
                  <Button className='ButtonAddLessMaterials' onClick={() => handleRemoveProf(teacher.id)}>-</Button>
                </div>
              )}
              {index === teachers.length - 1 && (
                <div className='col-auto'>
                  <Button className='ButtonAddLessMaterials' onClick={() => handleAddProf()}>+</Button>
                </div>
              )}
            </div>
            <div className='row'>
              <div className='col'>
                <Form.Control type="text" placeholder="Ingresa el nombre" required className='InputFormat' />
              </div>
              <div className='col'>
                <Form.Control type="text" placeholder="Ingresa los apellidos" required className='InputFormat' />
              </div>
            </div>
          </div>
        ))}
      </Form.Group>
    </Row>

    <Row className="mb-3  ">

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

    <Row className="mb-3  ">
        <Form.Group as={Col} md="12" controlId="validationCustom07">
        <div className='cotainer-fluid'>
            <div className='row'>
                <div className='col'>
                    <Form.Label className='Titulo'>Necesitas materiales extra?</Form.Label>
                </div>
            </div>

            <div className='row d-flex justify-content-center'>
                <div className='d-flex justify-content-center p-3 BckGrnd'>
                    <ButtonMaterials/>
                </div>
            </div>
        </div>
        </Form.Group>

    </Row>
    <center><Button type="submit" className='mt-4 btn-lg ButtonRegister'>Registrar proyecto</Button></center>
    </Form>
);
}

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