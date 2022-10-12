import React from 'react';
import './css/contact.css';
import emailjs from 'emailjs-com';


function Contactus() {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g0ijg1g', 'template_ro1k8rr',e.target, 'Nkl3iSyx8GRemXGPa')
      .then((result) => {
        console.log(result.text); 
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };




  window.addEventListener('scroll', () => {
    const contact = document.querySelector('.contact');
    const section = document.querySelectorAll('.forminput');
    const contentHeight = contact.getBoundingClientRect().top;

    const screenPosition = window.innerHeight;

    if (contentHeight < screenPosition) {
      section.forEach(e => {
        e.classList.add('forminput__active');
      })
    }
  });

  return (
    <>
      <div className='contact' id='contact'>
        <form onSubmit={sendEmail} > 
          <input type="text" name="name" id="" placeholder='Enter Your Name' className='forminput' />
          <input type="email" name="email" id="" placeholder='Enter Your Email' className='forminput' />
          <textarea name="message" id="" cols="30" rows="10" placeholder='message ' className='forminput' ></textarea>
          <input type="submit" value="Send Message" className='forminput' /> 
        </form>
      </div>
    </>
  );
}

export default Contactus;
