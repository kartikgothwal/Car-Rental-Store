import React from "react";
import aboutHomeImg from "../images/About section images/aboutHome.jpg";
import styled from "styled-components";
const AboutHome = () => {
  const AboutHomeSection = styled.section`
    /* border: 2px solid; */
    height: 41rem;
    width: 100%;
    .AboutHomeSection-container {
      height: 41rem;
      width: 100%;
      /* border: 2px solid; */
      background-image: url(${aboutHomeImg});
      background-position: 50% center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 35rem;
      position: relative;
      width: 100%;
      top: -10rem;
      z-index: -10;
      /* border: 2px solid red; */
      /* opacity: 0.2; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .homeAboutImage {
      background-color: hsla(0, 0%, 100%, 0.8);
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }
    .AboutHomeSection-container-main-content-heading {
      z-index: 1;
      opacity: 1;
      border: 2px solid black;
    }
    .AboutHomeSection-container-hero {
      border: 2px solid;
      position: relative;
      z-index: 100;
    }
  `;

  return (
    <>
      <AboutHomeSection className="AboutHomeSection">
        <div className="AboutHomeSection-container">
          <div className="homeAboutImage"></div>
          <h1 className="AboutHomeSection-container-main-content-heading">
            Fueled by Passion
          </h1>
          <div className="AboutHomeSection-container-hero">
            <div className="AboutHomeSection-container-main-content">
              {/* <h1 className="AboutHomeSection-container-main-content-heading">
                Fueled by Passion
              </h1> */}
            </div>
          </div>
        </div>
      </AboutHomeSection>
    </>
  );
};

export default AboutHome;
