
import React from "react";
import Main from "../Components/Main";


const Index = ({firstName, setFirstName, zipCode}) => {
  return (
    <div>
      <Main firstName={firstName} setFirstName={setFirstName} zipCode={zipCode} />
    </div>
  );
};


export default Index;
