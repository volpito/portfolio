import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/typicons/user'
import './style.css';
import BtnLang from '../BtnLang/index';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare, FaHome } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi';

const Hamburger=()=> {
  return (
    
    <div className="burger">
      <Menu right noOverlay width={ 100 } customBurgerIcon={ <Icon icon={user} size={30} style={{ color: '#F4A261' }} alt="person logo"/> }>
        <Link to="/"><FaHome className="-ml-5 hover:shadow-2xl"/></Link>
        <Link to="/resume"><HiDocumentText className="-ml-5 hover:shadow-2xl"/></Link>
        <Link to="/contact"><MdMail className="-ml-5 hover:shadow-2xl" alt="gmail logo"/></Link>
        <a href="https://github.com/volpito" > <FaGithubSquare className="-ml-5 hover:shadow-2xl" alt="github logo"/> </a>
        <a href="https://www.linkedin.com/in/maxime-rigot-53259169/" > <FaLinkedin className="-ml-5 hover:shadow-2xl" alt="linkedin logo" /> </a>
        <div className="bugerWhitespace sm:mt-16"></div>
        < BtnLang className="z-2"/>
      </ Menu>
    </div>
    
  );
}
export default Hamburger;