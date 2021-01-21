import axios from "axios";
import {PokemonActionTypes} from "./pokemonActionTypes";


export const fetchItems = () => async dispatch => {
    dispatch({
        type: PokemonActionTypes.FETCH_ITEMS_REQUEST
    })
    const pokemons = []
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=21')
    for (const item of res.data.results) {
        let pokeData = await axios.get(item.url)
        pokemons.push(pokeData.data)
    }

    dispatch({
        type: PokemonActionTypes.FETCH_ITEMS_SUCCESS,
        payload: pokemons
    })
}