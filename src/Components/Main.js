import React from "react";
import Greeting from "../Components/Greeting";
// import Affirmations from "../Components/Affirmations";
import Weather from "../Components/Weather/Weather";

const Main = ({firstName}) => {
  return (
    <div>
      <Greeting firstName={firstName}/>
      <Weather />
      {/* <Affirmations /> */}
    </div>
  );
};

export default Main;
