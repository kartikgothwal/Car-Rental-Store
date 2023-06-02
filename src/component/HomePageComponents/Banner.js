import React from "react";
import styled from "styled-components";
 
export default function Banner() {
  const Banner = styled.section`
    height: 10rem;
    width: 100%;
    /* border: 2px solid; */

    .banner-container {
      height: 10rem;
      width: 100%;
      /* border: 2px solid; */
      padding: 2rem 4rem;
    }
    .banner-content {
      border: 2px solid;
      height: 5rem;
      width: 100%;
      border-radius: 20px;
      background-color: #2b2323;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
    }
  `;

  return (
    <>
      <Banner className="banner">
        <div className="banner-container">
          <div className="banner-content">
            <div className="first-banner">
              
            </div>
            <div className="second-banner"></div>
            <div className="third-banner"></div>
            <div className="fouth-banner"></div>
            <div className="fifth-banner"></div>
          </div>
        </div>
      </Banner>
    </>
  );
}
