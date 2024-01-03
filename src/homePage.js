import React from "react";
import { Link } from "react-router-dom";
import nodejs from './assets/stack-images/nodejs.png'
import reactjs from './assets/stack-images/reactjs.png'
import mongodb from './assets/stack-images/mongodb.png'
import ts from './assets/stack-images/ts.png'
import ProjectList from "./projects/projectList";
import {PiCaretRightBold} from 'react-icons/pi'
import {RxCaretRight} from 'react-icons/rx'
import Footer from "./footer";


function Homepage(){
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0, left:0 , behavior: "smooth"
          });
    }
    

    return(<>
   <section className="mt-20 lg:mt-28 z-10 w-full">
    <article className="mt-24 text-white lg:ml-10 text-center lg:text-start">
        <h1 className="lg:text-7xl text-6xl font-bold">Hi, I'm Mayowa</h1>
        <p className="mt-4 lg:text-3xl text-3xl px-4 lg:px-0">I am a <span className="text-blue-600">Software Developer</span>, <br/> and I provide custom web solutions for your services. </p>
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
                <img src={ts} alt="reactjs" className="h-16"/>


            </div>
    </article>

    <article className="text-center mt-10">
        <h1 className="text-white text-2xl lg:text-3xl font-bold">Featured Projects</h1>
        <ProjectList type='homepage'/>
        
<article className="w-40 mx-auto">
        <Link to='/projects'>
        <div onClick={scrollToTop} className="text-blue-500 mx-auto cursor-pointer items-center flex flex-row justify-center border-blue-500 border rounded-md h-10 mt-6 lg:mt-10">
        <button>See More</button>
        <span className="mt-1 text-2xl">
       <RxCaretRight/>
        </span>
        </div>
        </Link>
</article>

    </article>
    <article className='text-center mt-16 flex flex-col space-y-5 text-white'>
          
                <h1 className='text-2xl font-bold'>Let's work on your next project </h1>
                <Link to='/contact'>
                <button onClick={scrollToTop} className='bg-green-500 text-xl  h-10 lg:w-1/3 w-3/4 rounded-md text-white'>Contact me</button>
                </Link>


            
        </article>
   </section>
   <div className="mt-4 py-4">

   <Footer/>
   </div>
    </>)
}

export default Homepage