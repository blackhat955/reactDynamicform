import React from "react";
import Input from "./inputValue";
import Button from "./button.js";
import Option from "./optionVal.js";
import "./styles.css";

export default function App() {
  const value = [
    { name: "name", value: "Durgesh" },
    { name: "age", value: "34" },
    { name: "qualification", value: "B.E" },
    { name: "College Name" },
    { name: "Address" },
    { name: "Zip Code" },
    { name: "Payment Method" }
  ];

  return (
    <div className="App">
      {value.map((val, i) => (
        <div className="input">
          <Input name={val.value} placeholder={val.name} />
        </div>
      ))}
      <Option />
      <Button>Submit</Button>
    </div>
  );
}
