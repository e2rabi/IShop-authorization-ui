import Menu from "./Menu";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Alert from "react-bootstrap/Alert"
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Role = () => {
  const navigate = useNavigate();
  const addPermission = () => {
    navigate("/authorities");
  };
  const options = [
    { value: "chocolate", label: "Create-user" },
    { value: "strawberry", label: "Delete-user" },
    { value: "vanilla", label: "Edit-user" },
  ];
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
                Role managment
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-text" active>
                new role
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Row>
        <Row>
          <Col>
            <Form className="role-form">
              <Row className="form-row">
                <Col className="form-col">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Role name </Form.Label>
                    <Form.Control
                      className="form-input form-role-input"
                      size="sm"
                      type="text"
                      placeholder="Role name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="form-col">
                <Form.Group className="mb-4" controlId="formBasicPassword">
                <Alert className="alert-permission" variant="success">
                    Role created with success
                </Alert>
                  </Form.Group>
               
                </Col>
              </Row>
              <Row className="form-row permission">
              <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Permissions </Form.Label>
                    <Select className="form-role-input" isMulti options={options} />
                  </Form.Group>
                </Col>
              <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Button
                    className="form-btn-manage-permission"
                    size="sm"
                    variant="link"
                    onClick={()=>addPermission()}
                  >
                    Edit permissions
                  </Button>
                  </Form.Group>
                </Col>
             
              </Row>
              <Row>
                <Col className="form-col">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Button className="btn-create-role" variant="success" type="submit">
                      Save
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
              <Col className="form-col">
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Button
                    className="form-btn-edit-roles"
                    size="sm"
                    variant="link"
                    onClick={()=>addPermission()}
                  >
                    Edit roles
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

export default Role;
