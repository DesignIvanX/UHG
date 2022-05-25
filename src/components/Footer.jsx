import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import Image from "next/image";
import styles from "./style/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__content"]}>
        <div className={styles["footer__content__logo"]}>
          <a
            href="https://evirtual-uhg.edu.py/index.php?language=spanish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/static/img/logoevirtual.webp"
              width="280px"
              height="150px"
              alt="logo de uhg e-virtual"
            />
          </a>
          <p>
            “No pares de aprender” En la UHG seras un profesional con nuestra
            ayuda, te ayudaremos a destacarte y ser cada vez mejor.
          </p>
        </div>
        <div className={styles["footer__content__contact"]}>
          <p>Contactos</p>
          <p>Asunción +0985 286032</p>
          <p>Coronel Oviedo +0981 399798</p>
          <p>Ciudad Del Este +0992 905561</p>
          <p>San Juan Bautista Misiones +0217 212913</p>
          <p>info@uhg.edu.py</p>
        </div>
        <div className={styles["footer__content__social"]}>
          <p>Siguenos</p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/universidadhispanoguarani/"
          >
            <BsInstagram
              size="32px"
              className={styles["fab fa-instagram"]}
            ></BsInstagram>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          >
            <FaTwitterSquare
              size="32px"
              className={styles["fab fa-twitter"]}
            ></FaTwitterSquare>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/uniuhg"
          >
            <BsFacebook
              size="32px"
              className={styles["fab fa-facebook"]}
            ></BsFacebook>
          </a>
        </div>
      </div>
      <div className={styles["footer__foot"]}>
        <p>&copy;Universidad Hispano Guarani</p>
        <p>
          <a href="#header">
            Subir
            <BsArrowUp
              className={`${styles["fas"]} ${styles["fa-arrow-up"]}`}
              size="32px"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
