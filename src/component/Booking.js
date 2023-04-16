import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import styled from 'styled-components'
import {ImSearch} from 'react-icons/im'
export default function Booking() {
    const Wrapper = styled.section`
    

  /* border: 2px solid; */
  display: flex;
  justify-content: center;
  align-items: center;


.booking-header {
  height: 35rem;
  /* border: 2px solid; */
}

.booking-container {
  background: url("../imgs/booking-section/back-img.png") center center/cover no-repeat;
  height: 24rem;
  /* border: 2px solid; */
  width: 78rem;
  padding: 0 3.5rem;
  display: flex;
  background-color: var(--white-color);
  flex-direction: column;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);

  font-family: Poppins, sans;
}

.booking-heading {
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
}

.booking-details {
  /* border: 2px solid; */
  height: 14rem;
}

#booking-section-form {
  display: flex;
  flex-direction: column;

}

.first-row-booking,
.second-row-booking {
  /* border: 2px solid; */
  display: flex;
  height: 7rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

article {
  display: flex;
  flex-direction: column;

}

#CarSelect,
#PickUpLocation,
#DropOffLocation,
#PickUpDate,
#DropOffDate,
#booking-btn {
  height: 3rem;
  font-size: 1rem;
  width: 20rem;
  font-family: "Rubik";
  padding: 0px 10px;
  color: var(--text-color);
  border: 2px solid #dcd3d3;
  position: relative;
  top: 1rem;
}

.booking-icon {
  margin-right: 1rem;
  color: var(--btn-background-color);
}

#booking-btn {
  font-size: 16px;
  position: relative;
  top: 27px;
  height: 3.4rem;
  border: none;
  background-color: var(--btn-background-color);
  font-weight: bold;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  cursor: pointer;
  color: var(--white-color);
}

#booking-btn i {
  margin-left: 8px;
}
    `;

    return (
        <>
            <GlobalStyle />

            <Wrapper class="booking-section">
                <div class="booking-header">
                    <div class="booking-container">
                        <h1 class="booking-heading">Book a car</h1>
                        <div class="booking-details">
                            <form action="/booking" method="post" id="booking-section-form">
                                <div class="first-row-booking">

                                    <article>
                                        <label for="CarSelect"><i class="fa-solid fa-car booking-icon"></i>Select a
                                            car*</label>
                                        <select name="CarSelect" id="CarSelect">
                                            <option value="" selected disabled>Select car</option>
                                            <option value="">Mustang GT</option>
                                            <option value="">Toyota Supra</option>
                                            <option value="">Mahindra Thar</option>
                                            <option value="">Audi A3</option>
                                            <option value="">Audi RS5</option>
                                            <option value="">Corvette</option>
                                            <option value="">Mahindra Scorpio</option>
                                            <option value="">Lamborghini Huracan</option>
                                            <option value="">Bugatti Chiron</option>
                                            <option value="">Jeep Wrangler Rubicon</option>
                                            <option value="">Mercedes Benz</option>
                                        </select>
                                    </article>
                                    <article>
                                        <label for="PickUpLocation"><i class="fa-solid fa-location-dot booking-icon"></i> Pick
                                            up location*</label>
                                        <select name="PickUpLocation" id="PickUpLocation">
                                            <option value="" selected disabled>Select location</option>
                                            <option value="">Mumbai</option>
                                            <option value="">Indore</option>
                                            <option value="">Chandigarh</option>
                                            <option value="">Koltata</option>
                                            <option value="">Delhi</option>
                                        </select>
                                    </article>
                                    <article>
                                        <label for="DropOffLocation"><i class="fa-solid fa-location-dot booking-icon"></i> Drop
                                            Off location*</label>
                                        <select name="DropOffLocation" id="DropOffLocation">
                                            <option value="" selected disabled>Select location</option>
                                            <option value="">Mumbai</option>
                                            <option value="">Indore</option>
                                            <option value="">Chandigarh</option>
                                            <option value="">Koltata</option>
                                            <option value="">Delhi</option>
                                        </select>
                                    </article>
                                </div>
                                <div class="second-row-booking">
                                    <article>
                                        <label for="PickUpDate"><i class="fa-solid fa-calendar-days booking-icon"></i> Pick
                                            up date*</label>
                                        <input type="date" name="PickUpDate" id="PickUpDate" />
                                    </article>
                                    <article>
                                        <label for="DropOffDate"><i class="fa-solid fa-calendar-days booking-icon"></i> Drop
                                            off date*</label>
                                        <input type="date" name="DropOffDate" id="DropOffDate" />
                                    </article>
                                    <article>
                                        <button id="booking-btn">
                                            Search <ImSearch/>
                                        </button>
                                    </article>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}
