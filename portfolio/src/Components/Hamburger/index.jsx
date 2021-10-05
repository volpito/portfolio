import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Icon } from 'react-icons-kit'
import {person} from 'react-icons-kit/iconic/person'
import './style.css';
import BtnLang from '../BtnLang/index';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare, FaHome } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const Hamburger=()=> {
  return (
    
    <div className="burger">
      <Menu right noOverlay width={ 100 } customBurgerIcon={ <Icon icon={person} size={25} style={{ color: '#F4A261' }} alt="person logo"/> }>
        <div className="whitespaceBurger"></div>
        <a href="https://www.linkedin.com/in/maxime-rigot-53259169/" > <FaLinkedin className="-ml-5 hover:shadow-2xl" alt="linkedin logo" /> </a>
        <a href="https://github.com/volpito" > <FaGithubSquare className="-ml-5 hover:shadow-2xl" alt="github logo"/> </a>
        <Link to="/contact"><MdMail className="-ml-5 hover:shadow-2xl" alt="gmail logo"/></Link>
        <div className="bugerWhitespace"></div>
        < BtnLang />
        <Link to="/" className="absolute text-gray-500 -mt-4"><FaHome className="w-1/3"/></Link>
      </ Menu>
    </div>
    
  );
}
export default Hamburger;