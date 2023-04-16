import React from "react";
import styled from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import logo from './images/Logo.png'

export default function Navbar() {
  const HeaderTop = styled.header`
  
    #navbar {
      display: flex;
      margin: 10px 35px;
      align-items: center;
      justify-content: space-between;
    }

    /* Left section of the navbar */
    .left-section {
      display: flex;
      align-items: center;
      margin: 18px 27px;
    }

    .logo-img {
      height: 58px;
      margin-left: -27px;
      width: 154px;
    }

    #logo-heading {
      color: red;
      font-size: 20px;
    }

    /* Middle Section of the navbar
 */
    .navbar-links {
      height: 2.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 37.3rem;
    }

    .navbar-links li {
      list-style: none;
    }

    .navbar-links li a {
      text-decoration: none;
      font-size: 17px;
      font-weight: 600;
      color: var(--black-color);
      font-family: sans-serif;
    }

    /* Right section of the game 
  */
    .right-section {
      display: flex;
      justify-content: center;
      gap: 25px;
      height: 50px;
      width: 13.2rem;
      font-family: Rubik, sans-serif;
    }

    #right-btn {
      border-radius: 5px;
      width: 116px;
      font-size: 16px;
      border: none;
      background-color: var(--btn-background-color);
      font-weight: bold;
      box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
      cursor: pointer;
      color: var(--white-color);
    }

    #left-btn {
      /* width: 65px; */
      font-size: 16px;
      font-weight: bold;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .navbar-links li a:hover,
    #left-btn:hover {
      color: var(--btn-background-color);
    }

    #right-btn:hover {
      box-shadow: 0 10px 15px 0 rgba(211, 57, 26, 0.35);
    }
  `;
  return (
    <>
      <GlobalStyle />
      <HeaderTop id="header">

        <nav id="navbar">
          <div className="left-section">
            <a href="/"><img src={logo} className="logo-img" alt="Logo" /></a>
          </div>
          <div className="mid-section">
            <ul className="navbar-links">
              <li>
                <a href="1">Home</a>
              </li>
              <li>
                <a href="1">About</a>
              </li>
              <li>
                <a href="1">Vehical Models</a>
              </li>
              <li>
                <a href="1">Testimonial</a>
              </li>
              <li>
                <a href="1">OurTeam</a>
              </li>
              <li>
                <a href="1">Support</a>
              </li>
            </ul>
          </div>
          <div className="right-section">
            <button className="btn" id="left-btn">
              Sign In
            </button>
            <button className="btn" id="right-btn">
              Register
            </button>
          </div>
        </nav>
      </HeaderTop>
    </>
  );
}
