import React, { useState } from "react";
import styled from "styled-components";
import { question } from "./MyFaqsAccordianQuestions";
import MyfaqsAccordian from "./MyfaqsAccordian";

export default function FaqsAccordian(props) {
  const MainSection = styled.section`
    /* border: 2px solid; */
    height: 50rem;
    .faqContainer {
      display: flex;
      flex-direction: column;
      position: relative;
      top: 3rem;
      height: 50rem;
    }
    .faq-Page-Heading {
      text-align: center;
      font-size: 1.65rem;
      text-transform: capitalize;
    }
    .faq-Page-Sub-Heading {
      font-size: 2.5rem;
      letter-spacing: 1px;
      text-transform: capitalize;
      text-align: center;
    }
    .faq-Page-para-Heading {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      text-align: center;
      margin: 10px;
      padding: 0 15rem;
    }
    .faq-page-content {
      margin: 1rem 0;
      /* border: 2px solid; */
      height: 29rem;
      width: 100%;
      padding: 2rem 0;
      display: flex;
      justify-content: center;
    }
    .faq-content-div-box {
      display: flex;
      justify-content: center;
      /* border: 2px solid; */
      width: 100%;
    }
    .faq-content-div-box-content {
      /* border: 2px solid; */
      /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1); */
      width: 50rem;
      width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 7px;
    }
    .faq-content-div-box-hero {
      display: flex;
      flex-direction: column;
      justify-content: left;
      height: 10rem;
      /* align-items: center; */
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
      /* border: 2px solid; */
      transition: max-height 0.5s ease;

    }
    .faq-content-div-box-hero-main {
      display: flex;
      justify-content: left;
      align-items: center;
      /* border: 2px solid; */
      gap: 2rem;
      height: 4rem;
      padding: 8px 32px;
      cursor: pointer;
    }
    .faq-content-div-box-hero-main p {
      cursor: pointer;
      border-radius: 50%;
      padding: 7px;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      /* transition: 0.5s ease; */
      /* color: ${props => (props.show ? "white" : "black")}; */
      
    }
    .question  {
      cursor: pointer;
    }
    .answers {
      transition: 0.5s ease;
      color: var(--text-color);
    font-family: Rubik, sans-serif;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
    margin: 10px;
    text-align: left;
    margin: 10px;
    padding: 10px 10px 10px 40px;
    }
  `;
  const [data, setData] = useState(question);

  return (
    <>
      <MainSection className="faqPage">
        <div className="faqContainer">
          <h1 className="faq-Page-Heading">FAQ</h1>
          <h1 className="faq-Page-Sub-Heading">Frequently Asked Questions</h1>
          <p className="faq-Page-para-Heading">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
          <div className="faq-page-content">
            <div className="faq-content-div-box">
              <div className="faq-content-div-box-content">
                {data.map((CurrElement) => {
                  return (
                    <MyfaqsAccordian key={CurrElement.id} {...CurrElement} />
                  );
                })}
              </div>
              <div className="faq-bg-img">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </>
  );
}
