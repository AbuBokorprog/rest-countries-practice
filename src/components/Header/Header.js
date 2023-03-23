import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>Welcome to my new website</h2>
      <nav className="menu">
        <a href="/home">Home</a>
        <a href="/menu">Menu</a>
        <a href="/About">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
