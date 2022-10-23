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

  const [otp1,setOtp1] = useState("0");
  const [otp2,setOtp2] = useState("0");
  const [otp3,setOtp3] = useState("0");
  const [otp4,setOtp4] = useState("0");
  const [otp5,setOtp5] = useState("0");
  const [otp6,setOtp6] = useState("0");  


  function validateJwt(data) {
    if (data != undefined && data != null) {
      let decodedJwt = parseJwt(data.jwt);
      if (decodedJwt != undefined && decodedJwt != "" && decodedJwt != null) {
        setUser(decodedJwt.userName);
        if (
          data.useGoogle2f != undefined &&
          data.useGoogle2f != null &&
          data.useGoogle2f == "true"
        ) {
          handleOtpShow();
          // check otp validty and redirect otherwise invalid login
        }
      }

      //navigate("/home");
    }
  }
  function handleError(error) {
    console.log("Login failed : " + `${JSON.stringify(error)}`);
    setUser(null);
    sessionStorage.setItem("jwt", null);
    handleErrorShow();
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
        handleError(error);
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
          <p>Please enter the one time password to verify your account : </p>
            <Form.Group className="mb-3" controlId="otpForm">
              <InputGroup className="otp-input-wrapper">
                <Form.Control
                  className="otp-input"
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                  onChange={(e) => setOtp1(e.target.value)}
                  onBlur={(e) => setOtp1(e.target.value)}
                />
                <Form.Control
                  className="otp-input"
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                  onChange={(e) => setOtp2(e.target.value)}
                  onBlur={(e) => setOtp2(e.target.value)}
                />
                <Form.Control
                  className="otp-input"
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                  onChange={(e) => setOtp3(e.target.value)}
                  onBlur={(e) => setOtp3(e.target.value)}
                />
                <Form.Control
                  className="otp-input"
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                  onChange={(e) => setOtp4(e.target.value)}
                  onBlur={(e) => setOtp4(e.target.value)}
                />
                <Form.Control
                  className="otp-input"
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                  onChange={(e) => setOtp5(e.target.value)}
                  onBlur={(e) => setOtp5(e.target.value)}
                />
                <Form.Control
                  className="otp-input"
                  type="text"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
                  onChange={(e) => setOtp6(e.target.value)}
                  onBlur={(e) => setOtp6(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="button">
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
              onBlur={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </InputGroup>
          <Form.Text
            className="text-muted"
            style={{ visibility: !username ? "visible" : "hidden" }}
          >
            Username required.
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
          <Form.Text
            className="text-muted"
            style={{ visibility: !password ? "visible" : "hidden" }}
          >
            Password required.
          </Form.Text>
        </Form.Group>
        <Button
          disabled={!password || !username}
          variant="primary"
          type="submit"
        >
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
