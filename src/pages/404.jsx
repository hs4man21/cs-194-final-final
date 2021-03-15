/*404.jsx*/
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {

  return (
      <div style={{ padding: 100 }}>
        <h3>404 — dang</h3>
        <Link to="/">Return to home</Link>
      </div>
  );
};

export default NotFoundPage;
