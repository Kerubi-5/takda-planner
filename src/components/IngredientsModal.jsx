import { useState, useRef } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { addDoc } from "firebase/firestore";
import { recipeDocs } from "./../utils/firebase";
import { useAuth } from "../contexts/AuthContext";

const RecipeModal = () => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const nameRef = useRef(null);
  const quantityRef = useRef(null);
  const handleClose = () => setShow(false);
  const handleAdd = async () => {
    try {
      const docRef = await addDoc(recipeDocs, {
        name: nameRef.current.value,
        quantity: quantityRef.current.value,
        uid: user.uid,
      });

      console.log("Successfully added a new ingredient", docRef.id);
    } catch (err) {
      console.log("Error in adding new ingredient: ", err);
    }
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
            <Form.Control type="text" ref={nameRef} />
          </FloatingLabel>
          <FloatingLabel label="Quantity" className="mb-3">
            <Form.Control type="number" ref={quantityRef} />
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
