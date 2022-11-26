import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Badge, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-user");
  };
  const [currentUser] = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg" className="menu-bg">
      <Container>
        <Navbar.Brand href="#home" className="ishop-brand">
          ISHOP Authorization
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="User managment" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Configuration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="btn-create-user">
          <Button onClick={handleClick} variant="primary" size="sm">
            Create new user
          </Button>
        </div>
        <div>
          <h6 className="current-user">{currentUser}</h6>
        </div>
      </Container>
    </Navbar>
  );
};

export default Menu;
