import React from "react";
import { Link } from "react-router-dom";

export default function Button({ title, url, btnType }) {
  return (
    <Link to={url}>
      <button type="button" className={`btn btn-lg shadow btn-welcome ${btnType} p-4`}>
        <span className="btn-text">{title}</span>
      </button>
    </Link>
  );
}
