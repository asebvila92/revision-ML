import React, { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo-ml.png";
import search from "../../assets/search.png";
import { searchItem } from "../../redux/actions";
import "./styles.scss";

const Finder: React.FC<RouteComponentProps> = (props) => {
  const { history, location } = props;
  const [inputSearch, setInputSearch] = useState<string>("iphone 11");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (inputSearch != "") {
      dispatch(searchItem(inputSearch));
      const routing = {
        pathname: "items",
        search: `search=${inputSearch}`,
      };
      if (location.key) {
        history.replace(routing);
      } else {
        history.push(routing);
      }
    }
  };

  return (
    <header className="Finder">
      <div className="input-container">
        <img src={logo} alt="" />
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
        <button>
          <img src={search} onClick={handleSearch} />
        </button>
      </div>
    </header>
  );
};

export default withRouter(Finder);
