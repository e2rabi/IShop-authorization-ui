const User = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h2", {}, "Khalil"),
        React.createElement("h2", {}, "Nassim"),
        React.createElement("h2", {}, "Ayoub"),
    ]);
};
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", { id: "title" }, "Login"),
        React.createElement(User, { name: "ERRABI AMINE" }),
        React.createElement(User),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
