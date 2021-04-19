import React from "react";
import { Helmet } from "react-helmet";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import Breadcrumb from "../../components/breadcrumb";
import ListItem from "../../components/listItem";
import "./styles.scss";

const ResultSearch: React.FC<RouteComponentProps> = (props) => {
  const { search } = useSelector((state: RootState) => ({
    search: state.itemReducer.search,
  }));
  const { categories, items } = search;
  const { history, location } = props;

  const handleClickItem = (id: string) => {
    history.push({
      pathname: `${location.pathname}/${id}`,
    });
  };

  return (
    search && (
      <div className="ResultSearch">
        <Helmet>
          <title>{`${search.term || ""} | Buscador`}</title>
          <meta name="description" content="Busca el producto que quieras" />
        </Helmet>
        <Breadcrumb categories={categories} />
        <div className="content">
          {items.map((item, key) => (
            <ListItem item={item} key={key.toString()} onClickItem={handleClickItem} />
          ))}
        </div>
      </div>
    )
  );
};

export default withRouter(ResultSearch);
