import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles["header-all"]} id="header">
      <div className={styles["header-container"]}>
        <div className={styles["header-content"]}>
          <h1 className={styles["slider-img-content-text--h1"]}>
            UNIVERSIDAD HISPANO GUARANI PARA EL DESARROLLO HUMANO
          </h1>
          <h3 className={styles["slider-img-content-text--h3"]}>
            Nunca pares de aprender, con la UHG siempre estaras en constante
            aprendizaje para que te vuelvas un profesional.
          </h3>

          <a
            className={styles["slider-img-content-text--btn"]}
            href="https://www.uhg.edu.py/academic/carrers"
          >
            EMPEZAR
          </a>

          <div className={styles["slider-img-content-text-icons"]}>
            <a
              className={styles["slider-img-content-text-icons--icons"]}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/universidadhispanoguarani/"
            >
              <BsInstagram className={styles["fab fa-instagram"]}></BsInstagram>
            </a>
            <a
              className={styles["slider-img-content-text-icons--icons"]}
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              <BsTwitter className={styles["fab fa-twitter"]}></BsTwitter>
            </a>
            <a
              className={styles["slider-img-content-text-icons--icons"]}
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/uniuhg"
            >
              <BsFacebook className="fab fa-facebook"></BsFacebook>
            </a>
          </div>
          <h2 className={styles["slider-img-content-text--h2"]}>#yoSoyUHG</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
