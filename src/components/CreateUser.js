import Menu from "./Menu";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const CreateUser = () => {
  return (
    <div>
      <header>
        <Menu></Menu>
      </header>
      <Container fluid>
        <Row>
          <div className="breadcrumb">
            <Breadcrumb className="breadcrumb-menu">
              <Breadcrumb.Item className="breadcrumb-text" href="#">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-text" href="#">
                User managment
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-text" active>
                new user
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Row>
        <Row>
          <Col>
            <Form className="user-form">
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control
                      className="form-input"
                      size="sm"
                      type="text"
                      placeholder="Firstname"
                    />
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control
                      className="form-input"
                      size="sm"
                      type="text"
                      placeholder="Lastname"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      className="form-input"
                      size="sm"
                      type="email"
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      className="form-input"
                      size="sm"
                      type="text"
                      placeholder="Phone"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="form-input"
                      size="sm"
                      type="password"
                      placeholder="Enter password"
                    />
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control
                      className="form-input"
                      size="sm"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      className="form-input"
                      size="sm"
                      type="text"
                      placeholder="Username"
                    />
                  </Form.Group>
                </Col>
                <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      className="form-input"
                      size="sm"
                      aria-label="Default select example"
                    >
                      <option>Select user role</option>
                      <option value="1">Guest</option>
                      <option value="2">Admin</option>
                      <option value="3">root</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-row">
                <Col className="form-col">
                  <div className="form-checker">
                    <Form.Check
                      size="sm"
                      type="switch"
                      className="form-check-label"
                      id="custom-switch"
                      label="Auto generate password"
                    />
                    <Form.Check
                      size="sm"
                      type="switch"
                      className="form-check-label"
                      id="custom-switch"
                      label="Enable two factors authentication"
                    />
                  </div>
                </Col>
                <Col>
                  <Button
                    className="form-btn-manage-role"
                    size="sm"
                    variant="link"
                  >
                    Manage roles
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="form-col">
                 
                </Col>
                <Col className="form-col">
                <Button variant="success" type="submit">
                    Create user
                  </Button>
                </Col>
                <Col className="form-col">
             
                 </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateUser;
