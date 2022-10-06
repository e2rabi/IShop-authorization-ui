import "../../src/style.css";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpChecked, setisOtpChecked] = useState(false);

  const handleToggle = () => {
    setisOtpChecked(!isOtpChecked);
  };
  console.log(isOtpChecked);
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>IShop Authentication</h3>
        <h4>{username}</h4>
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
            onChange={handleToggle}
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

        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
