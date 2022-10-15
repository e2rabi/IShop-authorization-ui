import { useState, useEffect, useDebugValue } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpChecked, setisOtpChecked] = useState(false);
  const [jwt, setJwt] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("after rendring call");
  }, []);

  function validateJwt(data) {
    console.log(data.jwt);
    if (data != undefined && data != null) {
      setJwt(data.jwt);
    }
  }

  async function login() {
    alert(`Username : ${username} and password : ${password}`);
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
        navigate("/home");
      });
  }
  const checkOptButton = () => {
    setisOtpChecked(!isOtpChecked);
  };
  useDebugValue("Hi from the code");

  return (
    <div className="login">
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
