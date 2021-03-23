import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//! Components
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyServices from "./Components/MyServices/MyServices";
import MyProjects from "./Components/MyProjects/MyProjects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MyServices></MyServices>
      {/* Add your projcets */}
      <MyProjects></MyProjects>
      {/* contact me */}
      <ContactMe></ContactMe>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
