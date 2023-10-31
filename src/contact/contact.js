import React from 'react'
import contact from '../assets/contact-image/contact.png'
import Footer from '../footer'
function Contact(){

    return(
        
    <section className='my-auto h-screen '>
            <h1 className='mt-20 lg:mt-28 text-center text-4xl text-white font-bold'>How Can I Help?</h1>
            <p className='text-center text-white px-4 mt-5'>Send me a message and <br/>I'd get back to you ASAP!</p>
            <article className='lg:grid lg:grid-cols-2 lg:px-2'>
            <form className=' px-6  lg:w-full lg:mx-auto grid grid-flow-row h-72 space-y-4 mt-10'>
                <input placeholder='Name' type='text'  className='bg-black border text-white
                 focus:outline-none px-4'/>
                <input value='' placeholder='Email' type='email' className='bg-black border border-white focus:outline-none px-4'/>
                <textarea value='' placeholder ='Write your message' className='bg-black border border-white focus:outline-none px-4 h-20'/>
                <button className='text-white bg-blue-500 rounded-md text-xl'>Send</button>
            </form>
            <div className='lg:mx-auto lg:block hidden'>
                <img src={contact} className='w-96 h-96'/>
            </div>
                 </article>
                
    </section>
    )
}
export default Contact