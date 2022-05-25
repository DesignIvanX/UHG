import styles from "./styles.module.css";

const Video = () => {
  return (
    <section className={styles["tour"]}>
      <h2 className={styles["tour--h2"]}>RECORRIDO</h2>
      <div className={styles["tour__video"]}>
        <video className={styles["tour__video--video"]} controls>
          <source
            className={styles["tour__video--video--source"]}
            type="video/mp4"
            src="/static/video/tour2.mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default Video;
