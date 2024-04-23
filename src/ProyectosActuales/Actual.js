import './Actual.css';

import Image from '../img/micro.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProj() {
  return (

    <>
        <div className='col p-3'>
        <Card style={{ width: '18rem' }} className='CardsInfoContainer'>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title className='Titulo123'>Card Title</Card.Title>
                <Card.Text >asafasfafafaaskfbaksfbaksbfaksbfsaskfbakfbakfbaskfaskfbaskfasbkfasbfkbkfasbfiasbfkasbfksbfkasfbaskfbaskfbskfbkfbaskfbaskfbskfbsfk</Card.Text>
                <center><Button variant="primary" className='ButtonColors'>Ver proyecto</Button></center>
            </Card.Body>
        </Card>    
        </div>  
    </>

  );
}


export default function Actual(){

    return(

        <>
            <div className='container-fluid '>
                <div className='scroll-container'>
                    <div className='row m-4 p-3 CardsContainer'>
                        <h3 className='Titulo123'>Concepto</h3>
                        <CardProj />
                        <CardProj />
                        <CardProj />
                        <CardProj />


                    </div>
                </div>

                <div className='scroll-container'>
                    <div className='row m-4 p-3 CardsContainer'>
                        <h3 className='Titulo123'>Prototipo</h3>
                        <CardProj />
                        <CardProj />
                        <CardProj />
                        <CardProj />
                    </div>
                </div>

                <div className='scroll-container'>
                    <div className='row m-4 p-3 CardsContainer'>
                        <h3 className='Titulo123'>Prototipo terminado</h3>
                        <CardProj />
                        <CardProj />
                        <CardProj />
                        <CardProj />
                    </div>
                </div> 
            </div>
        </>
    );
}