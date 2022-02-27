import "./style.css";
import myPic from "../../Assets/Images/max.jpg";
import { useSelector } from 'react-redux'
import {translation} from "../../I18n/i18n";
import { Link } from 'react-router-dom';

const HeroBannerLandingPage = () => {
    const lang = useSelector(state => state.languageReducer.language)
    return(
        <>
            <div className="container">
                <div className="column__img"><img src={myPic} className="pictureHeroBanner" alt="Me wearing a blue shirt (it wiggles when your mouse hovers it)" /></div>
                <div className="column__text">
                    <h1 className="title__herobanner">{translation(lang, 'title')}</h1>
                    <p className="intro__herobanner">
                        {translation(lang, 'home1')} <br/><br/>
                        {translation(lang, 'home2')} <br/><br/>
                        {translation(lang, 'home3')} <br/><br/>
                        {translation(lang, 'home4')} <br/>
                        {translation(lang, 'home5')} <br/><br/>
                    </p>
                    <p className="question__herobanner">{translation(lang, 'home6')}</p>
                    <div className="button__herobanner">
                        <button className="inline-flex  my-4 justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"><Link to="/contact">{translation(lang, 'home7')}</Link></button>
                    </div>
                </div>
            </div>
        </>
            )
};
export default HeroBannerLandingPage;