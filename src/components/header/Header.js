import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.title} </h1>
      <p>{props.subtitle}</p>

      <div className="full-width-wrap sticky">
        <div className="container">
          <header id="masthead" className="site-header">
            Test
          </header>
        </div>
      </div>
    </div>
    
  );
}