
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicalModels from './component/VehicalModels';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route exact path='/about' element={<About />} /> 
          <Route exact path='/about' element={<About />} /> 
          <Route exact path='/vehicalsmodels' element={<VehicalModels />} /> 
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
