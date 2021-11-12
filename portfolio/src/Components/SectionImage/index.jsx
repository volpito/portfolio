import { translation } from '../../I18n/i18n';
import { useSelector } from 'react-redux';
import sky from '../../Assets/Images/sky.jpg'
import sky2 from '../../Assets/Images/sky2.jpg'

export default function SectionAPI() {
  const lang = useSelector(state => state.languageReducer.language)

  return (
    <>
    <div className="bg-fixed h-96 bg-top py-96" style={{backgroundImage: `url(${sky2})`}}>
    </div>
    <div className="sm:w-full mx-auto text-center py-12 px-4 sm:px-6 lg:px-8 text-blue-400 bg-current!">
      <h2 className="text-3xl font-extrabold sm:text-4xl">
        <span className="block">      
          {translation(lang, 'TitleIMG')}
        </span>
      </h2>
      <p className="topCenter mt-4 text-lg leading-6 text-gray-400">{translation(lang, 'ContentIMG')}</p>
    </div>
    <div className="bg-fixed h-96 py-96 bg-top" style={{backgroundImage: `url(${sky})`}}>
    </div>
    </>
  )
}
