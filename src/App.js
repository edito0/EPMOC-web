import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Team from './components/Team';
import Home from './components/Home';
import Gallery from './components/Gallery/Gallery';


 
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> 
          </Route>
          <Route path="/team" element={<Team />}>
          </Route>
          <Route path="/gallery" element={<Gallery />}>
          </Route>
        </Routes>
      </BrowserRouter> 

    </>
  );
}

export default App;
