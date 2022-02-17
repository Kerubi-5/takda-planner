import { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { addDoc, setDoc, doc } from "firebase/firestore";
import { recipeDocs, db } from "./../utils/firebase";
import { useAuth } from "../contexts/AuthContext";

const IngredientsModal = ({ show, setShow, id }) => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const handleClose = () => setShow(false);
  const handleAdd = async () => {
    try {
      if (id) {
        await setDoc(doc(db, "recipes", id), {
          name: name,
          quantity: quantity,
          uid: user.uid,
        });
        handleClose();
        return;
      }

      const docRef = await addDoc(recipeDocs, {
        name: name,
        quantity: quantity,
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FloatingLabel label="Item name" className="mb-3">
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FloatingLabel>
          <FloatingLabel label="Quantity" className="mb-3">
            <Form.Control
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="bx bxs-door-open"></i> Close
          </Button>
          <Button variant="success" onClick={handleAdd}>
            <i className="bx bx-plus-circle"></i> Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IngredientsModal;
