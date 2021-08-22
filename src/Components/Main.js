
import React from "react";
import Greeting from "../Components/Greeting";
import Affirmations from "../Components/Affirmations";
import Weather from "../Components/Weather/Weather";


const Main = ({firstName, setFirstName, zipCode}) => {
  return (
    <div>
      <Greeting firstName={firstName} setFirstName={setFirstName} />
      <Weather zipCode={zipCode} />
   <Affirmations />
    </div>
  );
};

export default Main;
