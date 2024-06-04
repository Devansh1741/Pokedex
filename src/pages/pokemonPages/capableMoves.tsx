import React, { useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'

function CapableMoves() {
  const pokemonData = useAppSelector(({pokemon: {currentPokemon}}) => currentPokemon)
  useEffect(() => {
    console.log(pokemonData);
  }, [])
  return (
    <div className='capable-moves'>
      <h1 className='capable-moves-title'>Abilities</h1>
      <ul className='capable-moves-list ability'>
        {
          pokemonData?.pokemonAbilities.abilities.map((ability: string) => (<li key={ability} className='move'>
            {ability.replaceAll("-", " ")}
          </li>))
        }
      </ul>
      <h1 className='capable-moves-title'>Moves</h1>
      <ul className='capable-moves-list moves'>
        {
          pokemonData?.pokemonAbilities.moves.map((move: string) => (<li key={move} className='move'>
            {move.replaceAll("-", " ")}
          </li>))
        }
      </ul>
    </div>
  )
}

export default CapableMoves