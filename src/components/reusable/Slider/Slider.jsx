import { useEffect } from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import Image from "next/image";
import styles from "./styles.module.css";
const Slider = () => {
  const handleSlider = () => {
    const slider = document.querySelector("#slider-img");
    const sliderImg = document.querySelectorAll("#slider-img-content");
    const point = document.querySelectorAll("#slider-point--span");
    // const text = document.querySelector(".slider-img-content-text");
    let contador = 0;
    var width = sliderImg[0].clientWidth;
    const interval = 3000;
    window.addEventListener("resize", () => {
      width = sliderImg[0].clientWidth;
    });
    const slides = () => {
      if (contador !== 0) {
        point[contador - 1].classList.remove("slider-point--span--active");
      } else {
        point[2].classList.remove("slider-point--span--active");
      }
      if (contador !== 3) {
        point[contador].classList.add("slider-point--span--active");
      } else {
        point[0].classList.add("slider-point--span--active");
      }
      contador++;
      slider.style.transform = "translate(" + -width * contador + "px)";
      slider.style.transition = "transform .8s";

      if (contador === sliderImg.length) {
        slider.style.transform = "translate(0px)";
        slider.style.transition = "all 0.8s";

        contador = 0;
      }
    };
    setInterval(() => {
      slides();
    }, interval);
  };
  useEffect(() => {
    handleSlider();
  }, []);
  return (
    <section className={styles["slider"]}>
      <div className={styles["slider-img"]} id="slider-img">
        <div className={styles["slider-img-content"]} id="slider-img-content">
          <Image
            className={styles["slider-img-content--img"]}
            src="/static/men.png"
            alt=""
          />
          <div className={styles["slider-img-content-text-mask"]}></div>
          <div className={styles["slider-img-content-text"]}>
            <h1 className={styles["slider-img-content-text--h1"]}>
              UNIVERSIDAD HISPANO GUARANI PARA EL DESARROLLO HUMANO
            </h1>
            <h3 className={styles["slider-img-content-text--h3"]}>
              Nunca pares de aprender, con la UHG siempre estaras en constante
              aprendizaje para que te vuelvas un profesional.
            </h3>
            <button className={styles["slider-img-content-text--btn"]}>
              <a href="https://www.uhg.edu.py/academic/carrers">EMPEZAR</a>
            </button>
            <div className={styles["slider-img-content-text-icons"]}>
              <a
                className={styles["slider-img-content-text-icons--icons"]}
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/universidadhispanoguarani/"
              >
                <BsInstagram
                  className={`${styles["fab"]} ${styles["fa-instagram"]}`}
                />
              </a>
              <a
                className={styles["slider-img-content-text-icons--icons"]}
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <BsTwitter
                  className={`${styles["fab"]} ${styles["fa-twitter"]}`}
                />
              </a>
              <a
                className={styles["slider-img-content-text-icons--icons"]}
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/uniuhg"
              >
                <BsFacebook
                  className={`${styles["fab"]} ${styles["fa-facebook"]}`}
                />
              </a>
            </div>
            <h2>#yosoyUHG</h2>
          </div>
        </div>
        <div className={styles["slider-img-content"]}>
          <Image
            className={styles["slider-img-content--img"]}
            src="/static/img/home/86.png"
            alt=""
          />
          <div className={styles["slider-img-content-text-mask"]}></div>
        </div>
        <div className={styles["slider-img-content"]}>
          <Image
            className={styles["slider-img-content--img"]}
            src="/static/img/home/91.png"
            alt=""
          />
          <div className={styles["slider-img-content-text-mask"]}></div>
        </div>
      </div>
      <div className={styles["slider-point"]}>
        <span
          className={styles["slider-point--span"]}
          id="slider-point--span"
        ></span>
        <span
          className={styles["slider-point--span"]}
          id="slider-point--span"
        ></span>
        <span
          className={styles["slider-point--span"]}
          id="slider-point--span"
        ></span>
      </div>
    </section>
  );
};

export default Slider;
