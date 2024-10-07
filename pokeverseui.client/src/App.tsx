import { useState, useEffect } from 'react';
import './App.css';
import PokeCards from './PokeCard';
import {PokeJson} from './Models/PokeJson.tsx';

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const [unfilteredPoke, setUnfilteredPoke] = useState<PokeJson[]>([]);

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await response.json();
      setUnfilteredPoke(json);
    };

    fetcher();
  }, []);

  return (

    <div>
      <h1>{unfilteredPoke.map((poke) => poke.Name)}</h1>
      {unfilteredPoke.map(() => <PokeCards PokeName="bulba" PokeImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" /> )}
    </div>
  );
}

export default App;
