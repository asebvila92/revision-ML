import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers";
import { cleanError } from "../../redux/actions";

const Home: React.FC = () => {
  const { error } = useSelector((state: RootState) => ({
    error: state.errorReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(cleanError());
    };
  }, []);

  return (
    <div className="Home">
      <Helmet>
        <title>Buscador</title>
      </Helmet>
      <p>{error.message}</p>
    </div>
  );
};

export default Home;
