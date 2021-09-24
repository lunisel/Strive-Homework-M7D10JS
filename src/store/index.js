import { createStore } from "redux";
import cityReducer from "../reducers";

export const initialState = {
  city: {
    lat: "",
    lon: "",
    name: "",
  },
};

export const configureStore = createStore(
  cityReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
