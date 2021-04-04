import React, { useEffect } from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { getProducts } from "./redux/actions";
import "./App.scss";

function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => ({
    products: state.productReducer.products,
  }));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {products?.length}
        </a>
      </header>
    </div>
  );
}

export default Home;
