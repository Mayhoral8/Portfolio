import React from 'react'

function Projects(props){
   
    const {title, description, media, liveLink, sourceLink} = props
    return(<>
           <article className='flex flex-col space-y-5'>
        <div className='text-white'>
            <h1>{title}</h1>
            <div className='h-32 w-3/4 mx-auto border'>

            </div>
        <p>{description}</p>
        </div>
        <div>
        <button className='bg-blue-600 text-white rounded-md w-40 h-10'>
            <a href=''>Live Deployment</a></button>
        </div>
    </article>

</>)
}

export default Projects