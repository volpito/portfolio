import './style.css';
import { useSelector } from 'react-redux'
import {translation} from "../../I18n/i18n";
import HeroHome from '../../Components/HeroHome/HeroHome';
import SectionAPI from '../../Components/SectionAPI/index';
import SectionImage from '../../Components/SectionImage/index';
import ContactForm from '../../Components/ContactForm/index';

const Home = () => {
  const lang = useSelector(state => state.languageReducer.language)
  
  return (
    <>
    <h1 className="topCenter">{translation(lang, 'header1')}</h1>
    <hr className="mx-auto mb-2"/>
    <p className="topCenter text-gray-500">{translation(lang, 'header2')}</p>
    < HeroHome />
    < SectionAPI/>
    < SectionImage/>
    <h1 className="topCenter">{translation(lang, 'FomIntroTitle')}</h1>
    <p className="topCenter text-gray-500">{translation(lang, 'FomIntroContent')}</p>
    < ContactForm />
    </>
  )
}

export default Home;