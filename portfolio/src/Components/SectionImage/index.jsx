import { translation } from '../../I18n/i18n';
import { useSelector } from 'react-redux';
import sky from '../../Assets/Images/sky.jpg'
import sky2 from '../../Assets/Images/sky2.jpg'

export default function SectionAPI() {
  const lang = useSelector(state => state.languageReducer.language)

  return (
    <>
    <div className="bg-fixed h-96 bg-top" style={{backgroundImage: `url(${sky2})`}}>
    </div>
    <div className="max-w-2xl mx-auto text-center py-12 px-4 sm:px-6 lg:px-8 text-blue-400">
      <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
        <span className="block">      
          {translation(lang, 'TitleIMG')}
        </span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-400">
        {translation(lang, 'ContentIMG')}
      </p>
    </div>
    <div className="bg-fixed h-96 bg-bottom" style={{backgroundImage: `url(${sky2})`}}>
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-blue-400">
      </div>
    </div>
    </>
  )
}
