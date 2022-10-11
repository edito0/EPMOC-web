import React from 'react';
import './css/card.css'

function Card() {
  return (
    <div className='card'>
        <img src="https://th.bing.com/th/id/OIP.4CKH_-rDctuu_xyIyGg4fgHaE8?pid=ImgDet&rs=1" alt="" />
        <h1>Name</h1>
        <p>Lorem ipsum dolor sit amet. 
        </p>
        <div className='line'></div>
    </div>
  );
}

export default Card;
