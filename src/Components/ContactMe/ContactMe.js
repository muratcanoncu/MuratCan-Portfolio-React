import emailjs from "emailjs-com";

import ContactForm from "./Img/contactForm.jpeg";
function ContactMe() {
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
        width: "100%",
      }}
    >
      <form id="contactFormElement" onSubmit={sendEmail}>
        <div className="contactELements h-100 text-white">
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
        <div className="d-flex justify-content-between flex-column h-100 text-white">
          <div className="mb-1">
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
            id="contactButton"
            className="w-50 mx-auto"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
