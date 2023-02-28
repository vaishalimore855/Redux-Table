import { actionType } from "../constant/constant";

var initialState = {
  apiData: [],
  Data: [],
};

alert(initialState.Data)

export const getApiData = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_DATA:
      return {
        ...state,
        apiData: payload,
      };
    default:
      return state;
  }
};


export const showData = (state = initialState, { type, payload }) => {

  
  switch (type) {
    case actionType.ShowData:
      return {
        ...state,
        Data: payload,
      };
    default:
      return state;
  }
};





