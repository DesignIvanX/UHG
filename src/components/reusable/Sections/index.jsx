import { motion } from "framer-motion";
import styles from "./styles.module.css";
const index = () => {
  return (
    <section className={styles["sections"]}>
      <motion.a
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles["sections-box"]}
        href="https://www.uhg.edu.py/academic/carrers"
      >
        <div className={styles["sections-box-image"]}>
          <img
            src="/static/sections/carrer.png"
            alt=""
            className={styles["sections-box--img"]}
          />
        </div>
        <div className={styles["sections-box-text"]}>
          <h3 className={styles["sections-box--h2"]}>CARRERAS</h3>
          {/* <p className={styles["sections-box--p"]}>Always online to help you</p> */}
        </div>
      </motion.a>

      <motion.a
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles["sections-box"]}
        href="https://www.uhg.edu.py/contact"
      >
        <div className={styles["sections-box-image"]}>
          <img
            src="/static/sections/contact.png"
            alt=""
            className={styles["sections-box--img"]}
          />
        </div>
        <div className={styles["sections-box-text"]}>
          <h3 className={styles["sections-box--h2"]}>CONTACTO</h3>
          {/* <p className={styles["sections-box--p"]}>Always online to help you</p> */}
        </div>
      </motion.a>

      <motion.a
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles["sections-box"]}
        href="https://www.uhg.edu.py/academic/postgraduate"
      >
        <div className={styles["sections-box-image"]}>
          <img
            src="/static/sections/postgraduate.png"
            alt=""
            className={styles["sections-box--img"]}
          />
        </div>
        <div className={styles["sections-box-text"]}>
          <h3 className={styles["sections-box--h2"]}>POSTGRADOS</h3>
          {/* <p className={styles["sections-box--p"]}>Always online to help you</p> */}
        </div>
      </motion.a>
    </section>
  );
};

export default index;
