import Menu from "./Menu";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useState } from "react";

const Authority = () => {
  const [permission, setPermission] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [exist, setExist] = useState(false);

  const saveAuthority = async (permission) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ permission: permission }),
    };
    await fetch(`http://localhost:8080/api/v1/authorities`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data != null && data.id != null) {
          setSuccess(true);
          setFailed(false);
          setExist(false);
        } else {
          if (data != null && data.code == "1006") {
            setSuccess(false);
            setFailed(false);
            setExist(true);
          }
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        setSuccess(false);
        setFailed(true);
        setExist(false);
      });
  };
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
                      onChange={(e) => setPermission(e.target.value)}
                      onBlur={(e) => setPermission(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="form-col">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <div className="authority-errors"> {/* to be moved to a componenet for error display*/}
                      <Alert
                        style={{ display: success == true ? "block" : "none" }}
                        className="alert-permission"
                        variant="success"
                        onClose={() => setSuccess(false)}
                        dismissible
                      >
                        Permission created with success
                      </Alert>
                      <Alert
                        style={{ display: failed == true ? "block" : "none" }}
                        className="alert-permission"
                        variant="danger"
                        onClose={() => setFailed(false)}
                        dismissible
                      >
                        Permission creating failed
                      </Alert>
                      <Alert
                        style={{ display: exist == true ? "block" : "none" }}
                        className="alert-permission"
                        variant="danger"
                        onClose={() => setExist(false)}
                        dismissible
                      >
                        Permission already exist
                      </Alert>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="authority-row-btn">
                <Col className="form-col">
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Button
                      disabled={permission == ""}
                      onClick={() => saveAuthority(permission)}
                      className="btn-create-authority"
                      variant="success"
                      type="button"
                    >
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
