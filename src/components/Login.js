import "../../src/style.css";

const Login = (props) => {
  const user = {
    "username":"errabi",
    "password":"admin"
  };
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>IShop Authentication</h3>

        <label htmlFor="username">Username</label>
        <input type="text" value={user.username} placeholder="Username" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder={user.password} id="password" />

        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
