import React from 'react';
import PropTypes from 'prop-types'; 
import './css/card.css'

function Card(props) {
  return (
    <div className='card'>
      <img  src={props.image} alt="" />
      <h1>{props.name}</h1>
      <p>{props.position}
      </p>

      <div className="social__media__icon">
        <a href="https://instagram.com/vediksat"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/vediksat"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com/company/medilance"> <i class="fa-brands fa-linkedin-in"></i> </a>
      </div>
      <div className='line'></div>
    </div>
  );
}

export default Card;


Card.propTypes = {
        image : PropTypes.string    , 
        name : PropTypes.string    ,  
        position : PropTypes.string
}

Card.defaultProps = {
        image : 'https://th.bing.com/th/id/OIP.4CKH_-rDctuu_xyIyGg4fgHaE8?pid=ImgDet&rs=1', 
        name : 'Name',
        position : 'member' 
}