import styles from "./styles.module.css";
const index = () => {
  return (
    <section className={styles["sections"]}>
      <a className={styles["sections-box"]} href="/">
        <div className={styles["sections-box-image"]}>
          <img
            src="/static/img-slider/img2.jpg"
            alt=""
            className={styles["sections-box--img"]}
          />
        </div>
        <div className={styles["sections-box-text"]}>
          <h3 className={styles["sections-box--h2"]}>CARRERAS</h3>
          <p className={styles["sections-box--p"]}>Always online to help you</p>
        </div>
      </a>

      <a className={styles["sections-box"]} href="/">
        <div className={styles["sections-box-image"]}>
          <img
            src="/static/img-slider/img2.jpg"
            alt=""
            className={styles["sections-box--img"]}
          />
        </div>
        <div className={styles["sections-box-text"]}>
          <h3 className={styles["sections-box--h2"]}>CONTACTO</h3>
          <p className={styles["sections-box--p"]}>Always online to help you</p>
        </div>
      </a>

      <a className={styles["sections-box"]} href="/">
        <div className={styles["sections-box-image"]}>
          <img
            src="/static/img-slider/img2.jpg"
            alt=""
            className={styles["sections-box--img"]}
          />
        </div>
        <div className={styles["sections-box-text"]}>
          <h3 className={styles["sections-box--h2"]}>POSTGRADOS</h3>
          <p className={styles["sections-box--p"]}>Always online to help you</p>
        </div>
      </a>
    </section>
  );
};

export default index;
