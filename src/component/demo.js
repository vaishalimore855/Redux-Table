import React, { useEffect } from "react";
import { getData } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

function Demo() {
  const countriList = useSelector((state) => state);
  
  console.log(" Data",countriList);

  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      console.log("response",response)
      const countriList= await response.json();
      
      console.log(countriList);
      dispatch(getData(countriList));
    };
    fetchCountries();
  
  },[]);
  
  

  return (
    <div>
    {/* //   <button onClick = {fetchCountries()}>SEND</button> */}

      {
          countriList.map((item)=>{
            return <h6>{item.name}</h6>
          
          })
      }
    </div>
  );
}

export default Demo;
