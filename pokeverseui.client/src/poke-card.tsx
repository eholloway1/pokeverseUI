import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import {PokeJson, PokeDetails} from "./Models/poke-json.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
  PokeObj: PokeJson;
}

function PokeCards({ PokeObj }: CardProps) {
    const [pokeDetails, setPokeDetails] = useState<PokeDetails>();

    fetch(PokeObj.url).then(response => response.json()).then(data => setPokeDetails(data));
    
    const move = pokeDetails?.moves.map(move => move.move.name);

    return (
      <Card key={'Dark'} bg={'dark'} className="mb-2" text={'white'} >
        <Card.Img variant="top" src={pokeDetails?.sprites.front_default} alt={PokeObj.name} style={{backgroundColor: "gray"}}/>
        <Card.Body>
            <Card.Title>
                {PokeObj.name}
            </Card.Title>
            <>
              {move?.slice(0,4).map(m => <Card.Text style={{padding: 0, border: 0, margin: 0}}>{m}</Card.Text>)}
            </>
        </Card.Body>
      </Card>
  );
}

export default PokeCards;
