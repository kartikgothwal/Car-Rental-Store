import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";

const FirstDesign = () => {
  const FirstDesignSection = styled.section`
    /* border: 2px solid; */
    width: 100%;
    height: 100%;
    padding: 10px 25px;
    font-family: "poppins", "sans-serif";

    .first-design-section {
      width: 100%;
      height: 100%;
      /* border: 2px solid; */
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .first-design-Video {
      height: 100%;
      width: 35rem;
    }
    .first-design-section-container {
      height: 100%;
      padding: 20px;
      /* border: 2px solid; */
      width: 38rem;
      padding: 20px 25px;
    }
    .first-design-section-container h1 {
      font-size: 25px;
      color: var(--black-color);
      padding-bottom: 10px;
    }
    .first-story-first {
      height: 100%;
      width: 100%;
      margin: 10px;
    }
    .first-story-first h3 {
      font-size: 20px;
      color: var(--black-color);
      padding: 10px;
    }
    /* color: var(--text-color);
    font-family: Rubik, sans-serif;
    font-size: 17px;
    line-height: 22px;
    font-weight: 300;
    text-align: left; */
    .first-story-first-content {
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      font-family: "Rubik", "sans-serif";
    }
    .first-story-first-content ul {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
    }
    .first-story-first-content ul li {
      padding: 6px 0;
    }
  `;

  return (
    <>
      <FirstDesignSection>
        <div className="first-design-section">
          <iframe
            className="first-design-Video"
            src="https://www.youtube.com/embed/CUaEHLLit0k"
            title="YouTube video player"
          ></iframe>
          <div className="first-design-section-container">
            <h1>Revolution on Wheels: The Begining 2021</h1>

            <aside>
              <div className="first-story-first">
                <h3> The Genesis of Car Rental Store</h3>
                <span className="first-story-first-content">
                  <ul>
                    <li>
                      SwiftRide Car Rentals is born from the vision of two
                      friends, Alex and Sarah, who aim to revolutionize the car
                      rental industry.
                    </li>
                    <li>
                      Their journey begins with a modest fleet of just five cars
                      and a small office space in a bustling city.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="first-story-first">
                <h3>Accelerating Growth </h3>
                <span className="first-story-first-content">
                  <ul>
                    <li>
                      SwiftRide gains traction as word spreads about their
                      outstanding customer service and affordable rates
                    </li>
                    <li>
                      The company expands its fleet, offering a diverse
                      selection of vehicles to cater to different customer
                      preferences.
                    </li>
                  </ul>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </FirstDesignSection>
    </>
  );
};
const SecondDesign = () => {
  return (
    <>
      <section>hello;</section>
    </>
  );
};
const ThirdDesign = () => {
  return (
    <>
      <section>hello;</section>
    </>
  );
};
const FourthDesign = () => {
  return (
    <>
      <section>hello;</section>
    </>
  );
};

const TimeLine = () => {
  const TimeLineSection = styled.section`
    /* border: 2px solid; */
    height: 78rem;
    width: 100% !important;
    padding: 0px 20px;
    background-color: var(--page-background-color);
    .timeline-container {
      height: 75rem;
      width: 100% !important;
      /* border: 2px solid; */
    }
    .timeline-container-content-heading {
      font-size: 25px;
      font-family: poppins, "sans-serif";
    }
    .timeline-container-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      height: 18rem;
      width: 100%;
    }

    .timeline-container-content-sub-heading {
      font-size: 2.2rem;
      line-height: 4rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      font-family: poppins, "sans-serif";
    }

    .timeline-container-content p {
      color: var(--text-color);
      letter-spacing: 0px;
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 29px;
      font-weight: 500;
      text-align: center;
      width: 38rem;
    }
    .timeline-path-content {
      width: 100%;
      height: 40rem;

      padding: 0px 20px;
    }
    .timeline-path-content-hero {
      /* border: 2px solid; */
      display: flex;
      flex-direction: column;
    }
    .timeline-path-content-hero-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 30rem;
      /* border: 2px solid red; */
      border-radius: 10px;
    }
    .timeline-path-content-hero-content-decider {
      /* border: 2px solid; */
      height: 11rem;
      padding: 20px;
    }
    .timeline-path-content-hero-content-decider-btn {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .timeline-path-content-hero-content-decider-btn button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      outline: none;
      border: none;
      cursor: pointer;
      background-color:#000;
    }
     
    .timeline-path-content-hero-content-decider-btn span {
      height: 22px;
      width: 10rem;
      border-top: 2px solid black;
      position: relative;
      top: 10px;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <TimeLineSection>
        <div className="timeline-container">
          <div className="timeline-container-content">
            <h1 className="timeline-container-content-heading">Our Timeline</h1>
            <h1 className="timeline-container-content-sub-heading">
              In the Bussiness since 2020
            </h1>
            <p>
              Discover a range of fantastic vehicles to rent for your upcoming
              business or leisure travel.
            </p>
          </div>
          <div className="timeline-path-content">
            <div className="timeline-path-content-hero">
              <div className="timeline-path-content-hero-content">
                <FirstDesign />
                {/* <SecondDesign /> */}
                {/* <ThirdDesign /> */}
                {/* <FourthDesign /> */}
              </div>
              <div className="timeline-path-content-hero-content-decider">
                <article className="timeline-path-content-hero-content-decider-btn">
                  <button></button>
                  <span></span>
                  <button></button>
                  <span></span>
                  <button></button>
                  <span></span>
                  <button></button>
                  <span></span>
                  <button></button>
                </article>
              </div>
            </div>
          </div>
        </div>
      </TimeLineSection>
    </>
  );
};

export default TimeLine;
