import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

function App() {
  const inputValue = useRef();

  const [gituser, setGituser] = useState(null);

  //! submit handler
  const submitHandler = (e) => {
    e.preventDefault();
  };

  //! button handler
  const buttonHandler = () => {
    const user = { user: inputValue.current.value };

    const config = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:7000/user", config)
      .then((response) => response.json())
      .then((result) => setGituser(result));

    inputValue.current.value = "";
  };
  return (
    <Container className="App">
      <h2>Look for a github user</h2>
      <Row>
        <Col xl="6" className="input-container">
          <Form onSubmit={submitHandler} className="main-form">
            <input ref={inputValue} type="text" placeholder="write a name..." />
            <Button onClick={buttonHandler} variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xl="6" className="output-container">
          {gituser && (
            <div className="details">
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <p>Username:</p>
                    </div>
                    <h6>{gituser.username}</h6>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <p>Location:</p>
                    </div>
                    <h6>{gituser.location}</h6>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <p>UserId:</p>
                    </div>
                    <h6>{gituser.id}</h6>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <p>Bio:</p>
                    </div>
                    <h6>{gituser.bio}</h6>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <p>Public repos:</p>
                    </div>
                    <h6>{gituser.repos}</h6>
                  </div>
                </ListGroup.Item>

                <ListGroup.Item className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <p>Followers:</p>
                    </div>
                    <h6>{gituser.followers}</h6>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
