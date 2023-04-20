import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";
import { FaGasPump, FaWeight } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";
import { HiCurrencyRupee, HiLocationMarker } from "react-icons/hi";

import CorvetteImage from "./images/vehical images/corvette.png";
import MustangImage from './images/vehical images/Mustang.png'
import ToyotaSupraImage from './images/vehical images/supra.png'
import TharImage from './images/vehical images/thar.png'
import WranglerImage from './images/vehical images/wrangler.png'
import RoverImage from './images/vehical images/rover.png'



export default function VehicalCollection() {

  const handleClick = (e) => {
    const VehicalDetailsText = document.querySelectorAll('.vehical-detail-text');
    const VehicalsImages = document.querySelectorAll('#vehical-pictures');
    const VehicalBtns = document.querySelectorAll('.vehical-names');
    console.log(VehicalsImages)
    var targetBtn = e.target;
    var targetBtnID = targetBtn.getAttribute('id');

    VehicalBtns.forEach(btn => {

      btn.classList.remove('active');
    })

    if (targetBtnID === "first-vehical") {
      VehicalBtns.forEach(otherbtn => {
        otherbtn.classList.remove('active');
      })
      targetBtn.classList.add('active');
      VehicalsImages[0].src = CorvetteImage;

      VehicalDetailsText[0].querySelector('h1').textContent = "200mph";
      VehicalDetailsText[0].querySelector('span').textContent = "Mileage";

      VehicalDetailsText[1].querySelector('h1').textContent = "200lbs";
      VehicalDetailsText[1].querySelector('span').textContent = "Weight";

      VehicalDetailsText[2].querySelector('h1').textContent = "Black";
      VehicalDetailsText[2].querySelector('span').textContent = "Color";

      VehicalDetailsText[3].querySelector('h1').textContent = "1.99s";
      VehicalDetailsText[3].querySelector('span').textContent = "0-60 mph";

      VehicalDetailsText[4].querySelector('h1').textContent = "4000";
      VehicalDetailsText[4].querySelector('span').textContent = "per day";

      VehicalDetailsText[5].querySelector('h1').textContent = "Mumbai";
      VehicalDetailsText[5].querySelector('span').textContent = "Available at";
    }

    if (targetBtnID === "second-vehical") {
      VehicalBtns.forEach((otherbtn) => {
        otherbtn.classList.remove('active');
      })
      targetBtn.classList.add('active');
      VehicalsImages[0].src = ToyotaSupraImage;
      VehicalDetailsText[0].querySelector('h1').textContent = "260mph";
      VehicalDetailsText[0].querySelector('span').textContent = "Mileage";

      VehicalDetailsText[1].querySelector('h1').textContent = "210lbs";
      VehicalDetailsText[1].querySelector('span').textContent = "Weight";

      VehicalDetailsText[2].querySelector('h1').textContent = "Black";
      VehicalDetailsText[2].querySelector('span').textContent = "Color";

      VehicalDetailsText[3].querySelector('h1').textContent = "2.99s";
      VehicalDetailsText[3].querySelector('span').textContent = "0-60 mph";

      VehicalDetailsText[4].querySelector('h1').textContent = "3000";
      VehicalDetailsText[4].querySelector('span').textContent = "per day";

      VehicalDetailsText[5].querySelector('h1').textContent = "Indore";
      VehicalDetailsText[5].querySelector('span').textContent = "Available at";
    }

    if (targetBtnID === "third-vehical") {
      VehicalBtns.forEach(otherbtn => {
        otherbtn.classList.remove('active');
      })
      targetBtn.classList.add('active');
      VehicalsImages[0].src = MustangImage;
      VehicalDetailsText[0].querySelector('h1').textContent = "180mph";
      VehicalDetailsText[0].querySelector('span').textContent = "Mileage";

      VehicalDetailsText[1].querySelector('h1').textContent = "250lbs";
      VehicalDetailsText[1].querySelector('span').textContent = "Weight";

      VehicalDetailsText[2].querySelector('h1').textContent = "Black";
      VehicalDetailsText[2].querySelector('span').textContent = "Color";

      VehicalDetailsText[3].querySelector('h1').textContent = "2.50s";
      VehicalDetailsText[3].querySelector('span').textContent = "0-60 mph";

      VehicalDetailsText[4].querySelector('h1').textContent = "2500";
      VehicalDetailsText[4].querySelector('span').textContent = "per day";

      VehicalDetailsText[5].querySelector('h1').textContent = "Delhi";
      VehicalDetailsText[5].querySelector('span').textContent = "Available at";
    }

    if (targetBtnID === "fourth-vehical") {
      VehicalBtns.forEach(otherbtn => {
        otherbtn.classList.remove('active');
      })
      targetBtn.classList.add('active');
      VehicalsImages[0].src = TharImage;
      VehicalDetailsText[0].querySelector('h1').textContent = "240mph";
      VehicalDetailsText[0].querySelector('span').textContent = "Mileage";

      VehicalDetailsText[1].querySelector('h1').textContent = "210lbs";
      VehicalDetailsText[1].querySelector('span').textContent = "Weight";

      VehicalDetailsText[2].querySelector('h1').textContent = "Black";
      VehicalDetailsText[2].querySelector('span').textContent = "Color";

      VehicalDetailsText[3].querySelector('h1').textContent = "2.00s";
      VehicalDetailsText[3].querySelector('span').textContent = "0-60 mph";

      VehicalDetailsText[4].querySelector('h1').textContent = "4100";
      VehicalDetailsText[4].querySelector('span').textContent = "per day";

      VehicalDetailsText[5].querySelector('h1').textContent = "Chandigarh";
      VehicalDetailsText[5].querySelector('span').textContent = "Available at";
    }

    if (targetBtnID === "fifth-vehical") {
      VehicalBtns.forEach(otherbtn => {
        otherbtn.classList.remove('active');
      })
      targetBtn.classList.add('active');
      VehicalsImages[0].src = WranglerImage;
      VehicalDetailsText[0].querySelector('h1').textContent = "230mph";
      VehicalDetailsText[0].querySelector('span').textContent = "Mileage";

      VehicalDetailsText[1].querySelector('h1').textContent = "300lbs";
      VehicalDetailsText[1].querySelector('span').textContent = "Weight";

      VehicalDetailsText[2].querySelector('h1').textContent = "Black";
      VehicalDetailsText[2].querySelector('span').textContent = "Color";

      VehicalDetailsText[3].querySelector('h1').textContent = "1.69s";
      VehicalDetailsText[3].querySelector('span').textContent = "0-60 mph";

      VehicalDetailsText[4].querySelector('h1').textContent = "5000";
      VehicalDetailsText[4].querySelector('span').textContent = "per day";

      VehicalDetailsText[5].querySelector('h1').textContent = "Kolkata";
      VehicalDetailsText[5].querySelector('span').textContent = "Available at";
    }

    if (targetBtnID === "sixth-vehical") {
      VehicalBtns.forEach(otherbtn => {
        otherbtn.classList.remove('active');
      })
      targetBtn.classList.add('active');
      VehicalsImages[0].src = RoverImage;
      VehicalDetailsText[0].querySelector('h1').textContent = "210mph";
      VehicalDetailsText[0].querySelector('span').textContent = "Mileage";

      VehicalDetailsText[1].querySelector('h1').textContent = "280lbs";
      VehicalDetailsText[1].querySelector('span').textContent = "Weight";

      VehicalDetailsText[2].querySelector('h1').textContent = "Black";
      VehicalDetailsText[2].querySelector('span').textContent = "Color";

      VehicalDetailsText[3].querySelector('h1').textContent = "3.99s";
      VehicalDetailsText[3].querySelector('span').textContent = "0-60 mph";

      VehicalDetailsText[4].querySelector('h1').textContent = "3500";
      VehicalDetailsText[4].querySelector('span').textContent = "per day";

      VehicalDetailsText[5].querySelector('h1').textContent = "Indore";
      VehicalDetailsText[5].querySelector('span').textContent = "Available at";
    }

  }
  const Wrapper = styled.section`
    padding: 3rem 3rem;
    font-family: Poppins, sans-serif;
    .vehicles-model-header {
      height: 55rem;
    }

    .vehicles-model-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 44rem;
    }

    .vehical-text-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      height: 18rem;
      width: 100%;
    }

    .vehicles-model-sub-heading {
      font-size: 2.2rem;
      line-height: 4rem;
      letter-spacing: 1px;
      text-transform: capitalize;
    }

    .vehical-text-content p {
      color: var(--text-color);
      letter-spacing: 0px;
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 29px;
      font-weight: 500;
      text-align: center;
      width: 38rem;
    }

    .vehical-collections {
      height: 28rem;
      display: flex;
      gap: 10px;
    }

    .vehicals {
      height: 28rem;
      width: 20rem;
      display: flex;
      align-items: center;
    }

    #Vehical-table {
      display: flex;
      flex-direction: column;
      width: 17rem;
      gap: 1rem;
    }

    .vehical-names {
      font-family: Poppins, sans-serif;
      background-color: var(--vehical-name-bg-color);
      color: var(--black-color);
      border: none;
      height: 3.7rem;
      font-size: 1.15rem;
      cursor: pointer;
    }

    .vehicals-images {
      height: 28rem;
      width: 37rem;
      padding: 2rem 3rem;
    }
    .active {
      background-color: var(--btn-background-color);
      color: white;
    }
    #vehical-pictures {
      height: 23rem;
      width: 32rem;
    }

    .vehicals-details {
      padding: 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      border-radius: 20px;
    }

    .vehical-details-header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 10rem;
      width: 100%;
      gap: 30px;
      border-radius: 23px;
    }

    .vehical-detail-container {
      border-radius: 20px;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.09) 2px 3px 6px;
      background-color: aliceblue;
    }

    .vehical-details-icon {
      font-size: 31px;
      background-color: #e4f3ff;
      margin-bottom: 10px;
      box-shadow: 2px 2px 27px rgba(0, 0, 0, 0.09);
    }
    .first-container-icon {
      color: blue;
    }
    .second-container-icon {
      color: var(--btn-background-color);
    }
    .third-container-icon {
      color: blue;
    }
    .vehical-detail-text h1 {
      font-size: 14px;
      text-align: center;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper className="vehicles-model">
        <div className="vehicles-model-header">
          <div className="vehicles-model-container">
            <div className="vehical-text-content">
              <h1 className="vehicles-model-heading">Vehicles Models</h1>
              <h1 className="vehicles-model-sub-heading">
                Our rental collection
              </h1>
              <p>
                {" "}
                Discover a range of fantastic vehicles to rent for your upcoming
                business or leisure travel.
              </p>
            </div>
            <div className="vehical-collections">
              <div className="vehicals">
                <div id="Vehical-table">
                  <button className="vehical-names active" id="first-vehical" onClick={handleClick}>
                    Corvette
                  </button>
                  <button className="vehical-names" id="second-vehical" onClick={handleClick}>
                    Toyota Supra
                  </button>
                  <button className="vehical-names" id="third-vehical" onClick={handleClick}>
                    Mustang GT
                  </button>
                  <button className="vehical-names" id="fourth-vehical" onClick={handleClick}>
                    Mahindra Thar
                  </button>
                  <button className="vehical-names" id="fifth-vehical" onClick={handleClick}>
                    Jeep Wrangler
                  </button>
                  <button className="vehical-names" id="sixth-vehical" onClick={handleClick}>
                    Land Rover
                  </button>
                </div>
              </div>
              <div className="vehicals-images">
                <img src={CorvetteImage} alt="vehical-images" id="vehical-pictures" />
              </div>
              <div className="vehicals-details">
                <div className="vehical-details-header">
                  <div className="vehical-detail-container">
                    <FaGasPump className="vehical-details-icon first-container-icon"></FaGasPump>
                    <div className="vehical-detail-text">
                      <h1>200mph</h1>
                      <span>Mileage</span>
                    </div>
                  </div>

                  <div className="vehical-detail-container">
                    <FaWeight className="fa-solid fa-weight-scale vehical-details-icon first-container-icon"></FaWeight>
                    <div className="vehical-detail-text">
                      <h1>200lbs</h1>
                      <span>Weight</span>
                    </div>
                  </div>
                </div>

                <div className="vehical-details-header">
                  <div className="vehical-detail-container">
                    <MdColorLens className="fa-sharp fa-solid fa-palette vehical-details-icon second-container-icon"></MdColorLens>
                    <div className="vehical-detail-text">
                      <h1>Black </h1>
                      <span>Color </span>
                    </div>
                  </div>

                  <div className="vehical-detail-container">
                    <BsSpeedometer className="fa-solid fa-gauge vehical-details-icon second-container-icon"></BsSpeedometer>
                    <div className="vehical-detail-text">
                      <h1>1.99s</h1>
                      <span>0-60 mph</span>
                    </div>
                  </div>
                </div>

                <div className="vehical-details-header">
                  <div className="vehical-detail-container">
                    <HiCurrencyRupee className="fa-solid fa-dollar-sign vehical-details-icon third-container-icon"></HiCurrencyRupee>
                    <div className="vehical-detail-text">
                      <h1>4000</h1>
                      <span>per day</span>
                    </div>
                  </div>

                  <div className="vehical-detail-container">
                    <HiLocationMarker className="fa-solid fa-location-dot vehical-details-icon third-container-icon"></HiLocationMarker>
                    <div className="vehical-detail-text">
                      <h1>Mumbai</h1>
                      <span>Available at</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
