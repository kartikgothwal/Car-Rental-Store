import React from "react";
import AboutHome from "./AboutSectionComponents/AboutHome";
// import Navbar from './Navbar'
import Booking from "./HomePageComponents/Booking";
import HomeImg from "./images/About section images/aboutHome2.jpg";
import styled from "styled-components";
import VehicalCollection from './HomePageComponents/VehicalCollectionDetailsApi'
import CarCollection from "./VehicalComponent/CarCollection";
export default function VehicalModels() {
  const Heading1 = styled.h1`
    padding: 0px 20px 40px 54px;
    font-family: Poppins, sans-serif;
    font-size: 2.2rem;
    position: relative;
    top: -20px;
  `;

  return (
    <>
      <AboutHome
        img={HomeImg}
        headingText={"Drive Your"}
        spanText={"Dreams."}
        Subheading={"The Car Collection of Your Dreams"}
      />
      <Heading1>Drive the Car of your dreams</Heading1>
      <Booking vaild={true} />
      <CarCollection />
    </>
  );
}
