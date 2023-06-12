import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import {GoMarkGithub} from 'react-icons/go'
import {AiFillTwitterCircle} from 'react-icons/ai'


export default function HeaderSocials() {
  return (
    <div className='header__socials gap-10 pl-5'>
    <a href='https://www.linkedin.com/in/yadvendra-sharma-879746199/' target="_blank"><AiFillLinkedin className="text-[2.5rem]" /></a>
    <a href='https://github.com/yoda-76' target="_blank"><GoMarkGithub className="text-[2.5rem]" /></a>
    <a href='https://twitter.com/Yadvendra__S' target="_blank"><AiFillTwitterCircle className="text-[2.5rem]" /></a>

    </div>
  )
}
