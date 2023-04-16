import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import styled from 'styled-components'
import CorvetteImage from './images/vehical images/corvette.png'
export default function VehicalCollection() {
    const Wrapper = styled.section`
    
 
  /* border: 2px solid; */
  padding: 3rem 3rem;
  font-family: Poppins, sans-serif;


.vehicles-model-header {
  height: 55rem;
  /* border: 2px solid; */
}

.vehicles-model-container {
  /* border: 2px solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 44rem;
}

.vehical-text-content {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid; */
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
  /* border: 2px solid red; */
  height: 28rem;
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
}

.vehicals {
  height: 28rem;
  width: 20rem;
  display: flex;
  align-items: center;
  /* border: 2px solid; */
}

#Vehical-table {
  display: flex;
  flex-direction: column;
  width: 17rem;
  gap: 1rem
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
  /* border: 2px solid; */
}

#vehical-pictures {
  height: 23rem;
  width: 32rem;
}

.vehicals-details {
  /* border: 2px solid; */
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
  /* border: 2px solid; */
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
  /* border: 2px solid; */
  padding: 12px 15px;
  border-radius: 4rem;
  margin-bottom: 10px;
  box-shadow: 2px 2px 27px rgba(0, 0, 0, 0.09);
}
.first-container-icon{
  color: blue;
}
.second-container-icon{
  color: var(--btn-background-color);
}
.third-container-icon{
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
                            <h1 className="vehicles-model-sub-heading">Our rental collection</h1>
                            <p> Discover a range of fantastic vehicles to rent for your upcoming business or leisure travel.</p>
                        </div>
                        <div className="vehical-collections">
                            <div className="vehicals">
                                <div id="Vehical-table">

                                    <button className="vehical-names active" id="first-vehical">Corvette</button>
                                    <button className="vehical-names" id="second-vehical">Toyota Supra</button>
                                    <button className="vehical-names" id="third-vehical">Mustang GT</button>
                                    <button className="vehical-names" id="fourth-vehical">Mahindra Thar</button>
                                    <button className="vehical-names" id="fifth-vehical">Jeep Wrangler</button>
                                    <button className="vehical-names" id="sixth-vehical">Land Rover</button>

                                </div>
                            </div>
                            <div className="vehicals-images">
                                <img src={CorvetteImage} alt="car-image" id="vehical-pictures" />
                            </div>
                            <div className="vehicals-details">

                                <div className="vehical-details-header">
                                    <div className="vehical-detail-container">
                                        <i className="fa-solid fa-gas-pump vehical-details-icon first-container-icon"></i>
                                        <div className="vehical-detail-text">
                                            <h1>200mph</h1>
                                            <span>Mileage</span>
                                        </div>
                                    </div>

                                    <div className="vehical-detail-container">
                                        <i className="fa-solid fa-weight-scale vehical-details-icon first-container-icon"></i>
                                        <div className="vehical-detail-text">
                                            <h1>200lbs</h1>
                                            <span>Weight</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="vehical-details-header">
                                    <div className="vehical-detail-container">
                                        <i className="fa-sharp fa-solid fa-palette vehical-details-icon second-container-icon"></i>
                                        <div className="vehical-detail-text">
                                            <h1>Black </h1>
                                            <span>Color </span>
                                        </div>
                                    </div>

                                    <div className="vehical-detail-container">
                                        <i className="fa-solid fa-gauge vehical-details-icon second-container-icon"></i>
                                        <div className="vehical-detail-text">
                                            <h1>1.99s</h1>
                                            <span>0-60 mph</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="vehical-details-header">
                                    <div className="vehical-detail-container">
                                        <i className="fa-solid fa-dollar-sign vehical-details-icon third-container-icon"></i>
                                        <div className="vehical-detail-text">
                                            <h1>4000</h1>
                                            <span>per day</span>
                                        </div>
                                    </div>

                                    <div className="vehical-detail-container">
                                        <i className="fa-solid fa-location-dot vehical-details-icon third-container-icon"></i>
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
    )
}
