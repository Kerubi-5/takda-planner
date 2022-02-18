import { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { onSnapshot, query, where, deleteDoc, doc } from "firebase/firestore";
import { recipeDocs, db } from "../utils/firebase";
import { useAuth } from "../contexts/AuthContext";
import IngredientsModal from "../components/IngredientsModal";

const Recipes = () => {
  const [itemId, setItemId] = useState();
  const [show, setShow] = useState(false);
  const [lists, setLists] = useState();
  const { user } = useAuth();

  const editModal = (list) => {
    setItemId(list);
    setShow(true);
  };

  const addModal = () => {
    setItemId(false);
    setShow(true);
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "recipes", id));
  };

  const renderList = () => {
    return lists?.map((list) => {
      return (
        <tr key={list.id}>
          <td>{list.name}</td>
          <td>{list.quantity}</td>
          <td width={10}>
            <Button
              variant="primary"
              className="mb-2"
              onClick={() => editModal(list)}
            >
              <i className="bx bx-edit-alt"></i>
            </Button>
            <Button variant="danger" onClick={() => deleteItem(list.id)}>
              <i className="bx bx-trash"></i>
            </Button>
          </td>
        </tr>
      );
    });
  };
  useEffect(() => {
    const userQuery = query(recipeDocs, where("uid", "==", user.uid));

    const unsub = onSnapshot(userQuery, (doc) => {
      setLists(doc.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsub;
  }, [user.uid]);

  return (
    <Container className="mt-5">
      <div className="header">
        <h1>Ingredients</h1>
        <Button variant="success" onClick={() => addModal()}>
          <i className="bx bx-plus-medical"></i>
        </Button>
        <IngredientsModal show={show} setShow={setShow} item={itemId} />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </Table>
    </Container>
  );
};

export default Recipes;
