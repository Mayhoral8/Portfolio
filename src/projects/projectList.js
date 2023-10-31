import React from "react";
import Projects from "./projects";
import { projectData } from "./project-data";

function ProjectList({type}){
    console.log(type);
    return(<>
    <section className='flex flex-col space-y-20 mt-16 text-center'>
    {projectData.map((obj, index)=>{
        const order = index % 2 === 0
        if(type === 'homepage' && index <= 2){   
            
            return <Projects order= {order} title={obj.title} description={obj.description} media={obj.media} liveLink={obj.liveLink} sourceLink={obj.sourceLink} key={obj.id} />
        } else if(!type){
            return <Projects  order= {order} title={obj.title} description={obj.description} media={obj.media} liveLink={obj.liveLink} sourceLink={obj.sourceLink} key={obj.id} />
        }
    })
}
</section>
    </>)
}

export default ProjectList