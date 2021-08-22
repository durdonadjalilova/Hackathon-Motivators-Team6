import React from "react";
import Weather from '../Components/Weather/Weather'
import Greeting from '../Components/Greeting'


import Main from "../Components/Main";


const Index = ({firstName}) => {
  return (
    <div>
      <Main firstName={firstName} />
    </div>
  );
};

export default Index;
