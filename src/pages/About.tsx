import React from 'react'
import Wrapper from '../sections/Wrapper'
import avatarImage from "../assets/Me1.jpeg"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from "react-icons/si";
function About() {
  return (
    <div className='profile'>
      <img src={avatarImage} alt="avatar" className='profile-image'/>
      <h1 className='profile-text'>Hi I am Devansh Rathore</h1>
      <h2 className='profile-text'>The creator of this awesome pokedex</h2>
      <h4>This project is created to test my API and CSS skills &#128540;</h4>
      <h4 className='profile-links'>
        <a href="https://github.com/Devansh1741" target="blank">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/Devansh1741/" target="blank">
          <SiLeetcode />
        </a>
        <a href="https://codeforces.com/profile/Devansh1741" target="blank">
          <SiCodeforces />
        </a>
        <a href="https://www.linkedin.com/in/devansh-rathore-68b476236/" target="blank">
          <FaLinkedin />
        </a>
      </h4>
    </div>
  )
}

export default Wrapper(About);