import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';
import { debounce } from '../utils/DeBounce';
import { FaRandom } from 'react-icons/fa';
import Loading from '../components/Loading';

function Search() {
  const dispatch = useAppDispatch();
  const {allPokemon, randomPokemons} = useAppSelector(({pokemon}) => pokemon)
  useEffect(() => {
    if(allPokemon === undefined){
      dispatch(getInitialPokemonData());
    }
  }, [dispatch, allPokemon])

  const fetchPokemon = async () => {
    if(allPokemon){
      dispatch(getPokemonData([]));
      const clonedPokemons = [...allPokemon!];
      const randomPokemonsId = clonedPokemons.sort(() =>Math.random()-Math.random()).slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  }

  useEffect(() => {
    if(allPokemon && (randomPokemons === undefined || randomPokemons?.length === 0)){
      fetchPokemon();
    }
// eslint-disable-next-line
  }, [allPokemon, dispatch, randomPokemons])

  const handleChange = debounce((value: string) => getPokemon(value), 300);

  const getPokemon = async (value: string) => {
    if(value.length >= 3){
      dispatch(getPokemonData([]));
      const pokemons = allPokemon?.filter((pokemon) => pokemon.name.includes(value.toLowerCase()));
      dispatch(getPokemonData(pokemons!));
    } else if (value.length === 0) {
      const clonedPokemons = [...allPokemon as []];
      const randomPokemonsId = clonedPokemons.sort(() =>Math.random()-Math.random()).slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  }

  return (
    <>
    <div className='search'>
      <div className="search-bar">
        <input type='text' className='pokemon-searchbar' placeholder='Search Pokemon (atleast 3 letters)'
        onChange={(e) => handleChange(e.target.value)}/>
        <div className='svg-holder'>
          <FaRandom onClick={() => fetchPokemon()}/>
        </div>
      </div>
      {
        randomPokemons ? randomPokemons!.length ?
          <PokemonCardGrid pokemons = {randomPokemons!}/>
          : <Loading /> : <Loading />
      }
    </div>
    </>
  )
}

export default Wrapper(Search);