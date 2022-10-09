import React, { useState } from 'react';
import './css/herosection.css';
import introLogoUpper from '../EPMOC LOGO-upper.png'
import introLogoLower from '../EPMOC LOGO-lower.png'

function Herosection() {

    const [title, setTitle] = useState('');

    function introPlay(x) {
        const introLogo = document.querySelector('.intro_logo');
        const logoLower = document.querySelector('.logolower');
        const logoUpper = document.querySelector('.logoupper');
        const clubTitle = document.querySelector('.clubTitle');

        introLogo.classList.toggle('introPlay');
        logoLower.classList.toggle('logolowerMove');
        logoUpper.classList.toggle('logoupperMove');
        clubTitle.classList.toggle('clubTitleVisible');

        setTitle(x);

    }





    return (
        <>
            <div className='intro'>
                <div className='intro_logo'>
                    <img src={introLogoUpper} className='logoupper' alt="" />
                    <img src={introLogoLower} className='logolower' alt="" />
                    <p className='clubTitle'>{title}</p>
                </div>
                <div className='intro_name' >
                    <p className='intro_para main_para' onClick={() => introPlay('EVENT')}> E</p>
                    <p className='intro_para'> P</p>
                    <p className='intro_para main_para' onClick={() => introPlay('MANAGEMENT')}> M</p>
                    <p className='intro_para'> O</p>
                    <p className='intro_para main_para' onClick={() => introPlay('CLUB')} > C</p>
                </div>
                <p style={{fontSize:'10px'}}>Tap On Gray Alphabet to Learn more about us</p>
            </div>
        </>
    );
}

export default Herosection;



