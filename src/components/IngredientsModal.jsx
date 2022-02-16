import { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const RecipeModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleAdd = () => {
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={() => setShow(true)}>
        <i className="bx bx-plus-medical"></i>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FloatingLabel label="Item name" className="mb-3">
            <Form.Control type="text" />
          </FloatingLabel>
          <FloatingLabel label="Quantity" className="mb-3">
            <Form.Control type="number" />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="bx bxs-door-open"></i> Close
          </Button>
          <Button variant="success" onClick={handleAdd}>
            <i className="bx bx-plus-circle"></i> Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecipeModal;
