import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import styled from 'styled-components'
import {AiFillCar} from 'react-icons/ai'
import {FaPiggyBank, FaThumbsUp} from 'react-icons/fa'
 
export default function WhyUs() {
    const Wrapper = styled.section`
    
.why-us-header {
  height: 42rem;
  padding: 1rem 5rem;
}

.why-us-container {
  display: flex;
  /* align-items: center; */
  flex-direction: row;
  gap: 4rem;
  /* border: 2px solid; */
  height: 34rem;
}

.left-section-of-why-us,
.right-section-of-why-us {
  padding: 2rem 4rem;
}

.left-section-of-why-us {
  position: relative;
  top: 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Poppins', sans-serif;
}

.why-us-heading2 {
  font-size: 2rem;
}

.why-us-para {
  color: var(--text-color);
  font-family: Rubik, sans-serif;
  font-size: 17px;
  line-height: 22px;
  font-weight: 300;
  text-align: left;
  margin: 2rem 0;
}

.right-section-of-why-us {
  display: flex;
  gap: 2rem;
  /* border: 2px solid; */
  flex-direction: column;
  padding: 0;
  width: 5rem;
  width: 120rem;
}

.why-choose-us-article {
  display: flex;
  flex-direction: row;
  /* border: 2px solid; */
  align-items: center;
  height: 10rem;
  gap: 2rem;
}

.why-choose-us-icon {
  margin: 29px 0;
  font-size: 3rem;
  color: var(--btn-background-color);
  padding: 1.45rem 1.6rem;
  border-radius: 4rem;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  background-color: #f3e5e5;
}

.right-section-of-why-us article:nth-child(2) {
  border-radius: 50% 70% 60% 40% / 60% 30% 70% 40%;
}

.why-us-text-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.right-section-of-why-us-heading {
  font-family: Poppins, sans-serif;
}

.right-section-of-why-us-para {
  color: var(--text-color);
  font-family: Rubik, sans-serif;
  padding-right: 20px;
  font-size: 17px;
  line-height: 22px;
}

    `;

    return (
        <>
            <GlobalStyle />
            <Wrapper className="why-us-section">
                <div className="why-us-header">
                    <div className="why-us-container">

                        <div className="left-section-of-why-us">
                            <h1 className="why-us-heading">Why Choose Us</h1>
                            <h1 className="why-us-heading2">
                                From short day trips to long family vacations, we have the perfect
                                car for you.
                            </h1>
                            <p className="why-us-para">
                                Our car rental store offers a convenient and affordable solution
                                for your transportation needs. With a variety of vehicles to
                                choose from and flexible rental periods, we make it easy for you
                                to get around.From short day trips to long family vacations, we
                                have the perfect car for you.
                            </p>
                        </div>

                        <div className="right-section-of-why-us">
                            <article className="why-choose-us-article">
                                <div className="why-choose-us-icon">
                                   <AiFillCar/>
                                </div>
                                <div className="why-us-text-container">
                                    <h1 className="right-section-of-why-us-heading">
                                        Wide range of vehicles
                                    </h1>
                                    <p className="right-section-of-why-us-para">
                                        We offer a wide selection of well-maintained vehicles to meet
                                        the diverse needs of our customers, from small economy cars to
                                        luxurious SUVs.
                                    </p>
                                </div>
                            </article>

                            <article className="why-choose-us-article">
                                <div className="why-choose-us-icon">
                                    <FaPiggyBank/>
                                </div>
                                <div className="why-us-text-container">
                                    <h1 className="right-section-of-why-us-heading">
                                        Competitive pricing
                                    </h1>
                                    <p className="right-section-of-why-us-para">
                                        Our pricing is highly competitive, ensuring that you get the
                                        best value for your money.
                                    </p>
                                </div>

                            </article>

                            <article className="why-choose-us-article">
                                <div className="why-choose-us-icon">
                                   <FaThumbsUp/>
                                </div>
                                <div className="why-us-text-container">
                                    <h1 className="right-section-of-why-us-heading">
                                        Exceptional service
                                    </h1>
                                    <p className="right-section-of-why-us-para">
                                        Our friendly and knowledgeable staff is always ready to assist
                                        you in making the right ice and providing any necessary
                                        support during your rental period.
                                    </p>
                                </div>
                            </article>
                        </div>

                    </div>

                </div>
            </Wrapper>

        </>
    )
}
