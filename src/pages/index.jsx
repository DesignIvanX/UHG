import Seo from "@seo/Seo";
import WhatsApp from "@components/reusable/WhatsApp/WhatsApp";
import Testimonials from "@components/reusable/Testimonials/Testimonials";
import Slider from "@components/reusable/Slider/Slider";
import Items from "@components/reusable/Items/Items";
import Sections from "@components/reusable/Sections/index";
import Video from "@components/reusable/Video/index";
// import Articles from "@components/reusable/Articles/index";
// import { getAllFilesMetaData } from "../components/reusable/Blog/lib/mdx";
import styles from "./style/Home.module.css";
function Home() {
  return (
    <div>
      <Seo
        title={"Universidad Hispano Guarani (UHG) - Inicio"}
        description={
          "Universidad Hispano Guarani UHG Institución de educación en Paraguay se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        twitter_card={""}
        twitter_site={""}
        twitter_creator={"Hispano Guaraní"}
        twitter_title={"Inicio"}
        twitter_description={
          "Universidad `Hispano Guarani` UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        twitter_image={""}
        og_title={"Universidad Hispano Guarani (UHG) - Paraguay"}
        og_description={
          "Universidad `Hispano Guarani` UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        og_image={""}
        og_url={"https://www.uhg.edu.py/"}
        og_site_name={"Universidad Hispano Guarani (UHG) - Paraguay"}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          "inicio, uhg, carreras, postgrados, universidad, paraguay, hispano guarani, mejor universidad, py, cones, habilitado, habilitado por cones, luque, asuncion, san juan bautista, misiones, coronel oviedo, ciudad del este"
        }
        author={"Hispano Guaraní"}
        copyright={"Hispano Guaraní"}
        url={"https://www.uhg.edu.py/"}
        name={"Hispano Guaraní"}
        facebook={"https://www.facebook.com/uniuhg"}
        instagram={"https://www.instagram.com/universidadhispanoguarani/"}
        twitter={
          "https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        }
        inLenguage={"es"}
        captain={""}
        siteName={"Universidad Hispano Guarani (UHG) - Paraguay"}
      />
      <main className={styles["main"]}>
        <div className="home">
          <Slider />
          <Sections />
          {/* <Articles posts={posts} /> */}
          <Testimonials />
          <Video />
          <Items />
        </div>
        {/* <Modal /> */}
        <WhatsApp number={"+595985286032"} />
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const posts = await getAllFilesMetaData();

//   return {
//     props: { posts },
//   };
// }

export default Home;
