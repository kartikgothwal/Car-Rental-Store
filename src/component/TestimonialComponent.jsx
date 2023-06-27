import React from "react";
import styled from "styled-components";
import Testimonial from "./HomePageComponents/Testimonial";
import AboutHome from "./AboutSectionComponents/AboutHome";
import HomeImg from "./images/About section images/aboutHome2.jpg";
import Footer from './Footer';

const TestimonialComponent = () => {
  const TestimonialComponent = styled.section``;

  return (
    <>
      <AboutHome
        img={HomeImg}
        headingText={"Drive Your"}
        spanText={"Dreams."}
        Subheading={"The Car Collection of Your Dreams"}
      />
      <Testimonial />
      <Footer />
    </>
  );
};

export default TestimonialComponent;
