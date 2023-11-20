import React from 'react'
import {AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {Link} from 'react-router-dom'

function Footer (){

    return(<React.Fragment>
        <section className='text-white'>
        <article className='text-2xl flex flex-row justify-center space-x-4 lg:space-x-10'>
            <a href='https://github.com/Mayhoral8' target='blank'>
            <AiFillGithub/>
            </a>
            
            <a href='https://twitter.com/ayeni_dave' target='blank'>
            <AiOutlineTwitter/>
            </a>
            <a href='https://www.linkedin.com/in/mayowa-ayeni-53b4591b2/' target='blank'>
            <BiLogoLinkedin/>
            </a>
        </article>
        </section>
    </React.Fragment>)
}

export default Footer