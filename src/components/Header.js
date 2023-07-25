import React from "react";

export default function Header({ title, classes }) {
  return (
    <header>
      <h1 className={`fw-bold text-center ${classes}`}>{title}</h1>
    </header>
  );
}
