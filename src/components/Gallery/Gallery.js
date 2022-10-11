import React,{useState} from 'react'
// import images from "./../../Jsons/Images.json"
import styles from "./../../style.module.css"
import '../css/home.css'
import MasonryLayout from './MasonryLayout'
import ContainerCard from './../ContainerCard/ContainerCard';
// import Dropdown from './../Elements/Dropdown/Dropdown';

import images from "./../../Jsons/Images.json"
import Navbar from '../Navbar';

const Gallery = () => {
        
    //   const [categoryImage, setCategoryImage] = useState(images.categories.all)
    
          


  return (
    <div className='gallery' style={{backgroundColor:"#202B3D "}}> 
      <Navbar/>
        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
          <ContainerCard>
              <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                {/* <h1>All images</h1> */}
              </div>
              <MasonryLayout images={images} />
          </ContainerCard>
        </div>
    </div>
  )
}

export default Gallery