import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getPokemonData } from '../../app/reducers/getPokemonData';
import PokemonCardGrid from '../../components/PokemonCardGrid';
import Loading from '../../components/Loading';

function Evolution() {
  const dispatch = useAppDispatch();
  const {currentPokemon, randomPokemons} = useAppSelector(({pokemon}) => pokemon);
  
  useEffect(() => {
    const fetchData = async () => {
      const pokemons = currentPokemon?.evolution.map(({pokemon}) => pokemon);
      await dispatch(getPokemonData(pokemons!));
    };
    fetchData();
  }, [dispatch, currentPokemon])

  return (
    <div className='page'>
      {currentPokemon ? <PokemonCardGrid pokemons={randomPokemons!}/> : <Loading />}
    </div>  
  )
}

export default Evolution