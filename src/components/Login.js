import "../../src/style.css";
import { useState } from "react";

const Login = () => {
  const user = {
    username: "errabi",
    password: "admin",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          placeholder={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
