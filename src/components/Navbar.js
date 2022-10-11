import React from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

  function menu() {
    const humbuerger = document.querySelector('.humburger');
    const humbuergerLine = document.querySelectorAll('.humburger-line');

    humbuergerLine.forEach((element) => {
      element.classList.toggle('menu');
    });

    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('navbar-menu');
  }



  return (
    <>
      <div className='navbarcontainer'>

        <div className='navbar'>
          <div className='logo'>

          </div>
          <div className='items'>
            <ul>
              <li><Link to="/">HOME</Link><div className='underline'></div></li>
              <li><Link to="/">EVENTS</Link><div className='underline'></div></li>
              <li><Link to="/team">TEAM</Link><div className='underline'></div></li>
              <li><Link to="/">CONTACT US</Link><div className='underline'></div></li>
              <li><Link to="/gallery">Gallery</Link><div className='underline'></div></li>
            </ul>
          </div>

        </div>

        <div className='humburger' onClick={menu}>
          <div className='humburger-line'></div>
          <div className='humburger-line'></div>
          <div className='humburger-line'></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
