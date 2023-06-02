import React from "react"
import "./Footer.css"
import { AiFillLinkedin } from 'react-icons/ai';
import {GoMarkGithub} from 'react-icons/go'
import {AiFillTwitterCircle} from 'react-icons/ai'


export default function Footer(){
    return (
        <footer>
            <a href="#" className="footer__logo">Yoda</a>
            <ul className="permalinks">
                <li> <a href="#">Home</a> </li>
                <li> <a href="#about">About</a> </li>
                <li> <a href="#experience">Experience</a> </li>
                <li> <a href="#service">Service</a> </li>
                <li> <a href="#portfolio">Portfolio</a> </li>
                <li> <a href="#contact">Contact Me</a> </li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/yadvendra-sharma-879746199/"><AiFillLinkedin/></a>
                <a href="https://github.com/yoda-76"><GoMarkGithub/></a>
                <a href="https://twitter.com/Yadvendra__S"><AiFillTwitterCircle/></a>

            </div>

            <div className="footer__copyright">
                <small>&copy; Yadvendra Sharma. All rights reserved.</small>
            </div>
        </footer>
        )
}
