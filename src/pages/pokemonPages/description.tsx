import React from 'react'
import PokemonContainer from '../../components/PokemonContainer'
import { useAppSelector } from '../../app/hooks'
import Info from '../../components/Info'
import Loading from '../../components/Loading'
function Description() {
  const pokemonData = useAppSelector(({pokemon: {currentPokemon}}) => currentPokemon)
  return (
    <div>
        {pokemonData? (
          <>
            <Info data={pokemonData}/>
            <PokemonContainer  image={pokemonData?.image! }/>
          </>
        ) : <Loading />
        }
    </div>
  )
}

export default Description