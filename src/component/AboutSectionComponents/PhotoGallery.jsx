import React from "react";
import styled from "styled-components";
import { PhotosOne } from "./PhotoGalleryApi";

const PhotoGallery = () => {
  const PhotoGallerySection = styled.section`
    border: 2px solid black;
    height: 40rem;
    width: 100%;
    /* overflow: hidden; */
    
    .photo-container {
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template-columns: 300px 350px 400px;
      grid-template-rows: 400px 250px 350px;
      grid-auto-rows:  400px 250px 350px;
      grid-auto-columns:  300px 350px 400px;
      column-gap: 10px;
      grid-gap: 10px;
    }

    .photo-container > div {
      display: grid;
    }
    .photo-container > div > img {
      /* width: 400px;
      height: 300px; */
      object-fit: cover;
    }
    .photo-container > div:nth-child(1) {
    }
  `;

  return (
    <>
      <PhotoGallerySection>
        <div className="photo-container">
          {PhotosOne.map((images, index) => {
            return (
              <div className="pics">
                <img src={images.photo} alt={`Photo${index}`} />
              </div>
            );
          })}
        </div>
      </PhotoGallerySection>
    </>
  );
};

export default PhotoGallery;
