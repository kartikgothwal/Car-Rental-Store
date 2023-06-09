import React from "react";
import HomeSection from "./HomePageComponents/HomeSection";
// import Navbar from './Navbar';
import Service from "./HomePageComponents/Service";
import Booking from "./HomePageComponents/Booking";
import WhyUs from "./HomePageComponents/WhyUs";
import VehicalCollection from "./HomePageComponents/VehicalCollection";
import HowWorks from "./HomePageComponents/HowWorks";
import Testimonial from "./HomePageComponents/Testimonial";
import FaqsAccordian from "./HomePageComponents/FaqsAccordian";
import Banner from "./HomePageComponents/Banner";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      {/* <Navbar/>    */}
      <HomeSection />
      <Service />
      <Booking />
      <WhyUs />
      <VehicalCollection />
      <HowWorks />
      <Testimonial />
      <FaqsAccordian />
      <Banner />
      <Footer />
    </>
  );
}
