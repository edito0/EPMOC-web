import React from 'react'
import GallerySection from './GallerySection'
import Herosection from './Herosection'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Herosection/>
        <GallerySection/>
    </div>
  )
}

export default Home