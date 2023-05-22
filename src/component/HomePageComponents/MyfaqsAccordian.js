import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { GrSubtract } from "react-icons/gr";
export default function MyfaqsAccordian(props) {
  const [show, setShow] = useState(false);
  const [BgColor, SetBgColor] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const ToggleBgColor = () => {
    if (show) {
      SetBgColor({
        backgroundColor: "white",
        color: "black",
        transition: " 0.5s ease",
      });
    } else {
      SetBgColor({
        backgroundColor: "var(--btn-background-color)",
        color: "white",
        transition: "0.5s ease",
      });
    }
  };
  return (
    <>
      <div
        className="faq-content-div-box-hero"
        show={show}
        onClick={ToggleBgColor}
      >
        <div
          className="faq-content-div-box-hero-main"
          onClick={() => {
            {
              setShow(!show);
            }
          }}
          style={BgColor}
        >
          <p
            style={BgColor}
            onClick={() => {
              {
                setShow(!show);
              }
            }}
          >
            {show === true ? <GrSubtract /> : <TiPlus />}
          </p>
          <h1
            className="question"
            onClick={() => {
              {
                setShow(!show);
              }
            }}
          >
            {props.question}
          </h1>
        </div>
        {show && <p className="answers">{props.answer}</p>}
      </div>
    </>
  );
}
