import React from 'react'
import { useSelector } from 'react-redux'

function datas() {

    const data = useSelector((state)=>state.ApiData.apiData);
    const data1 = useSelector((state) => state.UserData.Data)
    // console.log("All User Data",data1);
  return (
    <div>
      {
        data1.map(()=>{
            
        })
      }
    </div>
  )
}

export default datas
