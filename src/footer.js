import React from 'react'
import {AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'

function Footer (){

    return(<React.Fragment>
        <section className='text-white space-y-10 py-4'>
        <article className='text-2xl flex flex-row justify-center space-x-4'>
            <AiFillGithub/>
            <AiOutlineTwitter/>
            <BiLogoLinkedin/>
        </article>
        </section>
    </React.Fragment>)
}

export default Footer