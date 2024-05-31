import React from 'react'
import { pokemonStatType, pokemonTypeInterface, userPokemonsType } from '../utils/Types'
import { FaPlus } from 'react-icons/fa'
import { pokemonTypes } from '../utils/getPokemonTypes';
import { useAppDispatch } from '../app/hooks';
import { removeFromCompare } from '../app/slices/PokemonSlice';
import { useNavigate } from 'react-router-dom';

function CompareContainer({pokemon = undefined,isEmpty = false}: {
    pokemon?:userPokemonsType,
    isEmpty?: boolean,
}) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const createStatsArray = (types:pokemonTypeInterface[], statType:pokemonStatType) => {
        const statsArray:{name: string, image: string}[] = [];
        const statsSet = new Set<string>();
        types.forEach((type: pokemonTypeInterface) => {
            const key = Object.keys(type)[0];
            type[key][statType].forEach((stat: string) => {
                if(!statsSet.has(stat)) {
                    //@ts-ignore
                    statsArray.push({name: stat, image: pokemonTypes[stat].image});
                    statsSet.add(stat);
                }
            });
        });
        console.log({statsArray});
        return statsArray;
    };

    const getStats = () => {
        const strengthArray = createStatsArray(pokemon?.types!, "strength");
        const resistanceArray = createStatsArray(pokemon?.types!, "resistance");
        const weaknessArray = createStatsArray(pokemon?.types!, "weakness");
        const vulnerableArray = createStatsArray(pokemon?.types!, "vulnerable");
        return (
            <>
            <div className='pokemon-types'>
                <h4 className='pokemon-type-title'>Strength</h4>
                <div className="pokemon-type-icons">
                    {!strengthArray.length && 
                        <h4 className='none'>None</h4>
                    }
                    {strengthArray.length !== 0 && strengthArray.map((stat:{image:string}) => 
                        {
                            console.log("Image ", stat.image);
                            return(
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon-type-broken" className='pokemon-type-image' />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            <div className='pokemon-types'>
                <h4 className='pokemon-type-title'>Resistances</h4>
                <div className="pokemon-type-icons">
                    {!resistanceArray.length && 
                        <h4 className='none'>None</h4>
                    }
                    {resistanceArray.length !== 0 && resistanceArray.map((stat:{image:string}) => 
                        {
                            console.log("Image ", stat.image);
                            return(
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon-type-broken" className='pokemon-type-image' />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            <div className='pokemon-types'>
                <h4 className='pokemon-type-title'>Weakness</h4>
                <div className="pokemon-type-icons">
                    {!weaknessArray.length && 
                        <h4 className='none'>None</h4>

                    }
                    {weaknessArray.length !== 0 && weaknessArray.map((stat:{image:string}) => 
                        {
                            console.log("Image ", stat.image);
                            return(
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon-type-broken" className='pokemon-type-image' />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            <div className='pokemon-types'>
                <h4 className='pokemon-type-title'>Vulnerable</h4>
                <div className="pokemon-type-icons">
                    {!vulnerableArray.length && 
                        <h4 className='none'>None</h4>
                    }
                    {vulnerableArray.length !== 0 && vulnerableArray.map((stat:{image:string}) => 
                        {
                            console.log("Image ", stat.image);
                            return(
                                <div className="pokemon-type">
                                    <img src={stat.image} alt="pokemon-type-broken" className='pokemon-type-image' />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
            </>
        )
    }
  return (
    <div className='compare_container'>
        {
            isEmpty && (
                <div className='empty'>
                    <button>
                        <FaPlus onClick={() => navigate("/search/")}/>
                    </button>
                    <h3>Add Pokemon to Compare</h3>
                </div>
            )
        }
        {
            pokemon && (
            <div className="compare-element">
                <div className="compare-info">
                    <div className="compare-details">
                        <h3>{pokemon?.name}</h3>
                        <img src={pokemon?.image} alt="compare" className='compare-image'/>
                    </div>
                    <div className="pokemon-types-container">
                        <div className="pokemon-types">
                            <h4 className='pokemon-type-title'>Type</h4>
                            <div className="pokemon-type-icons">
                                {
                                    pokemon?.types.map((type:pokemonTypeInterface) => {
                                        const keys = Object.keys(type)
                                        return (
                                            <div className="pokemon-type">
                                                <img src={type[keys[0]].image} alt="pokemon-type" className='pokemon-type-image'/>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        {getStats()}
                    </div>
                </div>
                <div className="compare-action-buttons">
                    <button className='compare-btn'>Add</button>
                    <button className='compare-btn' onClick={() => navigate(`/pokemon/${pokemon.id}`)}>View</button>
                    <button className='compare-btn' onClick={() => dispatch(removeFromCompare({id:pokemon.id}))}>Remove</button>
                </div>
            </div>
            )}
    </div>
  )
}

export default CompareContainer