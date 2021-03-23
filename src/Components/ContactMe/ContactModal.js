import React from "react";
import { Modal, Button } from "react-bootstrap";
function ContactModal(props) {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title className="mx-auto">Murat Can Öncü</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>Tel: +49-163-199-25-63</h5>
        <h5>E-mail:murat.oncu1992@hotmail.com</h5>
        <p>Address:Liebenwalder Str. 8, 13347,Berlin</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={props.closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ContactModal;
