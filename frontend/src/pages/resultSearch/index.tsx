import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import Breadcrumb from "../../components/breadcrumb";
import ListItem from "../../components/listItem";
import "./styles.scss";

const ResultSearch = () => {
  const { search } = useSelector((state: RootState) => ({
    search: state.itemReducer.search,
  }));

  const { categories, items } = search;

  return (
    search && (
      <div className="ResultSearch">
        <Breadcrumb categories={categories} />
        <div className="content">
          {items.map((item, key) => (
            <ListItem item={item} key={key.toString()} />
          ))}
        </div>
      </div>
    )
  );
};

export default ResultSearch;
