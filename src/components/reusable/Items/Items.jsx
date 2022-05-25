import { GiGraduateCap } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { FaUniversity } from "react-icons/fa";
import { IoMedalOutline } from "react-icons/io5";
import { RiBaseStationLine } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import styles from "./styles.module.css";

const Items = () => {
  return (
    <section className={styles["section-why"]}>
      <h2 className={styles["section-why--h2"]}>
        ¿POR QUÉ ELEGIR LA UNIVERSIDAD HISPANO GUARANI?
      </h2>
      <div className={styles["section-why-content"]}>
        <div className={styles["section-why-content-box"]}>
          <TiTick
            className={styles["section-why-content-box--icon"]}
            size="80px"
          />
          <h3 className={styles["section-why-content-box--h3"]}>
            <strong>Excelencia</strong> académica
          </h3>
        </div>
        <div className={styles["section-why-content-box"]}>
          <FaUniversity
            className={styles["section-why-content-box--icon"]}
            size="80px"
          />
          <h3 className={styles["section-why-content-box--h3"]}>
            <strong>Infraestructura</strong> moderna de primer nivel
          </h3>
        </div>
        <div className={styles["section-why-content-box"]}>
          <IoMedalOutline
            className={styles["section-why-content-box--icon"]}
            size="80px"
          />
          <h3 className={styles["section-why-content-box--h3"]}>
            <strong>13 años brindando</strong> educación
          </h3>
        </div>
        <div className={styles["section-why-content-box"]}>
          <GiGraduateCap
            className={styles["section-why-content-box--icon"]}
            size="80px"
          />
          <h3 className={styles["section-why-content-box--h3"]}>
            Educación <strong>de calidad</strong> al alcance de todos
          </h3>
        </div>
        <div className={styles["section-why-content-box"]}>
          <RiBaseStationLine
            className={styles["section-why-content-box--icon"]}
            size="80px"
          />
          <h3 className={styles["section-why-content-box--h3"]}>
            <strong>Modalidad</strong> Presencial
          </h3>
        </div>
        <div className={styles["section-why-content-box"]}>
          <HiDocumentText
            className={styles["section-why-content-box--icon"]}
            size="80px"
          />
          <h3 className={styles["section-why-content-box--h3"]}>
            Carreras <strong>habilitadas por cones</strong>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Items;
