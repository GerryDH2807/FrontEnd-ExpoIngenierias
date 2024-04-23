import './Actual.css';

import Image from '../img/micro.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProj() {
    return (
      <div className='col p-3'>
        <Card style={{ width: '18rem' }} className='CardsInfoContainer'>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title className='Titulo123'>Card Title</Card.Title>
            <Card.Text className='TextoCardWrap'>asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk</Card.Text>
            <center><Button variant="primary" className='ButtonColors'>Ver proyecto</Button></center>
          </Card.Body>
        </Card>    
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
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />
  

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
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />

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
                                <CardProj />
                                <CardProj />
                                <CardProj />
                                <CardProj />

                            </div>                  
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </>
    );
  }