import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import {PokeJson, pokeDetails} from "./Models/poke-json.tsx";

interface CardProps {
  PokeObj: PokeJson;
}

function PokeCards({ PokeObj }: CardProps) {
    const [pokeDetails, setPokeDetails] = useState<pokeDetails>();
    
    fetch(PokeObj.url).then(response => response.json()).then(data => setPokeDetails(data));
    
    return (
      <Card style={{width:'9rem'}}>
        <Card.Img variant="top" src={pokeDetails?.sprites.front_default} />
        <Card.Body>
            <Card.Title>
                {PokeObj.name}
            </Card.Title>
        </Card.Body>
      </Card>
  );
}

export default PokeCards;   