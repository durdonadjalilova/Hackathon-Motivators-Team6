import React, { useState, useEffect } from "react";

const Affirmation = ({ affirmations, keyword }) => {
//   const [affirmation, setAffirmation] = useState("");

//   let weatherType = "clear";

//   useEffect(() => {
      
    const fetchAffirmation = () => {
     if(keyword.toLowerCase() !== "clear") {
         return ( affirmations.bad[Math.floor(Math.random() * affirmations.bad.length)]?.phrase)
     } else {
         return (affirmations.sun[Math.floor(Math.random() * affirmations.sun.length)]?.phrase)
     }
    };
//     fetchAffirmation();
//   }, [affirmation, keyword]);

  return <div> {fetchAffirmation()?.toUpperCase()}</div>;
};


export default Affirmation;
