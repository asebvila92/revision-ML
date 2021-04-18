import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";

const getRootReducer = combineReducers({
  itemReducer,
  errorReducer,
});

export type RootState = ReturnType<typeof getRootReducer>;

export default getRootReducer;
