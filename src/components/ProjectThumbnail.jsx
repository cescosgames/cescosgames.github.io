import React, { useState } from 'react'
import InfoModal from './InfoModal'

const ProjectThumbnail = ({ imageSrc, altText, projectTitle, projectDescrip, tags, content }) => {
  // for our modal
  const [isOpen, setIsOpen] = useState(false);

  // function for toggling
  const toggleModal = () => {
    setIsOpen((prevState) => !prevState);
  }

  // our color coded tag OBJECT. each key is one of our tags
  const tagColors = {
    React: 'react-gradient',
    Tailwind: 'tailwind-gradient',
    Frontend: 'frontend-gradient',
    Backend: 'backend-gradient',
    Astro: 'astro-gradient',
    CSS: 'css-gradient',
    API: 'api-gradient',
    Unity: 'unity-gradient',
    Godot: 'godot-gradient',
    Aseprite: 'aseprite-gradient',
    AI: 'ai-gradient',
  }; // see our css for the gradients and see our map func to see they keys being used

  return (
    <>
    <div 
      className='relative border-1 bg-almost-white dark:bg-none cursor-pointer dark:bg-almost-black border-black/20 dark:border-white/50 rounded-xl w-full max-h-50 flex flex-col overflow-scroll no-scrollbar sm:opacity-75 hover:opacity-100 transition-all'
      onClick={ () => toggleModal()}
      >

      <div className="relative w-full h-20">
        <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-almost-white dark:to-almost-black opacity-100"></div>
      </div>

      {/* the header */}
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{projectTitle}</div>
        <p className="text-almost-black/50 dark:text-almost-white/50 text-xs">{projectDescrip}</p>
      </div>

      {/* the tools used/tags */}
      <div className='flex flex-wrap justify-left gap-2 mb-3 px-6'>
        {/* map over our tag array, does this not work in astro? */}
        {tags.map((tag, index) => {
          // console.log(Array.isArray(tags), tags[index]); // checking we are mapping correcly
          return ( // don't forget to return each element
          <span
          // don't forget index when mapping!
            key={index}
            // classname is our key + our fallback in case tagColors[tag] doens't return
            className={`px-2 py-1 dark:text-white text-white text-xs text-center rounded-full ${tagColors[tag] || ' bg-gray-500 text-black'}`}
          >
            {tag}
          </span>
          )
        })}
      </div>
    </div>
    {/* the more info pop-up */}
    <InfoModal isOpen={isOpen} toggle={toggleModal} projectTitle={projectTitle} bodyContent={content} />
    </>
  )
}

export default ProjectThumbnail