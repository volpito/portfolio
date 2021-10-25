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
        <div className="absolute top-9 right-5">
          <Link to="/"><FaHome className="hover:shadow-2xl mb-8"/></Link>
          <Link to="/resume"><HiDocumentText className="hover:shadow-2xl mb-8"/></Link>
          <Link to="/contact"><MdMail className="hover:shadow-2xl mb-8" alt="gmail logo"/></Link>
          <a href="https://github.com/volpito" > <FaGithubSquare className="hover:shadow-2xl mb-8" alt="github logo"/> </a>
          <a href="https://www.linkedin.com/in/maxime-rigot-53259169/" > <FaLinkedin className="hover:shadow-2xl" alt="linkedin logo" /> </a>
        </div>
        <div className="absolute bottom-0 right-9">
          < BtnLang className="z-2"/>
        </div>
      </ Menu>
    </div>
    
  );
}
export default Hamburger;