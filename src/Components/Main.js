
import React from "react";
import {useState} from 'react'
import Greeting from "../Components/Greeting";
import Affirmations from "../Components/Affirmations";
import Weather from "../Components/Weather/Weather";


const Main = ({firstName}) => {
  const [keyword, setKeyword] = useState("")

  const changeKeyword = (newKeyword) => {
    console.log(newKeyword)
    setKeyword(newKeyword)
  }
   return (
    <div>
      <Greeting firstName={firstName}/>
      <Weather changeKeyword={changeKeyword}/>
   <Affirmations />
    </div>
  );
};

export default Main;
