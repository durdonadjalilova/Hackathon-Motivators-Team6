
import React from "react";
import Main from "../Components/Main";


const Index = ({firstName, setFirstName, zipCode, setZipCode}) => {
  return (
    <div>
      <Main firstName={firstName} setFirstName={setFirstName} zipCode={zipCode} setZipCode={setZipCode} />
    </div>
  );
};


export default Index;
