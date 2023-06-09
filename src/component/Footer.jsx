import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { NavLink } from "react-router-dom";
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
    width: 100%;
    background-color: var(--white-color);
    .footer-container {
      border: 2px solid;
      height: 50rem;
      position: relative;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .first-footer-block {
      border: 2px solid;
      width: 44rem;
      padding: 20px;
    }
    .first-footer-block-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 4rem;
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
      width: 100%;
      height: 3.9rem;
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
      font-size: 1rem;
      width: 20rem;
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
  `;

  return (
    <>
      <GlobalStyle />
      <FooterComponent>
        <div className="footer-container">
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
                <button className="footer-btn">SIGN UP</button>
              </form>
              <p className="terms-condition-para">
                This is intended for customer. By signing up, you understand and
                agree to our terms that your data will be collected and used
                subject to our <span>Privacy Policy</span> and{" "}
                <span>Terms & Condition</span>
              </p>
              <p className="required-info-para">*Required Information</p>
              <section className="socials-list">
                <div className="socials-list-container">
                  <div className="social-icon">
                    <a href="">
                      <InstagramIcon className="icons-socials" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="">
                      <TwitterIcon className="icons-socials" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="">
                      <FacebookIcon className="icons-socials" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="">
                      <YouTubeIcon className="icons-socials" />
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="">
                      <PinterestIcon className="icons-socials" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="second-footer-block"></div>
          <div className="third-footer-block"></div>
          <div className="fourth-footer-block"></div>
        </div>
      </FooterComponent>
    </>
  );
}
