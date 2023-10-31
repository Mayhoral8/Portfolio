import React from "react";
import { Link } from "react-router-dom";
import nodejs from './assets/stack-images/nodejs.png'
import reactjs from './assets/stack-images/reactjs.png'
import mongodb from './assets/stack-images/mongodb.png'
import ProjectList from "./projects/projectList";
import Footer from "./footer";


function Homepage(){

    return(<>
   <section className="mt-20 lg:mt-28 z-10 w-full">
    <article className="mt-24 text-white lg:ml-10 text-center lg:text-start">
        <h1 className="lg:text-7xl text-6xl font-bold">Hi, I'm Mayowa</h1>
        <p className="mt-4 lg:text-3xl text-3xl px-4 lg:px-0">I am a <span className="text-blue-600">Software Engineer</span>, <br/> and I provide custom web solutions for your services. </p>
    </article>
    <article className="grid lg:w-1/2 grid-rows-2 grid-cols-2 gap-x-4 text-xl lg:text-2xl lg:ml-10 px-10 lg:px-0 mt-8 lg:h-32 h-28">
   
        <button className="text-white rounded-md  bg-blue-600">
        <a href="/projects">
        My Projects
        </a>

        </button>
        
        <button className="text-white rounded-md border border-blue-600"><a href="/contact">Get In Touch</a></button>

    </article>

    <article className="mt-8 text-center  ">
        <h1 className="text-white text-2xl lg:text-3xl font-bold">
        My Tech Stack
        </h1>
            <div className="grid grid-flow-col justify-center items-center">
                <img src={nodejs} alt="nodejs" className="h-20"/>
                <img src={reactjs} alt="reactjs" className="h-20"/>
                <img src={mongodb} alt="reactjs" className="h-20"/>


            </div>
    </article>

    <article className="text-center mt-10">
        <h1 className="text-white text-2xl lg:text-3xl font-bold">Featured Projects</h1>
        <ProjectList type='homepage'/>
    </article>
    <article className='text-center space-y-4 text-white'>
          
                <h1 className='text-2xl font-bold'>Let's work on your next project </h1>
                <button className='bg-green-500 text-xl  h-10 w-4/5 rounded-md text-white'>Contact me</button>
            
        </article>
   </section>
    </>)
}

export default Homepage