import React from "react";
import carBgImg from "../images/banner/bg-1.png";
import styled from "styled-components";
import CarImageDemo from "../images/VehicalCollection/PngItem_135037.png";
import LamborginiLogo from "../images/VehicalCollection/car-logos/Lamborghini_Logo.svg.png";
import PersonIcon from "@mui/icons-material/Person";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
const CarCard = (props) => {
  const CardCardSection = styled.section`
    .car-models-collection-container-hero {
      /* border: 2px solid red; */
      box-shadow: 0 1px 3px rgba(23, 23, 23, 0.24);
      height: 20rem;
      width: ${props.cardWidth};
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
      user-select: none;
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
      user-select: none;
      background-repeat: no-repeat;
      background-position: 20px -70px;
      background-size: 46rem 45rem;
      width: 100%;
      height: 13rem;
      /* margin: 0 14px; */
      display: flex;
      justify-content: center;
    }
    .car-models-collection-body img {
      padding: 24px;
      height: 11rem;
      user-select: none;
      width: ${props.imgWidth};
      /* width: 27rem; */
    }
    .car-models-collection-footer {
      background-color: #f5e7e7;
      height: 5rem;
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
      font-family: "poppins", "sans serif";
    }
    .hero-car-money span {
      font-family: rubik, "sans serif";
      font-weight: 100;
    }
    .hero-car-money h1 {
      font-family: poppins, "sans serif";
      font-weight: 100;
      font-size: 18px;
    }
  `;
  return (
    <>
      <CardCardSection>
        <div className="car-models-collection-container-hero">
          <div className="car-models-collection-header">
            <figure className="car-models-collection-header-figure-hero">
              <img src={LamborginiLogo} alt="logo" unselectable="on" />
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
            <img src={props.CarImg} alt="car-image" />
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
            <div className="hero-car-money">
              <CurrencyRupeeOutlinedIcon style={{ fontWeight: "bold" }} />
              <h1>
                4000/ <span>day</span>
              </h1>
            </div>
          </div>
        </div>
      </CardCardSection>
    </>
  );
};

CarCard.defaultProps = {
  cardWidth: "28rem",
  imgWidth: "23rem",
};
export default CarCard;
