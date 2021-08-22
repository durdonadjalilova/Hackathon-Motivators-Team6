
import React from "react";
import {useState} from 'react'
import Greeting from "../Components/Greeting";
import Affirmations from "../Components/Affirmations";
import Weather from "../Components/Weather/Weather";



const Main = ({firstName, setFirstName, zipCode, setZipCode}) => {
  const [keyword, setKeyword] = useState("")

  const changeKeyword = (newKeyword) => {
    console.log(newKeyword)
    setKeyword(newKeyword)
  }
  return (
    <div>
      <Greeting firstName={firstName} setFirstName={setFirstName}  />
      <Weather zipCode={zipCode} setZipCode={setZipCode} changeKeyword={changeKeyword} />

   <Affirmations />
    </div>
  );
};

export default Main;
