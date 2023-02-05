import dayjs from '../../utils/day'
import React, { Fragment, useMemo, useState } from 'react'
import { AiFillYoutube, AiOutlineLink } from 'react-icons/ai'
import { BiLocationPlus } from 'react-icons/bi'
import { motion } from "framer-motion"
import { Dialog, Transition } from '@headlessui/react'

function EventsCard({ event }) {

  const isPast = useMemo(() => {
    return dayjs().isAfter(dayjs(event.time))
  }, [event]);

  console.log(isPast);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <motion.div className='flex md:flex-row flex-col justify-center items-center p-3 md:p-0 md:justify-start md:items-start bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 shadow-transparent hover:shadow-orange-400/10 shadow-2xl rounded-l-lg rounded-lg mb-4'
      >
        <div className='md:p-4 md:px-6 p-2 px-1 bg-gradient-to-br from-orange-400 to-orange-600 rounded-l-lg rounded-lg m-2 md:w-1/4'>
          <div className='text-center text-white text-base scale-90'>
            <div
              className='flex justify-center gap-1'
            >
              <BiLocationPlus className='w-6 h-6 text-white' />
              <p className='dark:text-white self-center font-semibold'>
                {event.venue}
              </p>
            </div>
            <p className='font-semibold'>{dayjs(event.time).format("lll")}</p>
          </div>
        </div>
        <div className='flex-grow flex flex-col justify-center items-center md:items-start md:m-4 mt-3'>
          <h1 className='dark:text-white text-start h4 md:text-xl text-sm md:mb-1'>
            {event.name}
          </h1>
          <p
            className={`dark:text-white/60 text-start transition-all md:text-start text-center`}
          >
            {event.content?.substring(0, 100)}...
          </p>
          <button
            className='dark:text-gray-200 mt-2 px-3 py-1 hover:bg-slate-200/20 transition-all rounded-md'
            onClick={() => setIsOpen(true)}
          >
            View More
          </button>

        </div>
        <div
          className='flex md:flex-col justify-center items-center p-2 w-full md:w-1/4'
        >
          <button
            className='btn flex gap-2 w-max dark:text-white dark:hover:bg-white/20 m-2 rounded-md shadow-none'
            onClick={() => {
              if (!isPast) {
                window.open(event.url, "__blank")
              } else {
                setIsOpen(true);
              }
            }}
          >
            {isPast ?
              <React.Fragment>
                <AiFillYoutube />
                Watch Now
              </React.Fragment>
              :
              <React.Fragment>
                <AiOutlineLink />
                <span
                  className='font-semibold'
                >
                  Register
                </span>

              </React.Fragment>
            }
          </button>
        </div>
      </motion.div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center py-2"
                  >
                    {event.name}
                  </Dialog.Title>
                  <div
                    className='flex justify-center items-center'
                  >
                    {
                      !isPast &&
                      <img
                        className='w-3/4 rounded-md'
                        src={event?.post?.url} />}
                  </div>
                  <div className="mt-2">
                    {isPast ?
                      <React.Fragment>
                        <div
                          style={{
                            width: "100%",
                            height: "0px",
                            position: "relative",
                            paddingBottom: "56.25%"
                          }}
                        >
                          <iframe
                            width={"100%"}
                            height={"100%"}
                            allowFullScreen={true}
                            src={event?.streamyardLink}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                              left: 0,
                              top: 0,
                              overflow: "hidden"
                            }}
                          />
                        </div>
                      </React.Fragment>
                      :
                      <React.Fragment>
                        <p className="text-sm text-gray-500">
                          {event.content}
                        </p>

                      </React.Fragment>
                    }
                  </div>

                  <div className="mt-4 flex gap-2">
                    {
                      !isPast &&
                      <button
                        className="px-4 py-2 text-sm font-medium rounded-md bg-orange-600 text-white transition-all hover:scale-95 gap-2 flex justify-center items-center"
                        onClick={() => {
                          window.open(event.url, "__blank")
                        }}
                      >
                        <AiOutlineLink />
                        {isPast ? "Register" : "Watch Now"}
                      </button>}
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </React.Fragment>
  )
}

export default EventsCard