import React from 'react'
import { motion } from 'motion/react'

const InfoModal = ({ isOpen, toggle, bodyContent }) => {

  // function to allow us to close the modal clicking/tapping outside
  const handleBGClick = (event) => {
    if(event.target === event.currentTarget) { // this works thanks to event propagation, if the event occurs on the same target it calls
      toggle();
    }
  }


  return (
    <>    {!isOpen ? 
        ''
        :
        <motion.div id="modal" 
          // set our motion
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleBGClick}
          >
          <div className="bg-almost-white dark:bg-almost-black border-2 border-almost-black dark:border-almost-white p-6 rounded-lg shadow-lg md:w-xl w-sm min-w-xs max-h-100 overflow-scroll no-scrollbar">
              {/* break down and display the json here */}

              <div className="relative w-full h-30 mb-5">
                <img src={bodyContent.imagePath} alt='' className="w-full h-full object-cover rounded-t-md" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-almost-white dark:to-almost-black opacity-100"></div>
              </div>

              {/* style us please, image missing */}
              <div className='flex flex-col pb-5 gap-2'>
                <span className='font-bold text-lg w-full'> {bodyContent.projTitle} </span>
                <hr />
                <span className='text-sm'> {bodyContent.intro} </span>
                <span className=''> {bodyContent.body} </span>
                <span className=''> {bodyContent.conclusion} </span>
              </div>

              {/* close and live button here */}
              <div className='flex gap-5'>
                <button
                onClick={() => toggle()}
                className="w-full cursor-pointer bg-blue-400 text-white rounded hover:bg-blue-800 transition py-3">
                Close
                </button>
    
                {/* if we have a live link, render live link button */}
                {bodyContent.link ?
                  <div className="w-full cursor-pointer bg-blue-400 text-white rounded hover:bg-blue-800 transition text-center">
                    <a href={bodyContent.link} target='_blank' className='w-full block py-3'>Demo</a>
                  </div>
                  :
                  ''
                }

                {/* if we have a github link, render github link button */}
                {bodyContent.githubLink ?
                  <div className="w-full cursor-pointer bg-blue-400 text-white rounded hover:bg-blue-800 transition text-center">
                    <a href={bodyContent.githubLink} target='_blank' className='w-full block py-3'>GitHub</a>
                  </div>
                  :
                  ''
                }

              </div>

          </div>
        </motion.div>
    }
</>

  )
}

export default InfoModal