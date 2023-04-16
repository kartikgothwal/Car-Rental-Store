 
import './App.css';
import HomeSection from './component/HomeSection';
import Navbar from './component/Navbar';
import Service from './component/Service';
import Booking from './component/Booking'
import WhyUs from './component/WhyUs';
import VehicalCollection from './component/VehicalCollection';
 


function App() {
  return (
    <>
    <Navbar/>   
    <HomeSection/>
    <Service/>
    <Booking/>
    <WhyUs/>
    <VehicalCollection/>
    </>
  );
}

export default App;
