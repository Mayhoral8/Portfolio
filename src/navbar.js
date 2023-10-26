import React, {useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import {FaXmark} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './navbar.css'


function Navbar(){
    const [show, setShow] = useState(false)

    const showHandler = ()=>{
            setShow(!show)
    }
return(<React.Fragment>
    <section className={`px-4 ${show ? 'h-screen' : 'h-16'} top-0 main fixed z-30 left-0 right-0 transition-all delay-400 duration-300 pt-2 lg:h-16 w-full flex flex-col lg:flex-row lg:justify-between lg:items-center`}>
        <div className='flex flex-row justify-between w-full items-center'>
            <Link to='/'>
            <h1 className=' text-white font-bold text-2xl'>
            mayhoral.dev
            </h1>
            </Link>
        {!show ? <FiMenu onClick={showHandler} className='text-white cursor-pointer font-bold text-2xl lg:hidden'/> : <FaXmark onClick={showHandler} className='text-white cursor-pointer font-bold text-2xl lg:hidden'/> }
        </div>
        <article className={`${show ? 'visible' : 'hidden'} flex flex-col justify-evenly items-center h-screen lg:h-0 lg:flex lg:flex-row  lg:space-x-5`}>
            <div className='flex flex-col  text-white lg:flex-row lg:space-x-10'>
               <span className='text-2xl h-1/2'>Projects</span>
            </div>
            <div className='text-white'>
               <span className='text-2xl h-1/2'>Contact</span>
            </div>
               
        </article>
    </section>
</React.Fragment>)
}
export default Navbar