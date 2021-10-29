import React from "react";
import portfolio from '../../Assets/Images/portfolio.png'
import globe from '../../Assets/Images/globe.png'
import skate from '../../Assets/Images/skate.png'
import bartend from '../../Assets/Images/bartend.png'
import { useSelector } from 'react-redux'
import {translation} from "../../I18n/i18n";


export default function Cards() {

const lang = useSelector(state => state.languageReducer.language)

const people = [
  {
    name: `${translation(lang, 'cardtitle')}`,
    role: `${translation(lang, 'cardcontent')}`,
    imageUrl:
      `${bartend}`,
  },
  {
    name: `${translation(lang, 'card1title')}`,
    role: `${translation(lang, 'card1content')}`,
    imageUrl:
      `${globe}`,
  },
  {
    name: `${translation(lang, 'card2title')}`,
    role: `${translation(lang, 'card2content')}`,
    imageUrl:
      `${skate}`,
  },
  {
    name: `${translation(lang, 'card3title')}`,
    role: `${translation(lang, 'card3content')}`,
    imageUrl:
      `${portfolio}`,
  },
]

  return (
    <div className="bg-current! mb-16 mt-6 sm:my-2">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">

            <ul
              className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
            >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <img className="mx-auto h-20 w-20 lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3 className="text-blue-400">{person.name}</h3>
                      <p className="text-gray-400">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  )
}