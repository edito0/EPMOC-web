import React from 'react'
import "./css/footer.css"
import Logo from "./../black.png"
import Contactus from './Contactus'

const Footer = () => {
  return (
    <div>
        <section className="section section--sign-up">
        <div className="section__title">
            <h3 className="section__header">
                Left any query in mind!
            </h3>
        </div>
        <Contactus/>
    </section>

    <footer className="footer">
        <ul className="footer__nav">
            <li className="footer__item">
                <a className="footer__link" href="/">About</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="/">Privacy Policy</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="/">Gallery</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="/">Services</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="/">Contact Us</a>
            </li>
        </ul>
        <img src={Logo} alt="Logo" className="footer__logo" />
        <p className="footer__copyright">
            &copy; Copyright 2022
            <a className="footer__link twitter-link" target="_blank" href="/"> EPMOC</a>. All Rights Reserved
        </p>
 
    <div className="social__media__icon">
        <a href="https://instagram.com/vediksat"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/vediksat"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/company/medilance"> <i class="fa-brands fa-linkedin-in"></i> </a>
    </div>

    </footer>
    </div>
  )
}

export default Footer