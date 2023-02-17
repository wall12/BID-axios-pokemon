import React, { useState } from "react";
import axios from "axios";

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemons = (e) => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then((response) => {
            setPokemonList(response.data.results);
        })
            .catch(error => console.log(error))
    };

    return (
        <div>
            <button onClick={getPokemons}>Fetch Pokemon</button>
            <ul>
                {
                    pokemonList.map((pokemon, index) => {
                        return <li key={index}>{pokemon.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Pokemon;