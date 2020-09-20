import React, { useEffect, useRef, useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Product from "../product/Product";
import ScreenDimensions from "../../utils/ScreenDimensions";

import "./Carousel.css";

function Carousel({ productList }) {
  const [moveAmount, setMouveAmount] = useState(0);
  const slideSize = 252;
  const testRef = useRef(null);
  const btnPrevious = useRef(null);
  const btnNext = useRef(null);
  const [carouselActualIndex, setCarouselActualIndex] = useState(1);
  const [width, height] = ScreenDimensions();
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    const widthAux = width > 1920 ? 1920 : width;
    const addSlideCapacity = Math.round((widthAux - 574) / 252) - 1;
    const toAddWidth = 572 + addSlideCapacity * 252;
    const containerStyle = carouselContainerRef.current.style;
    containerStyle.width = `${toAddWidth}px`;
  }, [width]);

  const moveSlider = (direction) => {
    const sliderStyle = testRef.current.style;
    const totalItems = productList.length;
    const slideSizeAux = slideSize;
    if (direction == 1) {
      if (carouselActualIndex == totalItems) {
        sliderStyle.transform = `translateX(${0}px)`;
        setMouveAmount(0);
        setCarouselActualIndex(1);
      } else {
        sliderStyle.transform = `translateX(${moveAmount - slideSizeAux}px)`;
        setMouveAmount(moveAmount - slideSizeAux);
        setCarouselActualIndex(carouselActualIndex + 1);
      }
    } else {
      if (carouselActualIndex == 1) {
        sliderStyle.transform = `translateX(${
          -slideSize * (totalItems - 1)
        }px)`;
        setMouveAmount(-slideSize * (totalItems - 1));
        setCarouselActualIndex(totalItems);
      } else {
        sliderStyle.transform = `translateX(${moveAmount + slideSizeAux}px)`;
        setMouveAmount(moveAmount + slideSizeAux);
        setCarouselActualIndex(carouselActualIndex - 1);
      }
    }
  };

  const carouselProductNotFoundRef = useRef(null);
  useEffect(() => {
    if (carouselProductNotFoundRef.current != null) {
      const x = carouselProductNotFoundRef.current.parentNode.style;
      x.width = `100%`;
      x.alignItems = `center`;
      x.justifyContent = `center`;
    }
  }, [carouselProductNotFoundRef]);

  return (
    <div className="carousel">
      <div className="carousel__container" ref={carouselContainerRef}>
        <div
          className="carousel__controll"
          onClick={() => {
            moveSlider(0);
          }}
        >
          <div className="carousel__controllIcon">
            <ChevronLeftIcon ref={btnPrevious} />
          </div>
        </div>
        <div className="carousel__outside">
          <div className="carousel__slider" ref={testRef}>
            {!productList || !productList[0] ? (
              <div
                className="carousel__productNotFound"
                ref={carouselProductNotFoundRef}
              >
                Ops... No products found.
              </div>
            ) : (
              productList.map((item, index) => {
                return (
                  <div className="carousel__slide" key={index}>
                    {item}
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div
          className="carousel__controll"
          onClick={() => {
            moveSlider(1);
          }}
        >
          <div className="carousel__controllIcon">
            <ChevronRightIcon ref={btnNext} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
