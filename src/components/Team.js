import React from 'react';
import Card from './Card';
import './css/team.css';
import Navbar from './Navbar';

function Team() {
  return (
    <>
      <div className='team'>
       <Navbar/>

         <div className='card__container'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

         </div>

      </div>
    </>
  );
}

export default Team;
