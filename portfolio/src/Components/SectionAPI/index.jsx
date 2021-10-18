import ModalNasaAPI from "../ModalNasaAPI";
import ModalWeatherAPI from "../ModalWeatherAPI";
import { translation } from '../../I18n/i18n';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function SectionAPI() {
  const lang = useSelector(state => state.languageReducer.language)
  const [position, setPosition] = useState("")
  const [long, setLong] = useState("")
  const [lat, setLat] = useState("")
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setPosition("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }
  console.log(position)
  getLocation();

  return (
    <div style={{backgroundColor: "#60A5FA"}}>
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
          <span className="block">      
           {translation(lang, 'TitleAPI')}
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-800">
          {translation(lang, 'ContentAPI')}
        </p>
        <div className="flex">
          <ModalNasaAPI/>
          <ModalWeatherAPI long={long} lat={lat}/>
        </div>
      </div>
    </div>
  )
}
