import axios from "axios";
import {PokemonActionTypes} from "./pokemonActionTypes";

export const fetchItems = () => async dispatch => {
    dispatch({
        type: PokemonActionTypes.FETCH_ITEMS_REQUEST
    })
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=21')
    dispatch({
        type: PokemonActionTypes.FETCH_ITEMS_SUCCESS,
        payload: res.data.results
    })
}

export const getPokemon = (url) => async dispatch => {
    dispatch({
        type: PokemonActionTypes.GET_POKEMON_REQUEST
    })
    const res = await axios.get(url)
    dispatch({
        type: PokemonActionTypes.GET_POKEMON_SUCCESS,
        payload: res.data
    })
}