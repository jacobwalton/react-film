import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <header onClick={() => window.scroll(0, 0)} className="header">
        Movies and TV 🎞
      </header>
    </div>
  );
};

export default Header;
