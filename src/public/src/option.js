import React from 'react';
import "./input.css";
const selectVal=()=>{
  const selctInt=[
        {city:"Delhi"},
        {city:"Mumbai"}
      ];
     
  return(
    <div>
    {
      selctInt.map((v,i)=>
      <option>
      {v.city}
      </option>
      )
    }
    
    </div>

  );
}
export default selectVal;
