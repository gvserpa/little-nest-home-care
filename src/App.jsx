import "./App.css";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import FormSection from "./components/FormSection.jsx";
import Articles from "./components/Articles.jsx";
import Footer from "./components/Footer.jsx";



function App() {
  return (
    <>
      <Header
        number="(61) 0451 685 180"
        address="16 Park Road, Sans Souci 2219"
        time="Monday - Saturday 9 am - 11:30pm"
      />
      <MainContent
        costumers="2000+"
        years="16"
        rating="4.9/5"
        description="We provide safe, loving home day care. Our staff offers nurturing activities. Children learn, play, and grow, while parents enjoy peace of mind knowing their little ones are cared for."
      />
      <Cards 
        satisfaction="We deliver outstanding support, guaranteeing comfort and reassurance for each family."
        nurses="We provide dedicated nursing care, ensuring comfort and confidence for every patient."
        lowcost="We offer affordable care services, delivering quality and peace of mind for every family."
      />
      <About />
      <FormSection />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
