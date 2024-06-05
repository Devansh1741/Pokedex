import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Loading from '../../components/Loading';

function CapableMoves() {
  const pokemonData = useAppSelector(({pokemon: {currentPokemon}}) => currentPokemon)

  return (
    <>
    {
      pokemonData ? 
          (<div className='capable-moves'>
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
        : <Loading />
      }
      </> 
    
  )
}

export default CapableMoves