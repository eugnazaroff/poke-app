import React, {Fragment} from 'react';
import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import './pokemonCard.scss'

const PokemonCard = ({pokemon}) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(pokemon.url)
            setData(res.data)
            setLoading(false)
        }
        fetchData()
        console.log(data)
    })

    return (
        <div className='card'>
            {
                !loading &&
                    <Fragment>
                        <h3 className="card__name">{data.name}</h3>
                        <img src={data.sprites.other["official-artwork"].front_default} alt="portrait"
                             className="card__portrait"/>
                    </Fragment>
            }
        </div>
    );
};

export default PokemonCard;