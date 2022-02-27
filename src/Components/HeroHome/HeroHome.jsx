import React from 'react'
import { useSelector } from 'react-redux';
import {translation} from "../../I18n/i18n";
import { Link } from 'react-router-dom';
import ImageMe from '../../Assets/Images/me.jpeg'
import MePNG from '../3DCard/index'

export default function HeroHome() {
  const lang = useSelector(state => state.languageReducer.language)

  return (
    <div className="relative overflow-hidden">
      <div className="hidden lg:block lg:inset-0" aria-hidden="true">
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-300" fill="currentColor" />
            </pattern>
          </defs>
          <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
          <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>
        <main className="mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className=" my-12 sm:my-0">
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block sm:-mt-12 ">{translation(lang, 'titleHome')}</span>
                  <span className="block text-blue-400 sm:ml-52 sm:mb-10">{translation(lang, 'titleHome1')}</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {translation(lang, 'home1')} <br/><br/>
                {translation(lang, 'home2')} <br/><br/>
                {translation(lang, 'home3')} <br/><br/>
                {translation(lang, 'home4')} <br/><br/>
                {translation(lang, 'home5')} <br/><br/>
                {translation(lang, 'home6')} <br/>
              </p>
              <div className="button__herobanner sm:hidden mb-24">
                <Link to="/contact"><button className="flex mt-12 mb-8 mx-auto justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">{translation(lang, 'home7')}</button></Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
              </svg>
              <div className="relative sm:mx-auto -ml-16 xl:block hidden">
                <MePNG/>
              </div>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md xl:hidden">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                >
                  <img
                    className="w-12/12"
                    src={ImageMe}
                    alt="Me, smiling on a chair"
                  />
                </button>
              </div>
            </div>
          </div>
        </main>
        <div className="button__herobanner my-10">
        <Link to="/contact"><button className="flex mt-20 mb-8 mx-auto justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:block hidden">{translation(lang, 'home7')}</button></Link>
        </div>
      </div>
  )
}

