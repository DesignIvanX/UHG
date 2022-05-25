import React from "react";
import Values from "@components/Values";
import Seo from "@seo/Seo";
import styles from "./style/Institucional.module.css";
const Institucional = () => {
  return (
    <div>
      <Seo
        title={"Institucional"}
        description={
          "Universidad `Hispano Guarani` UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        twitter_card={""}
        twitter_site={""}
        twitter_creator={"Hispano Guaraní"}
        twitter_title={"Institucional"}
        twitter_description={
          "Universidad `Hispano Guarani` UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        twitter_image={""}
        og_title={"Universidad Hispano Guarani (UHG) - Institucional"}
        og_description={
          "Universidad `Hispano Guarani` UHG Institución de educación se proyecta como un espacio de reflexión y construcción, aprende a ser un profesional ya!."
        }
        og_image={""}
        og_url={"https://www.uhg.edu.py/institucional"}
        og_site_name={"Universidad Hispano Guarani (UHG) - Institucional"}
        og_locale={""}
        og_type={""}
        fb_app_id={""}
        keywords={
          "institucional, uhg, carreras, postgrados, universidad, paraguay, hispano guarani, mejor universidad, py, cones, habilitado, habilitado por cones, luque, asuncion, san juan bautista, misiones, coronel oviedo, ciudad del este, mision, vision"
        }
        author={"Hispano Guaraní"}
        copyright={"Hispano Guaraní"}
        url={"https://www.uhg.edu.py/institucional"}
        name={"Hispano Guaraní - Institucional"}
        facebook={"https://www.facebook.com/uniuhg"}
        instagram={"https://www.instagram.com/universidadhispanoguarani/"}
        twitter={
          "https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        }
        inLenguage={"es"}
        captain={""}
        siteName={"Universidad Hispano Guarani (UHG) - Institucional"}
      />
      <main className={styles["main"]}>
        <section>
          <div className={styles["main__top__content"]} id="header">
            <img src="/static/img/institucional/institucional.webp" alt="" />
            <div className={styles["main__top__content__text"]}>
              <h2 className={styles["main__top__content__text--h2"]}>
                INSTITUCIONAL
              </h2>
            </div>
            <div className={styles["main__top__content__social"]}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/universidadhispanoguarani/"
              >
                <i className={styles["fab fa-instagram"]}></i>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/uniUHG?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <i className={styles["fab fa-twitter"]}></i>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/uniuhg"
              >
                <i className={styles["fab fa-facebook"]}></i>
              </a>
            </div>
          </div>
        </section>
        <section className={styles["mision"]} id="mision">
          <div className={styles["mision__content"]}>
            <h2 className={styles["mision__content--h2"]}>MISIÓN</h2>
            <p className={styles["mision__content--p"]}>
              La Universidad “Hispano - Guaraní” forma profesionales con gestión
              de Calidad Educativa que propicia el Desarrollo Humano,
              promoviendo las competencias individuales y colectivas para el
              mejoramiento de la calidad de vida con conocimientos y tecnologías
              apropiadas.
            </p>
          </div>
        </section>
        <section className={styles["mision"]} id="vision">
          <div className={styles["mision__content"]}>
            <h2 className={styles["mision__content--h2"]}>VISIÓN</h2>
            <p className={styles["mision__content--p"]}>
              La Universidad “Hispano - Guaraní”. Para el Desarrollo Humano, es
              una Entidad Educativa de Enseñanza Superior, sin fines de lucro,
              de autogestión, humanista, democrática, apolítica y aconfesional,
              que pretende una gestión académica y cultural progresista,
              propiciadora de oportunidades en equidad y sustentabilidad,
              puestas al servicio de la sociedad para el desarrollo humano,
              observando las pertinencias de los avances científicos y
              tecnológicos.
            </p>
          </div>
        </section>
        <Values />
        <section className={styles["mision"]} id="principios">
          <div className={styles["mision__content"]}>
            <h2 className={styles["mision__content--h2"]}>
              DEFINICION - FINES Y NATURALEZA.
            </h2>
            <p className={styles["mision__content--p"]}>
              La Universidad “Hispano - Guaraní”, es una Institución Docente
              Superior, autónoma, sin fines de lucro, creada para impartir y
              promover la enseñanza en todas las ramas del conocimiento y
              cooperar con la sociedad paraguaya en la formación de los
              necesarios y suficientes recurso humano altamente calificados,
              requeridos para el desarrollo social, cultural y económico del
              país.
            </p>
            <p className={styles["mision__content--p"]}>
              La Universidad estará integrada por las siguientes unidades
              académicas: facultades, institutos, escuelas, centro de enseñanza
              superior y área de investigación científica y de desarrollo, así
              como otras unidades que puedan ser creados.
            </p>
            <p className={styles["mision__content--p"]}>
              <strong>Son fines de la UHG.</strong>
            </p>

            <p className={styles["mision__content--p"]}>
              •La enseñanza y la difusión de la ciencia, la tecnología, las
              letras y las artes.
            </p>
            <p className={styles["mision__content--p"]}>
              •La formación de y capacitación de profesionales y técnicos con
              una conciencia basada en nuestra tradición cultural mediante una
              educación que fomente y discipline en el estudiante su esfuerzo
              autodidáctico, su espíritu indicativo y las cualidades que lo
              habiliten para actuar con idoneidad moral e intelectual en su
              profesión y en la vida pública y privada.
            </p>
            <p className={styles["mision__content--p"]}>
              •El fomento de las actividades culturales.
            </p>
            <p className={styles["mision__content--p"]}>
              •El cultivo y la promoción de los valores éticos y cívicos de la
              nación.
            </p>
            <p className={styles["mision__content--p"]}>
              •Participación de la Universidad en proyectos nacionales.
            </p>
            <p className={styles["mision__content--p"]}>
              •La contribución positiva en la formación integral del hombre
              paraguayo.
            </p>
            <p className={styles["mision__content--p"]}>
              •La Universidad respeta toda concepción trascendente de la vida
              humana, y toda forma de convivencia pluralista y democrática de la
              ciudadanía nacional. No obstante, prescinde de cualquier confesión
              religiosa o denominación política determinada. Proclama la
              libertad de enseñar sin otra limitaciones que la afanosa y sincera
              búsqueda de la verdad.
            </p>
            <p className={styles["mision__content--p"]}>
              <strong>Instituciones asociadas</strong>
            </p>
            <p className={styles["mision__content--p"]}>
              Las Instituciones asociadas: son aquellas que constituidas,
              coadyuvan por medio de sus actividades específicas al cumplimiento
              de sus fines.
            </p>
          </div>
        </section>

        <section className={styles["mision"]} id="historia">
          <div className={styles["mision__content"]}>
            <h2 className={styles["mision__content--h2"]}>
              HISTORIA INSTITUCIONAL
            </h2>
            <p className={styles["mision__content--p"]}>
              La Universidad Hispano-Guaraní “Para el Desarrollo Humano” también
              conocida por sus siglas UHG, es una universidad privada creada por
              Ley Nº 3487 el 28 de mayo del año 2008, su Sede Central se
              encuentra ubicada en la Ciudad de San Juan Bautista de las
              Misiones, República del Paraguay, es miembro de la REdPEA de la
              CNC UNESCO-Capítulo Paraguay y es la primera Universidad creada en
              el VIII Departamento de Misiones.
            </p>
            <p className={styles["mision__content--p"]}>
              El edificio antiguo de la UHG integra la lista de Patrimonios
              Edilicios Urbano Municipal por pertenecer a una arquitectura de
              estilo italianizante y que data del año 1920, pudiendo sufrir
              intervenciones únicamente funcional tratando de mantener la
              riqueza espacial interior y exterior.
            </p>
            <p className={styles["mision__content--p"]}>
              Su fundador ha sido el insigne intelectual misionero Profesor
              Licenciado Teófilo Eusebio Amarilla González, siendo la Asociación
              “Provincia Gigante de las Indias”, Para la Educación, la Cultura y
              el Desarrollo Humano la patrocinante y sostenedora del Proyecto
              Educativo para la creación de la misma ante el Consejo de
              Universidades del Paraguay y ante el Poder Legislativo Nacional
              (Cámara de Senadores y Cámara de Diputados).
            </p>
            <p className={styles["mision__content--p"]}>
              Nace y se desarrolla bajo el lema que reza “La Sabiduría del
              Hombre Honra a la Verdad y a la Libertad”, donde se expresa
              intrínsecamente el espíritu del ideal de la Visión de la
              Universidad, su denominación ¨Hispano - Guaraní¨, constituye la
              exaltación a un aspecto de la Identidad Nacional, la Nación
              Paraguaya, esta cimentada de manera incuestionable en la Amalgama
              de dos elementos socio - culturales: el Español y el Guaraní.
            </p>
            <p className={styles["mision__content--p"]}>
              El escudo adoptado por la Universidad Hispano-Guaraní es una
              figura geométrica triangular de lados iguales con uno de sus
              vértices en la parte superior simbolizando la perfección y
              exactitud, dentro de la figura geométrica triangular, la esfera
              celeste resaltando el continente de la América del Sur y el
              Continente Europeo con la Península Ibérica, dentro del contorno
              de la América del Sur, los límites antiguos del Paraguay,
              Provincia Gigante de las Indias Occidentales y la Línea de
              Tordesillas, dentro del continente Europeo, resalta la Península
              Ibérica- España, de donde se proyectan líneas de comunicación
              entre la cultura española y la guaraní, sobre el Gran Mar- Océano
              conocido en la cartografía de la época como Gran Mar del Paraguay
              y entre el Continente Americano y el Europeo, un libro abierto,
              escrito en una cara “América 1.492” y en la otra “Asunción 1.537”
              años de sus descubrimientos respectivos, al pie del libro abierto,
              en la parte superior del lado derecho, dos ramas de la yerba mate,
              producto nativo representativo desde los inicios coloniales, en
              los espacios formados por los vértices y la esfera celeste quedan
              distribuidas diez estrellas representando a las carreras con las
              que se inicia la Universidad, externamente y bordeando los tres
              lados del triángulo queda escrita la leyenda: Universidad
              Hispano-Guaraní, al pie del triángulo y dentro de un pergamino
              extendido el lema de la Universidad, encontraremos impresos en
              documentos oficiales utilizados por la Universidad, así mismo la
              Universidad adopta como logo el acrónimo UHG, su diseño mantiene
              una gran cantidad de elementos que conforman el Escudo de manera
              más simplificada, la misma es utilizada para las actividades de
              carácter promocional por su simplicidad.
            </p>
            <p className={styles["mision__content--p"]}>
              El Gobierno de la Universidad se ejerce bajo el principio de la
              Autonomía Universitaria que la Constitución Nacional consagra y
              con la participación democrática de sus integrantes, respetando
              las leyes que regulan la Educación Superior en la República del
              Paraguay, la Estructura Orgánica de Gobierno está conformada por
              el Consejo Directivo de Administración y Finanzas, El Consejo
              Superior Universitario, El Rectorado, El Vice-Rectorado, la
              Secretaría General, los Decanatos y/o las Direcciones de Carreras,
              teniendo la Universidad como una de sus finalidades la formación y
              capacitación de profesionales y técnicos con una conciencia basada
              en nuestra tradición cultural mediante una educación que fomente y
              disciplina en el estudiante su esfuerzo autodidáctico, su espíritu
              indagativo y las cualidades que lo habiliten para actuar con
              idoneidad moral e intelectual en su profesión y en la vida pública
              y privada La Gobernación del VIII Departamento de Misiones y la
              Municipalidad de San Juan Bautista de las Misiones han declarado a
              la Universidad Hispano-Guaraní de Interés Departamental y
              Educativo, siendo reconocida con el Premio Mangoré en el año 2009
              por ser la Primera Universidad con asiento Central en el
              Departamento de Misiones y comprometida con la excelencia
              académica. Desde sus inicios además se encuentra comprometida en
              la recuperación y el fortalecimiento de las expresiones culturales
              y patrióticas, capaces de desarrollar el autoestima individual y
              colectivo paraguayo, su dulce lengua guaraní, la fomentación de la
              educación en valores, la cultura del arte, misma que se ve
              plasmada en la creación del Ballet UHG concretada luego de algunos
              años de su creación.
            </p>
            <p className={styles["mision__content--p"]}>
              La Universidad aceptando retos crece y se posiciona en las
              ciudades de Asunción, Cnel. Oviedo, Ciudad del Este y San Juan
              Bautista de las Misiones.
            </p>
            <p className={styles["mision__content--p"]}>
              <strong>Constitución Legal</strong>
            </p>
            <p className={styles["mision__content--p"]}>
              En la Ley Nro. 3487, aprobado por la Honorable Cámara de
              Senadores, a los 29 días del Mes de Noviembre del Año 2007, el
              Congreso de la Nación Paraguaya sanciona con fuerza de Ley, la
              creación de la Universidad Hispano Guaraní Para el Desarrollo
              Humano, como entidad privada que adecuará su funcionamiento a la
              Ley de Universidades Nro. 136/93. Quedando sancionado por la
              Honorable Cámara de Diputados, el 08 de Mayo del 2008, de
              conformidad con lo dispuesto en la Constitución Nacional en el
              Artículo 206. Suscribieron el documento oficial; presidente de la
              Honorable Cámara de Senadores: Miguel Abdón Saguier;
              Vicepresidente Primero de la Honorable Cámara de Diputados:
              Osvaldo Ramón Ferrás Morel; Secretaria Parlamentaria: Olga
              Ferreira de López; Secretaria Parlamentaria: Alberto Ratti Jaegli.
              El 28 de Mayo del año 2008, el Presidente Nicanor Duarte Frutos lo
              suscribe con la Ministra de Educación y Cultura: María Ester
              Jiménez, insertándose en el Registro Oficial.
            </p>
          </div>
        </section>

        <section className={styles["ley"]} id="ley">
          <div className={styles["ley__content"]}>
            <div className={styles["ley__content--mask"]}></div>
            <img
              className={styles["ley__content--img"]}
              src="/static/img/institucional/filiales-min.webp"
              alt=""
            />
            <h2 className={styles["ley__content--h2"]}>LEY DE CREACIÓN</h2>
            <button className={styles["ley__content--btn"]}>
              <a
                className={styles["ley__content--a"]}
                href="https://drive.google.com/file/d/1u21MIjV-POW6GPN6leteTX6dhazWGZTY/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más
              </a>
            </button>
          </div>
        </section>
        <section className={styles["cones"]} id="cones">
          <div className={styles["cones__content"]}>
            <div className={styles["cones__content--mask"]}></div>
            <img
              className={styles["cones__content--img"]}
              src="/static/img/institucional/cones.jpg"
              alt=""
            />
            <h2 className={styles["cones__content--h2"]}>
              HABILITADO POR EL CONES
            </h2>
            <button className={styles["cones__content--btn"]}>
              <a
                className={styles["cones__content--a"]}
                href="https://drive.google.com/file/d/1fU68F-YkQeCs8tCTp6ymkjcZefoR-VwE/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más
              </a>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Institucional;
