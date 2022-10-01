import React from "react";
import User from "./User"

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", { id: "title" }, "Login"),
        React.createElement(User, { name: "ERRABI AMINE" }),
        React.createElement(User),
    ]);
};

export default App;