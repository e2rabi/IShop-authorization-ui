import "../../src/style.css";
import { useState, useEffect, useDebugValue } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
          <Form.Control
            size="sm"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="sm"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="OTP Verification" className="" />
        </Form.Group>
        <Button variant="success" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
