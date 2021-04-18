import React from "react";
import { Item } from "../../redux/actions/types";
import shipping from "../../assets/free-shipping.png";
import "./styles.scss";

interface Props {
  item: Item;
}

const ListItem: React.FC<Props> = ({ item }) => {
  const { id, title, price, condition, picture, free_shipping } = item;
  const { amount, currency } = price;

  const conditionValue = condition === "used" ? "Usado" : "Nuevo";
  const moneyValue = currency === "ARS" ? "$" : "U$S";

  const getAmount = () => {
    const value = String(amount).replace(/\D/g, "");
    return value === "" ? value : Number(value).toLocaleString("de-DE");
  };

  return (
    <div className="ListItem">
      <div className="container-item">
        <div className="img-content">
          <img src={picture} alt="" />
        </div>
        <div className="info-content">
          <div className="item-price">
            <span>{moneyValue}</span>
            <span>{getAmount()}</span>
            {free_shipping && <img src={shipping} alt="" />}
          </div>
          <div className="item-title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className="condition-content">
        <span>{conditionValue}</span>
      </div>
    </div>
  );
};

export default ListItem;
