import React from 'react';
import './css/contact.css' ;




 
function Contactus() {

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
        <form action="">
            <input type="text" name="" id=""  placeholder='Enter Your Name' className='forminput'/>
            <input type="email" name="" id=""  placeholder='Enter Your Email' className='forminput'/>
            <textarea name="" id="" cols="30" rows="10"  placeholder='message '  className='forminput' ></textarea>
            <input type="submit" name="" id=""  className='forminput' /> 
        </form> 

        

      </div>
    </>
  );
}

export default Contactus;
