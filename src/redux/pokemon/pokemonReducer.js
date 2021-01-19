import {PokemonActionTypes} from "./pokemonActionTypes";

const INITIAL_STATE = {
    pokemons: {},
    pokemonData: {},
    loading: true
}

const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PokemonActionTypes.FETCH_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PokemonActionTypes.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemons: action.payload
            }
        case PokemonActionTypes.GET_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PokemonActionTypes.GET_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemonData: {...state.pokemonData, ...action.payload}
            }

        default:
            return state


    }
}

export default pokemonReducer