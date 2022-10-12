import React from 'react';
import facultycoordinator from '../facultycoordinator.json';
import team from '../team.json';
import executives from '../executives.json';
import members from '../members.json';


 
import Card from './Card';
 
import './css/team.css';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
 
function Team() { 

  return (
    <>   
      <div className='team'>
        <Navbar />

        <div className='card__group__container'>

          <h1>FACULTY COORDINATORS</h1>
          <div className='card__container'>
           {
            facultycoordinator.map( data=>{
              return(
                <Card 
                image={data.image}
                name={data.name}
                position={ data.position}/>
              ) 
            })
           }
          </div> 
        
          <h1>TEAM</h1>
          <div className='card__container'>
          {
            team.map( data=>{
              return(
                <Card 
                image={data.image}
                name={data.name}
                position={ data.position}/>
              ) 
            })
           }
          </div>

          <h1> EXECUTIVES</h1>
          <div className='card__container'>
          {
            executives.map( data=>{
              return(
                <Card 
                image={data.image}
                name={data.name}
                position={ data.position}/>
              ) 
            })
           }
          </div>
 
          <h1>MEMBERS</h1>
          <div className='card__container'>
          {
            members.map( data=>{
              return(
                <Card 
                image={data.image}
                name={data.name}
                position={ data.position}/>
              ) 
            })
           }
          </div> 

        </div>


        <Footer/>

      </div>
    </>
  );
}

export default Team;



