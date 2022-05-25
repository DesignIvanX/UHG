import {
  FaHandshake,
  FaStar,
  FaGraduationCap,
  FaBookReader,
  FaHandHoldingHeart,
} from "react-icons/fa";
import styles from "./style/values.module.css";
const Values = () => {
  return (
    <section className={styles["values"]}>
      <h2 className={styles["values--h2"]}>
        <span className="line">NUESTRO</span>S VALORES
      </h2>
      <div className={styles["values__content"]}>
        <div className={styles["values__content__box"]}>
          <FaHandshake
            className="values__content__box--i far fa-handshake"
            size="50px"
          />
          <p className={styles["values__content__box--p"]}>Sabiduría</p>
        </div>
        <div className={styles["values__content__box"]}>
          <FaStar
            className={`${styles["values__content__box--i"]} ${styles["fas"]} ${styles["fa-certificate"]}`}
            size="50px"
          />
          <p className={styles["values__content__box--p"]}>Libertad</p>
        </div>
        <div className={styles["values__content__box"]}>
          <FaGraduationCap
            className="values__content__box--i fas fa-graduation-cap"
            size="50px"
          />
          <p className={styles["values__content__box--p"]}>Desarrollo Humano</p>
        </div>
        <div className={styles["values__content__box"]}>
          <FaBookReader
            className="values__content__box--i fas fa-book-reader"
            size="50px"
          />
          <p className={styles["values__content__box--p"]}>Verdad</p>
        </div>
        <div className={styles["values__content__box"]}>
          <FaHandHoldingHeart
            className="values__content__box--i fas fa-users"
            size="50px"
          />
          <p className={styles["values__content__box--p"]}>Honestidad</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
