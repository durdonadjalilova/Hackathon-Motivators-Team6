import React from "react";
import { useState } from "react";
import Greeting from "../Components/Greeting";
import Affirmations from "../Components/Affirmations";
import Weather from "../Components/Weather/Weather";
import "../Components/main.css";

const Main = ({ firstName, setFirstName, zipCode }) => {
  const [keyword, setKeyword] = useState("");

  console.log(keyword);

  return (
    <div>
      <div className="main-greeting-container">
        <Greeting firstName={firstName} setFirstName={setFirstName} />
      </div>
      <div className="main-parent-container">
        <div className="main-weather-container">
          <Weather zipCode={zipCode} setKeyword={setKeyword} />
        </div>
        <div className="main-affirmations-container">
          <Affirmations keyword={keyword} />
        </div>
      </div>
    </div>
  );
};

export default Main;
