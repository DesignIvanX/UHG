import Canva from "@components/Canva";
import Lazy from "@components/reusable/Lazy/Lazy";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Canva>
      <Component {...pageProps} />
    </Canva>
  );
};

export default MyApp;
