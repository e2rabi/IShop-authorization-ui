import Menu from "./Menu";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert"
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Authority = () => {
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
                Authorities managment
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-text" active>
                new permission
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Row>
        <Row>
          <Col>
            <Form className="authority-form">
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Permission name </Form.Label>
                    <Form.Control
                      className="form-input form-role-input"
                      size="sm"
                      type="text"
                      placeholder="Permission name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="form-col">
                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Alert className="alert-permission" variant="success">
                    Permission created with success
                </Alert>
                  </Form.Group>
               
                </Col>
              </Row>
              <Row>
                <Col className="form-col">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Button className="btn-create-authority" variant="success" type="submit">
                      Save
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="form-col">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Button
                    className="edit-permission"
                    size="sm"
                    variant="link"
                  >
                    Edit permissions
                  </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Authority;
