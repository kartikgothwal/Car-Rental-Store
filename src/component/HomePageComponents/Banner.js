import React from "react";
import styled from "styled-components";

import MahindraImage from "../images/banner/tesla.png";
import MercedesImage from "../images/banner/Mercedes_logo_PNG19.png";
import lamboImage from "../images/banner/Lamborghini_logo_PNG1.png";
import PorcheImage from "../images/banner/Porsche_logo_PNG5.png";
import ScionImage from "../images/banner/Scion_logo_PNG8.png";
import LexusImage from "../images/banner/Lexus_logo_PNG9.png";
import VolkswagenImage from "../images/banner/Volkswagen_logo_PNG9.png";
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
      height: 6rem;
      width: 100%;
      border-radius: 20px;
      background-color: #2b2323;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: white;
    }
    .banner-content img {
      height: 50px;
      width: 53px;
    }
  `;

  return (
    <>
      <Banner className="banner">
        <div className="banner-container">
          <div className="banner-content">
            <div className="first-banner">
              <img src={LexusImage} alt="This is an image" />
            </div>
            <div className="second-banner">
              <img src={MahindraImage} alt="This is an image" />
            </div>
            <div className="third-banner">
              <img src={MercedesImage} alt="This is an image" />
            </div>
            <div className="fouth-banner">
              <img src={lamboImage} alt="This is an image" />
            </div>
            <div className="fifth-banner">
              <img src={PorcheImage} alt="This is an image" />
            </div>
            <div className="sixth-banner">
              <img src={ScionImage} alt="This is an image" />
            </div>
            <div className="sixth-banner">
              <img src={VolkswagenImage} alt="This is an image" />
            </div>
          </div>
        </div>
      </Banner>
    </>
  );
}
