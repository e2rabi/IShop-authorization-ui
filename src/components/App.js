import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode, useState } from "react";
import Home from "./Home";
import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
import UserContext from "./UserContext";
import Role from "./Role";
import Authority from "./Authority";

const App = () => {
  const currentUser = useState("");
  return (
    <StrictMode>
      <UserContext.Provider value={currentUser}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/create-user" element={<User />}></Route>
            <Route path="/roles" element={<Role />}></Route>
            <Route path="/authorities" element={<Authority />}></Route>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </StrictMode>
  );
};

export default App;
