import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import { getItemById } from "../../redux/actions/item";
import { throwError } from "../../redux/actions";
import { ResultGetItem } from "../../redux/actions/types";
import { getAmount, getCondition, getCurrency, getDecimals } from "../../utils";
import "./styles.scss";

const ItemDetails = (props: RouteComponentProps<{ id: string }>) => {
  const { match } = props;
  const [resultItem, setResultItem] = useState<ResultGetItem | null>(null);
  const dispatch = useDispatch();

  const getItem = async (itemId: string) => {
    const result = await getItemById(itemId);
    if (result.code) {
      dispatch(throwError(result));
    } else {
      setResultItem(result);
    }
  };

  useEffect(() => {
    getItem(match.params.id);
  }, []);

  return (
    resultItem && (
      <div className="ItemDetails">
        <Helmet>
          <title>{`${resultItem.item.title || ""} | Buscador`}</title>
          <meta name="description" content="Busca el producto que quieras" />
        </Helmet>
        <Breadcrumb categories={resultItem.categories} />
        <div className="content">
          <div className="item-details">
            <div className="img-container">
              <img src={resultItem.item.picture} />
            </div>
            <div className="buy-details">
              <div className="content-details">
                <span className="condition-details">
                  <span>{getCondition(resultItem.item.condition)}</span>
                  <span>{` - ${resultItem.item.sold_quantity} vendidos`}</span>
                </span>
                <h3>{resultItem.item.title}</h3>
                <span className="price-details">
                  <span>{getCurrency(resultItem.item.price.currency)}</span>
                  <span>{getAmount(resultItem.item.price.amount)}</span>
                  <span>{getDecimals(resultItem.item.price.decimals)}</span>
                </span>
              </div>
              <button>Comprar</button>
            </div>
          </div>
          <div className="item-description">
            <h2>Descripcion del producto</h2>
            <p>{resultItem.item.description}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default withRouter(ItemDetails);
