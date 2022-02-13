import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utils/firebase";

const CalendarModal = ({ show, setShow, item }) => {
  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    await deleteDoc(doc(db, "agendas", item.id));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item?.title}</Modal.Title>
        </Modal.Header>
        {item && (
          <Modal.Body>
            <FloatingLabel label="Start date" className="mb-3">
              <Form.Control type="text" value={item?.start} readOnly />
            </FloatingLabel>
            <FloatingLabel label="End date" className="mb-3">
              <Form.Control type="text" value={item?.end} readOnly />
            </FloatingLabel>
            <FloatingLabel label="Description" className="mb-3">
              <Form.Control type="text" value={item?.description} readOnly />
            </FloatingLabel>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <i className="bx bxs-door-open"></i> Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            <i className="bx bxs-trash"></i> Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CalendarModal;
