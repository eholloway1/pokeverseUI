import { useState, useEffect } from 'react';
import './App.css';
import PokeCards from './poke-card.tsx';
import { PokeJson, PokeResults } from './Models/poke-json.tsx';
import { Container, Box, TextField } from '@mui/material';
import TitleBar from "./title-bar.tsx";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {

    const [unfilteredPoke, setUnfilteredPoke] = useState<PokeJson[] | undefined>(undefined);
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
        if(!unfilteredPoke) {
            fetcher();
        }
    }, [unfilteredPoke,filteredPoke]);

    function handlePokeSearch(e: any) {
        const value = e.target.value;
        const regex = new RegExp(value, 'gi');
        const filtered = unfilteredPoke?.filter((poke) => {
            return poke.name.match(regex);
        });
        setFilteredPoke(filtered);
    }

    return (
        <>
            <div className="title">
                <TitleBar />
            </div>
                <Box display='flex' p={3} style={{padding: 0, border: 0, margin: 0, marginBottom: '.5rem', justifyContent: 'center'}}>
                    <TextField id='outlined-basic' label='Pokemon Search...' variant='outlined'
                        onChange={(e) => { handlePokeSearch(e); }} style={{ borderRadius: 4}}/>
                </Box>
            <Container className="flexContainer">
                {filteredPoke == null ? unfilteredPoke?.map((poke) => <PokeCards PokeObj={poke} />) : filteredPoke?.map((poke) => <PokeCards PokeObj={poke} />)}
            </Container>
        </>
    );
}

export default App;
