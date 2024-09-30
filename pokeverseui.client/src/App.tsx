import { useState, useEffect } from 'react';
import './App.css';
import PokeCards from './PokeCard';

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const [unfilteredPoke, setUnfilteredPoke] = useState([]);

  useEffect(() => {
    async function fetcher() {
      const response = await fetch(url);
      const json = await response.json();
      setUnfilteredPoke(json);
    };
    fetcher();
  }, []);

  return (
  <>

    <PokeCards PokeName="sadas" PokeImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
  </>
  );
}

export default App;
