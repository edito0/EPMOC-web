import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Team from './components/Team';
import Home from './components/Home';



function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/team" element={<Team />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
