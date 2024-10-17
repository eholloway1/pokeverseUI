import { useState, useEffect } from 'react';
import './App.css';
import PokeCards from './PokeCard';
import {PokeJson, PokeResults} from './Models/PokeJson.tsx';

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const [unfilteredPoke, setUnfilteredPoke] = useState<PokeJson[] | undefined>([]);
  const [jsonResult, setJsonResult] = useState<PokeResults>();

  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setJsonResult(data)).finally(() => setUnfilteredPoke(jsonResult?.results));
  }, [unfilteredPoke]);

  return (
    <div className="flexContainer">
      {unfilteredPoke?.map((poke) =>  <PokeCards PokeObj={poke} />)}
    </div>
  );
}

export default App;
