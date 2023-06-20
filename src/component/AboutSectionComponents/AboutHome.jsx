import React from "react";
import aboutHomeImg from "../images/About section images/aboutHome.jpg";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
const AboutHome = () => {
  const AboutHomeSection = styled.section`
    border: 2px solid;
    height: 60rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    .AboutHomeSection-container {
      position: relative !important;
      right: 0;
      top: -8rem;
      height: 41rem;
      width: 100%;
      /* border: 2px solid; */
      background-image: url(${aboutHomeImg});
      background-position: 50% center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 35rem;
      width: 100%;
      z-index: -10;
      display: flex;
      flex-direction: column;
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
      font-size: 2rem;
      text-transform: capitalize;
    }
    .lmfpEo,
    .AboutHomeSection-container-main-content-heading span {
      color: var(--btn-background-color);
    }
    .AboutHomeSection-container p {
      display: block;
      text-transform: capitalize;
      z-index: 1;
      opacity: 1;
      font-size: 2rem;
    }
    .AboutHomeSection-container-hero {
      border: 2px solid black;
      height: 20rem;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <AboutHomeSection className="AboutHomeSection">
        <div className="AboutHomeSection-container">
          <div className="homeAboutImage"></div>
          <h1 className="AboutHomeSection-container-main-content-heading">
            FUELED BY <span>PASSION.</span>
          </h1>
          <br />
          <p>reliable, convenient & valued </p>
        </div>
        <section className="AboutHomeSection-container-hero">
          <div className="AboutHomeSection-container-main-content">
            <h1 ></h1>
            <div className="AboutHomeSection-container-main-content-hero">
              
              <div className="AboutHomeSection-container-main-content-hero-first">
                
              </div>
              <div className="AboutHomeSection-container-main-content-hero-second">

              </div>
            </div>
          </div>
        </section>
      </AboutHomeSection>
    </>
  );
};

export default AboutHome;
