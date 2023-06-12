import React from "react";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="py-[3rem]">
      <a href="#" className="footer__logo text-[3rem] mb-5">
        Yadvendra
      </a>
      <ul className="permalinks text-[1.25rem] mb-5">
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#service">Service</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact">Contact Me</a>{" "}
        </li>
      </ul>
      <div className="footer__socials gap-10 flex mb-10">
        <a  href="https://www.linkedin.com/in/yadvendra-sharma-879746199/ ">
          <AiFillLinkedin className="text-[2rem]"  />
        </a>
        <a href="https://github.com/yoda-76 ">
          <GoMarkGithub className="text-[2rem]"  />
        </a>
        <a href="https://twitter.com/Yadvendra__S ">
          <AiFillTwitterCircle className="text-[2rem]" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yadvendra Sharma. All rights reserved.</small>
      </div>
    </footer>
  );
}
