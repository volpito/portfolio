import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import {translation} from "../../I18n/i18n";
import './style.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const lang = useSelector(state => state.languageReducer.language)
  return (
    <>
      <div>
        <div className="containerNavbar mb-20">
        </div>
      </div>
      <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{translation(lang, 'form1')}</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
            {translation(lang, 'form2')}
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">{translation(lang, 'form3')}</dt>
                <dd>
                  <p>{translation(lang, 'formAdress1')}</p>
                  <p>{translation(lang, 'formAdress2')}</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">{translation(lang, 'form4')}</dt>
                <dd className="flex">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">{translation(lang, 'formTel')}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">{translation(lang, 'form5')}</dt>
                <dd className="flex">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">{translation(lang, 'formMail')}</span>
                </dd>
              </div>
            </dl>
          </div>
          <Link to="/" className="sm:block hidden absolute text-gray-500 mt-64 hover:text-yellow-400">Home</Link>
        </div>
        <div className="bg-bg py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                {translation(lang, 'formName')}
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                {translation(lang, 'formEmail')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                {translation(lang, 'formPhoneNum')}
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                {translation(lang, 'formMsg')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-400 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  {translation(lang, 'formSubmit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default ContactForm;
