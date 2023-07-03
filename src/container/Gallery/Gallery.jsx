import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.GalleryImage1,
  images.GalleryImage2,
  images.GalleryImage3,
  images.GalleryImage4,
  images.GalleryImage5,
  images.GalleryImage6,
  images.GalleryImage7,
  images.GalleryImage8,
  images.GalleryImage9,
  images.GalleryImage10,
  images.GalleryImage11,
  images.GalleryImage12,
  images.GalleryImage13,
  images.GalleryImage14,
  images.GalleryImage15,
  images.GalleryImage16,
  images.GalleryImage17,
  images.GalleryImage18,
  images.GalleryImage19,
  images.GalleryImage20,
  images.GalleryImage21,
  images.GalleryImage22,
  images.GalleryImage23,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 500;
    } else {
      current.scrollLeft += 500;
    }
  };

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
            <h1 className="GalleryHeading">Media & Gallery</h1>
            <button type="button" className="custom_Gallery_button">
              View More
            </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("Right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
