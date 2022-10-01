import React from "react";

const User = (props) => {
  return   React.createElement("div",{},[
           React.createElement("h1",{},props.name),
    ]);
};

export default User;