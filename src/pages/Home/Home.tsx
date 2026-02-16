import Header from "../../components/Header";
import SearchArea from "./components/SearchArea";
import About from "./components/About";
import Register from "./components/Register";
import Faq from "./components/Faq";
import Footer from "../../components/Footer";
import Developers from "./components/Developers";

const Home = () => {
  return (
    <div className="bg-background">
      <Header />
      <div id="search">
        <SearchArea />
      </div>
      <div id="register">
        <Register />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="developers">
        <Developers />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
