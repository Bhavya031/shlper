// components/Navbar.js
import React from "react";
import "./components.css";
const Navbar = () => {
  return (
    <nav className="navstyle">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://raw.githubusercontent.com/Bhavya031/shlper/0d2e9d178319b0132f3832ffbda50602f0063408/public/Asset%203.svg"
            className="h-8"
            alt="Logo"
          />
        </a>
        <button className="NavText">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
