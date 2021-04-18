import React from "react";
import { Item } from "../../redux/actions/types";
import shipping from "../../assets/free-shipping.png";
import { getAmount, getCondition, getCurrency } from "../../utils";
import "./styles.scss";

interface Props {
  item: Item;
  onClickItem: (id: string) => void;
}

const ListItem: React.FC<Props> = ({ item, onClickItem }) => {
  const { id, title, price, condition, picture, free_shipping } = item;
  const { amount, currency } = price;

  return (
    <div className="ListItem">
      <div className="container-item" onClick={() => onClickItem(id)}>
        <div className="img-content">
          <img src={picture} alt="" />
        </div>
        <div className="info-content">
          <div className="item-price">
            <span>{getCurrency(currency)}</span>
            <span>{getAmount(amount)}</span>
            {free_shipping && <img src={shipping} alt="" />}
          </div>
          <div className="item-title">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className="condition-content">
        <span>{getCondition(condition)}</span>
      </div>
    </div>
  );
};

export default ListItem;
