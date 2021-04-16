import React from "react";
import logo from "../../assets/logo-ml.png";
import search from "../../assets/search.png";
import "./styles.scss";

function Finder() {
  return (
    <header className="Finder">
      <div className="input-container">
        <img src={logo} alt="" />
        <input type="text" placeholder="Nunca dejes de buscar" />
        <button>
          <img src={search} />
        </button>
      </div>
    </header>
  );
}

export default Finder;
