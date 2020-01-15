import React from "react";
import { Link } from "react-router-dom";

const Mavbar = () => {
  return (
    <ul>
      <li>
        <Link to="/unicode-grid">Unicode Grid</Link>
      </li>
      <li>
        <Link to="/dense-grid">Dense Grid</Link>
      </li>
    </ul>
  );
};

export default Mavbar;
