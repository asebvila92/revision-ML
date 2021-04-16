import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { getProducts } from "../../redux/actions";
import "./styles.scss";

function ResultSearch() {
  const dispatch = useDispatch();

  const { products } = useSelector((state: RootState) => ({
    products: state.productReducer.products,
  }));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div className="ResultSearch"></div>;
}

export default ResultSearch;
