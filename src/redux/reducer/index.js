import { getApiData, showData } from "./reducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducers = combineReducers({
  ApiData: getApiData,
  UserData : showData,
});

export default rootReducers;
