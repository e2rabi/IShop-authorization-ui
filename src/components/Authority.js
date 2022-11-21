import Menu from "./Menu";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import IshopAlert from "./errors/IshopAlert";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const Authority = () => {
  const [permission, setPermission] = useState("");
  const [alert, setAlert] = useState(false);
  const [variant, setVariant] = useState("");
  const [message, setMessage] = useState("");
  const [renderAlert, setRenderAlert] = useState(Date.now());
  const [permissions, setPermissions] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getPermissions();
  }, []);
  const displayAlert = (type, message) => {
    if (type != null && type == "success") {
      setVariant("success");
    } else {
      setVariant("danger");
    }
    setAlert(true);
    setRenderAlert(Date.now());
    setMessage(message);
  };
  const deletePermission = async (id) => {
    await fetch(`http://localhost:8080/api/v1/authorities/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log("deleted with success");
        getPermissions();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
  const getPermissions = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(
      `http://localhost:8080/api/v1/authorities?page=0&size=4`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data != null) {
          setPermissions(data.content);
          setTotalPages(data.totalPages);
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };
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
          displayAlert("success", "Permission created with success");
          getPermissions();
        } else {
          if (data != null && data.code == "1006") {
            displayAlert("warn", "Permission already exist");
          }
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        displayAlert("error", "Permission creating failed");
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
                    <div className="authority-errors">
                      <IshopAlert
                        display={alert}
                        variant={variant}
                        message={message}
                        render={renderAlert}
                      ></IshopAlert>
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
                      Add
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="form-row">
                <Col className="form-col">
                  <Card className="permission-container">
                    <Card.Body>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Permission Name</th>
                            <th className="cell-edit-authority"></th>
                            <th className="cell-edit-authority"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {permissions.map((item) => {
                            return (
                              <tr key={item.id}>
                                <td>{item.permission}</td>
                                <td>
                                  <Button
                                    className="btn-edit-authority"
                                    variant="primary"
                                    size="sm"
                                  >
                                    Edit
                                  </Button>
                                </td>
                                <td>
                                  <Button
                                    className="btn-edit-authority"
                                    variant="danger"
                                    size="sm"
                                    onClick={() => deletePermission(item.id)}
                                  >
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Card.Body>
                    <Card.Footer className="text-muted" size="sm">
                      <Pagination className="permission-pagination">
                        <Pagination.First />
                            {(() => {
                                  const arr = [];
                                  for (let i = 0; i < totalPages; i++) {
                                      arr.push(
                                        <Pagination.Item key={i}>{i}</Pagination.Item>
                                      );
                                  }
                                  return arr;
                              })()}
                        <Pagination.Last />
                      </Pagination>
                    </Card.Footer>
                  </Card>
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
