/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { translation } from '../../I18n/i18n';

export default function ModalAPI() {
  const [open, setOpen] = useState(false)
  const lang = useSelector(state => state.languageReducer.language)
  const [resp, setResp] = useState()

  const handleSubmit =() => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=fshNHel5xOodNGKfb6CDzOfPr8LgCenh88LmA3UI'

    fetch(url, {
      method:'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => setResp(data))
    .catch(function (error) {
      console.log({ error });
    });
  }
  return (
    <>
      <button 
        className="flex mt-12 mb-8 mx-auto justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        onClick={() => {
          handleSubmit()
          setOpen(true)}}
      >
      {translation(lang, 'modalNasaAPIbtn')}
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div 
              className="inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6"
              style={{backgroundColor :"#0C1821"}}
              >
                <div className="sm:flex-col sm:items-start">
                  <div className="mx-auto flex items-center justify-center sm:mx-0 ">
                    <img src={`${resp && (resp.url)}`} alt={`${resp && (resp.title)}`}/>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {resp && (resp.title)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {resp && (resp.date)}
                    </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-16 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full sm:absolute sm:left-8 sm:bottom-8 rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {translation(lang, 'modalCloseBtn')}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
