import React from "react";
import {Link} from  "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <h1>TechAdda</h1>
        <main>
            <Link to="/">Home</Link>
        </main>
      </nav>
    </>
  );
}
