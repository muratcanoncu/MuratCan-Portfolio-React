import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ContactModal(props) {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show} onClick={props.closeModal}>
      <Modal.Header>
        <Modal.Title className="mx-auto font-weight-bolder">
          Murat Can Öncü
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>E-mail: mcanoncuu@gmail.com</h5>
        <h5>Tel: +49-163-199-25-63</h5>
        <h5>Address: Liebenwalder Straße 8, 13347, Berlin</h5>
        <p className="text-center mt-3">Turkish | English | German</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactModal;
