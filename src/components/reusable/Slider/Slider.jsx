import React, { useState } from "react";
import styles from "./styles.module.css";
import BtnSlider from "./BtnSlider/index";
import dataSlider from "./DataSlider/index";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles["container-slider"]}>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1
                ? `${styles["slide active-anim"]}`
                : `${styles["slide"]}`
            }
          >
            <img src={`/static/img-slider/img${index + 1}.jpg`} />
          </div>
        );
      })}

      <div className={styles["btn-slide"]}>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>

      <div className={`${styles["container-dots"]}`}>
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? `${styles["dot"]} ${styles["active"]}`
                : `${styles["dot"]}`
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
