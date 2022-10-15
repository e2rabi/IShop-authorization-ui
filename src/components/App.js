import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
