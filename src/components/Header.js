import React from "react";

let Header = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="true">
        {" "}
        {props.title}{" "}
      </a>
    </nav>
  );
};

export default Header;
