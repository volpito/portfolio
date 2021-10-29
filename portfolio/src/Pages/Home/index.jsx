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
    <h2 className="topCenter text-3xl font-extrabold sm:text-4xl mb-8">{translation(lang, 'FomIntroTitle')}</h2>
    <p className="topCenter mt-4 text-lg leading-6 text-gray-400">{translation(lang, 'FomIntroContent')}</p>
    < ContactForm />
    </>
  )
}

export default Home;