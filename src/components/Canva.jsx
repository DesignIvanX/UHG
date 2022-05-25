import Navegation from "@components/Navegation";
import Footer from "@components/Footer";

const Canva = ({ children }) => {
  return (
    <>
      <Navegation />
      {children}
      <Footer />
    </>
  );
};

export default Canva;
