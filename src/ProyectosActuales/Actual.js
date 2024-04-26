import './Actual.css';

import { useState } from 'react';

import CardConcept from '../img/CardConcept.png';
import CardProto from '../img/CardProto.png';
import CardFinish from '../img/CardFinish.png';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal({ TitleDetailed, DescriptionDetailed, TeacherDetailed, MemebersDetailed, DriveLink, YoutubeLink, ...props }) {
const { CategoCheckModal } = props;

return (
    <Modal
    {...props}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='Titulo123'>
            {TitleDetailed}
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className='container-fluid scroll-container1'>
            <div className='row'>
                {CategoCheckModal === "Concepto" && (
                    <div className='col p-3 m-2 ConceptDetailedImage'>

                    </div>
                )}

                {CategoCheckModal === "Prototipo" && (
                    <div className='col p-3 m-2 ProtoDetailedImage'>

                    </div>
                )}

                {CategoCheckModal === "Finalizado" && (
                    <div className='col p-3 m-2 FinishDetailedImage'>

                    </div>
                )}

                <div className='col-3 p-3 m-2 ContDetails'>
                    <p className='Titulo123'>Miembros del equipo: </p> <span>{MemebersDetailed}</span>
                </div>
                <div className='col-3 p-3 m-2 ContDetails'>
                    <p className='Titulo123'>Profesor(es):</p> <span>{TeacherDetailed}</span> 
                </div>
            </div>


            <div className='row p-2'>
                <div className='col p-4 ContDetails'>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col'>
                                <h4 className='Titulo123'>Descripción del proyecto</h4>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <span className='TextoCardWrap'>{DescriptionDetailed}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row p-2'>
                <div className='col p-2 ContDetails'>
                    <div className='container-fluid '>
                        <div className='row'>
                            <div className='col p-1 m-2 '>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col text-center'>
                                            <a href={DriveLink}><i className='bi bi-filetype-pdf ModalIconsCurrent'></i></a>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col text-center'>
                                            <span className='Subtitulo'>Ver el cartel del proyecto</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col p-1 m-2'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col text-center'>
                                            <a href={YoutubeLink}><i className='bi bi-youtube ModalIconsCurrent'></i></a>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col text-center'>
                                            <span className='Subtitulo'>Ver el video explicativo del video</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide} className='ButtonColors123'>Cerrar</Button>
    </Modal.Footer>
    </Modal>
);
}

function ButtonModal({ CategoCheckButton, TitleDetailed, DescriptionDetailed }) {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button className='ButtonColors' onClick={() => setModalShow(true)}>
          Ver proyecto
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          CategoCheckModal={CategoCheckButton}
          TitleDetailed={TitleDetailed}
          DescriptionDetailed={DescriptionDetailed}
          TeacherDetailed={'Daniela Lozada Bracamontes'}

          MemebersDetailed={'Gerardo Deustúa Hernández' }

          DriveLink={'http://google.com'}
          YoutubeLink={'http://youtube.com'}
        />
      </>
    );
  }
  


function CardProj({ CategoCheck, Title, Description }) {
    return (
    <div className='col p-3'>
        {CategoCheck === "Concepto" && (
            <Card style={{ width: '18rem' }} className='CardsInfoContainer'>
                <Card.Img variant="top" src={CardConcept} className='FotoCard' />
                <Card.Body>
                <Card.Title className='Titulo123'>{Title}</Card.Title>
                <Card.Text className='TextoCardWrap'>{Description}</Card.Text>
                <center>
                    <ButtonModal CategoCheckButton={CategoCheck} TitleDetailed={Title} DescriptionDetailed={Description}>Ver proyecto</ButtonModal>
                </center>
                </Card.Body>
            </Card>
        )}

        {CategoCheck === "Prototipo" && (
            <Card style={{ width: '18rem' }} className='CardsInfoContainer'>
                <Card.Img variant="top" src={CardProto} className='FotoCard' />
                <Card.Body>
                <Card.Title className='Titulo123'>{Title}</Card.Title>
                <Card.Text className='TextoCardWrap'>{Description}</Card.Text>
                <center>
                    <ButtonModal CategoCheckButton={CategoCheck} TitleDetailed={Title} DescriptionDetailed={Description}>Ver proyecto</ButtonModal>
                </center>
                </Card.Body>
            </Card>
        )}

        {CategoCheck === "Finalizado" && (
            <Card style={{ width: '18rem' }} className='CardsInfoContainer'>
                <Card.Img variant="top" src={CardFinish} className='FotoCard' />
                <Card.Body>
                <Card.Title className='Titulo123'>{Title}</Card.Title>
                <Card.Text className='TextoCardWrap'>{Description}</Card.Text>
                <center>
                    <ButtonModal CategoCheckButton={CategoCheck} TitleDetailed={Title} DescriptionDetailed={Description}>Ver proyecto</ButtonModal>
                </center>
                </Card.Body>
            </Card>
        )}


    </div>  
    );
}

