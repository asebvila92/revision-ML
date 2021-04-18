import React from "react";
import { Breadcrumb as Categories } from "../../redux/actions/types";
import "./styles.scss";

interface Props {
  categories: Categories;
}

const Breadcrumb = ({ categories = [] }: Props) => {
  const lastItem = categories.length - 1;

  const renderCategoryItem = (categoyName: string, key: number) => {
    return (
      <div className="breadcrumb-item" key={key.toString()}>
        <li>{categoyName}</li>
        {key < lastItem && <span>{">"}</span>}
      </div>
    );
  };

  return (
    <div>
      <ul className="Breadcrumb">{categories.map((cat, key) => renderCategoryItem(cat, key))}</ul>
    </div>
  );
};

export default Breadcrumb;
