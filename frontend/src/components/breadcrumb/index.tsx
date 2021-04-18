import React from "react";
import "./styles.scss";
import { Breadcrumb as Categories } from "../../redux/actions/types";
import "./styles.scss";

interface Props {
  categories: Categories;
}

const Breadcrumb: React.FC<Props> = ({ categories = [] }) => {
  const lastItem = categories.length - 1;

  const renderCategoryItem = (categoyName: string, key: number) => {
    return (
      <div className="breadcrumb-item" key={key.toString()}>
        <li>{categoyName}</li>
        {key < lastItem && <span>{">"}</span>}
      </div>
    );
  };

  return <ul className="Breadcrumb">{categories.map((cat, key) => renderCategoryItem(cat, key))}</ul>;
};

export default Breadcrumb;
