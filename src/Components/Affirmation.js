import React, { useState, useEffect } from "react";

const Affirmation = ({ affirmations }) => {
  const [affirmation, setAffirmation] = useState("");

  let weatherType = "rain";

  useEffect(() => {
    const fetchAffirmation = () => {
      let badWeather = [];
      let allWeather = [];
      if (weatherType !== "sunny") {
        affirmations.map((oneAffirmation) => {
          if (
            oneAffirmation.phrase.includes("beyond") ||
            oneAffirmation.phrase.includes("change") ||
            oneAffirmation.phrase.includes("food") ||
            oneAffirmation.phrase.includes("living") ||
            oneAffirmation.phrase.includes("manifest") ||
            oneAffirmation.phrase.includes("partner") ||
            oneAffirmation.phrase.includes("relationships")
          ) {
            return;
          } else if (
            oneAffirmation.phrase.includes("allow") ||
            oneAffirmation.phrase.includes("annoy") ||
            oneAffirmation.phrase.includes("care") ||
            oneAffirmation.phrase.includes("courage") ||
            oneAffirmation.phrase.includes("health") ||
            oneAffirmation.phrase.includes("joy") ||
            oneAffirmation.phrase.includes("life") ||
            oneAffirmation.phrase.includes("need") ||
            oneAffirmation.phrase.includes("negative") ||
            oneAffirmation.phrase.includes("past") ||
            oneAffirmation.phrase.includes("peace") ||
            oneAffirmation.phrase.includes("power") ||
            oneAffirmation.phrase.includes("prosper") ||
            oneAffirmation.phrase.includes("relax") ||
            oneAffirmation.phrase.includes("release") ||
            oneAffirmation.phrase.includes("safe") ||
            oneAffirmation.phrase.includes("significant") ||
            oneAffirmation.phrase.includes("soul") ||
            oneAffirmation.phrase.includes("steps") ||
            oneAffirmation.phrase.includes("success") ||
            oneAffirmation.phrase.includes("thought") ||
            oneAffirmation.phrase.includes("want") ||
            oneAffirmation.phrase.includes("infinite")
          ) {
            badWeather.push(oneAffirmation);
            return setAffirmation(
              badWeather[Math.floor(Math.random() * badWeather.length)].phrase
            );
          } else {
            allWeather.push(oneAffirmation);
            return setAffirmation(
              allWeather[Math.floor(Math.random() * allWeather.length)].phrase
            );
          }
        });
      }
    };
    fetchAffirmation();
  });

  return <div>{affirmation}</div>;
};

export default Affirmation;
