import { useState, useEffect } from 'react';
import './App.css';
import PokeCards from './PokeCard';
import {PokeJson, pokeDetails, PokeResults, SpriteList} from './Models/PokeJson.tsx';

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const [unfilteredPoke, setUnfilteredPoke] = useState<PokeJson[] | undefined>([]);
  const [jsonResult, setJsonResult] = useState<PokeResults>();
  const [pokeDetails, setPokeDetails] = useState<pokeDetails>();
  const serialSprites:(SpriteList | undefined)[] = [];
  const pokeSprites:(string | undefined)[] = [];
  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(url);
      const json = await response.json(); //This returns and object with count, next, prev, results. The results contain an array of objects holding the name and url to links of details for X number of pokemon requested
      await setJsonResult(json); // deserialize the json
      await setUnfilteredPoke(jsonResult?.results); // deserialize into an array of object containing the name and details url
      await unfilteredPoke?.map(async (poke) => {
        const response = await fetch(poke.url);
        const json = await response.json();
        setPokeDetails(json);
        serialSprites.push(pokeDetails?.sprites);
        // pokeSprites.push(pokeDetails?.sprites.front_default);
      }); // fetch the objects returned from the details url deserialize the data into an array of object containing the shiny sprite
      serialSprites.map((p => {pokeSprites.push(p?.front_default)}));

    };

    fetcher();
  }, [serialSprites, pokeSprites]);

  return (

    <div>
      <h1>{serialSprites[0]?.front_default}</h1>
      {unfilteredPoke?.map((poke, index) => <PokeCards PokeName={poke.name} PokeImg={serialSprites[index]?.front_default} /> )}
    </div>
  );
}

export default App;
