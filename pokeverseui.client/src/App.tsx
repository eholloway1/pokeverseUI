import { useState, useEffect } from 'react';
import './App.css';
import PokeCards from './poke-card.tsx';
import { PokeJson, PokeResults } from './Models/poke-json.tsx';
import { Container, Box, TextField } from '@mui/material';
import TitleBar from "./title-bar.tsx";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {

    const [unfilteredPoke, setUnfilteredPoke] = useState<PokeJson[] | undefined>([]);
    const [filteredPoke, setFilteredPoke] = useState<PokeJson[] | undefined>([]);
    const [jsonResult, setJsonResult] = useState<PokeResults>();

    const fetcher = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setJsonResult(json);
        setUnfilteredPoke(jsonResult?.results);
        setFilteredPoke(unfilteredPoke)
    }

    useEffect(() => {
        /*fetch(url).then(response => response.json())
            .then(data => setJsonResult(data))
            .finally(() => setUnfilteredPoke(jsonResult?.results));
        setFilteredPoke(unfilteredPoke);*/
        fetcher();
    }, []); console.log(jsonResult?.results);

    function handlePokeSearch(e) {
        const value = e.target.value;
        const regex = new RegExp(value, 'gi');
        const filtered = unfilteredPoke?.filter((poke) => {
            return poke.name.match(regex);
        });
        setFilteredPoke(filtered);
    }

    return (
        <Container className="flexContainer">
            <TitleBar />
            <Box display='flex' p={3}>
                <TextField id='outlined-basic' label='Pokemon Search...' variant='outlined'
                    onChange={(e) => { handlePokeSearch(e); }} />
            </Box>
            {filteredPoke?.map((poke) => <PokeCards PokeObj={poke} />)}
        </Container>
    );
}

export default App;
