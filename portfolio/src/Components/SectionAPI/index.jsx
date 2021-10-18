import ModalNasaAPI from "../ModalNasaAPI";
import ModalWeatherAPI from "../ModalWeatherAPI";
import { translation } from '../../I18n/i18n';
import { useSelector } from 'react-redux';

export default function SectionAPI() {
  const lang = useSelector(state => state.languageReducer.language)

  return (
    <div className="bg-blue-500">
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
          <ModalWeatherAPI />
        </div>
      </div>
    </div>
  )
}
