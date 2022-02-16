import { useState, useRef } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { addDoc, Timestamp } from "firebase/firestore";
import { agendaDocs } from "../utils/firebase";
import { useAuth } from "../contexts/AuthContext";

const DataForm = () => {
  const { user } = useAuth();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const titleRef = useRef(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const descRef = useRef(null);

  const saveChanges = async () => {
    const data = {
      uid: user.uid,
      title: titleRef.current.value,
      start: new Date(startDateRef.current.value),
      end: new Date(endDateRef.current.value),
      desc: descRef.current.value,
    };

    try {
      const docRef = await addDoc(agendaDocs, {
        uid: data.uid,
        title: data.title,
        start: Timestamp.fromDate(data.start).toDate(),
        end: Timestamp.fromDate(data.end).toDate(),
        desc: data.desc,
      });

      console.log("Document written with ID: ", docRef.id);
      handleClose();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new agenda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title of the agenda"
                ref={titleRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="start_date">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Start date"
                ref={startDateRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="end_date">
              <Form.Label>End date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="End date"
                ref={endDateRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="desc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description of the agenda"
                ref={descRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        style={{ float: "right" }}
        className="m-3"
        variant="success"
        onClick={() => setShow(true)}
      >
        <i className="bx bx-alarm-add"></i> ADD NEW PLAN
      </Button>
    </>
  );
};

export default DataForm;
