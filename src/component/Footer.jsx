import React from "react";
 
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { NavLink } from "react-router-dom";
import NavigationIcon from "@mui/icons-material/Navigation";
import logo from "./images/Logo.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
export default function Footer() {
  const FooterComponent = styled.footer`
    /* border: 2px solid; */
    height: 50rem;
    position: relative;
    bottom: 0;
    padding-top: 32px;
    width: 100%;
    background-color: var(--white-color);
    .footer-container {
      /* border: 2px solid; */
      height: 48rem;
      position: relative;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      display: flex;
      flex-direction: column;
    }
    .footer-container-first {
      /* border: 2px solid; */
      display: flex;
      justify-content: space-between;
      /* align-items: center; */

      flex-direction: row;
    }
    .first-footer-block {
      /* border: 2px solid; */
      width: 40rem;
      padding: 0 20px 20px 20px;
    }
    .first-footer-block-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 2rem;
      /* border: 2px solid; */
    }

    .footer-para {
      color: var(--text-color);
      font-family: Rubik, sans-serif;
      font-size: 18px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
      margin: 10px 0;
    }
    .footer-heading {
      text-align: left;
      font-size: 2rem;
      text-transform: capitalize;
    }

    .subscribe-form {
      display: flex;
      flex-direction: column;
      margin: 20px 0;
    }
    .footer-input-div {
      display: flex;
      flex-direction: column;
    }
    .footer-input-div label {
      font-family: "poppins", "sans-serif";
    }
    .footer-btn {
      width: 37rem;
      height: 3.5rem;
      font-weight: bold;
      box-shadow: rgba(255, 83, 48, 0.35) 0px 10px 15px 0px;
      color: var(--white-color);
      cursor: pointer;
      font-size: 16px;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      border-radius: 5px;
      background-color: var(--btn-background-color);
      text-transform: capitalize;
    }
    .footer-btn:hover {
      box-shadow: 0 10px 15px 0 rgba(99, 21, 5, 0.35);
    }
    .footer-subscribe-row {
      display: flex;
      height: 7rem;
    }
    #name,
    #email {
      height: 3rem;
      font-size: 14px;
      width: 18rem;
      font-family: Rubik;
      padding: 0px 10px;
      color: var(--black-color);
      border: 2px solid rgb(220, 211, 211);
      position: relative;
      top: 1rem;
      margin: 0 17px 0 0;
    }
    .terms-condition-para {
      color: var(--black-color);
      font-family: Rubik, sans-serif;
      font-size: 13.5px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
      margin: 10px 0px;
    }
    .terms-condition-para span {
      text-decoration: underline;

      cursor: pointer;
    }
    .required-info-para {
      color: var(--black-color);
      font-family: Rubik, sans-serif;
      font-size: 13.5px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
      margin: 10px 0px;
    }
    .socials-list {
      /* border: 2px solid;  */
      height: 3rem;
      margin: 15px 0;
      width: 100%;
    }
    .socials-list-container {
      display: flex;
      gap: 25px;

      height: 3rem;
      align-items: center;
      width: 100%;
    }
    .social-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 43px;
      border: 2px solid black;
      padding: 4px;
      border-radius: 56px;
      background-color: #0b0b0b;
    }
    .social-icon:hover {
      background-color: white;
      cursor: pointer;
      .icons-socials {
        color: black;
      }
    }
    .icons-socials {
      font-size: 25px;
      color: white;
    }
    .footer-section-heading {
      font-size: 18px;
      /* border: 2px solid; */
      padding: 10px;
      text-align: left;
      font-family: poppins, "sans-serif";
      letter-spacing: 2px;
    }
    .footer-section-container {
      margin: 10px 0;
      /* border: 2px solid; */
    }

    .footer-section-container ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .footer-section-container ul li {
      list-style: none;
    }
    .Footer-NavLinks {
      font-family: Rubik, "sans-serif";
      text-decoration: none;
      color: var(--black-color);
      padding-left: 10px;
    }
    .footer- {
      list-style: none;
    }

    .second-footer-block {
      /* border: 2px solid; */
    }
    .third-footer-block {
      /* border: 2px solid; */
    }
    .fourth-footer-block {
      /* border: 2px solid; */
    }
    .footer-container-second {
      border-top: 2px solid black;
      width: 100%;
      padding: 22px 62px;
      text-decoration: none;
      font-weight: 600;
      color: var(--black-color);
      font-family: Rubik, sans-serif;
      display: flex;
      justify-content: space-between;
    }
    .footer-container-second-first-item {
      display: flex;
      flex-direction: row;
      width: 50rem;
      gap: 4rem;
    }

    .footer-container-second-second-item {
      display: flex;
      flex-direction: row;
      width: 21rem;
      justify-content: space-around;
    }
    .footer-container-second-first-item a,
    .footer-container-second-first-item a {
      font-size: 12.5px;
      text-decoration: none;
      color: var(--black-color);
    }
    .footer-container-second-second-item a {
      font-size: 14.5px;
      text-decoration: none;
      color: var(--black-color);
      display: flex;
      justify-content: center;
    }
    .footer-container-second-first-item a:hover,
    .footer-container-second-second-item a:hover, .Footer-NavLinks:hover{
      color: var(--btn-background-color);
    }
    .footer-container-third {
      border-top: 1px solid black;
      width: 100%;
      font-family: Rubik, "sans-serif";
    }
    .footer-container-third p {
      font-size: 12.5px;
      text-align: center;
    }
    .footer-container-second-second-item-btn {
      width: 43px;
      background: var(--btn-background-color);
      color: white;
      cursor: pointer;
      letter-spacing: 1px;
      font-weight: 900;
      display: flex;
      border: 2px solid;
      height: 30px;

      justify-content: center;
    }
  `;
 
  return (
    <>
      <GlobalStyle />
      <FooterComponent>
        <div className="footer-container">
          <div className="footer-container-first">
            <div className="first-footer-block">
              <div className="left-section">
                <NavLink to="/">
                  <img src={logo} className="logo-img" alt="Logo" />
                </NavLink>
              </div>
              <div className="first-footer-block-container">
                <h1 className="footer-heading">Don't Miss Out.</h1>
                <p className="footer-para">
                  Subscribe and sign up for offers and best services
                </p>
                <form className="subscribe-form">
                  <div className="footer-subscribe-row">
                    <div className="footer-input-div">
                      <label htmlFor="name">Name*</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="footer-input-div">
                      <label htmlFor="email">Email*</label>
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>
                  <button className="footer-btn">SUBSCRIBE</button>
                </form>
                <p className="terms-condition-para">
                  This is intended for customer. By signing up, you understand
                  and agree to our terms that your data will be collected and
                  used subject to our <span>Privacy Policy</span> and
                  <span>Terms & Condition</span>
                </p>
                <p className="required-info-para">*Required Information</p>
                <section className="socials-list">
                  <div className="socials-list-container">
                    <div className="social-icon">
                      <a href="https://car-rental-store.vercel.app/">
                        <InstagramIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://car-rental-store.vercel.app/">
                        <TwitterIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://car-rental-store.vercel.app/">
                        <FacebookIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://car-rental-store.vercel.app/">
                        <YouTubeIcon className="icons-socials" />
                      </a>
                    </div>
                    <div className="social-icon">
                      <a href="https://car-rental-store.vercel.app/">
                        <PinterestIcon className="icons-socials" />
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="second-footer-block">
              <div className="second-footer-block-container">
                <h1 className="footer-section-heading">COMPANY</h1>
                <div className="footer-section-container">
                  <ul>
                    <li>
                      <NavLink to="/about" className="Footer-NavLinks">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ourteam" className="Footer-NavLinks">
                        Experts
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="third-footer-block">
              <div className="third-footer-block-container">
                <h1 className="footer-section-heading">IMPORTANT LINKS</h1>
                <div className="footer-section-container">
                  <ul>
                    <li>
                      <NavLink to="/contact" className="Footer-NavLinks">
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="Footer-NavLinks">
                        My Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="Footer-NavLinks">
                        Store Locator
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/testimonial" className="Footer-NavLinks">
                        Testimonial
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/vehicalsmodels" className="Footer-NavLinks">
                        Vehical Models
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="fourth-footer-block">
              <h1 className="footer-section-heading">MORE TO EXPLORE</h1>
              <div className="footer-section-container">
                <ul>
                  <li>
                    <NavLink to="/ourteam" className="Footer-NavLinks">
                      Our Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="Footer-NavLinks">
                      New Offers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="Footer-NavLinks">
                      New Rewards
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-container-second">
            <div className="footer-container-second-first-item">
              <a href="#">SITE MAP</a>
              <a href="#">PRIVACY</a>
              <a href="#">TERMS</a>
              <a href="#">USER CONTENT PERMISSION TERMS</a>
              <a href="#">CARRENTAL.COM</a>
            </div>
            <div className="footer-container-second-second-item">
              <a href="#">©2023carrental.com</a>
              <a
                className="footer-container-second-second-item-btn"
                href="#navbar"
              >
                <NavigationIcon
                  style={{
                    color: "white",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="footer-container-third">
            <p className="terms-condition-para">
              This is intended for customer. By signing up, you understand and
              agree to our terms that your data will be collected and used
              subject to our <span>Privacy Policy</span> and
              <span> Terms & Condition</span>
            </p>
          </div>
        </div>
      </FooterComponent>
    </>
  );
}
