import Card from 'react-bootstrap/Card';

interface CardProps {
  PokeName: string;
  PokeImg: string;
}

function PokeCards({ PokeName, PokeImg }: CardProps) {
  return (
      <Card>
        <Card.Img variant="top" src={PokeImg} />
        <Card.Body>
          {PokeName}
        </Card.Body>
      </Card>
  );
}

export default PokeCards;   