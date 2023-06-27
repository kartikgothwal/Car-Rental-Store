import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import styled from "styled-components";
import carBgImg from "../images/banner/bg-1.png";
import CarImageDemo from "../images/VehicalCollection/PngItem_135037.png";
import LamborginiLogo from "../images/VehicalCollection/car-logos/Lamborghini_Logo.svg.png";
import PersonIcon from "@mui/icons-material/Person";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CarDetails from "../HomePageComponents/VehicalCollectionDetailsApi";

const PopularCars = () => {
  const PopularCarssection = styled.section`
    .car-collection-container-popular-cars-container {
      /* border: 2px solid; */
      height: 25rem;
      width: 100%;
    }
    .car-collection-container-heading {
      /* border: 2px solid; */
      height: 5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 0;
    }
    .car-collection-container-heading h1 {
      font-size: 2.1rem;
      display: flex;
      align-items: center;
      font-family: "Poppins", san-serif;
    }
    .car-collection-container-heading a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: sans-serif;
      font-weight: bold;
      color: blue;
    }
    .popular-cars {
      /* border: 2px solid; */
      height: 20rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .car-models-collection-container-hero {
      /* border: 2px solid red; */
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      height: 100%;
      width: 25rem;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: var(--page-background-color);
    }
    .car-models-collection-header {
      margin: 13px 13px 0 13px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .car-models-collection-header-figure-hero {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .car-models-collection-header-figure-hero img {
      width: 41px;
      height: 44px;
      margin-right: 4px;
    }
    .car-models-collection-header-headings {
      /* border: 2px solid; */
      font-family: "Poppins";
    }
    .car-models-collection-header-headings h1 {
      font-size: 18px;
      color: var(--black-color);
    }
    .car-models-collection-header-headings p {
      font-size: 15px;
      color: var(--text-color);
      font-family: "Rubik";
    }
    .car-models-collection-header-units {
      /* border: 2px solid; */
      padding: 9px 13px;
      border-radius: 33px;
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      background-color: var(--white-color);
    }
    .car-models-collection-header-units p {
      font-size: 15px;
      color: var(--text-color);
      font-family: "Rubik";
    }
    .car-models-collection-body {
      background: url(${carBgImg});
      background-repeat: no-repeat;
      background-position: 20px -70px;
      background-size: 46rem 45rem;
      width: 100%;
      height: 12rem;
      margin: 0 14px;
    }
    .car-models-collection-body img {
      padding: 24px;
      height: 12rem;
      width: 23rem;
    }
    .car-models-collection-footer {
      background-color: #f5e7e7;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 0 20px;

      justify-content: space-between;
      align-items: center;
    }
    .hero-car-details-first {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 13rem;
      font-size: 14px;
      color: var(--text-color);
    }
    .hero-car-details {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: "Rubik";

    }
    .hero-car-money {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <PopularCarssection>
      <div className="car-collection-container-popular-cars-container">
        <div className="car-collection-container-heading">
          <h1>
            <WhatshotIcon
              style={{ color: "orange", fontSize: "40px", marginRight: "10px" }}
            />
            Popular Cars
          </h1>
          <a href="">
            See All Collection
            <ArrowCircleRightIcon
              style={{ color: "blue", fontSize: "25px", marginLeft: "10px" }}
            />
          </a>
        </div>
        <div className="popular-cars">
          <div className="car-models-collection-container-hero">
            <div className="car-models-collection-header">
              <figure className="car-models-collection-header-figure-hero">
                <img src={LamborginiLogo} alt="logo" />
                <div className="car-models-collection-header-headings">
                  <h1>Chevy Corvette</h1>
                  <p>Turbo S 2021</p>
                </div>
              </figure>
              <div className="car-models-collection-header-units">
                <p>2 units available</p>
              </div>
            </div>
            <div className="car-models-collection-body">
              <img src={CarImageDemo} alt="car-image" />
            </div>
            <div className="car-models-collection-footer">
              <div className="hero-car-details-first">
                <div className="hero-car-details">
                  <PersonIcon />
                  <span>2</span>
                </div>
                <div className="hero-car-details">
                  <MinorCrashOutlinedIcon />
                  <span>Manual</span>
                </div>
                <div className="hero-car-details">
                  <LocalGasStationOutlinedIcon />
                  <span>200mph</span>
                </div>
              </div>
              <div className="hero-car-details">
                <CurrencyRupeeOutlinedIcon />
                <h1>4000/day</h1>
              </div>
            </div>
          </div>

          <div className="car-models-collection-container-hero">
            <div className="car-models-collection-header">
              <figure className="car-models-collection-header-figure-hero">
                <img src={LamborginiLogo} alt="logo" />
                <div className="car-models-collection-header-headings">
                  <h1>Chevy Corvette</h1>
                  <p>Turbo S 2021</p>
                </div>
              </figure>
              <div className="car-models-collection-header-units">
                <p>2 units available</p>
              </div>
            </div>
            <div className="car-models-collection-body">
              <img src={CarImageDemo} alt="car-image" />
            </div>
            <div className="car-models-collection-footer"></div>
          </div>

          <div className="car-models-collection-container-hero">
            <div className="car-models-collection-header">
              <figure className="car-models-collection-header-figure-hero">
                <img src={LamborginiLogo} alt="logo" />
                <div className="car-models-collection-header-headings">
                  <h1>Chevy Corvette</h1>
                  <p>Turbo S 2021</p>
                </div>
              </figure>
              <div className="car-models-collection-header-units">
                <p>2 units available</p>
              </div>
            </div>
            <div className="car-models-collection-body">
              <img src={CarImageDemo} alt="car-image" />
            </div>
            <div className="car-models-collection-footer">
              <div className="hero-car-details">
                <PersonIcon />
              </div>
              <div className="hero-car-details">
                <MinorCrashOutlinedIcon />
              </div>
              <div className="hero-car-money ">
                <LocalGasStationOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PopularCarssection>
  );
};

export default PopularCars;
