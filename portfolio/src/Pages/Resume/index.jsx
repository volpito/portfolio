import React from 'react'
import CV from '../../Assets/Images/MaximeRIGOT.pdf'
import {Document, Page, pdfjs } from 'react-pdf'
import {translation} from "../../I18n/i18n";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import duck from '../../Assets/Images/duck-hat.gif'

export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const lang = useSelector(state => state.languageReducer.language)

  return (
    <div className="">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-400 uppercase tracking-wider">{translation(lang, 'CvTitle')}</h2>
            <p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            {translation(lang, 'CvTitleBig')}
            </p>
            <p className="text-xl text-gray-400">
            {translation(lang, 'CvTitleSmall')}
            </p>
          </div>
          <button className="inline-flex mt-12 -mb-12 justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"><Link to="/contact">{translation(lang, 'home7')}</Link></button>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-current sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24 ">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 " />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:place-items-center">
            <p/>
            <Document
              file={CV}
              onLoadError={console.error}
              className="relative mt-12 -mb-12 sm:block hidden rounded-xl"
            >
              <Page pageIndex={0}/>
            </Document>
            <div className="relative text-gray-400 mt-12 sm:hidden block">
              <p>{translation(lang, 'CvTitleError')}</p>
              <img className="mt-5 rounded-2xl" src={duck} alt="cute duck with a hat gif" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
