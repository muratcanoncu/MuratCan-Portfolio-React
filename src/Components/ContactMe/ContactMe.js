import emailjs from "emailjs-com";
import { useState } from "react";
import ContactModal from "./ContactModal";
import ContactForm from "./Img/contactForm.jpeg";
function ContactMe() {
  const [state, setState] = useState({ showModal: false });
  const showModal = () => {
    setState({
      showModal: true,
    });
  };
  const hideModal = () => {
    setState({ showModal: false });
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f4v6a4m",
        "template_v2p96rr",
        e.target,
        "user_kbdusfLK0OaCmaLxtMKAd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div
      id="contactForm"
      style={{
        background: `url(${ContactForm})`,
        height: "40vh",
        width: "100%",
        border: "1px solid black",
      }}
      className="d-flex justify-content-end align-items-center"
    >
      {state.showModal ? (
        <ContactModal closeModal={hideModal}></ContactModal>
      ) : null}

      <form
        onSubmit={sendEmail}
        className="d-flex justify-content-between align-items-center w-50"
        style={{ height: "25vh", marginRight: "120px" }}
      >
        <div
          className="d-flex flex-column justify-content-between h-100 text-white"
          style={{ width: "48%" }}
        >
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="yourname@mail.com"
              name="email"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              style={{ width: "100%" }}
            ></input>
          </div>
        </div>
        <div
          className="d-flex justify-content-between flex-column h-100 text-white"
          style={{ width: "48%" }}
        >
          <div>
            <label>Message</label>
            <textarea
              placeholder="Your Message.."
              rows="6"
              cols="19"
              style={{ width: "100%", marginBottom: "10px" }}
              name="message"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="w-50 mx-auto btn-dark"
          ></input>
        </div>
      </form>
      {/* <button onClick={showModal} className="btn-dark px-2">
        Contact Me!
      </button> */}
    </div>
  );
}

export default ContactMe;
