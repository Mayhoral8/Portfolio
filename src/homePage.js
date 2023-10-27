import React from "react";
import { Link } from "react-router-dom";
import nodejs from './assets/stack-images/nodejs.png'
import reactjs from './assets/stack-images/reactjs.png'
import mongodb from './assets/stack-images/mongodb.png'
import ProjectList from "./projects/projectList";


function Homepage(){

    return(<>
   <section className="mt-20 z-10 h-screen w-full text-center">
    <article className="mt-10 text-white">
        <h1 className="text-3xl font-bold">Hi, I'm Mayowa</h1>
        <p className="mt-4 text-xl">I am a <span className="text-blue-600">Software Engineer</span>, <br/> and I provide custom web solutions <br/> for your services. </p>
    </article>
    <article className="grid grid-cols-2 gap-x-2 px-10 mt-10 h-10">
   
        <button className="text-white rounded-md bg-blue-600">
        <a href="/projects">
        My Projects
        </a>

        </button>
        
        <button className="text-white rounded-md border border-blue-600">Get In Touch</button>

    </article>

    <article className="mt-10 ">
        <h1 className="text-white text-2xl font-bold">
        My Tech Stack
        </h1>
            <div className="grid grid-flow-col justify-center items-center">
                <img src={nodejs} alt="nodejs" className="h-20"/>
                <img src={reactjs} alt="reactjs" className="h-20"/>
                <img src={mongodb} alt="reactjs" className="h-20"/>


            </div>
    </article>

    <article className="text-center mt-10">
        <h1 className="text-white text-2xl font-bold">Featured Projects</h1>
        <ProjectList type='homepage'/>
    </article>
   </section>
    </>)
}

export default Homepage