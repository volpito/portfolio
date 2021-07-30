import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import linkedin from '../../Assets/Images/linkedin_logo.png'
import github from '../../Assets/Images/github_logo.png'
import gmail from '../../Assets/Images/gmail_logo.png'
import { Icon } from 'react-icons-kit'
import {person} from 'react-icons-kit/iconic/person'
import './style.css';
import BtnLang from '../BtnLang/index';

const Hamburger=()=> {
  return (
    
    <div className="burger">
      <Menu right noOverlay width={ 100 } customBurgerIcon={ <Icon icon={person} size={35} style={{ color: '#F4A261' }} alt="person logo"/> }>
        <div className="whitespaceBurger"></div>
        <a href="https://www.linkedin.com/in/maxime-rigot-53259169/" > <img className="linkedin" alt="linkedin logo" src={linkedin} /> </a>
        <a href="https://github.com/volpito" > <img className="github" alt="github logo" src={github} /> </a>
        <a href="mailto:mpj.rigot@gmail.com?subject=Enchanté" > <img className="gmail" alt="gmail logo" src={gmail} /> </a>
        <div className="bugerWhitespace"></div>
        < BtnLang />
      </ Menu>
    </div>
    
  );
}
export default Hamburger;