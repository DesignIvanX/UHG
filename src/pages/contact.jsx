import Seo from "@seo/Seo";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import styles from "./style/Contact.module.css";
const Contact = () => {
  return (
    <div>
      <Seo
        title={"Contacto"}
        description={
          "Contacto de la Universidad Hispano Guarani - UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        twitter_card={""}
        twitter_site={""}
        twitter_creator={"Hispano Guaraní"}
        twitter_title={"Contacto"}
        twitter_description={
          "Contacto de la Universidad Hispano Guarani - UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        twitter_image={""}
        og_title={"Universidad Hispano Guarani (UHG) - Contacto"}
        og_description={
          "Contacto de la Universidad Hispano Guarani - UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        og_image={""}
        og_url={"https://www.uhg.edu.py/contact"}
        og_site_name={"Universidad Hispano Guarani (UHG) - Contacto"}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          "contacto, uhg, carreras, postgrados, universidad, paraguay, hispano guarani, mejor universidad, py, cones, habilitado, habilitado por cones, luque, asuncion, san juan bautista, misiones, coronel oviedo, ciudad del este, contactar, telefono, numero, gmail, faccebook, whatsapp, "
        }
        author={"Hispano Guaraní"}
        copyright={"Hispano Guaraní"}
        url={"https://www.uhg.edu.py/contact"}
        name={"Hispano Guaraní"}
        facebook={"https://www.facebook.com/uniuhg"}
        instagram={"https://www.instagram.com/universidadhispanoguarani/"}
        twitter={
          "https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        }
        inLenguage={"es"}
        captain={""}
        siteName={"Universidad Hispano Guarani (UHG) - Contacto"}
      />
      <main className={styles["main"]}>
        <section>
          <div className={styles["main__top__content"]}>
            <Image
              className={styles["main__top__content--img"]}
              src="/static/img/contacto/man-791049_1920 1-min.webp"
              alt=""
              width="100px"
              height="100px"
            />
            <div className={styles["main__top__content__text"]}>
              <h2 className={styles["main__top__content__text--h2"]}>
                FORMAS DE CONTACTO
              </h2>
            </div>
            <div className={styles["main__top__content__social"]}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/universidadhispanoguarani/"
              >
                <BsInstagram className={styles["fab"]}></BsInstagram>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <BsTwitter className={styles["fab"]}></BsTwitter>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/uniuhg"
              >
                <BsFacebook className={styles["fab"]}></BsFacebook>
              </a>
            </div>
          </div>
        </section>
        <section className={styles["contact"]}>
          <h3 className={styles["contact--h3"]}>Contactate con nosotros</h3>
          <h2 className={styles["contact--h2"]}>
            <span className={styles["line"]}>CONTA</span>CTO
          </h2>
          <div className={styles["contact__content"]}>
            <a href="mailto:info@uhg.edu.py">
              <div className={styles["contact__content__box"]}>
                <div className={styles["contact__content__box__mask"]}></div>
                <Image
                  className={styles["contact__content__box--img"]}
                  src="/static/img/contacto/Gmail.jpg"
                  alt="Gmail logo"
                  width="200px"
                  height="150px"
                />
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+595985286032">
              <div className={styles["contact__content__box"]}>
                <div className={styles["contact__content__box__mask"]}></div>
                <Image
                  className={styles["contact__content__box--img"]}
                  src="/static/img/contacto/Whatsapp.jpg"
                  alt="whatsapp logo"
                  width="200px"
                  height="150px"
                />
              </div>
            </a>
            <a href="https://www.facebook.com/uniuhg">
              <div className={styles["contact__content__box"]}>
                <div className={styles["contact__content__box__mask"]}></div>
                <Image
                  className={styles["contact__content__box--img"]}
                  src="/static/img/contacto/Facebook.jpg"
                  alt="facebook logo"
                  width="200px"
                  height="150px"
                />
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
