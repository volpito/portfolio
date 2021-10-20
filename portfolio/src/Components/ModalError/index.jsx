import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { translation } from '../../I18n/i18n';

function ModalError(props) {
  const [open, setOpen] = useState(false)
  const lang = useSelector(state => state.languageReducer.language)

  return (
    <>
      <button 
        className="flex mt-12 mb-8 mx-auto justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        onClick={() => {
          setOpen(true)}}
      >
      {translation(lang, `${props.modalBtn}`)}
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
              <p className={`${props?.className}` || ""}>{translation(lang, `${props.modalContent1}`)}</p>
            </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ModalError
