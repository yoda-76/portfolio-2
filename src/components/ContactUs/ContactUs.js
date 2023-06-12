import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import "./ContactUs.css"
import {AiTwotoneMail} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

export default function ContactUs() {

    
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_053iy3d', 'template_kweexvx', form.current, '00o5Rc2ipt69UwAvh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();

    };
  return (
    <section id='contact'>
      <h5 className='text-[2rem]'>Get In Touch</h5>
      <h2 className='text-[4rem]'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option flex flex-col items-start gap-2 w-auto'>
            <h1 className='contact__option-icon'><AiTwotoneMail></AiTwotoneMail></h1>
            <h4>E-Mail</h4>
            <h5 className='text-[1.25rem]'>yadvendras20@gmail.com</h5>
            <a className="border-2 border-whtite rounded-md py-1 px-5" href='mailto:yadvendras20@gmail.com'>Send a mail!</a>
          </article>

          <article className='contact__option flex flex-col items-start gap-2 w-auto'>
            <h1 className='contact__option-icon'><IoLogoWhatsapp/></h1>
            <h4>WhatsApp</h4>
            <h5 className='text-[1.25rem]'>Just click below</h5>
            <a className="border-2 border-whtite rounded-md py-1 px-5" href='https://wa.me/+919711712435'>Send a Message</a>
          </article>          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name='message' rows='7' placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary py-4 px-10'>Send Message</button>

        </form>
      </div>
    </section>
  )
}
