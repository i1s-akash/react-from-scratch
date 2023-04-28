import React from "react";

export function Header() {
  return (
    <div className="header">
      <img
        src="https://i.ibb.co/m5wQLPJ/react-from-scratch.png"
        alt="react-from-scratch"
        border="0"
        width="50px"
        height="50px"
      />
      <ul className="header_list">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
  );
}
