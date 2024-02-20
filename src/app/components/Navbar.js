// components/Navbar.js
import React from "react";
import "./components.css";
const Navbar = () => {
  return (
    <nav className="questrial-regular">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://raw.githubusercontent.com/Bhavya031/shlper/0d2e9d178319b0132f3832ffbda50602f0063408/public/Asset%203.svg"
            className="h-8"
            alt="Logo"
          />
        </a>
        <a href="/api/auth/signin" className="Questrial">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
