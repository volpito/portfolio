import './style.css';
import { useSelector } from 'react-redux'
import {translation} from "../../I18n/i18n";
import HeroHome from '../../Components/HeroHome/HeroHome';
import SectionAPI from '../../Components/SectionAPI/index';
import SectionImage from '../../Components/SectionImage/index';
import ContactForm from '../../Components/ContactForm/index';
import Cards from '../../Components/Cards';
import { Link } from 'react-router-dom';

const Home = () => {
  const lang = useSelector(state => state.languageReducer.language)
  
  return (
    <>
      <h1 className="topCenter">{translation(lang, 'header1')}</h1>
      <hr className="mx-auto mb-2"/>
      <p className="topCenter text-gray-500">{translation(lang, 'header2')}</p>
      < HeroHome />
      < Cards />
      < SectionAPI />
      < SectionImage />
      <div className="sm:block hidden sm:-pt-12">
      <h2 className="topCenter text-3xl font-extrabold sm:text-4xl mb-8 mt-12 text-blue-400">{translation(lang, 'FomIntroTitle')}</h2>
      <p className="topCenter mt-4 text-lg leading-6 text-gray-400">{translation(lang, 'FomIntroContent')}</p>
      </div>
      <div className="absolute w-full h-9 bg-blue-400"><p></p></div>
      <div className="button__herobanner my-10">
        <Link to="/contact"><button className="flex mt-20 mb-8 mx-auto justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:block hidden">{translation(lang, 'home7')}</button></Link>
      </div>    
    </>
  )
}

export default Home;