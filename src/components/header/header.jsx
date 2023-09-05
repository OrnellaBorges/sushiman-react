import React from "react";

//import components
import { Nav } from "../nav/nav";

//STYLE
import "./header.css";

export const Header = () => {
  return (
    <div className="header__container">
      <h1>Sushiman</h1>
      <Nav />
    </div>
  );
};
