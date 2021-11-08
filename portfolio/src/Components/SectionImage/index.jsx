import { translation } from '../../I18n/i18n';
import { useSelector } from 'react-redux';
import sky from '../../Assets/Images/sky.jpg'
import sky2 from '../../Assets/Images/sky2.jpg'
import BackgoundVideo from '../BackgoundVideo';

export default function SectionAPI() {
  const lang = useSelector(state => state.languageReducer.language)

  return (
    <>
    <div className="bg-fixed h-96 bg-top" style={{backgroundImage: `url(${sky2})`}}>
    </div>
    <div className="absolute w-full h-1 bg-gray-700"><p></p></div>
    <div className="sm:w-full mx-auto text-center py-12 px-4 sm:px-6 lg:px-8 text-blue-400 bg-gradient-to-b from-gray-700 to-black">
      <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
        <span className="block">      
          {translation(lang, 'TitleVID')}
        </span>
      </h2>
    </div>
    < BackgoundVideo />
    <div className="py-12 bg-gradient-to-b from-black to-gray-700"></div>
    <div className="bg-fixed h-96 bg-top" style={{backgroundImage: `url(${sky})`}}>
    </div>
    </>
  )
}
