import { initialState } from "../store";

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LON":
      return {
        ...state,
        city: {
          ...state.city,
          lon: action.payload,
        },
      };
    case "ADD_LAT":
      return {
        ...state,
        city: {
          ...state.city,
          lat: action.payload,
        },
      };
    case "ADD_NAME":
      return {
        ...state,
        city: {
          ...state.city,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export default cityReducer;
