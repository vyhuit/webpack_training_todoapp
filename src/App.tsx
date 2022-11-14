import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { Button, Form, ListGroup } from 'react-bootstrap';

function App() {
  // const [count, setCount] = useState(0);
  const [newTaskName, setNewTaskName] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  useEffect(() => {
    console.log("do effect");
    setNewTaskName("");
  }, [taskList]);
  return (
    <div className="App container">
      <div className="main">
        <Form
          className="p-5"
          onSubmit={
            (event) => {
              event.preventDefault();
              if (!newTaskName || newTaskName == "")
                alert("No task name.");
              else if (taskList.includes(newTaskName)) {
                alert("Task name already exists.");
                setNewTaskName("");
              }
              else
                setTaskList([...taskList, newTaskName]);
            }
          }
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              value={newTaskName}
              type="text"
              placeholder="Enter your task"
              onChange={
                (e) => {
                  setNewTaskName(e.target.value);
                }} />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
          >
            Add
          </Button>
        </Form>

        <ListGroup variant="flush">
          {
            taskList.map(
              (item) =>
                <ListGroup.Item
                  key={item}
                >
                  {item}
                </ListGroup.Item>
            )
          }
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
