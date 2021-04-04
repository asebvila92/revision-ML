import { combineReducers } from "redux";
import productReducer from "./productReducer";

const getRootReducer = combineReducers({
  productReducer,
});

export type RootState = ReturnType<typeof getRootReducer>;

export default getRootReducer;
