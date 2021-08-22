
import React from "react";
import {useState} from 'react'
import Greeting from "../Components/Greeting";
import Affirmations from "../Components/Affirmations";
import Weather from "../Components/Weather/Weather";



const Main = ({firstName, setFirstName, zipCode, setZipCode}) => {
  const [keyword, setKeyword] = useState("")

  console.log(keyword)

 
  return (
    <div>
      <Greeting firstName={firstName} setFirstName={setFirstName}  />
      <Weather zipCode={zipCode} setZipCode={setZipCode} setKeyword={setKeyword}  />

   <Affirmations />
    </div>
  );
};

export default Main;
