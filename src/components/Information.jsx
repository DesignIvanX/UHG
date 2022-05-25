import Image from "next/image";
import styles from "./style/Information.module.css";
const Information = () => {
  return (
    <div className={styles["information"]}>
      <div className={styles["information-img"]}>
        <Image
          className={styles["information-img--img"]}
          src="/static/people.png"
          alt="personas con titulos"
          width="400px"
          height="250px"
        />
      </div>
      <div className={styles["information-text"]}>
        <h2 className={styles["information-text--h2"]}>CONOCE MÁS DE LA UHG</h2>
        <p className={styles["information-text--p"]}>
          “Hispano-Guaraní” para el Desarrollo Humano es una institución de
          educación superior que se proyecta como un espacio de reflexión y
          construcción, donde la vida humana toma notoriedad singular, y se
          promueve la gestión educativa de calidad, la defensa de los valores y
          derechos fundamentales del hombre, la formación integral para el
          desarrollo armónico de la personalidad, y la participación de la
          comunidad educativa en el cumplimiento de su filosofía y misión
          institucional.
        </p>

        <a className={styles["information-text--a"]} href="/contact/">
          contacto
        </a>
        <a className={styles["information-text--a"]} href="/academic/carrers">
          carreras
        </a>
      </div>
    </div>
  );
};

export default Information;
