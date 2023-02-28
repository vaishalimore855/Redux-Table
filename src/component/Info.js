import React from "react"
import { showData } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './Info.css';

function Info() {
  const user = useSelector((state) => state.UserData.Data);
  
  console.log("info",user);

  const dispatch = useDispatch();

  useEffect(()=>{
   
    const Info = async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("response",response)
      const user = await response.json();
    
     
      dispatch(showData(user));
    };

  Info();

  },[]);

  return (
    <div>



   <div className=" box">
   
   

      


        
                        { user.map(item => (
                           <div className="card">
                           <div key = {item.Id}>
                            
                           <h2>User ID:{item.id}</h2>
                                <h2><span>Name:</span>{item.name}</h2>
                                <h2><span>Phone No:</span>{item.phone}</h2>
                                <h2><span>Email Id:</span>{item.email}</h2>
                                 <h2><span>Website:</span>{item.website}</h2>
                            </div>
                           </div>
                           
                        ))}
                



    </div>
    </div>
 
  );
}

export default Info;
