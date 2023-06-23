import React from 'react';
import styled from "styled-components";
import FirstImg from "../images/About section images/Timeline/second-2.png";

const ThirdTimeLineDesign = () => {
    const SecondTimeLineDesignSection = styled.section`
    /* border: 2px solid; */
    height: 100%;
    width: 100%;
    padding: 10px;
    .second-timeline {
      /* border: 2px solid; */
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .second-timeline-container-first {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      /* padding: 10px; */
      font-family: poppins, sans-serif;
    }
    .second-timeline-container-first-content-first {
      /* border: 2px solid; */
      padding: 10px 20px;
      width: 100%;
      height: 100%;
    }
    .second-timeline-container-first-content-first h1 {
      font-size: 2rem;
    }
    .second-timeline-container-first-content-first h2 {
      font-size: 20px;
      margin:15px 0px;

      text-transform: uppercase;
    }
    .second-timeline-container-first-content-first p {
      font-family: Rubik, sans-serif;
      font-size: 17px;
      line-height: 22px;
      font-weight: 300;
      text-align: left;
      margin: 0.8rem 0px;
      color: var(--text-color);
    }
    .second-timeline-container-first-content-second {
      height: 100%;
    width: 100%;
      /* border: 2px solid; */
    }

    .second-timeline-container-first-content-second img {
      height: 27rem;
    width: 43rem;
}
 
    .second-timeline-container-second {
      /* border: 2px solid; */
      padding: 10px 25px;
      font-family: "Poppins";
    }
    .second-timeline-container-second-content-first {
    }
    .second-timeline-container-second-content-second h1 {
      text-transform: uppercase;
    }
  `;

  return (
    <SecondTimeLineDesignSection>
      <div className="second-timeline">
        <div className="second-timeline-container-first">
          <div className="second-timeline-container-first-content-first">
            <h2>The Little Steps</h2>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p>
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
              Lorem lorum. Deserunt modi quibusdam, rerum quae incidunt,
              excepturi ducimus, assumenda quidem consectetur voluptate
              provident.
            </p>
          </div>
          <div className="second-timeline-container-first-content-second">
            <img src={FirstImg} alt="" />
          </div>
        </div>
      </div>
    </SecondTimeLineDesignSection>
  );
}

export default ThirdTimeLineDesign
