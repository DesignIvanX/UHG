import UHGLazy from "./UHGLazy.webp";
import styles from "./styles.module.css";
const Lazy = () => {
  return (
    <div className={styles["loadingio-content"]}>
      <div className={styles["loadingio-spinner-ellipsis-t5efiqc4s9"]}>
        <img src={UHGLazy} alt="uhg" />
      </div>
    </div>
  );
};

export default Lazy;
