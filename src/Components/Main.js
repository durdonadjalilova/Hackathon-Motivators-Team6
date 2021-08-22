import React from "react";
import { useState } from "react";
import Greeting from "../Components/Greeting";
import Affirmations from "../Components/Affirmations";
import Weather from "../Components/Weather/Weather";
import "../Components/main.css"


const Main = ({ firstName, setFirstName, zipCode }) => {

  const [keyword, setKeyword] = useState("");

  console.log(keyword);

  return (

    <div className="main-parent-container">
      <div className="main-affirmation-greeting-container">
        <Greeting firstName={firstName} setFirstName={setFirstName} />
        <Affirmations keyword={keyword} />
      </div>
      <Weather
        zipCode={zipCode}
        setKeyword={setKeyword}
      />

    </div>
  );
};

export default Main;
