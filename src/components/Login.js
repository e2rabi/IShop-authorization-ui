import "../../src/style.css";
import { useState, useEffect } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpChecked, setisOtpChecked] = useState(false);
  const [jwt, setJwt] = useState("");

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
      });
  }
  const checkOptButton = () => {
    setisOtpChecked(!isOtpChecked);
  };

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <h3>IShop Authentication</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          placeholder="Username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="otp">
          <label className="otp-label" htmlFor="otp">
            Login with OTP
          </label>
          <input
            className="otp-check"
            onChange={checkOptButton}
            type="checkbox"
            id="otp"
            name="opt"
            value={otp}
          />

          <input
            className={`${isOtpChecked ? "show" : "hide"}`}
            type="password"
            placeholder="One time password"
            id="otp-code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
