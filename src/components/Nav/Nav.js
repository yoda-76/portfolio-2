import React, {useState} from 'react'
import "./Nav.css"
export default function Nav() {
  const [active,setActive]=useState("home")
  const clickHandler=(e)=>{
    setActive(e.target.name)
  }
  return (
    <nav>
      <a name="home" onClick={clickHandler} href='#' className={active=="home"?"active":""}>Home</a>
      <a name="about" onClick={clickHandler} href='#about' className={active=="about"?"active":""}>about</a>
      <a name="services" onClick={clickHandler} href='#services' className={active=="services"?"active":""}>services</a>
      <a name="contact" onClick={clickHandler} href='#contact' className={active=="contact"?"active":""}>contact</a>


    </nav>
  )
}
