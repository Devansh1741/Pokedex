import React from 'react'
import pokeballIcon from "../assets/pokeball-icon.png"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'
function Navbar() {
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "MyList",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ]

  return (
    <nav>
      <div className='block'>
        <img src={pokeballIcon} alt='pokeball-Icon' />
      </div>
      <div className='data'>

      <ul>
        {
          navigationRoutes.map(({name, route}, index) => {
            return (
              <Link to={route} key={index}>
                <li>{name}</li>
              </Link>
            )
          }) 
        }
      </ul>

      </div>
      <div className='block'>
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar