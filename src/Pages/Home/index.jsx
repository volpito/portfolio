import './style.css';
import { useSelector } from 'react-redux'
import {translation} from "../../I18n/i18n";
import HeroHome from '../../Components/HeroHome/HeroHome';
import SectionAPI from '../../Components/SectionAPI/index';
import SectionImage from '../../Components/SectionImage/index';
import ContactForm from '../../Components/ContactForm/index';
import Cards from '../../Components/Cards';
import neon from '../../Assets/Images/neon.gif';
import { Link } from 'react-router-dom';

const Home = () => {
  const lang = useSelector(state => state.languageReducer.language)
  
  return (
    <>
      <h1 className="topCenter">{translation(lang, 'header1')}</h1>
      <hr className="mx-auto mb-2"/>
      <p className="topCenter text-gray-400">{translation(lang, 'header2')}</p>
      < HeroHome />
      < Cards />
      <div className="button__herobanner sm:mb-24 mb-16 mt-8">
        <Link to="/resume"><button className="flex mx-auto justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">{translation(lang, 'home8')}</button></Link>
      </div>
      < SectionAPI />
      < SectionImage />
      <div className="absolute w-full h-9 bg-blue-400"><p></p></div>
      <div className="sm:-pt-12 pt-12 sm:block hidden">
        <h2 className="topCenter text-3xl font-extrabold sm:text-4xl mb-8 mt-12 text-blue-400">{translation(lang, 'FomIntroTitle')}</h2>
        <p className="topCenter mt-4 text-lg leading-6 text-gray-400">{translation(lang, 'FomIntroContent')}</p>
      </div> 
      <ContactForm/>
      <div className="sm:w-full mx-auto text-center py-6 px-4 sm:px-6 lg:px-8 text-blue-400 bg-current!"> </div>
      <div className="bg-fixed h-96 bg-bottom bg-cover" style={{backgroundImage: `url(${neon})`}}></div>
    </>
  )
}

export default Home;