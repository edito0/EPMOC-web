import React from 'react'
import "./css/footer.css"
import Logo from "./../black.png"

const Footer = () => {
  return (
    <div>
        <section className="section section--sign-up">
        <div className="section__title">
            <h3 className="section__header">
                Left any query in mind!
            </h3>
        </div>
        <a href="/" className="btn btn_trans btn_lg btn_rounded">Contact Us Today!</a>
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
            <a className="footer__link twitter-link" target="_blank" href="/"> EOMOC</a>. All Rights Reserved
        </p>
    </footer>
    </div>
  )
}

export default Footer