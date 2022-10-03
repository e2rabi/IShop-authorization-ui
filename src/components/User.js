//import React from "react";

/* const User = (props) => {
  return   React.createElement("div",{},[
           React.createElement("h1",{},props.name),
    ]);
};
 */
// using jsx

const User = (props) =>{
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default User;