import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import Image from "next/image";
import ContainerAcademic from "@components/ContainerAcademic";
import useGetFilterData from "@hooks/useGetFilterData";
import styles from "../pages/style/Sedes.module.css";
const Sede = ({ sede }) => {
  const { filteredData } = useGetFilterData(sede.toLowerCase());
  return (
    <div>
      <main className={styles["main"]}>
        <section>
          <div className={styles["main__top__content"]}>
            <img src="/static/img/library.webp" alt="" />
            <div className={styles["main__top__content__text"]}>
              <h2 className={styles["main__top__content__text--h2"]}>
                {sede.toUpperCase()}
              </h2>
            </div>
            <div className={styles["main__top__content__social"]}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/universidadhispanoguarani/"
              >
                <BsInstagram
                  className={`${styles["fab"]} ${styles["fa-instagram"]}`}
                ></BsInstagram>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <BsTwitter
                  className={`${styles["fab"]} ${styles["fa-twitter"]}`}
                ></BsTwitter>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/uniuhg"
              >
                <BsFacebook
                  className={`${styles["fab"]} ${styles["fa-facebook"]}`}
                ></BsFacebook>
              </a>
            </div>
          </div>
        </section>
        <section className={styles["carrers"]}>
          <h3 className={styles["carrers--h3"]}>
            Empieza tu futuro en la sede de {sede}
          </h3>
          <h2 className={styles["carrers--h2"]}>CARRERAS HABILITADAS</h2>
          <div className={styles["carrers__content"]}>
            <ContainerAcademic filteredData={filteredData} type="carrers" />
          </div>
        </section>
        <section className={styles["map"]}>
          <h2 className={styles["map--h2"]}>UBICACIÓN</h2>
          <div className={styles["map__content"]}>
            {sede === "asuncion" ? (
              <iframe
                className={styles["map__content--iframe"]}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7213.432426117038!2d-57.588083!3d-25.313737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4fb01798806b8eca!2sUniversidad%20Hispano%20Guarani!5e0!3m2!1ses!2spy!4v1620776171782!5m2!1ses!2spy"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="maps"
              ></iframe>
            ) : sede === "coroneloviedo" ? (
              <iframe
                className="map__content--iframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28824.6753658925!2d-56.44752900000001!3d-25.435441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd66c1801d3799014!2sUniversidad%20Hispano%20Guarani!5e0!3m2!1ses!2spy!4v1620778645498!5m2!1ses!2spy"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="maps"
              ></iframe>
            ) : sede === "ciudaddeleste" ? (
              <iframe
                className="map__content--iframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14400.920783018768!2d-54.608704!3d-25.530708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31b695c8ad314093!2sHispano%20guarani!5e0!3m2!1ses!2spy!4v1620777316667!5m2!1ses!2spy"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="maps"
              ></iframe>
            ) : sede === "sanjuanbautistamisiones" ? (
              <iframe
                className="map__content--iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.3381644767132!2d-57.147461785122374!3d-26.66966518323287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945bcd569fd6203b%3A0xddaac3b2fd78d51f!2sUNIVERSIDAD%20-%20HISPANO%20GUARANI!5e0!3m2!1ses!2spy!4v1621473407484!5m2!1ses!2spy"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="maps"
              ></iframe>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sede;
