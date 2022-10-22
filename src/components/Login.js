import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import UserContext from "./UserContext";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(false);
  const handleErrorClose = () => setShow(false);
  const handleErrorShow = () => setShow(true);
  const handleOtpClose = () => setOtp(false);
  const handleOtpShow = () => setOtp(true);

  function validateJwt(data) {
    if (data != undefined && data != null) {
      let decodedJwt = parseJwt(data.jwt);
      let userName = "";
      if (decodedJwt != undefined && decodedJwt != "" && decodedJwt != null) {
        userName = decodedJwt.userName;
        if(data.useGoogle2f!= undefined && data.useGoogle2f!= null &&  data.useGoogle2f=="true"){
          handleOtpShow();
        }
      }
      setUser(userName);
      //navigate("/home");
    }
  }

  function parseJwt(token) {
    if (token != undefined && token != null) {
      sessionStorage.setItem("jwt", token);
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    }
    return JSON.parse(jsonPayload);
  }
  async function login() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: username, password: password }),
    };
    await fetch(`http://localhost:8080/api/v1/public/login`, requestOptions)
      .then((response) => response.json())
      .then((data) => validateJwt(data))
      .catch((error) => {
        console.log(JSON.stringify(error));
        setUser("");
        handleErrorShow();
      });
  }

  return (
    <div className="login">
      <Modal
        show={otp}
        onHide={handleOtpClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Verification code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <p>Please enter the one time password to verify your account.</p>
           <div className="otp-input-wrapper">
           <input className="otp-input"></input>
           <input className="otp-input"></input>
           <input className="otp-input"></input>
           <input className="otp-input"></input>
           <input className="otp-input"></input>
           <input className="otp-input"></input>
           </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleOtpClose}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={show}
        onHide={handleErrorClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Authentication Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Login failed , Your username and/or password do not match
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleErrorClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <h3>IShop Authentication</h3>
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon={faLock} />
            </InputGroup.Text>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </InputGroup>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
