import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CarDetails from "../HomePageComponents/VehicalCollectionDetailsApi";
import styled from "styled-components";
const CarCollection = () => {
  const VehicalCollectionSection = styled.section`
    border: 2px solid;
    height: 20rem;
    width: 100%;
  `;
  return (
    <>
      <VehicalCollectionSection>
        <div className="car-collection-container">
          
        </div>
      </VehicalCollectionSection>
    </>
  );
};

export default CarCollection;
