import React from "react";
import aboutHomeImg from "../images/About section images/aboutHome.jpg";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import WhyUs from "../HomePageComponents/WhyUs";
import { AiFillCar } from "react-icons/ai";
import { FaPiggyBank, FaThumbsUp } from "react-icons/fa";
const AboutHome = () => {
  const AboutHomeSection = styled.section`
    border: 2px solid;
    height: 100rem;
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
            <h1></h1>
            <div className="AboutHomeSection-container-main-content-hero">
              <WhyUs
                title={"Why Choose Us"}
                semiTitle={
                  "From short day trips to long family vacations, we have the perfect car for you."
                }
                para={
                  "Our car rental store offers a convenient and affordable solution for your transportation needs. With a variety of vehicles to choose from and flexible rental periods, we make it easy for you to get around.From short day trips to long family vacations, we have the perfect car for you."
                }
                icon1={<AiFillCar />}
                icon2={<FaPiggyBank />}
                icon3={<FaThumbsUp />}
                point1={"Wide range of vehicles"}
                point2={"Competitive pricing"}
                point3={"Exceptional service"}
                point1para={
                  "We offer a wide selection of well-maintained vehicles to meet the diverse needs of our customers, from small economy cars to luxurious SUVs."
                }
                point2para={
                  "Our pricing is highly competitive, ensuring that you get the best value for your money."
                }
                point3para={
                  "Our friendly and knowledgeable staff is always ready to assist you in making the right ice and providing any necessary support during your rental period."
                }
              />
            </div>
          </div>
        </section>
      </AboutHomeSection>
    </>
  );
};

export default AboutHome;
