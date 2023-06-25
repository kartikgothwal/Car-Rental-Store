import React from "react";
import styled from "styled-components";
import { PhotosOne } from "./PhotoGalleryApi";

const PhotoGallery = () => {
  const PhotoGallerySection = styled.section`
    border: 2px solid black;
    height: 40rem;
    width: 100%;
    overflow: hidden;

    .photo-container {
      padding: 30px 0;
      display: grid;
      width: 100vw;
      height: 100%;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(5, 1fr);
      column-gap: 10px;
      row-gap: 10px;
      animation: name duration timing-function delay iteration-count direction
        fill-mode;
      animation: img_slider 5s ease linear infinite;
    }
    @keyframes img_slider {
      100% {
        transform: translateX(-2660px);
      }
    }
    .photo-container > div {
      width: 100%;
      height: 100%;
    }
    .photo-container > div > img {
      width: 300px;
      height: 200px;
      object-fit: cover;
    }
    .item {
      grid-row-start:1;
      grid-row-end:2;

    }
  `;

  return (
    <>
      <PhotoGallerySection>
        <div className="photo-container">
          {PhotosOne.map((images, index) => {
            return (
              <div className={images.class}>
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
