import React, { useEffect ,useState} from "react";
import { showData } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import './ShowUserData.css';

function ShowUserData() {
  const user = useSelector((state) => state.UserData.Data);
  const [status, setStatus] = useState(false);
  console.log("Show User data",user);

  const dispatch = useDispatch();

  useEffect(()=>{
   
    const userInfo = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log("response",response)
      const user = await response.json();
    
     
      dispatch(showData(user));
    };

  userInfo();

  },[]);

  return (
    <div>
      <button onClick={()=>setStatus(!status)} className ="btn" style={{height:50,width:100,backgroundColor:"gray",fontSize:20,color:"black",marginLeft:630,marginTop:20}}>Toggle</button>
      {/* <button onClick={()=>setStatus(true)} className ="btn" style={{height:50,width:100,backgroundColor:"gray",fontSize:20,color:"black",margnLeft:100,marginTop:20}}>Show</button> */}
      {/* <button onClick={()=>setStatus(false)} className ="btn" style={{height:50,width:100,backgroundColor:"gray",fontSize:20,color:"black",marginLeft:400,marginTop:20}}>Hide</button> */}
       <h1 style={{textAlign:"center"}}>User Info</h1>


{ status? 
         <table  className="table" style={{backgroundColor:"black",color:"white",height:400,width:900,marginLeft:230}} border="1">

         <thead style={{padding:20,backgroundColor:"gray"}}>
          <tr>  
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
         </thead>


         <tbody>
                        {user.map(item => (
                            <tr key = {item.Id}>
                            <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                 <td>{item.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
:""
}

    </div>
  );
}

export default ShowUserData;
