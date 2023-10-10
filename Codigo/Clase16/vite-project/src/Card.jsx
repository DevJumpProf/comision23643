import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Carta =()=>{
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Titulo del Producto</Card.Title>
            <Card.Text>
            Texto del Producto
            </Card.Text>
            <Button variant="primary">COMPRAR</Button>
          </Card.Body>
        </Card>
      );
}