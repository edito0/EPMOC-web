import React from 'react';
import './css/hero.css';
import heroimage from '../5031661-ai.png';

function Hero() {
  return (
    <>
     <div className='container'>
        <div className='box-1'>
            
           <div className='box-text-1'>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
           </div>
           <div className='box-text-2'>
            <span>M</span>
            <span>A</span>
            <span>N</span>
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
           </div>
           <div className='box-text-3'>
            <span>C</span>
            <span>L</span>
            <span>U</span>
            <span>B</span>
           </div>

           <button>CONTACT</button>
        </div>

        <div className='box-2'>
            <img src={heroimage}   alt="" />
        </div>

        <div className='scroll-mark'><span>SCROLL</span> <span>-></span></div>
     </div>
 
              
      
    </>
  );
}

export default Hero;
