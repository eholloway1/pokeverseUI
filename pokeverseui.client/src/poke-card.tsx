import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import {PokeJson, PokeDetails} from "./Models/poke-json.tsx";

interface CardProps {
  PokeObj: PokeJson;
}

function PokeCards({ PokeObj }: CardProps) {
    const [pokeDetails, setPokeDetails] = useState<PokeDetails>();

    fetch(PokeObj.url).then(response => response.json()).then(data => setPokeDetails(data));
    
    return (
      <Card border="primary">
        <Card.Img variant="top" src={pokeDetails?.sprites.front_default} />
        <Card.Body>
            <Card.Title>
                {PokeObj.name}
            </Card.Title>
            <Card.Text>
                {pokeDetails?.moves[0].move.name}
            </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default PokeCards;
