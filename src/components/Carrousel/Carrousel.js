import { useState } from "react";
import "./Carrousel.css";

function Carrousel(props) {
  const { img_carrousel } = props;
  const [carrouselIndex, updateCarrouselIndex] = useState(0);
  const nombreSlide = img_carrousel.length;
  const nextSlide = () => {
    updateCarrouselIndex((prevIndex) =>
      prevIndex === nombreSlide - 1 ? 0 : prevIndex + 1
    );
  };
  const previousSlide = () => {
    updateCarrouselIndex((prevIndex) =>
      prevIndex === 0 ? nombreSlide - 1 : prevIndex - 1
    );
  };

  if (nombreSlide === 1) {
    return (
      <div className="kasa-carrousel">
        <div className="slide">
          <img
            src={img_carrousel[carrouselIndex]}
            alt={img_carrousel[carrouselIndex]}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="slide">
      <p>
        {carrouselIndex + 1}/{nombreSlide}
      </p>
      <img
        src={img_carrousel[carrouselIndex]}
        alt={img_carrousel[carrouselIndex]}
      />
      <div className="kasa-carrousel">
        <div className="kasa-carrousel-btn">
          <i onClick={previousSlide} className="fa-solid fa-chevron-left"></i>
          <i onClick={nextSlide} className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
