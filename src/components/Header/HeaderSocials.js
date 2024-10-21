import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
// import {GoMarkGithub} from 'react-icons/go'
import { FaGithub } from "react-icons/fa";

import {AiFillTwitterCircle} from 'react-icons/ai'


export default function HeaderSocials() {
  return (
    <div className='header__socials gap-10 pl-5'>
    <a href='https://www.linkedin.com/in/yadvendras/' target="_blank"><AiFillLinkedin className="text-[2.5rem]" /></a>
    <a href='https://github.com/yoda-76' target="_blank"><FaGithub  className="text-[2.5rem]" /></a>
    <a href='https://x.com/call_me_yoda__' target="_blank"><AiFillTwitterCircle className="text-[2.5rem]" /></a>

    </div>
  )
}
