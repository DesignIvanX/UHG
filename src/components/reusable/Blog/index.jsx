import styles from "./styles.module.css";
const index = () => {
  const blogs = [
    {
      title: "Computer Science",
      parhagraph:
        "Our computer science department has multiple learning paths from Mobile and Web development, to Machine Learning a Data Science.",
      img: "/static/img-slider/img2.jpg",
    },
    {
      title: "Computer Science",
      parhagraph:
        "Our computer science department has multiple learning paths from Mobile and Web development, to Machine Learning a Data Science.",
      img: "/static/img-slider/img2.jpg",
    },
    {
      title: "Computer Science",
      parhagraph:
        "Our computer science department has multiple learning paths from Mobile and Web development, to Machine Learning a Data Science.",
      img: "/static/img-slider/img2.jpg",
    },
    {
      title: "Computer Science",
      parhagraph:
        "Our computer science department has multiple learning paths from Mobile and Web development, to Machine Learning a Data Science.",
      img: "/static/img-slider/img2.jpg",
    },
  ];
  return (
    <article className={styles["blog"]}>
      <h2 className={styles["blog--title"]}>EXPLORA NUESTRO BLOG</h2>
      <div className={styles["blog-content"]}>
        {blogs.map((item) => {
          return (
            <div key={item.title} className={styles["blog-content-box"]}>
              <div className={styles["blog-content-box--image"]}>
                <img
                  className={styles["blog-content-box--img"]}
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className={styles["blog-content-box--text"]}>
                <h2 className={styles["blog-content-box--h2"]}>{item.title}</h2>
                <p className={styles["blog-content-box--p"]}>
                  {item.parhagraph}
                </p>
                <a className={styles["blog-content-box--btn"]} href="/">
                  Learn more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default index;
