import React from "react";
import aboutHomeImg from "../images/About section images/aboutHome.jpg";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import WhyUs from "../HomePageComponents/WhyUs";
import { GrUserExpert, GrStatusGood, GrUpgrade } from "react-icons/gr";
import TimeLine from "./TimeLine";

const AboutHome = () => {
  const AboutHomeSection = styled.section`
    /* border: 2px solid; */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .AboutHomeSection-container {
      position: relative !important;
      right: 0;
      top: -8rem;
      height: 31rem;
      width: 100%;
      /* border: 2px solid; */
      background-image: url(${aboutHomeImg});
      background-position: 50% center;
      background-repeat: no-repeat;
      background-size: cover;
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
      /* border: 2px solid black; */
      height: 38rem;
      position: relative;
      top: -5rem;
    }
    .why-us-heading {
      font-size: 40px;
      color: var(--btn-background-color);
    }

    .why-us-heading2 {
      font-size: 2rem;
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
            <div className="AboutHomeSection-container-main-content-hero">
              <WhyUs
                title={"Our Story"}
                semiTitle={
                  "Drive Beyond Limits, Unleash Your Epic Automotive Adventures!"
                }
                para={`In a bustling city, "Wheels on the Go" car rental store provided seamless journeys. With a diverse fleet and passionate team, they catered to wanderlust souls and adventure enthusiasts. From family getaways to business ventures, their well-maintained vehicles became reliable companions, carrying dreams and cherished memories.`}
                icon1={<GrUserExpert />}
                icon2={<GrUpgrade />}
                icon3={<GrStatusGood />}
                point1={"3 years of rental experience"}
                point2={"Continuously upgrading our fleet"}
                point3={"Audience segmentation "}
                point1para={`With over three years of rental experience. Trust us to deliver reliable vehicles, exceptional service, and unforgettable memories`}
                point2para={
                  "Continuously upgrading our fleet for latest models and ensure a comfortable and stylish ride."
                }
                point3para={
                  "Utilizing audience segmentation to tailor our services and deliver personalized experiences that exceed expectations."
                }
              />
            </div>
          </div>
        </section>
        <TimeLine />
      </AboutHomeSection>
    </>
  );
};

export default AboutHome;
