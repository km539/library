import React, { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [bar, setBar] = useState(false);
  return (
    <div className="container">
      <div>
        <h2>aster_library</h2>
      </div>

      <nav>
        <div className="bar" onClick={() => setBar(!bar)}>
          =
        </div>
        <ul className={bar ? "on" : "off"}>
          <li>
            <a href="/login" className="list">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
