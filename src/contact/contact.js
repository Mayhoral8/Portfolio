import React from 'react'
import contact from '../assets/contact-image/contact.png'
import Footer from '../footer'
function Contact(){

    return(
        
    <section className='flex flex-col justify-between h-screen py-4'>
        <div>

            <h1 className='mt-20 text-center text-4xl text-white font-bold'>How Can I Help?</h1>
            <p className='text-center text-white px-4 mt-5'>Send me a message and <br/>I'd get back to you ASAP!</p>
            <article className='lg:grid lg:grid-cols-2 lg:mt-0 h-1/2 mt-16 lg:px-2'>
            <form className='lg:order-2 px-6  lg:w-full lg:mx-auto grid grid-flow-row h-80 lg:h-72 space-y-4 mt-10'>
                <input placeholder='Name' type='text'  className='bg-black border text-white
                 focus:outline-none px-4'/>
                <input value='' placeholder='Email' type='email' className='bg-black border border-white focus:outline-none px-4'/>
                <textarea  placeholder ='Write your message' className='text-white bg-black border border-white focus:outline-none px-4 h-28'/>
                <button className='text-white bg-blue-500 rounded-md text-xl'>Send</button>
            </form>
            <div className='lg:mx-auto lg:order-1 lg:block hidden'>
                <img src={contact} className='w-full h-96'/>
            </div>
                 </article>
        </div>
                 <div className='block mt-auto py-4'>

                 <Footer/>
                 </div>
                
    </section>
    )
}
export default Contact