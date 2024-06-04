import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'

function Location() {
  const pokemonData = useAppSelector(({pokemon: {currentPokemon}}) => currentPokemon)
  useEffect(() => {
    console.log(pokemonData);
  }, [])
  return (
    <div className='pokemon-locations'>
      {
        pokemonData?.encounters.length === 0 ? <div className='notFound'>{pokemonData.name.replaceAll("-", " ").toUpperCase()} is not currently available for capture in any area.</div> :
        <ul className='pokemon-locations-list'>
          {
            pokemonData?.encounters.map((encounter: string) => (<li key={encounter} className='pokemon-location'>
              {encounter}
            </li>))
          }
        </ul>
      }
    </div>
  )
}

export default Location