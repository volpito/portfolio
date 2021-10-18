/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { translation } from '../../I18n/i18n';

export default function ModalAPI() {
  const [open, setOpen] = useState(false)
  const lang = useSelector(state => state.languageReducer.language)
  const [resp, setResp] = useState()
  const [city, setCity] = useState("")

  const handleSubmit =() => {
    const url = `https://api.weatherapi.com/v1/current.json?key=c91d3fdea9f3478989a92153211810&q=${city}&aqi=no`

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
          setOpen(true)
        }}
      >
      {translation(lang, 'modalWeatherAPIbtn')}
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
                {!resp && (
                  <>
                  <div className={"flex flex-col sm:mb-16 "}>
                      <label htmlFor={translation(lang, 'inputWeatherCity')} className="mb-1">
                        {translation(lang, 'inputWeatherCity')}
                      </label>
                    <input
                      type="text"
                      name={translation(lang, 'inputWeatherCity')}
                      className="block text-gray-500 px-3 py-2 border-2 border-gray-200 rounded-md disabled:text-gray-400 disabled:bg-gray-100"
                      onChange={(evt) => {setCity(evt.target.value)}}
                    />
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 w-full sm:absolute sm:right-6 sm:bottom-8 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={handleSubmit}
                    >
                      {translation(lang, 'sendCity')}
                    </button>
                  </div>
                  </>
                )}

                {resp &&(
                  <div className="sm:flex-col sm:items-start sm:mb-16">
                    <div className="mx-auto flex items-center justify-center sm:mx-0 ">
                      <img src={`${resp.current.condition.icon}`} alt={`${resp.current.condition.text}`}/>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                      <p className="text-lg text-center font-bold text-gray-500">
                        {resp.location.name}
                      </p>
                      <div className="grid grid-cols-2">
                      <p className="text-sm text-gray-500 text-left">
                        {resp.current.condition.text}
                      </p>
                      <p className="text-sm text-gray-500 text-right">
                        {resp.location.localtime}
                      </p>
                      </div>
                      <p className="text-sm text-gray-500 text-left">
                        {resp.current.temp_c}°C
                      </p>
                      </div>
                    </div>
                  </div>)}
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full sm:absolute sm:left-6 sm:bottom-8 rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => {
                      setOpen(false)
                      setResp(null)
                    }}
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
