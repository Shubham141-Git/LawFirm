import NavBar from "./component/Navbar/Navbar";
import Hero from "./component/HeroImage/Hero";
import Introduce from "./component/IntroduceScetion/Introduce";
import AboutSection from "./component/CardSection/AboutSection";
import Practice from "./component/PraticeSection/PraticeSection";
import Clients from "./component/HappyClients/Clients";
import TeamCard from "./component/OurTeam/TeamCard";
import OurTeam from "./component/OurTeam/OurTeam";
import FAQ from "./component/FAQ/FAQ";
import NewsLetter from "./component/News/News";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Introduce />
      <AboutSection />
      <Practice />
      <Clients />
      <OurTeam />
      <FAQ />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
