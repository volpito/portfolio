import "./style.css";
import myPic from "../../Assets/Images/max.jpg";
import { useSelector } from 'react-redux'
import {translation} from "../../I18n/i18n";

const HeroBannerLandingPage = () => {
    const lang = useSelector(state => state.languageReducer.language)
    return(
        <div>
            <div className="row1">
                <div className="container">
                    <div className="column__img"><img src={myPic} className="pictureHeroBanner" alt="myPic" /></div>
                    <div className="column__text">
                        <h1 className="title__herobanner">{translation(lang, 'titre')}</h1>
                        <p className="intro__herobanner">
                            {translation(lang, 'home1')} <br/><br/>
                            {translation(lang, 'home2')} <br/><br/>
                            {translation(lang, 'home3')} <br/><br/>
                            {translation(lang, 'home4')} <br/>
                            {translation(lang, 'home5')} <br/><br/>
                        </p>
                        <p className="question__herobanner">{translation(lang, 'home6')}</p>
                        <div className="button__herobanner">
                            <button  className="componentsHeroeLogin"> {translation(lang, 'home7')} </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
};
export default HeroBannerLandingPage;