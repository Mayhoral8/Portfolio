import React from 'react'
import {AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'

function Footer (){

    return(<React.Fragment>
        <section className='text-white'>
        <article className='text-2xl flex flex-row justify-center space-x-4 lg:space-x-10'>
            <AiFillGithub/>
            <AiOutlineTwitter/>
            <BiLogoLinkedin/>
        </article>
        </section>
    </React.Fragment>)
}

export default Footer