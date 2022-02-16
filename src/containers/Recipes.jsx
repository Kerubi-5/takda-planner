import { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { onSnapshot, query, where } from "firebase/firestore";
import { recipeDocs } from "../utils/firebase";
import { useAuth } from "../contexts/AuthContext";

const Recipes = () => {
  const [lists, setLists] = useState();
  const { user } = useAuth();

  const renderList = () => {
    return lists?.map((list) => {
      return (
        <tr key={list.id}>
          <td>{list.title}</td>
          <td>{list.quantity}</td>
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
      <h1>Recipes</h1>
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
