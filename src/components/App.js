import Login from "./Login";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { StrictMode } from "react";
import Home from "./Home";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
      <header>
      <Link to="/">IShop Authentication</Link>
      </header>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
