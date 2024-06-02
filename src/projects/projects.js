import React from 'react'
import Footer from '../footer';

function Projects(props){
   
    const {title, description, media, liveLink, sourceLink, order} = props

    return(<>
           <article className='flex lg:flex-row flex-col space-y-5 lg:px-10 lg:mx-0 mx-auto mt-10'>
           <div className={`h-32 lg:h-72 rounded-md lg:w-1/2 flex justify-center lg:justify-start ${order && 'lg:order-2'}`}>
        <div className='text-white w-3/4 lg:w-full rounded-md border'>
            <img src={media} className='w-full h-full' />

        </div>

            </div>
            <div className={`lg:ml-auto w-1/2 text-center  grid  grid-flow-row space-y-4 order-1 mx-auto lg:mx-0`}>
            <h1 className=' text-white font-bold text-lg'>{title}</h1>
            <p className='text-white lg:px-10'>{description}</p>
        <div>
        <button className='bg-blue-600 text-white rounded-md w-40 h-10'>
            <a href={liveLink} target='blank'>Live Deployment</a></button>
        </div>
            </div>
           
    </article>
  
</>)
}

export default Projects