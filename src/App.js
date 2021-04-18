import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

//! Components
import Navbar from "./Components/Navbar/Navbar";
import ContactModal from "./Components/ContactMe/ContactModal";
import Banner from "./Components/Banner/Banner";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyServices from "./Components/MyServices/MyServices";
import MyProjects from "./Components/MyProjects/MyProjects";
import ContactMe from "./Components/ContactMe/ContactMe";
import ToTop from "./Components/ToTop/ToTop";
import Footer from "./Components/Footer/Footer";
function App() {
  const [state, setState] = useState({ showModal: false, show: true });
  const showModal = () => {
    setState({
      showModal: true,
    });
  };
  const hideModal = () => {
    setState({ showModal: false });
  };
  return (
    <div className="App">
      <Navbar></Navbar>
      {state.showModal ? (
        <ContactModal closeModal={hideModal}></ContactModal>
      ) : null}
      <Banner></Banner>
      {/* content of about me */}
      <AboutMe></AboutMe>
      <MyServices></MyServices>
      {/* Add your projects */}
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
      <ToTop></ToTop>
      <Footer contactModal={showModal}></Footer>
    </div>
  );
}

export default App;
