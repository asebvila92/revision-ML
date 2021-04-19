import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";
import logo from "../../assets/logo-ml.png";
import searchImg from "../../assets/search.png";
import { searchItem } from "../../redux/actions";
import "./styles.scss";

const Finder: React.FC<RouteComponentProps> = (props) => {
  const { history, location } = props;
  const [inputSearch, setInputSearch] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const { error } = useSelector((state: RootState) => ({
    error: state.errorReducer,
  }));

  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/items") {
      setIsDisabled(true);
    } else {
      if (isDisabled) {
        setIsDisabled(false);
      }
    }
  }, [location]);

  useEffect(() => {
    if (error.code) {
      history.replace({
        pathname: "/",
      });
    }
  }, [error]);

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
          disabled={isDisabled}
          type="text"
          placeholder="Nunca dejes de buscar"
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
        <button disabled={isDisabled} onClick={handleSearch}>
          <img src={searchImg} alt="" />
        </button>
      </div>
    </header>
  );
};

export default withRouter(Finder);
