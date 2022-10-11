import './App.css';
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home';
import Team from './components/Team/Team';

function App() {
  return (
    <>
    <Router>
      <div className='bg'>

        <svg className='backgrounddrop' viewBox="0 0 1440 606" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2_37)">
            <path d="M1147.79 51.0092C1291.11 85.3551 1402.31 232.925 1440 212.271V-1H0V481.888C8.97351 459.121 43.6316 421.725 138 486.123C232.368 550.522 312.919 508.006 340.749 481.888C444.332 384.678 410.416 365.843 565.819 369.099C728.81 372.514 827 215.77 889.5 152.304C927.676 113.538 1004.48 16.6634 1147.79 51.0092Z" fill="#2B3A52" />
          </g>
          <defs>
            <filter id="filter0_d_2_37" x="-47" y="-9" width="1534" height="615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="39" />
              <feGaussianBlur stdDeviation="23.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_37" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_37" result="shape" />
            </filter>
          </defs>
        </svg>
   

        <Navbar />
         <Hero/> 

         </div>
         
         
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/gallery" element={ <Gallery/>}></Route>
          <Route exact path="/team" element={ <Team/>}></Route>
      </Routes>
        
         <Footer/>
      </Router>
      

    </>
  );
}

export default App;
