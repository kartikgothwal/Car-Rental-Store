import React from "react";
import {GlobalStyle} from '../styles/GlobalStyle';

import CarDetails from "../HomePageComponents/VehicalCollectionDetailsApi";
import styled from "styled-components";
import PopularCars from "./PopularCars";
const CarCollection = () => {
  const VehicalCollectionSection = styled.section`
    /* border: 2px solid; */
    height: 70rem;
    width: 100%;
    padding: 0 3rem;

    .car-collection-container {
      /* border: 2px solid; */
      height: 68rem;
      width: 100%;
    }
   
  `;
  return (
    <>
      <GlobalStyle />
      <VehicalCollectionSection>
        <div className="car-collection-container">
        <PopularCars />
        </div>
      </VehicalCollectionSection>
    </>
  );
};

export default CarCollection;
