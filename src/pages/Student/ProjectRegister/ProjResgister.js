  import { useEffect,useState } from 'react';
  import Button from 'react-bootstrap/Button';
  import Col from 'react-bootstrap/Col';
  import Form from 'react-bootstrap/Form';
  import Row from 'react-bootstrap/Row';
  import ToggleButton from 'react-bootstrap/ToggleButton';
  import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
  import Modal from 'react-bootstrap/Modal';
  import './ProjRegister.css';


  import Usure from '../../../components/BotonConfirmacion/ConfBot'

  import { Link } from 'react-router-dom';

  //Back
  import axios from 'axios';
  import {useNavigate} from 'react-router-dom'
  import ToggleBarStudent from '../../../components/TogglebarStudent/togglebarStudent.js';

  const URI = 'http://localhost:8000/projects/register'


function MemberCont({NombreMiembro}){
    return(
      <li className="Texto text-wrap mb-0">{NombreMiembro}</li>
    );
  }
  

function ButtonMaterials({extension, setExtension, table, setTable, screen, setScreen}) {
  const [show, setShow] = useState(false);
  
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

  function AreaButtons({setArea, areas}) {
    return (
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} className='d-flex justify-content-between w-100'>
        {areas.map(area => (
            <ToggleButton id={"tbg-radio" + area.id} value={area.id} onChange={(e)=> setArea(e.target.value)} className='ButtonMaterials w-100'>
                  {area.name}
            </ToggleButton>
        ))}
      </ToggleButtonGroup>
    );
  }

  function CategoryButtons({setCategory, categories}) {
    return (
      <ToggleButtonGroup type="radio" name="options1" defaultValue={1} className='d-flex justify-content-between w-100'>
        {categories.map(category => (
          <ToggleButton id={"tbg-radio-"+ category.id + ".1"} value={category.id} onChange={(e)=> setCategory(e.target.value)}  className='ButtonMaterials w-100'>
            {category.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    );
  }

  function FormExample() {

      //Información areas y categorias
      const [data, setData] = useState({students: [], teachers: [], categories: [], areas: []});

      const [validated, setValidated] = useState(false);
      const [memberNum, setMemberNum] = useState(1);
      const [teacherNum, setTeacherNum] = useState(1);
      const [members, setMembers] = useState([{ id: 1, nameMember: '', lastNameMember: '', enrollment: '' }]);
      const [teachers, setTeachers] = useState([{ id: 1, nameTeacher: '', lastNameTeacher: '', email: '' }]);

      //Valores registro tabla proyecto
      const [title, setTitle] = useState('nuevo');
      const [description, setDescription] = useState('descripcion');
      const [linkVideo, setLinkVideo] = useState('video.mp4');
      const [linkPoster, setLinkPoster] = useState('poster.pdf');
      const [area, setArea] = useState(1);
      const [category, setCategory] = useState(1);


      const navigate = useNavigate();

      const [extension, setExtension] = useState(0);
      const [table, setTable] = useState(0);
      const [screen, setScreen] = useState(0);  

    const handleSubmit = async (event) => {
      if (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
      }
      
      const form = event ? event.target : null;
      if (form && form.checkValidity() === false) {
        event.stopPropagation();
        
      }else{
        await axios.post(URI, {title: title, description: description, linkVideo: linkVideo, 
          linkPoster: linkPoster, area: area, 
          category: category,
          materials: [{id_material: 1, amount: extension}, {id_material: 2, amount: screen}, { id_material: 3, amount: table }],
          members: members.map(member => ({ name: member.nameMember, lastName: member.lastNameMember, enrollment: member.enrollment })),
          teachers: teachers.map(teacher => ({ name: teacher.nameTeacher, lastName: teacher.lastNameTeacher, email: teacher.email }))
        });
      }
  
      setValidated(true);
    };

      const handleAddMember = () => {
        const newMemberId = memberNum + 1;
        setMemberNum(newMemberId);
        setMembers([...members, { id: newMemberId, nameMember: '', lastNameTeacher: '' }]);

      };
    
      const handleRemoveMember = (id) => {
        if (members.length === 1) return; // Si hay solo una entrada, no permitir eliminarla
        setMembers(members.filter(member => member.id !== id));
        setMemberNum(memberNum - 1);
      };
    
      const handleAddProf = () => {
        const newTeacherId = teacherNum + 1;
        setTeacherNum(newTeacherId);
        setTeachers([...teachers, { id: newTeacherId, nameTeacher: '', lastNameTeacher: ''}]);
      };
    
      const handleRemoveProf = (id) => {
        if (teachers.length === 1) return; // Si hay solo un profesor, no permitir eliminarlo
        setTeachers(teachers.filter(teacher => teacher.id !== id));
        setTeacherNum(teacherNum - 1);
      };  


      useEffect(() => {
        fetch('http://localhost:8000/projects/register')
        .then((res)=> res.json())
        .then((expoData) => setData(expoData));
      },[]);

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
                    <Form.Control as="textarea" 
                      value={description}
                      onChange={(e)=> setDescription(e.target.value)}
                      className='InputFormat' rows={5} />
                  </div>
                </div>
              </div>

              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationMembers">
                <Form.Label className='Titulo'>Integrantes</Form.Label>
                {members.map((member, indexMember) => (
                  <div key={member.id} className='container'>
                    <div className='row pt-2 pb-2 pe-2'>
                      {indexMember !== 0 && (
                        <>
                          <div className='col-auto'>
                            <Button className='ButtonAddLessMaterials' onClick={() => handleRemoveMember(member.id)}>-</Button>
                          </div>
                        </>
                      )}
                      {indexMember === members.length - 1 && (
                        <div className='col-auto'>
                          <Button className='ButtonAddLessMaterials' onClick={() => handleAddMember()}>+</Button>
                        </div>
                      )}
                    </div>
                  <div className='row'>
                    <div className='col'>
                        <Form.Control
                          required
                          value={members[indexMember].enrollment}
                          onChange={(e) => {
                            const updatedMembers = [...members];
                            updatedMembers[indexMember].enrollment = e.target.value;
                            setMembers(updatedMembers);
                          }} 
                          type="text"
                          placeholder="A01XXXXXX"
                          className='InputFormat'
                        />
                    </div>
                    <div className='col'>
                      <Form.Control
                        required
                        value={members[indexMember].name}
                        onChange={(e) => {
                          const updatedMembers = [...members];
                          updatedMembers[indexMember].nameMember = e.target.value;
                          setMembers(updatedMembers);
                        }}  
                        type="text"
                        placeholder="Ingresa el nombre(s)"
                        className='InputFormat'
                      />
                    </div>
                    <div className='col'>
                        <Form.Control
                          required
                          value={members[indexMember].lastName}
                          onChange={(e) => {
                            const updatedMembers = [...members];
                            updatedMembers[indexMember].lastNameMember = e.target.value;
                            setMembers(updatedMembers);
                          }} 
                          type="text"
                          placeholder="Ahora los apellidos"
                          className='InputFormat'
                        />
                    </div>

                  {data.students.map((student, index) => (
                  <MemberCont NombreMiembro={student.name + " " + student.lastName}></MemberCont>
                  ))}

                        


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
                      <AreaButtons setArea={setArea} areas={data.areas}/>
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
                          <CategoryButtons setCategory={setCategory} categories={data.categories}/>
                      </div>
                  </div>
              </div>
              </Form.Group>
          </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationTeacher">
            <Form.Label className='Titulo'>Profesor(es) asesor</Form.Label>
            {teachers.map((teacher, indexTeacher) => (
              <div key={teacher.id} className='container'>
                <div className='row pt-2 pb-2 pe-2'>
                  {indexTeacher !== 0 && (
                    <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={() => handleRemoveProf(teacher.id)}>-</Button>
                    </div>
                  )}
                  {indexTeacher === teachers.length - 1 && (
                    <div className='col-auto'>
                      <Button className='ButtonAddLessMaterials' onClick={() => handleAddProf()}>+</Button>
                    </div>
                  )}
                </div>
                <div className='row'>
                  <div className='col'>
                    <Form.Control type="text"
                        value={teachers[indexTeacher].email}
                        onChange={(e) => {
                          const updatedTeachers = [...teachers];
                          updatedTeachers[indexTeacher].email = e.target.value;
                          setTeachers(updatedTeachers);
                        }}  
                    placeholder="Ingresa el email" required className='InputFormat' />
                  </div>

                  <div className='col'>
                    <Form.Control type="text"
                        value={teachers[indexTeacher].name}
                        onChange={(e) => {
                          const updatedTeachers = [...teachers];
                          updatedTeachers[indexTeacher].nameTeacher = e.target.value;
                          setTeachers(updatedTeachers);
                        }}  
                    placeholder="Ingresa el nombre" required className='InputFormat' />
                  </div>
                  <div className='col'>
                    <Form.Control type="text"
                      value={teachers[indexTeacher].lastName}
                      onChange={(e) => {
                        const updatedTeachers = [...teachers];
                        updatedTeachers[indexTeacher].lastNameTeacher = e.target.value;
                        setTeachers(updatedTeachers);
                      }}  
                    placeholder="Ingresa los apellidos" required className='InputFormat' />
                  </div>
                </div>

                {data.teachers.map((teacher, index) => (
                  <MemberCont NombreMiembro={teacher.name + " " + teacher.lastName}></MemberCont>
                ))}


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
                          <ButtonMaterials extension={extension} setExtension={setExtension} screen={screen} setScreen={setScreen} table={table} setTable={setTable}/>
                      </div>
                  </div>
              </div>
              </Form.Group>

          </Row>

          <center><Usure MensajeTitle={"¿Deseas registrar este proyecto?"} BotonA={"Regresar"} BotonB={"Confirmar registro"} Path={'/principal-estudiante/'} className={"mt-4 btn-lg ButtonRegister"} Texto={"Registrar proyecto"} onConfirm={handleSubmit}/></center>

          {/*<center><Button type="submit" className='mt-4 btn-lg ButtonRegister'>Registrar proyecto</Button></center> */}


        </Form>   

        <div className='container-fluid mb-4'>
          <div className='row'>
              <div className='col'>
                  <Link to={'/principal-estudiante'} className='bi bi-arrow-left-circle IconBack'> Regresar</Link>
              </div>
          </div>
        </div>  
      </>


      
  );
  }

  export default function ProjRegisterCont(){
    return (
      <>
        <ToggleBarStudent NameSection={"Registro de nuevo proyecto"}/>
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