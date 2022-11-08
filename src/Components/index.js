import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MeuCard({produto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={produto.imagem} />
      <Card.Body>
        <Card.Title>{produto.nome}</Card.Title>
        <Card.Text>{produto.valorUnitario}</Card.Text>
        <Button variant="primary">Adicionar ao carrinho</Button>
      </Card.Body>
    </Card>
  );
}

export default MeuCard;