export default function Actual() {
    return (
      <>
        <div className='container-fluid'>

            <div className='row m-4 p-3 CardsContainer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h3 className='Titulo123'>Bienvenido a los proyectos actuales</h3>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <p className='Texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus ut nunc molestie rhoncus. Quisque et facilisis elit. Aliquam in ante rhoncus, fermentum diam vel, efficitur neque. Nam sapien nulla, sodales et massa sed, luctus tincidunt mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget egestas nibh, vel rhoncus mi. Mauris volutpat eu nisi nec molestie. Etiam non leo tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla dolor augue, faucibus in ex a, vehicula rutrum tortor. Aenean tempus ligula eget sem tempus finibus. Duis sit amet velit interdum, vulputate sem et, vestibulum magna. Nullam suscipit enim sapien, at accumsan tellus gravida nec. Proin lectus dui, faucibus finibus metus quis, pulvinar dapibus mauris. Donec vehicula nisi vel viverra malesuada. <br></br><br></br>

                                                    Donec tincidunt luctus dui vitae lacinia. Morbi eu semper massa. Pellentesque metus nunc, tempor et est id, venenatis bibendum ipsum. Fusce diam felis, placerat id tempor ut, aliquet vitae nibh. Pellentesque volutpat arcu sed pretium semper. Donec ac tempor nulla. Etiam vel malesuada velit. Quisque lobortis nunc odio, a venenatis ipsum facilisis vitae.<br></br><br></br>

                                                    Mauris mollis est cursus sollicitudin placerat. Duis nec eleifend quam. Aliquam sed pharetra neque. Nunc consectetur in orci ut auctor. In enim purus, malesuada facilisis mollis ac, egestas nec risus. Proin tincidunt dui sed malesuada interdum. Aenean nunc dui, porta lobortis convallis et, tincidunt nec diam. Donec aliquam, ante vitae interdum pellentesque, felis orci sagittis ipsum, tempor porta erat dolor quis nisi. Nunc vitae consequat urna. Fusce placerat leo ut dictum ultricies. Nullam auctor lobortis enim, sed gravida dolor tincidunt eu. Maecenas ut interdum erat.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row m-4 p-3 CardsContainer'>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <h3 className='Titulo123'>Concepto</h3>
                        </div>
                    </div>

                    <div className='row scroll-container'>
                        <div className='col'>
                            <div className="d-flex flex-nowrap">
                                <CardProj CategoCheck={'Concepto'} Title={"Titulo del proyecto caca"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Finalizado'} Title={"Titulo del proyecto pedo"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Prototipo'} Title={"Titulo del proyecto pid"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Concepto'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Prototipo'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Concepto'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Concepto'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Prototipo'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Prototipo'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Concepto'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Finalizado'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Finalizado'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>  
                            </div>                  
                        </div>
                    </div>
                </div>

            </div>
  
            <div className='row m-4 p-3 CardsContainer'>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <h3 className='Titulo123'>Prototipo</h3>
                        </div>
                    </div>

                    <div className='row scroll-container'>
                        <div className='col'>
                            <div className="d-flex flex-nowrap">
                                <CardProj CategoCheck={'Prototipo'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Concepto'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Finalizado'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Finalizado'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>

                            </div>                  
                        </div>
                    </div>
                </div>

            </div>
  
            <div className='row m-4 p-3 CardsContainer'>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <h3 className='Titulo123'>Prototipo terminado</h3>
                        </div>
                    </div>

                    <div className='row scroll-container'>
                        <div className='col'>
                            <div className="d-flex flex-nowrap">
                                <CardProj CategoCheck={'Finalizado'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Prototipo'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Concepto'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>
                                <CardProj CategoCheck={'Finalizado'} Title={"Titulo del proyecto"} Description={"asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk"}/>

                            </div>                  
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </>
    );
  }