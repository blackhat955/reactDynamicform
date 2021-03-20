import React from 'react';
import "./input.css";
const Input=({name,placeholder})=>{
  return(
   <div className="zo">
   <input placeholder={placeholder} defaultValue={name}/>
   </div>
  );
}
export default Input;