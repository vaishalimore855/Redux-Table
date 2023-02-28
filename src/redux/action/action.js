import { actionType } from "../constant/constant";

export const getData = (react) => {
  
  // console.log("Action:",react);
  return {
    type: actionType.SET_DATA,
    payload: react,
  };
};  

export const getName = (Data) => {
  console.log("Action:",Data)
  return {
    type: actionType.GET_NAME,
    payload: Data,
  };
};



export const showData = (Data1) => {
  console.log("Action:",Data1)
  return {
    type: actionType.ShowData,
    payload: Data1,
  };
};



