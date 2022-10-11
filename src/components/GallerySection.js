import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "./css/home.css"

const GallerySection = () => {
  return (
    <div>
        <div className="spacer"></div>
        <div className="container-fluid gallery__section">
    <div className="row justify-content-center align-items-center gallery__in flex-column">
      <div className="section__title d-flex justify-content-center align-items-center flex-column">
        <h3 className="section__header text_center">
          View the latest work gallery collection!
        </h3>
      </div>
      <Link to="/gallery" className="btn btn_trans btn_lg">Gallery</Link>
    </div>
  </div>
  <div className="spacer"></div>
    </div>
  )
}

export default GallerySection