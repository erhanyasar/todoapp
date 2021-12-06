import React, { useState } from "react";
import Todos from "./Todos";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/App.css";

function App() {
  const [toDoItemFlag, setToDoItemFlag] = useState(false);
  const [toDoItem, setToDoItem] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  const onToDoSubmitted = (event) => {
    setToDoItem(event.target.value);
  };

  const OnToDoSend = () => {
    const newToDos = [...toDoItems];
    newToDos.push(toDoItem);
    setToDoItems(newToDos);
    setToDoItemFlag(true);
  };

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1>To Do App</h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <Form.Label>To Do to Enter: </Form.Label>
        </Col>
        <Col>
          <Form.Control
            type="email"
            placeholder="Please type an item to do..."
            onChange={(e) => onToDoSubmitted(e)}
          />
        </Col>
        <Col>
          <Button variant="info" type="submit" onClick={OnToDoSend}>
            <FontAwesomeIcon icon={faPlus} style={{ color: "#FFF" }} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Todos
            toDoItem={toDoItem}
            toDoItems={toDoItems}
            toDoItemFlag={toDoItemFlag}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
