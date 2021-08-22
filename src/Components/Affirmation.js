import React, { useState, useEffect } from "react";
// import { useParams, useHistory, Link } from "react-router-dom";
// import axios from "axios";

const Affirmation = ({ affirmations }) => {
  const [affirmation, setAffirmation] = useState("");

  let weatherType = "sunny";



  useEffect(() => {
    const fetchAffirmation =  () => {
        if (weatherType === "sunny") {
           affirmations.map((oneAffirmation) => {
            if (!affirmation) {
              if (oneAffirmation.phrase.includes("am")) {
                  return setAffirmation(oneAffirmation.phrase);
                // console.log(affirmation)
              } else {
                 return  setAffirmation(oneAffirmation.phrase)
              }
            } else {
                return null
            }
          });
        }
      };
    fetchAffirmation();
  }, [affirmation]);

  return (
    <div>
      {/* <ul>
                {affirmations.map(affirmation => {
                    const {phrase} = affirmation
                    return (
                        <li key={phrase}>
                            <h1>{phrase}</h1>
                        </li>
                    )
                })}
            </ul> */}
      {affirmation}
    </div>
  );
};

export default Affirmation;
