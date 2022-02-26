import { useState, useEffect } from "react";
import { Container, Table, Button, Card } from "react-bootstrap";
import { onSnapshot, query, where, deleteDoc, doc } from "firebase/firestore";
import { recipeDocs, db } from "../utils/firebase";
import { useAuth } from "../contexts/AuthContext";
import IngredientsModal from "../components/IngredientsModal";

const Recipes = () => {
  const [itemId, setItemId] = useState();
  const [show, setShow] = useState(false);
  const [lists, setLists] = useState();
  const [recipes, setRecipes] = useState([]);
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

  const renderRecipes = () => {
    return recipes?.map((list) => {
      return (
        <Card className="mb-3" key={list.id}>
          <Card.Img variant="top" src={list.image} />
          <Card.Body>
            <Card.Title>{list.title}</Card.Title>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=f620e36196544eebbacaeea1e53c0439&ingredients=${lists
        ?.map((item) => item.name.toLowerCase())
        .join(",+")}
        &number=4`,
      {
        method: "GET",
        headers: new Headers({ "content-type": "application/json" }),
      }
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, [lists]);

  return (
    <Container className="mt-5">
      <div className="header">
        <h1>Ingredients</h1>
        <Button variant="success" onClick={() => addModal()}>
          <i className="bx bx-plus-medical"></i>
        </Button>
        <IngredientsModal show={show} setShow={setShow} item={itemId} />
      </div>
      <Table className="mb-5" striped bordered hover>
        <thead>
          <tr>
            <th>Item name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </Table>
      <div>
        <h1>Available Recipes</h1>
        <div className="grid">{renderRecipes()}</div>
      </div>
    </Container>
  );
};

export default Recipes;
