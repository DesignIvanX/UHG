import React from "react";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./style/Navegation.module.css";
const Navegation = () => {
  return (
    <header className={styles["header"]} id="header">
      <div className={styles["wrapper"]}>
        <nav>
          <div className={styles["nav__content__logo"]}></div>
          <input type="checkbox" id="show-menu" />
          <div className={styles["content"]}>
            <ul className={styles["links"]}>
              <li>
                <a className={styles["init"]} href="/">
                  INICIO
                </a>
              </li>
              <li>
                <a href="/" className={styles["desktop-link"]}>
                  INSTITUCIONAL
                  <IoIosArrowDown
                    size="20px"
                    className={`${styles["fas"]} ${styles["fa-chevron-down"]}`}
                  ></IoIosArrowDown>
                </a>
                <input type="checkbox" id="show-features" />
                <label htmlFor="show-features">
                  INSTITUCIONAL
                  <IoIosArrowDown
                    size="20px"
                    className={`${styles["fas"]} ${styles["fa-chevron-down"]}`}
                  ></IoIosArrowDown>
                </label>
              </li>
              <li>
                <a href="/" className={styles["desktop-link"]}>
                  SEDES
                  <IoIosArrowDown
                    size="20px"
                    className={`${styles["fas"]} ${styles["fa-chevron-down"]}`}
                  ></IoIosArrowDown>
                </a>
                <input type="checkbox" id="show-services" />
                <label htmlFor="show-services">
                  SEDES
                  <IoIosArrowDown
                    size="20px"
                    className={`${styles["fas"]} ${styles["fa-chevron-down"]}`}
                  ></IoIosArrowDown>
                </label>
                <ul>
                  <li>
                    <a href="https://www.uhg.edu.py/sedes/asuncion">ASUNCIÓN</a>
                  </li>
                  <li>
                    <a href="https://www.uhg.edu.py/sedes/coroneloviedo">
                      CORONEL OVIEDO
                    </a>
                  </li>
                  <li>
                    <a href="https://www.uhg.edu.py/sedes/ciudaddeleste">
                      CIUDAD DEL ESTE
                    </a>
                  </li>
                  <li>
                    <a href="https://www.uhg.edu.py/sedes/sanjuanbautistamisiones">
                      SAN JUAN BAUTISTA MISIONES
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://www.uhg.edu.py/academic/carrers">CARRERAS</a>
              </li>
              <li>
                <a
                  className={styles["init"]}
                  href="https://evirtual-uhg.edu.py/index.php?language=spanish"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-VIRTUAL
                </a>
              </li>
              <li>
                <a
                  href="https://www.uhg.edu.py/academic/postgraduate"
                  className={styles["btn-postgrado"]}
                >
                  POSTGRADO
                </a>
              </li>
              <li>
                <a
                  href="https://www.uhg.edu.py/contact"
                  className={styles["btn-contact"]}
                >
                  CONTACTO
                </a>
              </li>
            </ul>
          </div>
          <label htmlFor="show-menu" className={styles["menu-icon"]}>
            <HiMenu className={`${styles["fas"]} ${styles["fa-bars"]}`} />
          </label>
        </nav>
      </div>
    </header>
  );
};

export default Navegation;

// let ubicacionPrincipal = window.pageYOffset;
// window.onscroll = () => {
//   let desplazamiento = window.pageYOffset;
//   if (ubicacionPrincipal >= desplazamiento) {
//     const header = document.querySelector("nav");
//     header.style.background = "transparent";
//   } else {
//     const header = document.querySelector("nav");
//     header.style.background = "#1e2d45";
//   }
// };
